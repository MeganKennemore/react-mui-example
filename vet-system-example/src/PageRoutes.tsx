import { Routes, Route, redirect, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

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
    </Routes>
  )
};

export default PageRoutes;