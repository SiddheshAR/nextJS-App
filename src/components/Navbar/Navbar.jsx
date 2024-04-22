
import Links from './Links/links.jsx';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
        <h2 className="logo">Navbar</h2>
        <Links/>
    </div>
  )
}

export default Navbar