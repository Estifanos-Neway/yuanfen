import React, { useEffect, useState } from 'react'

export default function ProgressiveImage(
  {
    thumbnailSrc = "https://cdn.sanity.io/images/lvtoy6ny/content/d5271848075bfa4abd86ec63292590cb55991459-408x612.png?rect=0,68,408,476&w=1&h=1",
    mainSrc = "https://cdn.sanity.io/images/lvtoy6ny/content/d5271848075bfa4abd86ec63292590cb55991459-408x612.png?rect=0,68,408,476&w=1&h=1",
    size = {},
    ...props
  }
) {
  const [imageSrc, setImageSrc] = useState(thumbnailSrc);
  useEffect(() => {
    const image = new Image()
    image.src = mainSrc
    image.onload = () => {
      setImageSrc(image.src)
    }
  }, [])
  return (
    <img src={imageSrc} {...props} {...size} />
  )
}
