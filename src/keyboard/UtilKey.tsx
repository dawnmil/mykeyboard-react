import { Button, ToggleButton } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectKeyboard, shiftLower, shiftUpper } from '../redux/slices/keyboardSlice';
import { setLetter } from '../redux/slices/displaySlice';

type UtilKeyProps = {
    value: string;
}

function UtilKey({value}: UtilKeyProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const { capitalized } = useAppSelector(selectKeyboard);
  const dispatch = useAppDispatch();

  const handleShift = () => {
    capitalized 
      ? dispatch(shiftLower()) && setSelected(false) 
      : dispatch(shiftUpper()) && setSelected(true);
  }

  const handleClear = () => {
    dispatch(setLetter(""));
  }

  return (
    <>
      {value === 'shift' &&
        <ToggleButton
          color="primary"
          value={value}
          selected={selected}
          onChange={handleShift}
          sx={{
            textTransform: 'none',
            py: '6px'
          }}
        >{value}</ToggleButton>}
      {value === 'clear' && 
        <Button
          onClick={handleClear}
          variant="outlined"
          color="primary"
          sx={{
            textTransform: 'none'
          }}
          >{value}</Button>
      }
    </>
  );
}

export default UtilKey;
