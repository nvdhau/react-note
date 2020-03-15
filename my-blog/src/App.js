import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import NavBar from './components/NavBar';
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    //exact: exact path
    //name: url parameter, will be passed to component ArticlePage (match.params.name)
    //REACT display all content if a route is match e.g. route without path will be display all the time
    // => use Switch in react-router-dom, only return content of one route
    <Router>
      <div className="App">
        <NavBar />
        <div id ="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/article-list" component={ArticleListPage}/>
            <Route path="/article/:name" component={ArticlePage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
