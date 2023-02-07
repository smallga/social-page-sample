import { useState } from 'react'

interface PhotoStickerProps {
    url: string;
}

export default function PhotoSticker(props: PhotoStickerProps) {

  return (
    <img className='rounded-full w-8 h-8' src={props.url}>

    </img>
  )
}