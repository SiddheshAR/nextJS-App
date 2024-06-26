
import styles from './home.module.css';
import Image from "next/image";
const Home = () => {
  
  return(
  <div className={styles.container}>
    <div className={styles.textContainer}> 
        <h1 className={styles.title}>Create Agency Page.</h1>
        <p className={styles.desc}>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
        </p>
        <div className={styles.buttons}>
              <button className={styles.button}> Learn More </button>
              <button className={styles.button}> Contact </button>
        </div>
        <div className={styles.brands}> 
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
    </div>
    <div className={styles.imgContainer}>
        <Image src="/hero.gif" fill className={styles.heroImg}/>
    </div>
  </div>);
};

export default Home;