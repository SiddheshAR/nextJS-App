
import Link from 'next/link'
import styles from './links.module.css'
import Navlinks from './navLinks/navLinks.jsx'; 
const Links = () => {
    
   let links=[
    {'link':'Home',
    'path':'/'
    },
    {'link':'About',
     'path':'/about'
    },
    {'link':'Blog',
    'path':'/blog'
   },
   {'link':'Contact',
   'path':'/contact'
    }
   ]

  //  TEMP Variables:
  let session= false;
   let admin = true;
  return (
    <div className={styles.link}>
        {links.map((e,index)=>{
            return(
            // <Link className="" key={index} href={e.path} >{e.link}</Link>
            <Navlinks key={index} items={e}/>
          )
        })}
        {session ?
        (<Navlinks items={{link:'Login',path:'/Login'}} />)
        :
        (
          <>
          <Navlinks items={{link:'Logout',path:'/logout'}} />
          {admin&&(<Navlinks items={{link:'Admin',path:'/admin'}} />)}
          </>)
        }
    </div>
  )
}

export default Links