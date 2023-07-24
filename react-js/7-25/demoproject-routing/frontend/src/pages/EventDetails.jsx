import React from 'react'
import {useParams} from 'react-router-dom'

function EventDetails() {
    const params =useParams();

  return (
    <div>
      <h1>event details</h1>
      {params.eventId}
    </div>
  )
}

export default EventDetails
