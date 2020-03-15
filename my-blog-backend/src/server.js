//support ES6
import express from 'express'
import bodyParser from 'body-parser'

//mock-up db
const articlesInfo = {
  'learn-react': {
    upvotes: 0,
  },
  'learn-node':{
    upvotes: 0
  },
  'my-thoughts-on-resumes':{
    upvotes: 0
  }
}

const app = express();
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upvotes++;

  res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes}`)
})

app.listen(8000, () => console.log('Listenning on port 8000'))
