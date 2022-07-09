import { useEffect, useState } from 'react'
import { LandingImage } from './'

export default function OrderView({ imageUrl, message }) {
    
    return (
        <div>
            <LandingImage url={imageUrl} />
            <p>{message}</p>
            <button>Submit order</button>
        </div>
    )
}
