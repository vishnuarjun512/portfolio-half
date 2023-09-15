import React from 'react'
import Profile from './Profile/profile'
import Footer from '../Footer/Footer'
import './home.css'

export default function Home1(){
    return (
        <div className='home-container'>
            <Profile/>
            <Footer/>
        </div>
    )
}