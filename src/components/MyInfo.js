import React from 'react'

function MyInfo(name, aboutMe, topSpots)
{
  return (
    <div>
      <h1>Hello! my Name is {name}</h1>
      <p>{aboutMe}</p>
      <h1>my top 3 vacation wishlists are:</h1>
      <ul>
        <li>{topSpots[0]}</li>
        <li>{topSpots[1]}</li>
        <li>{topSpots[2]}</li>
      </ul>
    </div>
  )
}
export default MyInfo 
