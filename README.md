
# react-redux-movies

It is a SPA(Single Page Application) app to browse movies written in React and managing the state by Redux
The data is from https://www.themoviedb.org/documentation/api. (Details please see [APIs](#APIs))

There are two main pages:

### Home page
- Find movies by: Top 10 most popular, filter by genre and a search box to be able to search by title or original title
- List of movies with their poster and title (Spanish Language)
- Click a movie will leads to its detail page.

### Movie detail page
- List the full movie: poster title, original title, overview, genres, release date, runtime, vote count and vote average

## Main techniques 🛠
- React
- Redux
- React Bootstrap
- HTML5 
- ES6
- React router dom
- API 
- GitFlow

## Run it locally 🖥
```bash
$ git clone git@github.com:xavierventeo/react-redux-movies.git
$ cd react-redux-movies
$ npm install # to install node packages.
$ npm start # to run the app in development mode
```
Then open `localhost:3000` on browser to see the app.

## Project components 📙
```bash
1.-This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
$ npx create-react-app react-redux-movies
$ cd react-redux-movies

2.- Dependencies installed
$ npm install react-redux redux # to install redux packages.
$ npm install bootstrap react-bootstrap # to install bootstrap packages.
$ npm install react-router-dom # to install react-router-dom packages and manage navegation 
$ npm install axios # to install axios packages to manage API calls 

3.- Configure [Git Flow] (https://github.com/nvie/gitflow/wiki/Installation)
$ git flow init

```

## <a name="APIs">APIs</a> 🕸

### Genre list
[/genre/movie/list](https://developers.themoviedb.org/3/genres/get-movie-list)
On home page, get all genres and fill the dropdown element to be able to filter movies by genre.

### Search/Filter movies by Genre
[/discover/movie](https://developers.themoviedb.org/3/discover/movie-discover)
On home page, after selecting a genre element from dropdown genre list, it dispatch a search. Used param "with_genres" to filter by selected value. 
When dropdown value changed, it will send another request according to the selection.

### Keyword search
[/search/movie](https://developers.themoviedb.org/3/search/search-movies)
After input the keyword, click on search icon to do search. The same input value search by title and original title

### Top 10 most popular movies
[/movie/popular](https://developers.themoviedb.org/3/movies/get-popular-movies)
Get the popular movies and filter the API response to get the top 10

### Get movie details
[/movie/${movieId}](https://developers.themoviedb.org/3/movies/get-movie-details)
Use movieId to get its details. Called from Movie Detail page


## Release Notes 📋
```bash
• 1.0.0: First functional release to deliver to GeeksHubsAcademy BootCamp
```

## License
[MIT](https://choosealicense.com/licenses/mit/)

