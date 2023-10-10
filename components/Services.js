import styles from '../styles/service.module.css';

export default function Services () {
    return(
        <div className={styles.services}>
          <h1 className={styles.heading}>Services</h1>
          <div className={styles.cards}>
            <div className={styles.card}>
            <img src='/service1.png' alt='service1 image' className={styles.cardimage}/>
            <h4>Custom Website Development</h4>
            <p>Description: Create tailor-made websites from scratch or enhance existing ones to meet specific client requirements. Leverage your expertise in HTML, CSS, JavaScript, React.js, and Next.js to build responsive and user-friendly interfaces.</p>
            </div>
            <div className={styles.card}>
            <img src='/service2.png' alt='service1 image' className={styles.cardimage}/>
            <h4>Front-End Development</h4>
            <p>Description: Transform design concepts into interactive and visually appealing web interfaces. Utilize your proficiency in HTML, CSS, and JavaScript along with frameworks like React.js to deliver seamless user experiences.</p>
            </div>
            <div className={styles.card}>
            <img src='/service3.jpeg' alt='service1 image' className={styles.cardimage}/>
            <h4>Full-Stack Development</h4>
            <p>Description: Provide end-to-end web solutions encompassing both front-end and back-end development. Leverage your knowledge of MERN (MongoDB, Express.js, React.js, Node.js) stack to build dynamic and scalable applications.</p>
            </div>
            <div className={styles.card}>
            <img src='/services.png' alt='service1 image' className={styles.cardimage}/>
            <h4>Database Design and Management</h4>
            <p>Description: Design and implement efficient database structures using MongoDB and Firebase. Ensure data integrity, performance, and security while optimizing queries for smooth application functionality.</p>
            </div>
            <div className={styles.card}>
            <img src='/service5.png' alt='service1 image' className={styles.cardimage}/>
            <h4>RESTful API Development:</h4>
            <p>Description: Create robust APIs using Node.js and Express.js for seamless communication between the front-end and back-end of applications. Implement RESTful principles for efficient data exchange.</p>
            </div>
            <div className={styles.card}>
            <img src='/form.png' alt='service1 image' className={styles.cardimage}/>
            <h4>Customized Form with functionality</h4>
            <p>Description: Design and develop custom forms tailored to your specific needs, including contact forms, login forms, and signup forms</p>
            </div>
          </div>
        </div>
    )
}