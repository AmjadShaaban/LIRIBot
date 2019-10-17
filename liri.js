require("dotenv").config();
const Spotify = require("node-spotify-api");
const fs = require("fs");
var keys = require("./keys.js");
var inquirer = require("inquirer");
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret
});
var axios = require("axios");
var apiKey = keys.APIKEYS;
var spotifyAPi = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter search parameters:",
        name: "serachInput"
      }
    ])
    .then(subinquiry => {
      spotify
        .search({ type: "track", query: subinquiry.serachInput })
        .then(response => {
          fs.open("log.txt", "a", (err, fd) => {
            if (err) throw err;
            fs.appendFile(
              fd,
              JSON.stringify(subinquiry + response, null, 2),
              "utf8",
              err => {
                fs.close(fd, err => {
                  if (err) throw err;
                });
                if (err) throw err;
              }
            );
          });

          console.log(response);
          var SpotifyRes = response.tracks.items[0].artists;
          var SpotifyRes = response.tracks.items[0].artists;
          var SpotifyRes = response.tracks.items[0].artists;
          console.log(SpotifyRes);
        })
        .catch(err => {
          console.log(err);
        });
    });
};
var axiosBands = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter search parameters:",
        name: "axiosPick"
      }
    ])
    .then(subinquiry => {
      axios
        .get(
          "https://rest.bandsintown.com/artists/" +
            subinquiry.axiosPick +
            "/events?app_id=" +
            apiKey.bands
        )
        .then(response => {
          fs.open("log.txt", "a", (err, fd) => {
            if (err) throw err;
            fs.appendFile(
              fd,
              JSON.stringify(subinquiry + response, null, 2),
              "utf8",
              err => {
                fs.close(fd, err => {
                  if (err) throw err;
                });
                if (err) throw err;
              }
            );
          });
          for (var i = 0; i < response.data.length; i++) {
            console.log("Venue: " + response.data[i].venue.name);
            console.log(
              "Location: " +
                response.data[i].venue.city +
                " " +
                response.data[i].venue.region +
                ", " +
                response.data[i].venue.country
            );
            console.log("Event Date: " + response.data[i].datetime);
          }
        });
    });
};
var axiosOMDB = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter search parameters (Default: Warcraft):",
        name: "axiosPick"
      }
    ])
    .then(subinquiry => {
      if (subinquiry.axiosPick === "") {
        subinquiry.axiosPick = "Warcraft";
      }
      axios
        .get(
          "http://www.omdbapi.com/?apikey=" +
            apiKey.omdb +
            "&t=" +
            subinquiry.axiosPick
        )
        .then(response => {
          fs.open("log.txt", "a", (err, fd) => {
            if (err) throw err;
            fs.appendFile(
              fd,
              JSON.stringify(subinquiry + response, null, 2),
              "utf8",
              err => {
                fs.close(fd, err => {
                  if (err) throw err;
                });
                if (err) throw err;
              }
            );
          });

          console.log("Title: " + response.data.Title);
          console.log("Year: " + response.data.Year);
          console.log("IMDB Rating: " + response.data.Ratings[0].Value);
          console.log(
            "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value
          );
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
        });
    });
};
var mainMenu = function() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter a username:",
        name: "username"
      },
      {
        type: "list",
        message: "Select a command:",
        choices: [
          "Concert this!",
          "Spotify this!",
          "Movie this!",
          "Exit :(",
          new inquirer.Separator("¯\\_(ツ)_/¯ ¯\\_(ツ)_/¯ ¯\\_(ツ)_/¯")
        ],
        name: "menuChoice"
      }
    ])
    .then(function(inquiry) {
      console.log("Welcome " + inquiry.username);
      console.log("You picked: " + inquiry.menuChoice);
      fs.open("log.txt", "a", (err, fd) => {
        if (err) throw err;
        fs.appendFile(fd, JSON.stringify(inquiry, null, 2), "utf8", err => {
          fs.close(fd, err => {
            if (err) throw err;
          });
          if (err) throw err;
        });
      });
      switch (inquiry.menuChoice) {
        case "Concert this!":
          {
            axiosBands();
          }
          break;
        case "Spotify this!":
          {
            spotifyAPi();
          }
          break;
        case "Movie this!":
          {
            axiosOMDB();
          }
          break;
        case "Exit :(": {
          return;
        }
      }
    });
};
mainMenu();
