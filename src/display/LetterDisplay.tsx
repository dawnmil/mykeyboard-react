import { Box, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectDisplay } from '../redux/slices/displaySlice';

function LetterDisplay() {
  const { value } = useAppSelector(selectDisplay);

  return (
    <Box height="250px"><Typography color="secondary" sx={{ fontSize: '200px' }}>{value}</Typography></Box>
  );
}

export default LetterDisplay;
