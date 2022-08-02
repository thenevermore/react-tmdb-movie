import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

export default function MovieCard({movie}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', mt: 20, maxWidth: 345, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="http://placekitten.com/400/400"
        alt="Kucing"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} readOnly />
            <p>{movie.vote_average}</p>
        </Box>
      </Box>
      
    </Card>
  );
}
