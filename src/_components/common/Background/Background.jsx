import bgImg from "@/images/common/background/Gambitor.png";
import Image from "next/image";
import React from 'react'

function Background() {
  return (
    <Image 
    src={bgImg}
    placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
  )
}

export default Background