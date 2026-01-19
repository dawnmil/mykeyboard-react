import { Stack } from '@mui/material';
import React from 'react';
import Key from './Key';

type KeysRowProps = {
    keyValues: string[];
}

function KeysRow({keyValues}: KeysRowProps) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1}>
        {keyValues.map(keyValue => (
            <Key value={keyValue} />
        ))}
    </Stack>
  );
}

export default KeysRow;
