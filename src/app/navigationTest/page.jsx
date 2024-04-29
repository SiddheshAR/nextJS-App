"use client"
import React,{useState} from 'react';

import Link from 'next/link'
import {useRouter,usePathname,useSearchParams} from 'next/navigation';

const Redirecting = ()=>{

    return(
        <h2>
            Redirecting to New Page.
        </h2>
    )
}

const page = () => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    let prodID = searchParams.get('prodID');
    let prodPrice = searchParams.get('prodPrice');
    let router = useRouter();
    const [redirectToggle,setRedrect]=useState(false);
    function handlePush(){
        setRedrect(prev=>!prev);
        console.log("You are going to redirected to Progress Page");
        setTimeout(()=>{
            router.push('/progress');
        },3000)
    }
        const handleRefresh = () => {
        router.refresh();
      };
      const handleGoBack = () => {
        router.back();
      };
      const handleGoForward = () => {
        router.forward();
      };
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Link href="/about" prefetch={false}>
            About
        </Link>
        <div>
            <h3>Current Path Details:</h3>
            <p>Link used:http://localhost:3000/navigationTest?prodID=a78&prodPrice=20k</p>
            <p>Current Page: {pathname}</p>
            <p>Product ID: {prodID}</p>
            <p>Product Price: {prodPrice}</p>
        </div>
        <div  onClick={handlePush}>
            Progress-Page
        </div>
        {redirectToggle && <Redirecting/>}
        <div  onClick={handleRefresh}>
            Refresh
        </div>
        <div  onClick={handleGoBack}>
            Back
        </div>
        <div  onClick={handleGoForward}>
            Forward
        </div>
    </div>
  )
}

export default page