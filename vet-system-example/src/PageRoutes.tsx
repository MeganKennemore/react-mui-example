import { Routes, Route, redirect, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PatientRecords from './pages/PatientRecords';

const PageRoutes: React.FC = () => {
/*   const { pathname } = useLocation()

  if (pathname === "/") {
    redirect("/home");
    return null;
  }
 */
  return (
    <Routes>
      <Route path="/" loader={() => { return redirect("/home")}} element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/patient-records" element={<PatientRecords />}/>
      <Route path="/patient-records/patient-:patientId" />
    </Routes>
  )
};

export default PageRoutes;