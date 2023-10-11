import React from "react";
import styles from "../styles/portfolio.module.css";
import Link from "next/link";

function Portfolio() {
  return (
    <div className={styles.Portfolio}>
      <h1 className={styles.heading}>Portfolio</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="/shop1.jpg"
            alt="service1 image"
            className={styles.cardimage}
          />
          <h4>Shop Website</h4>
          <p>
            I have created shop website with Nextjs in which i fetch data
            from external api
          </p>
          <div className={styles.button}>
          <Link href="https://github.com/aqsafaisal34/Shop-Website" target="_blank" className={styles.link}>
            {" "}
           <button className={styles.btn}>Github Repo</button>
          </Link>
          <Link href="https://shop-website-eight.vercel.app" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github URL</button>
          </Link> </div>
        </div>
        <div className={styles.card}>
          <img
            src="/notes.jpg"
            alt="service1 image"
            className={styles.cardimage}
          />
          <h4>Notes App</h4>
          <p>
            I have created notes using reactjs app where user create multiple reminder or notes.
          </p>
          <div className={styles.button}>
          <Link href="https://github.com/aqsafaisal34/Notes-App-using-Reactjs" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github Repo</button>
          </Link>
          <Link href="https://notes-app-reactjs-vcf.netlify.app/" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github URL</button>
          </Link> </div>
        </div>
        <div className={styles.card}>
          <img
            src="/crudapp.jpg"
            alt="service1 image"
            className={styles.cardimage}
          />
          <h4>React CRUD App</h4>
          <p>
          I have created crud app using fakeApi where user can create, read, update and delete data.
          </p>
          <div className={styles.button}>
          <Link href="https://github.com/aqsafaisal34/React-Crud-App-using-fakeApi" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github Repo</button>
          </Link>
          <Link href="https://react-crud-app-13.netlify.app/" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github URL</button>
          </Link> </div>
        </div>
        <div className={styles.card}>
          <img
            src="recipeapp.jpg"
            alt="service1 image"
            className={styles.cardimage}
          />
          <h4>Recipe App</h4>
          <p>
            I have created Recipe App recipe where i fetch data from public Api
          </p>
          <div className={styles.button}>
          <Link href="https://github.com/aqsafaisal34/Recipe-App-javascript" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github Repo</button>
          </Link>
          <Link href="https://aqsafaisal34.github.io/Recipe-App-javascript/" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github URL</button>
          </Link> </div>
        </div>
        <div className={styles.card}>
          <img
            src="/screening.jpg"
            alt="service1 image"
            className={styles.cardimage}
          />
          <h4>COVID-19 Screening App</h4>
          <p>
           Created COVID-19 screening app where user can answer few questions and symptoms and check safety measures
          </p>
          <div className={styles.button}>
          <Link href="https://github.com/aqsafaisal34/Covid-19-Screening-App" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github Repo</button>
          </Link>
          <Link href="https://aqsafaisal34.github.io/Covid-19-Screening-App/" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github URL</button>
          </Link> </div>
        </div>
        <div className={styles.card}>
          <img
            src="/instaclone.jpg"
            alt="service1 image"
            className={styles.cardimage}
          />
          <h4>Instagram Clone</h4>
          <p>
            I have created Static Instagram clone for learning purpose
          </p>
          <div className={styles.button}>
          <Link href="https://github.com/aqsafaisal34/Insta-clone" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github Repo</button>
          </Link>
          <Link href="https://netlify-thinks-aqsay-faisal34-gmail-com-is-great-ec5ea.netlify.app/" target="_blank" className={styles.link}>
            {" "}
            <button className={styles.btn}>Github URL</button>
          </Link> </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
