-- ===== MKN Portal Database Initialization Script =====
-- Run this script in MySQL to create the database, tables, and sample data

CREATE DATABASE IF NOT EXISTS mkn_portal
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE mkn_portal;

-- ===== Districts Table =====
CREATE TABLE IF NOT EXISTS daerah (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nama_daerah VARCHAR(100) NOT NULL,
  negeri VARCHAR(100) NOT NULL,
  bulan VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ===== Crimes Table =====
CREATE TABLE IF NOT EXISTS jenayah (
  id INT AUTO_INCREMENT PRIMARY KEY,
  daerah_id INT NOT NULL,
  jenis_jenayah VARCHAR(100) NOT NULL,
  jumlah_kes INT NOT NULL DEFAULT 0,
  kes_selesai INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (daerah_id) REFERENCES daerah(id) ON DELETE CASCADE,
  INDEX idx_daerah (daerah_id)
);

-- ===== Insert Sample Data =====

-- Petaling, Selangor
INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES ('Petaling', 'Selangor', 'Januari 2026');
SET @daerah_id = LAST_INSERT_ID();
INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES
  (@daerah_id, 'Curi Kenderaan', 245, 180),
  (@daerah_id, 'Rompakan', 89, 67),
  (@daerah_id, 'Pecah Rumah', 156, 120),
  (@daerah_id, 'Rogol', 23, 21),
  (@daerah_id, 'Pengedaran Dadah', 67, 52);

-- Gombak, Selangor
INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES ('Gombak', 'Selangor', 'Januari 2026');
SET @daerah_id = LAST_INSERT_ID();
INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES
  (@daerah_id, 'Curi Kenderaan', 132, 98),
  (@daerah_id, 'Rompakan', 54, 41),
  (@daerah_id, 'Pecah Rumah', 78, 60),
  (@daerah_id, 'Rogol', 12, 11),
  (@daerah_id, 'Pengedaran Dadah', 34, 28);

-- Kuala Lumpur, Wilayah Persekutuan
INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES ('Kuala Lumpur', 'Wilayah Persekutuan', 'Januari 2026');
SET @daerah_id = LAST_INSERT_ID();
INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES
  (@daerah_id, 'Curi Kenderaan', 387, 290),
  (@daerah_id, 'Rompakan', 134, 98),
  (@daerah_id, 'Pecah Rumah', 201, 156),
  (@daerah_id, 'Rogol', 31, 28),
  (@daerah_id, 'Pengedaran Dadah', 89, 71);

-- Johor Bahru, Johor
INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES ('Johor Bahru', 'Johor', 'Januari 2026');
SET @daerah_id = LAST_INSERT_ID();
INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES
  (@daerah_id, 'Curi Kenderaan', 178, 132),
  (@daerah_id, 'Rompakan', 67, 50),
  (@daerah_id, 'Pecah Rumah', 98, 75),
  (@daerah_id, 'Rogol', 15, 14),
  (@daerah_id, 'Pengedaran Dadah', 45, 38);

-- Timur Laut, Pulau Pinang
INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES ('Timur Laut', 'Pulau Pinang', 'Januari 2026');
SET @daerah_id = LAST_INSERT_ID();
INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES
  (@daerah_id, 'Curi Kenderaan', 98, 72),
  (@daerah_id, 'Rompakan', 43, 32),
  (@daerah_id, 'Pecah Rumah', 67, 51),
  (@daerah_id, 'Rogol', 9, 8),
  (@daerah_id, 'Pengedaran Dadah', 28, 23);

-- Kinta, Perak
INSERT INTO daerah (nama_daerah, negeri, bulan) VALUES ('Kinta', 'Perak', 'Januari 2026');
SET @daerah_id = LAST_INSERT_ID();
INSERT INTO jenayah (daerah_id, jenis_jenayah, jumlah_kes, kes_selesai) VALUES
  (@daerah_id, 'Curi Kenderaan', 87, 65),
  (@daerah_id, 'Rompakan', 34, 26),
  (@daerah_id, 'Pecah Rumah', 56, 42),
  (@daerah_id, 'Rogol', 7, 6),
  (@daerah_id, 'Pengedaran Dadah', 22, 18);

-- ===== Verify Data =====
SELECT d.nama_daerah, d.negeri, d.bulan,
       j.jenis_jenayah, j.jumlah_kes, j.kes_selesai
FROM daerah d
JOIN jenayah j ON d.id = j.daerah_id
ORDER BY d.nama_daerah, j.jenis_jenayah;
