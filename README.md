# LIRIBot

LIRI Bot (My first node.js)

### Overview

Meet LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in input and gives you back data.

### Node modules used:

1. [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

2) [Axios](https://www.npmjs.com/package/axios)

3) [DotEnv](https://www.npmjs.com/package/dotenv)

4) [Inquirer](https://www.npmjs.com/package/inquirer)

### What does it do?

Using [Inquirer](https://www.npmjs.com/package/inquirer), we grab username data, then a choice between four functions (concert-this, spotify-this, movie-this and do-what-it-says).

## `concert-this`:

- Liri will ask the user for an Artist name and will search the Bands in Town Artist Events API and render the following information about each event to the terminal:

  - Name of the venue

  - Venue location

  - Date of the Event (use moment to format this as "MM/DD/YYYY")

## `spotify-this-song`:

- Liri will ask the user for a Song name then it will render to the terminal the following information about the song using Spotify API .

  - Artist(s)

  - The song's name

  - A preview link of the song from Spotify

  - The album that the song is from

  - If no song is provided the program will default to Odee for A Boogie Wit a Hoodie.

  ## `movie-this`:

- Liri will ask the user for a Movie name then it will render to the termianl the following information about the movie from the OMDB API:

  - Title of the movie.
  - Year the movie came out.
  - IMDB Rating of the movie.
  - Rotten Tomatoes Rating of the movie.
  - Country where the movie was produced.
  - Language of the movie.
  - Plot of the movie.
  - Actors in the movie.

  - If the user doesn't type a movie in, the default movie is 'How High'.

## `do-what-it-says`:

- Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

  - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

  - Edit the text in random.txt to test out the feature for movie-this and concert-this.

### Liri logs your actions to log.txt

Every command and

2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading in this assignment.

### Liri logs your actions to log.txt

- In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

- Make sure you append each command you run to the `log.txt` file.

- Do not overwrite your file each time you run a command.

3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development
