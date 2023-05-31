'use client';

import { Button } from 'react-bootstrap';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1>error</h1>
      <p>something is going wrong</p>
      <Button onClick={reset}>reset</Button>
    </div>
  );
}
