import React from 'react'
import { useParams } from 'react-router-dom'

const ExplorePage = () => {
  const params = useParams();

  console.log("prams", params)
  return (
    <div>
      Exporepage
    </div>
  )
}

export default ExplorePage
