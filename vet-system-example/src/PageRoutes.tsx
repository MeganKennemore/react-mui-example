import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PatientRecords from './pages/PatientRecords';
import PatientPage from './pages/PatientPage';

const PageRoutes: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/patient-records" element={<PatientRecords />}/>
      <Route path="/patient-records/patient-:patientId" element={<PatientPage />} />
    </Routes>
  )
};

export default PageRoutes;