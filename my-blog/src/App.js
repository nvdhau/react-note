import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleList from './pages/ArticleList'
import ArticlePage from './pages/ArticlePage'
import NavBar from './components/NavBar';

function App() {
  return (
    //exact: exact path
    //name: url parameter, will be passed to component ArticlePage (match.params.name)
    <Router>
      <div className="App">
        <NavBar />
        <div id ="page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/article-list" component={ArticleList}/>
          <Route path="/article/:name" component={ArticlePage}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
