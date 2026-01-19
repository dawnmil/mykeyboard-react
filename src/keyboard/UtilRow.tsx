import { Stack } from '@mui/material';
import React from 'react';
import UtilKey from './UtilKey';

type UtilRowProps = {
    keyValues: string[];
}

function UtilRow({keyValues}: UtilRowProps) {
  return (
    <Stack direction="row" justifyContent="center" spacing={1}>
        {keyValues.map(keyValue => (
            <UtilKey value={keyValue} />
        ))}
    </Stack>
  );
}

export default UtilRow;
