import '../styles/MovieSceneItem.scss';
import { Link } from 'react-router-dom';

function MovieSceneItem(props) {
  return (
    <>
      <img
        className="main__section1--movieImage"
        alt={props.movie.movie}
        src={props.movie.poster}
      />
      <h2 className="main__section1--movieTitle">
        {props.movie.title} - {props.movie.year}
      </h2>

      <Link
        to={`/movie/${props.movie.id}`}
        className="main__section1--movieDetails"
      >
        Details
      </Link>
    </>
  );
}
export default MovieSceneItem;
