import React from 'react'

export default function Notice({title, detail}) {
  return (
    <div>
        <b>{title}</b>
        <p>{detail}</p>
    </div>
  )
}
