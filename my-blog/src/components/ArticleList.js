import React from 'react';
import {Link} from 'react-router-dom'

//can reuse this one to display: list of popular articles, recent articles ...
const ArticleList = ({articles, key}) => {
  //className: is css class
  //must create key for each item in list
  return (
    <React.Fragment>
      {articles.map( (article, key) => (
      <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
    </React.Fragment>
  )
}
export default ArticleList;
