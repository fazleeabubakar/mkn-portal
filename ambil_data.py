import pandas as pd
from datetime import datetime

# URL data rasmi PDRM dari data.gov.my
URL_DATA = 'https://storage.data.gov.my/publicsafety/crime_district.parquet'

print("Sedang memuat turun dan membaca data dari data.gov.my... Sila tunggu.")

# Membaca fail parquet
df = pd.read_parquet(URL_DATA)

# Tukar kolum tarikh kepada format datetime jika wujud
if 'date' in df.columns: 
    df['date'] = pd.to_datetime(df['date'])
    
    # Menapis data untuk tahun 2026 sahaja
    df_2026 = df[df['date'].dt.year == 2026]
    
    # Ambil 20 data terbaharu untuk tahun 2026
    df_latest = df_2026.tail(20)
else:
    # Jika tiada kolum tarikh, kita ambil 20 baris terakhir sahaja
    df_latest = df.tail(20)

# Simpan sebagai fail JSON di dalam folder yang sama
df_latest.to_json('data_jenayah.json', orient='records', date_format='iso')

print("Siap! Fail 'data_jenayah.json' telah berjaya dihasilkan di folder anda.")