import { Button } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectAlphaKeys, shiftLower, shiftUpper } from '../redux/slices/alphaKeysSlice';

type KeyProps = {
    value: string;
}

function Key({value}: KeyProps) {
  const { capitalized } = useAppSelector(selectAlphaKeys);
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
    <Button onClick={handleClick} variant="contained" sx={{ textTransform: 'none'}}>{value}</Button>
  );
}

export default Key;
