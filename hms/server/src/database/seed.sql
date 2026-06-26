INSERT INTO users (full_name, email, password_hash, role) VALUES
('Super Admin', 'admin@hms.local', '$2a$10$7VxW4F5S0oV3V3gKX8P0FOz6K6Q8w2FQ8zuQk6mQ2M6QY0jJbPAWq', 'super_admin');

INSERT INTO patients (patient_code, full_name, phone, email, date_of_birth, gender, blood_group, address, insurance_provider, insurance_number, medical_history) VALUES
('PT-1001', 'Asha Sharma', '9876543210', 'asha@example.com', '1992-05-15', 'Female', 'O+', 'Noida', 'CarePlus', 'INS-1001', 'No known allergies'),
('PT-1002', 'Rakesh Verma', '9123456780', 'rakesh@example.com', '1988-11-02', 'Male', 'A+', 'Delhi', 'MediCover', 'INS-1002', 'Hypertension');

INSERT INTO doctors (doctor_code, full_name, specialty, phone, email) VALUES
('DOC-1001', 'Dr. Meera Singh', 'Cardiology', '9876500001', 'meera@example.com'),
('DOC-1002', 'Dr. Amit Rao', 'Neurology', '9876500002', 'amit@example.com');

INSERT INTO appointments (appointment_code, patient_id, doctor_id, appointment_date, status) VALUES
('APT-1001', 1, 1, '2026-06-26 10:00:00', 'scheduled'),
('APT-1002', 2, 2, '2026-06-26 12:30:00', 'confirmed');
