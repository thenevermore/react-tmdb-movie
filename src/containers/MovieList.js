import { Box } from "@mui/system"
import { useState } from "react";
import MovieCard from "../components/MovieCard"
import fetchedMovies from '../data/movies.json';

const MovieList = () => {
    
    const [movies, setMovies] = useState(fetchedMovies.results);
    return (
        <Box sx={{  display: 'flex', flexDirectiob:'row', justifyContent: 'space-between', flexWrap: 'wrap', mt: 5 }}>
            {
                movies.map( movie => 
                    ( <MovieCard movie={movie}></MovieCard>)
            )}
        </Box>
    )
}

export default MovieList;