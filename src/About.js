import React from 'react'
import web from '../src/images/Team.svg'
import Common from './Common'


export default function About() {
  return (
    <>
          <Common name='Welcome to About Page'  imgsrc={web} visit='/contact' btname="Contact Us" />
    </>
  )
}
