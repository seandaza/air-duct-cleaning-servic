import React from 'react'
import Image from 'next/image'
import style from './style.module.css'

export default function Banner() {
  return (
    <div className={style.banner} id="home">
      <Image src="/img/banner.jpeg" alt="Step 1" width={1300} height={800} />
    </div>
  )
}
