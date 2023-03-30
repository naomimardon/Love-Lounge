import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageHeader from "../PageHeader";

const RenderFilm = (props) => {
  const [film, setFilm] = useState("");
  const [filmGenreID, setFilmGenreID] = useState("");
  const [overview, setOverview] = useState("");
  const [poster, setPoster] = useState("");

  const fetchFilm = async () => {
    const movieKey = "0f01805a202dcb2782b1130339536811";
    let filmGenre = `${props.activityTopic}`;
    console.log(`filmGenre: ${filmGenre}`);

    if (filmGenre === "Comedy") {
      setFilmGenreID("35");
    } else if (filmGenre === "Action") {
      setFilmGenreID("28");
    } else if (filmGenre === "Thriller/ Horror") {
      setFilmGenreID("53,27");
    } else if (filmGenre === "Sci Fi/ Fantasy") {
      setFilmGenreID("878,14");
    } else if (filmGenre === "Drama") {
      setFilmGenreID("18");
    } else {
      console.log("activityTopic is not a flim");
    }

    try {
      const res = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=" + movieKey + "&language=en-US&with_genres=" + filmGenreID);
      const index = Math.floor(Math.random() * res.data.results.length)
      setFilm(res.data.results[index].original_title)
      setOverview(res.data.results[index].overview)
      setPoster(res.data.results[index].poster_path)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFilm();
  }, [film]);

  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#FD297B', borderRadius: 2, marginTop: 2, marginBottom: 2, padding: 2 }}>
          <PageHeader title="SUGGESTED ACTIVITY" />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <img className="filmPoster" src={`https://image.tmdb.org/t/p/w200${poster}`} alt="Film Poster" />
            </Grid>
            <Grid className="filmContainer" item xs={8}>
              <h4 className="quizInstructions">Watch a film together: {film} </h4>
              <br />
              <p className="quizInstructions overview">{overview}</p>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </div>
  )
};

export default RenderFilm




