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

//refactor mongoDB
const withDB = async (operations, res) => {
  try{
    //connect to MongoServer
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true});
    const db = client.db('my-blog');//get db

    await operations(db);

  }catch(err){
    res.status(500).json({message: 'Error connecting to db', err});
  }finally{
    client.close();
  }
}

app.get('/api/articles/:name', async (req, res) => {
  
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db.collection('articles').findOne({name: articleName})
    res.status(200).json(articleInfo);
  }, res);//PASS res object

})

app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const {username, text} = req.body;

  withDB(async (db) => {

    const articleInfo = await db.collection.findOne({name: articleName})
    await db.collection('articles').updateOne({name: articleName}, 
      {'$set':{
        comments: articleInfo.comments.concat({username, text})
      }
    });
    const updatedArticleInfo = await db.collection.findOne({name: articleName})

    res.status(200).json(updatedArticleInfo);
  }, res)//PASS res object
})

app.post('/api/articles/:name/upvote', async (req, res) => {
  
  withDB(async (db) => {
    const articleName = req.params.name;
    
    const articleInfo = await db.collection.findOne({name: articleName})
    await db.collection('articles').updateOne({name: articleName}, 
      {'$set':{
        upvotes: articleInfo.upvotes + 1
      }
    });
    const updatedArticleInfo = await db.collection.findOne({name: articleName})

    res.status(200).json(updatedArticleInfo);
  }, res)//PASS res object
})

app.listen(8000, () => console.log('Listenning on port 8000'))
