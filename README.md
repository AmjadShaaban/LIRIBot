# LIRIBot

LIRI Bot (My first node.js)

### Overview

Meet LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in input and gives you back data.

### Node modules used:

1. [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

2) [Axios](https://www.npmjs.com/package/axios)

3) [Moment](https://www.npmjs.com/package/moment)

4) [DotEnv](https://www.npmjs.com/package/dotenv)

5) [Axios](https://www.npmjs.com/package/axios) (to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api))

6. [Moment](https://www.npmjs.com/package/moment)

7. [DotEnv](https://www.npmjs.com/package/dotenv)

8. [Inquirer](https://www.npmjs.com/package/inquirer)

### APIs used:

Create and use a standard GitHub repository. As this is a CLI App, it cannot be deployed to GitHub pages or Heroku. This time you'll need to include screenshots, a GIF, and/or a video showing us that you have the app working with no bugs. You can include these screenshots/GIFs or a link to a video in a `README.md` file.

In order to meet the Employer Competitive standards and be ready to show your application to employers, the `README.md` file should meet the following criteria:

1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development

Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading in this assignment.

### liri.js can take in one of the following commands:

## `concert-this`:

## `spotify-this-song`:

## `movie-this`:

## `do-what-it-says`:

### What Each Command Should Do

1. `node liri.js concert-this <artist/band name here>`

   - This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     - Name of the venue

     - Venue location

     - Date of the Event (use moment to format this as "MM/DD/YYYY")

   - **Important**: There is no need to sign up for a Bands in Town `api_id` key. Use the `codingbootcamp` as your `app_id`. For example, the URL used to search for "Celine Dion" would look like the following:

     - `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`

2. `node liri.js spotify-this-song '<song name here>'`

   - This will show the following information about the song in terminal/bash window

     - Artist(s)

     - The song's name

     - A preview link of the song from Spotify

     - The album that the song is from

   - If no song is provided the program will default to [PH]SONG-NAME-HERE.

3) `node liri.js movie-this '<movie name here>'`

   - This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   - If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

     - If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>

     - It's on Netflix!

   - You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.

4) `node liri.js do-what-it-says`

   - Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     - It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     - Edit the text in random.txt to test out the feature for movie-this and concert-this.

### BONUS

- In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

- Make sure you append each command you run to the `log.txt` file.

- Do not overwrite your file each time you run a command.
