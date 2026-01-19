import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectKeyboard, shiftLower, shiftUpper } from '../redux/slices/keyboardSlice';

type AlphaKeyProps = {
    value: string;
}

function AlphaKey({value}: AlphaKeyProps) {
  const { capitalized } = useAppSelector(selectKeyboard);
  const audio = new Audio(`/audio/${value.toLowerCase()}.m4a`);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (value === 'shift') {
        capitalized ? dispatch(shiftLower()) : dispatch(shiftUpper());
    } else {
        audio.play();
    }
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
