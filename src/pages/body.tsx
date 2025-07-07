import React from 'react'
import Home from './home'
import About from './about'
import Services from './services'
import Location from './location'
import {Navigate, Route, Routes} from 'react-router-dom'


const Body = () => {
    return (
        <div className='reliamed-body'>
            <Routes>
                <Route path='/' element={<Navigate to='home'/>}/>
            </Routes>
            
        </div>
    )
}
export default Body