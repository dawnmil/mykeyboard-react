import { Box, Stack } from '@mui/material';
import React from 'react';
import AlphaRow from './AlphaRow';
import { selectKeyboard } from '../redux/slices/keyboardSlice';
import { useAppSelector } from '../redux/hooks';
import UtilRow from './UtilRow';

function Keyboard() {
  const {topKeys, middleKeys, bottomKeys, utilKeys } = useAppSelector(selectKeyboard)
  return (
    <Box>
        <Stack direction="column" spacing={1}>
            <AlphaRow keyValues={topKeys} />
            <AlphaRow keyValues={middleKeys} />
            <AlphaRow keyValues={bottomKeys} />
            <UtilRow keyValues={utilKeys} />
        </Stack>
    </Box>
  );
}

export default Keyboard;
