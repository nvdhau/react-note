import mongoose from 'mongoose'
import {PlayerSchema} from '../models/playerModel'

const Player = mongoose.model('Player', PlayerSchema)

export const addNewPlayer = (req, res) => {
  let newPlayer = new Player(req.body)

  newPlayer.save((err, Player) => {
    if(err)
      res.send(err)
    
    res.json(Player)
  })
}

export const getPlayers = (req, res) => {
 
  Player.find({}, (err, Player) => {
    if(err)
      res.send(err)
    
    res.json(Player)
  })
}

export const getPlayerWithId = (req, res) => {
 
  Player.findById(req.params.PlayerId, (err, Player) => {
    if(err)
      res.send(err)
    
    res.json(Player)
  })
}

export const updatePlayer = (req, res) => {
 
  //req.body contains updated info
  Player.findOneAndUpdate({_id: req.params.PlayerId}, req.body, 
    {new: true},//update return Player with newest value
    (err, Player) => {
    if(err)
      res.send(err)
    
    res.json(Player)
  })
}

export const deletePlayerWithId = (req, res) => {
 
  Player.remove({_id: req.params.PlayerId}, (err, Player) => {
    if(err)
      res.send(err)
    
    res.json({message: "Delete Success"})
  })
}