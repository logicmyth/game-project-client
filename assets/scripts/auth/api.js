'use strict';
const app = require('../app.js');
const ui = require('./ui');

const signUp = (data) => {

  return $.ajax({
    url: app.host + "/sign-up",
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {

  return $.ajax({
    url: app.host + "/sign-in",
    method: 'POST',
    data: data,
  });
};

const signOut = function () {
  return $.ajax({
    url: app.host + "/sign-out/" + app.user.id,
    method: 'DELETE',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};

const changePassword = function (data){
   return $.ajax({
    url: app.host + "/change-password/" + app.user.id,
    method: 'PATCH',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

<<<<<<< HEAD
const gameUpdate = function (val){
  return $.ajax ({
    url: app.host + "/games/:id",
    method: 'PATCH',
    data: val
  })
}

=======
const createGame = function (){
  return $.ajax({
    url: app.host + "/games",
    method: 'POST',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
  });
};
>>>>>>> ttttwopointtwo

const updateGame = function (index, value, gameId){
    console.log(ui.createdGame);
  return $.ajax({
    url: app.host + "/games/" + gameId,
    method: 'PATCH',
    headers: {
    Authorization: 'Token token=' + app.user.token,
    },
    data: {
            "game": {
              "cell": {
                  "index": index,
                  "value": value,
          }

        }
      }
  });
};

const showGames = function() {
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const gameOver = function() {
    return $.ajax({
      url: app.host + '/games/' + app.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
              "game": {
              "over": true,
          }
        }
      });
    };
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  updateGame,
  createGame,
  gameOver,
};
