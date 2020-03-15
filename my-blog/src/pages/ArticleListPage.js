import React from 'react'
import articles from '../mockup-data/articles'; 
import ArticleList from '../components/ArticleList'

const ArticleListPage = () => (
  //{articles} : mock-up articles, while 'articles=' is prop name
  <React.Fragment>
    <h1>Articles</h1>
    <ArticleList articles={articles}/>
  </React.Fragment>
)

export default ArticleListPage