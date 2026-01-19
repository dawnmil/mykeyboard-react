import { Stack } from '@mui/material';
import React from 'react';
import AlphaKey from './AlphaKey';

type AlphaRowProps = {
    keyValues: string[];
}

function AlphaRow({keyValues}: AlphaRowProps) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1}>
        {keyValues.map(keyValue => (
            <AlphaKey value={keyValue} />
        ))}
    </Stack>
  );
}

export default AlphaRow;
