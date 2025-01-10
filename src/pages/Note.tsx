import React from 'react';
import { useParams } from "react-router";

const Note: React.FC = () => {
  let { id } = useParams();

  return (
    <div>{id}</div>
  )
}

export default Note