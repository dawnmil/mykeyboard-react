import { Box, Stack } from '@mui/material';
import React from 'react';
import KeysRow from './KeysRow';
import { selectAlphaKeys } from '../redux/slices/alphaKeysSlice';
import { useAppSelector } from '../redux/hooks';

const utilRow = ["shift"];

function Keyboard() {
  const {topKeys, middleKeys, bottomKeys } = useAppSelector(selectAlphaKeys)
  return (
    <Box>
        <Stack direction="column" spacing={1}>
            <KeysRow keyValues={topKeys} />
            <KeysRow keyValues={middleKeys} />
            <KeysRow keyValues={bottomKeys} />
            <KeysRow keyValues={utilRow} />
        </Stack>
    </Box>
  );
}

export default Keyboard;
