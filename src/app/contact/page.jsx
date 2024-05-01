"use client"
import React,{useEffect,useState} from 'react'
import Image from 'next/image'

import styles from './contact.module.css';

import dynamic from 'next/dynamic'
const HydraTestFn = dynamic(()=>import("@/components/hydrationTest"),{ssr:true});

const Contact = () => {
  // const [a,setA] = useState(null);
  // useEffect(()=>{
  //   const av = Math.random();
  //   console.log(av);
  //   setA(av);
  // },[])
    const av = Math.random();
    console.log(av);
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="/contact.png" alt="" fill className={styles.img} />
    </div>
    <div className={styles.formContainer}>
      {/* <HydrationTestNoSSR/> */}
      {/* <div suppressHydrationWarning>{a}</div> */}
      <form action="" className={styles.form}>
        {/* {a} */}
        <HydraTestFn/>
        <div supressHydrationWarning>{av}</div>
        <input className={styles.inputForm} type="text" placeholder="Name and Surname" />
        <input  className={styles.inputForm} type="text" placeholder="Email Address" />
        <input className={styles.inputForm}  type="text" placeholder="Phone Number (Optional)" />
        <textarea
         className={styles.inputForm} 
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder=""
        ></textarea>
        <button>Send</button>
      </form>
    </div>
  </div>
  )
}

export default Contact