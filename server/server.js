const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3001;

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'mkn_portal',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware
app.use(cors());
app.use(express.json());

// ===== API Routes =====

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'MKN Portal API is running' });
});

// Get all crime data grouped by district
app.get('/api/crime-data', async (req, res) => {
  try {
    const [districts] = await pool.query('SELECT * FROM daerah ORDER BY nama_daerah');

    const result = await Promise.all(
      districts.map(async (district) => {
        const [crimes] = await pool.query(
          'SELECT jenis_jenayah AS jenis, jumlah_kes AS kes, kes_selesai AS selesai FROM jenayah WHERE daerah_id = ? ORDER BY jenis_jenayah',
          [district.id]
        );
        return {
          daerah: district.nama_daerah,
          negeri: district.negeri,
          bulan: district.bulan,
          jenayah: crimes
        };
      })
    );

    res.json(result);
  } catch (err) {
    console.error('Error fetching crime data:', err);
    res.status(500).json({ error: 'Failed to fetch crime data', details: err.message });
  }
});

// Get crime data for a specific district
app.get('/api/crime-data/:daerah', async (req, res) => {
  try {
    const { daerah } = req.params;
    const [districts] = await pool.query(
      'SELECT * FROM daerah WHERE nama_daerah = ?',
      [daerah]
    );

    if (districts.length === 0) {
      return res.status(404).json({ error: 'District not found' });
    }

    const district = districts[0];
    const [crimes] = await pool.query(
      'SELECT jenis_jenayah AS jenis, jumlah_kes AS kes, kes_selesai AS selesai FROM jenayah WHERE daerah_id = ? ORDER BY jenis_jenayah',
      [district.id]
    );

    res.json({
      daerah: district.nama_daerah,
      negeri: district.negeri,
      bulan: district.bulan,
      jenayah: crimes
    });
  } catch (err) {
    console.error('Error fetching district data:', err);
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});

// Add a new crime record
app.post('/api/crime-data', async (req, res) => {
  try {
    const { daerah, negeri, bulan, jenis_jenayah, jumlah_kes, kes_selesai } = req.body;

    // Find or create district
    const [existing] = await pool.query(
      'SELECT id FROM daerah WHERE nama_daerah = ? AND bulan = ?',
      [daerah, bulan]
    );

    let daerahId;
    if (existing.length > 0) {
      daerahId = existing[0].id;
    } else {
      const [result] = await pool.query(
        'INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES (?, ?, ?)',
        [daerah, negeri, bulan]
      );
      daerahId = result.insertId;
    }

    // Insert crime record
    const [result] = await pool.query(
      'INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES (?, ?, ?, ?)',
      [daerahId, jenis_jenayah, jumlah_kes, kes_selesai]
    );

    res.status(201).json({
      id: result.insertId,
      message: 'Crime record added successfully'
    });
  } catch (err) {
    console.error('Error adding crime record:', err);
    res.status(500).json({ error: 'Failed to add record', details: err.message });
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`MKN Portal API server running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Crime data: http://localhost:${PORT}/api/crime-data`);
});
