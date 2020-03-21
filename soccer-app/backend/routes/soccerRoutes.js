import {
  addNewPlayer, 
  getPlayers,
  getPlayerWithId, 
  updatePlayer,
  deletePlayerWithId
} from '../controllers/playerControllers'

const routes = (app) => {
  
  app.route('/players')
    //GET all players
    .get(getPlayers)
    //POST endpoint
    .post(addNewPlayer)

  app.route('/players/:PlayerId')
    //GET player with Id
    .get(getPlayerWithId)
    //PUT update player with Id
    .put(updatePlayer)
    //DELETE player with Id
    .delete(deletePlayerWithId)
}

export default routes