import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(atob(token.split('.')[1])).username : null; // Decode JWT to get username
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      {user ? <h1>Hello, {user}!</h1> : null}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" render={() => <Login setUser={setUser} />} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/course/:id" component={Course} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
