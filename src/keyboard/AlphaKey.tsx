import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch } from '../redux/hooks';
import { setLetter } from '../redux/slices/displaySlice';

type AlphaKeyProps = {
    value: string;
}

function AlphaKey({value}: AlphaKeyProps) {
  const audio = new Audio(`/audio/${value.toLowerCase()}.m4a`);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    audio.play();
    dispatch(setLetter(value));
  }

  return (
    <Button 
      onClick={handleClick} 
      variant="contained" 
      sx={{ 
        textTransform: 'none'
      }}>{value}</Button>
  );
}

export default AlphaKey;
