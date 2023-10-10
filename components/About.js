import React from 'react';
import styles from '../styles/about.module.css';

function About() {
  return (
    <>
    <div className={styles.about}>
      <div className={styles.text}>
       <p className={styles.hello}>Hello</p>
       <p className={styles.name}>I'm Aqsa Faisal</p>
       <p className={styles.profession}>MERN STACK DEVELOPER</p>
       <div className={styles.description}> 
       <p>I am a Junior MERN Stack Developer </p> 
       <p>  having strong knowledge in MongoDB,</p>
       <p> Express,Node.js, React and Nextjs </p> </div>

      </div>
      <div className={styles.image}>
       <img src='/about.jpg' alt='about image' className={styles.img} />
      </div>
    </div>
      <div className={styles.abouttwo}>
      <div className={styles.image}>
       <img src='/images.jpeg' alt='about image' width={400} height={300} className={styles.imgtwo} />
      </div>
      <div className={styles.text}>
      <p className={styles.aboutme}>About Me</p>
      <div className={styles.details}>
       <p>Enthusiastic MERN Stack Developer and perpetual learner,<br/>
         passionate about crafting seamless web experiences. <br/>
         Proficient in HTML, CSS, JavaScript, ReactJS, Next.js, <br/>
          Bootstrap, Node.js, Express, MongoDB, and Firebase. <br/>
          Committed to turning ideas into interactive,<br/>
           user-friendly applications</p>
     </div>

      </div>
    
    </div>
    </>
  )
}

export default About;
