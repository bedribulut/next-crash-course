'use client';

import { useParams } from 'next/navigation'

function Article({params: {id} }) {

  const params = useParams();

  return (
    <div>{id}</div>
  )
}

export default Article