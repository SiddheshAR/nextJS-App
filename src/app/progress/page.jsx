"use client"
import React,{useState,useEffect} from 'react'
import styles from './progress.module.css';

const ProgressComponent = ({value=0})=>{

    let [count,setCount] = useState(value);
    
    const [stopCount,setStopCount]=useState(false);
    useEffect(()=>{
        let intervalID=setInterval(()=>{
            if(count<100 && stopCount==false){
                setCount(count+1)
            }
        },100);
        return()=>clearTimeout(intervalID);
    },[count,stopCount]);

    return(
    <div  className={styles.SubContainer}>
        <div>
            <h2 className={styles.heading}>Progress Bar</h2>
        </div>
        <div className={styles.ProgressBody}>
            <div className={styles.ProgressGreen} style={{"width":`${count}%`}} >
            <p className={styles.progressText}>{count}%</p>
            </div>

        </div>
        <div className={styles.buttonCtn}>
            <button className={styles.btnst} onClick={()=>setCount(0)}>Reset</button>
            <button className={styles.btnst} onClick={()=>setStopCount(e=>!e)}>{stopCount?<p>Start</p>:<p>Stop</p>}</button>
        </div>
    </div>)
}

const page = () => {

  return (
    <div  className={styles.container}>
        <ProgressComponent value={2}/>
    </div>
  )
}

export default page
