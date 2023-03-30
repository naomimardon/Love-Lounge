import axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PageHeader from "../PageHeader";

const RenderFilm = (props) => {
  const [film, setFilm] = useState("");
  const [filmGenreID, setFilmGenreID] = useState("");

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
      setFilm(res.data.results[Math.floor(Math.random() * res.data.results.length)].original_title)
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
          <PageHeader title="Suggested Activity" />
          <p className="quizInstructions">Watch a film together: {film}</p>

        </Box>
      </Container>
    </div>
  )
};

export default RenderFilm




