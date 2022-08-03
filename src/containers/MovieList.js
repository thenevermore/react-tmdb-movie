import { Box } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import MovieCard from '../components/MovieCard';
import tmdb from '../apis/tmdb';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            //const fetchedMovies = await axios.get("trending/movie/week?api_key=e47120c43c7741d21ee931d7b934532f");            
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error)
            }
                
        }        
        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            mt: 5,
        }}>
            {
                movies.map(movie => (
                    <MovieCard movie={movie}></MovieCard>
                ))
            }
        </Box>
    );
}

export default MovieList;