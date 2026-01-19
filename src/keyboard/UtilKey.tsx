import { ToggleButton } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectKeyboard, shiftLower, shiftUpper } from '../redux/slices/keyboardSlice';

type UtilKeyProps = {
    value: string;
}

function UtilKey({value}: UtilKeyProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const { capitalized } = useAppSelector(selectKeyboard);
  const dispatch = useAppDispatch();

  const handleShiftClick = () => {
    capitalized 
      ? dispatch(shiftLower()) && setSelected(false) 
      : dispatch(shiftUpper()) && setSelected(true);
  }

  return (
    <>
      {value === 'shift' &&
        <ToggleButton
          color="primary"
          value={value}
          selected={selected}
          onChange={handleShiftClick}
          sx={{
            textTransform: 'none',
            py: '6px'
          }}
        >{value}</ToggleButton>}
    </>
  );
}

export default UtilKey;
