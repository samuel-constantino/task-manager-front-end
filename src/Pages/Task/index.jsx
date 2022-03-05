import React from 'react';
import { useParams } from 'react-router-dom';

export default function Task() {
  const { id } = useParams();
  return (
    <h1>
      Task Details-
      { id }
    </h1>
  );
}
