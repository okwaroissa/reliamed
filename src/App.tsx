import React, {useRef} from 'react';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Location from './pages/location';
import Contact from './pages/contact';
import { Link, Navigate, Routes, Route} from 'react-router-dom'
import logo from './images/reliamed_logo.png'
import './App.css';

function App() {
  const collapseRef = useRef<HTMLDivElement>(null)
  const closeNavbar = () => {
    if (collapseRef.current && collapseRef.current.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(collapseRef.current, {
        toggle: false
      })
      bsCollapse.hide()
    }
  }

  return (
    <div className="App">
      <div className='reliamed-header'>
        <nav className='navbar navbar-expand-lg reliamed-navbar'>
          <a href="" className='navbar-brand'>
            <img src={logo} alt="reliamed logo" className='logo'/>
          </a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#reliamednavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='reliamed-site-navigation collapse navbar-collapse' id='reliamednavbar' ref={collapseRef}>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link navigation-item' to='/home' onClick={closeNavbar}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link navigation-item' to='/about' onClick={closeNavbar}>About Us</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link navigation-item' to='/services' onClick={closeNavbar}>Services</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link navigation-item' to='/location' onClick={closeNavbar}>Location</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link navigation-item' to='/contact' onClick={closeNavbar}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='reliamed-body'>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>

      <div className='reliamed-footer row'>
        {/* <div className='col-md'>
            &copy; Reliamed Transportation, Inc
        </div>
        <div className='col-md'>
            13 Cambridge Street Worcester, MA 01603
        </div> */}
        <div className='col-md footer-content-address'>
          &copy; Reliamed Transportation, Inc<br/>
          13 Cambridge Street Worcester, MA 01603<br/>
            Phone: +1 (508) 308 3467<br/>
            Email: reliamedinc@gmail.com
        </div>
        <div className='col-md'>
          <a href="https://facebook.com/yourpage" target='_blank'>
            <span className="fa-stack fa-sm">
              <i className="fab fa-facebook fa-stack-2x fa-inverse social-icon"></i>
            </span>
          </a>
          Facebook<br/>
          <a href="https://instagram.com/yourprofile" target='_blank'>
            <span className="fa-stack fa-sm">
              <i className="fab fa-instagram fa-stack-2x fa-inverse social-icon"></i>
            </span>
          </a>
          Instagram<br/>
          <a href="https://linkedin.com/in/yourprofile" target='_blank'>
            <span className="fa-stack fa-sm">
              <i className="fab fa-linkedin fa-stack-2x fa-inverse social-icon"></i>
            </span>
          </a>
          LinkedIn
        </div>
      </div>
    </div>
  );
}

export default App;
