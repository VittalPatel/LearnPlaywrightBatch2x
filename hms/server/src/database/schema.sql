CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(120) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(40) NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS patients (
  id SERIAL PRIMARY KEY,
  patient_code VARCHAR(30) UNIQUE NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(120),
  date_of_birth DATE,
  gender VARCHAR(10),
  blood_group VARCHAR(10),
  address TEXT,
  insurance_provider VARCHAR(120),
  insurance_number VARCHAR(80),
  medical_history TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS doctors (
  id SERIAL PRIMARY KEY,
  doctor_code VARCHAR(30) UNIQUE NOT NULL,
  full_name VARCHAR(120) NOT NULL,
  specialty VARCHAR(80),
  phone VARCHAR(20),
  email VARCHAR(120),
  is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS appointments (
  id SERIAL PRIMARY KEY,
  appointment_code VARCHAR(30) UNIQUE NOT NULL,
  patient_id INT REFERENCES patients(id),
  doctor_id INT REFERENCES doctors(id),
  appointment_date TIMESTAMP NOT NULL,
  status VARCHAR(30) DEFAULT 'scheduled'
);

CREATE INDEX IF NOT EXISTS idx_patients_code ON patients(patient_code);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
