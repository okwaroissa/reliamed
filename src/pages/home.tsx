import React from 'react'
import landing from '../images/reliamed_landing.png'
const Home = () => {
    return (
        <div className='reliamed-page'>
            <img src={landing} alt="landing image" className='landing-image'/>
            <h4 className='landing-head'>Compassionate, Reliable Transportation You Can Trust</h4>
            <p>At Reliamed Transportation, we specialize in safe, timely, and dignified non-emergency transportation for children, individuals with special needs, and mental health patients.</p>
            <p>Our professionally trained team ensures every ride is a secure, supportive experience — because every journey matters.</p>
        </div>
    )
}
export default Home