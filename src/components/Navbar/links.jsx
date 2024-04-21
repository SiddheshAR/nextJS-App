
import Link from 'next/link'
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

  return (
    <div>
        {links.map((e,index)=>{
            return(<Link key={index} href={e.path} >{e.link}</Link>)
        })}
    </div>
  )
}

export default Links