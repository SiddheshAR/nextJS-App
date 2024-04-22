"use client"
import Link from 'next/link';
import styles from './navLinks.module.css';
import {usePathname} from 'next/navigation';
const Navlinks = ({items}) => {

  const pathName = usePathname();

  return (
    // <div>Navlinks</div>
    <Link className={`${styles.container} ${pathName===items.path && styles.active}`} href={items.path} >{items.link}</Link>
  )
}

export default Navlinks