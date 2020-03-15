import React from 'react'
import articles from '../mockup-data/articles'

const ArticlePage = ({match}) => {

  const name = match.params.name;//get url params name
  const article = articles.find(a => a.name === name);

  if(!article) return <h1>Article does not exist</h1>

  return (
  <React.Fragment>
    <h1>{article.title}</h1>
    {article.content.map((p, key) => (
      <p key={key}>{p}</p>
    ))}
  </React.Fragment>
  );
}

export default ArticlePage