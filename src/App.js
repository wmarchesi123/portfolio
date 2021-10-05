import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume"><ResumeDownload /></Route>
        <Route path="/rvutrackdownload"><RVUTrackDownload /></Route>
        <Route render={() => <h1>404: page not found</h1>} />
      
      </Switch>
    </Router>
  );
}

function RVUTrackDownload() {
  window.location.href = "https://testflight.apple.com/join/7QMYaJjv";
  return <p>Redirecting...</p>;
}

function ResumeDownload() {
  window.location.href = "https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/WilliamMarchesi_Resume.pdf?alt=media&token=4e29d685-5614-4e54-b63d-0068bf05e36d";
  return <p>Redirecting...</p>;
}

export default App;
