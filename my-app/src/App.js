import React from 'react'
import { Button, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from './layout/Layout';
import FoodMenuPage from './pages/FoodMenuPage';

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<FoodMenuPage />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export const NavLinks = () => {
  return (
    <Navbar>
      <Link to="/" > فهرست </Link>
    </Navbar>
  )
}

export default App;
