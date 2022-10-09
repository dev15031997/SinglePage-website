import React from 'react'
import web from '../src/images/home.svg'
import Common from './Common'

export default function Home() {
  return (
    <>
       <Common name='Grow Your Business with'  imgsrc={web} visit='/service' btname="Get Started" />
    </>
  )
}
