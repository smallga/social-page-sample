import { useEffect, useMemo, useState } from 'react'
import { PhotoSizeEnum } from '../utility/enum/photo-size.enum';

interface PhotoStickerProps {
    url: string;
    size?: PhotoSizeEnum;
}

const PhotoStickerXs = (url: string) => {
  return <img className='rounded-full w-6 h-6' src={url}/>
}
const PhotoStickerLG = (url: string) => {
  return <img className='rounded-full w-16 h-16' src={url}/>
}
const PhotoStickerXl = (url: string) => {
  return <img className='rounded-full w-24 h-24' src={url}/>
}
const PhotoStickerMd = (url: string) => {
  return <img className='rounded-full w-8 h-8' src={url}/>
}

export default function PhotoSticker(props: PhotoStickerProps) {

  const showPhotoSticker = () => {

    const { size, url } = props;
    let content = PhotoStickerMd(url)

    switch(size) {
      case PhotoSizeEnum.XS:
        content = PhotoStickerXs(url)
        break;
      case PhotoSizeEnum.LG:
        content = PhotoStickerLG(url)
        break;
      case PhotoSizeEnum.XL:
        content = PhotoStickerXl(url)
        break;
      default:
    }

    return content;
  }


  return (
    <>
      {showPhotoSticker()}
    </>
  )
}