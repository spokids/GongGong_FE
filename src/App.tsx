import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/login/SigninPage';
import SignupPage from './pages/login/SignupPage';

const App: React.FC = () => {
  return (
    <div className="container mobile">
      <Router>
            <Routes>
                <Route path="/signin" element={<SigninPage />} /> 
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;
