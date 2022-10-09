import React from 'react'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import {Switch ,Route , Redirect} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


export default function App() {
  return (
    <>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
    </Switch>
    <Footer/>
      
    </>
  )
}
