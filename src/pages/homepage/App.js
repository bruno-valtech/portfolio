import React from 'react';
// import { Counter } from '../../features/counter/Counter';
import styles from './App.module.css';
import { Link, useLocation } from 'react-router-dom'
import img from '../../assets/img/yoshiko-evanka-oI90dywodT8.jpg'

function App() {

  const location = useLocation();
  console.log(location.pathname)

  return (
    <>
      <div className={styles.App}>
        <nav className={styles.Nav}>
          <Link className={location.pathname === "/" ? styles.highlightedNavLink : null} to="/">Home</Link>
          <a href="#aboutMe">About Me</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <header className={styles.AppHeader}>
          <div style={{ position: 'relative', zIndex: '1' }}>
            <h1 className={styles.title}>Hello! My name is Bruno, and I'm a Front-end Developer.</h1>
            <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            <p className={styles.socialMediaIcons}>
              <a className={styles.socialIcon} href="https://github.com/sirbruno" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a className={styles.socialIcon} href="https://www.linkedin.com/in/sirbruno" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            </p>
            {/* <Counter /> */}
          </div>
            <div style={{position: 'absolute', left: '100px', bottom: '0', width: '700px', height: '750px'}}>
              <img src={img} alt='illustrative' style={{width: '100%', overflow: 'auto', maxHeight: '100%', objectFit: 'cover', opacity: '.5'}} />
            </div>
        </header>
      </div>
      <section id="aboutMe" className={styles.aboutMe}>
        <div>
          <h1>About me</h1>
          <p>My name is Bruno, and I'm a Front-end Developer living in São Paulo, Brazil. I know a thing or two about React, though most of my professional experience has been around Digital Marketing Automation.</p>
          
          <p>I've been working in the tech field for the last 3 years, and i loved every second of it – <i>that's not true, i complained a lot</i>.</p>
        </div>
      </section>
    </>
  );
}

export default App;