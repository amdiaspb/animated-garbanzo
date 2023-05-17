import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SignupPage } from './pages/SignupPage';
import { MainPage } from './pages/MainPage';
import { useContext } from 'react';
import { UserContext } from './components/UserContext';

export function App() {
  const { name } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route index path="*" element={<Navigate to="/signup"/>} />

        <Route path="signup" element={ name ? <Navigate to="/"/> : <SignupPage/> } />
        <Route path='/' element={ name ? <MainPage/> : <Navigate to="/signup"/> } />
      </Routes>
    </Router>
  );
}
