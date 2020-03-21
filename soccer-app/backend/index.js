import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './routes/soccerRoutes'
import cors from 'cors'

const app = express();
const PORT = 8000;

//mongo connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//set up body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//set up CORS
app.use(cors())

routes(app)

app.get('/hello', (req, res) => res.send('Hello!'));

app.listen(PORT, () => console.log(`Listenning on port ${PORT}`))