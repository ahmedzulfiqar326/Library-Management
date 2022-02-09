import logo from './logo.svg';
import './App.css';
import Student from './frontend/student'
import Book from './frontend/books'
import Bookdetail from './frontend/bookdetail'
import {BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Book/> */}
      {/* <Student/> */}
      <Bookdetail/>
    <Router>
    <Routes>
      <Route path="/" exact component={Book}/>
      <Route exact path="/studentinfo" component={Student}/>
      <Route 
      exact
      path="/bookinfo" 
      component={Book}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
