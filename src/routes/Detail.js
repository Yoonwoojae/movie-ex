import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
          <div className={styles.container}>
            {
              loading ?
                  (
                  <div>
                    <span>loading...</span>
                  </div>
                  ) : 
                  (
                  <div>
                    <img src={ movie.background_image} alt={movie.title}/>
                    <p>{movie.title}</p>
                  </div>
                  )
                }
          </div>
          );
}
export default Detail;
