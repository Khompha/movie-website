const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmEzNWVlMGZiZWVjYWU2MzI2M2NiODE0MzQ4N2Q4MiIsIm5iZiI6MTcyMzg4Njc3My40MjE5MzgsInN1YiI6IjY2YzA2YTM4ZjlhODM4MjllMGQzMjNiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hvSBPsz2bEwxigQArZzeWhUM6C0V3RWJJ58xXsyMf6Q'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    const moviesContainer = document.getElementById('movies-container');
    response.results.forEach(movie => {
      // Create a div for each movie
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');

      // Create an h2 for the movie title
      const title = document.createElement('h2');
      title.textContent = movie.title;

      // Create an img for the movie poster
      const poster = document.createElement('img');
      poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      poster.alt = movie.title;

      // Create a p for the movie overview
      const overview = document.createElement('p');
      overview.textContent = movie.overview;

      // Fetch the movie trailer
      fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options)
        .then(videoResponse => videoResponse.json())
        .then(videoResponse => {
          const youtubeTrailer = videoResponse.results.find(video => video.site === 'YouTube' && video.type === 'Trailer');

          if (youtubeTrailer) {
            // Create a button for watching the trailer
            const trailerButton = document.createElement('a');
            trailerButton.href = `https://www.youtube.com/watch?v=${youtubeTrailer.key}`;
            trailerButton.target = '_blank';
            trailerButton.textContent = 'Watch Trailer';
            trailerButton.classList.add('trailer-button');

            // Append the trailer button to the movieDiv
            movieDiv.appendChild(trailerButton);
          }
        });

      // Append the title, poster, and overview to the movieDiv
      movieDiv.appendChild(title);
      movieDiv.appendChild(poster);
      movieDiv.appendChild(overview);

      // Append the movieDiv to the moviesContainer
      moviesContainer.appendChild(movieDiv);
    });
  })
  .catch(err => console.error(err));
