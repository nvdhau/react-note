//support ES6
import express from 'express'
import bodyParser from 'body-parser'
import {MongoClient} from 'mongodb'
//mock-up db
// const articlesInfo = {
//   'learn-react': {
//     upvotes: 0,
//     comments: []
//   },
//   'learn-node':{
//     upvotes: 0,
//     comments: []
//   },
//   'my-thoughts-on-resumes':{
//     upvotes: 0,
//     comments: []
//   }
// }

const app = express();
app.use(bodyParser.json());


app.get('/api/articles/:name', async (req, res) => {
  
  try{
    const articleName = req.params.name;

    //connect to MongoServer
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
    const db = client.db('my-blog');//get db

    const articleInfo = await db.collection('articles').findOne({name: articleName})

    res.status(200).json(articleInfo);
  }catch(err){
    res.status(500).json({message: 'Error connecting to db', err});
  }finally{
    client.close();
  }
})

app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const {username, text} = req.body;

  articlesInfo[articleName].comments.push({username, text})

  res.status(200).send(articlesInfo[articleName])
})

app.post('/api/articles/:name/upvote', async (req, res) => {
  
  try{
    const articleName = req.params.name;
  
    //connect to MongoServer
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
    const db = client.db('my-blog');//get db

    const articleInfo = await db.collection.findOne({name: articleName})
    await db.collection('articles').updateOne({name: articleName}, 
      {'$set':{
        upvotes: articleInfo.upvotes + 1
      }
    });
    const updatedArticleInfo = await db.collection.findOne({name: articleName})

    res.status(200).json(updatedArticleInfo);

  }catch(err){
    res.status(500).json({message: 'Error connecting db', err});
  }finally{
    client.close();
  }
})

app.listen(8000, () => console.log('Listenning on port 8000'))
