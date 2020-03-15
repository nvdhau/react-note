import React from 'react'
import articles from '../mockup-data/articles'
import ArticleList from '../components/ArticleList'
import NotFoundPage from '../pages/NotFoundPage'

const ArticlePage = ({match}) => {

  const name = match.params.name;//get url params name
  const article = articles.find(a => a.name === name);

  if(!article) return <NotFoundPage />

  const otherArticles = articles.filter(a => a.name !== name)

  return (
  <React.Fragment>
    <h1>{article.title}</h1>
    {article.content.map((p, key) => (
      <p key={key}>{p}</p>
    ))}

    <h3>Other Articles:</h3>
    <ArticleList articles={otherArticles} />
  </React.Fragment>
  );
}

export default ArticlePage