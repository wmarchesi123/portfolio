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
  window.location.href = "https://firebasestorage.googleapis.com/v0/b/william-marchesi.appspot.com/o/WilliamMarchesi_Resume.pdf?alt=media&token=2b28c558-be22-4989-9b29-bf6c94f09902";
  return <p>Redirecting...</p>;
}

export default App;
