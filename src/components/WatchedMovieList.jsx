import PropTypes from "prop-types";

WatchedMovieList.propTypes = {
  watched: PropTypes.array,
  onDeleteWatched: PropTypes.func,
};

WatchedMovie.propTypes = {
  imdbID: PropTypes.string,
  poster: PropTypes.string,
  title: PropTypes.string,
  imdbRating: PropTypes.number,
  userRating: PropTypes.number,
  runtime: PropTypes.number,
  onDeleteWatched: PropTypes.func,
};

function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie {...movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
      ))}
    </ul>
  );
}

function WatchedMovie({
  imdbID,
  poster,
  title,
  imdbRating,
  userRating,
  runtime,
  onDeleteWatched,
}) {
  return (
    <li>
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>

        <button className="btn-delete" onClick={() => onDeleteWatched(imdbID)}>
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovieList;
