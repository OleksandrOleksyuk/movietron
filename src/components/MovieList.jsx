import PropTypes from "prop-types";

MovieList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};

Movie.propTypes = {
  imdbID: PropTypes.string,
  Poster: PropTypes.string,
  Title: PropTypes.string,
  Year: PropTypes.string,
  onSelectMovie: PropTypes.func,
};

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie {...movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ imdbID, Poster, Title, Year, onSelectMovie }) {
  return (
    <li key={imdbID} onClick={() => onSelectMovie(imdbID)}>
      <img src={Poster} alt={`${Title} poster`} />
      <h3>{Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{Year}</span>
        </p>
      </div>
    </li>
  );
}

export default MovieList;
