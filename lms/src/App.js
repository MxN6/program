import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="#/login" component={Login} />
        <Route path="#/register" component={Register} />
        <Route path="#/dashboard" component={Dashboard} />
        <Route path="#/course" component={Course} />
        <Route path="#/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;