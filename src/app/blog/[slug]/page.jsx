import React,{Suspense} from 'react'
import styles from './singlePost.module.css';
import Image from 'next/image';



const SinglePagePost =async ({params}) => {

  const PostFetch = async(slug)=>{
      let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
      if(!data.ok){
        console.log("issue in Data Fetching.")
      }else{
        return data.json();
      }
  }
  const userDetails = async(slug)=>{
    let userData = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
    if(!userData.ok){
      console.log("User Fetch Failed.")
    }else{
      return userData.json();
    }
  }
  let user = await userDetails(params.slug)
  let post = await PostFetch(params.slug);
  
  return (
    <Suspense fallback={<div>Loading......</div>}>
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image fill src="https://images.pexels.com/photos/14410989/pexels-photo-14410989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
           
           alt=""
          ></Image>
      </div>
      <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div  className={styles.detail}>
            <div className={styles.AvatarCtn}>
                <Image width={40} height={40} className={styles.avatar} src="https://images.pexels.com/photos/17213574/pexels-photo-17213574/free-photo-of-view-of-the-beach-from-a-high-cliff.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
              <div className={styles.detailText}>
                  <span className={styles.detailTitle}>{user.name}</span>
                  <span className={styles.detailValue}>Date</span>
              </div>
              <div className={styles.detailText}>
                  <span className={styles.detailTitle}>Published</span>
                  <span className={styles.detailValue}>01.01.2024</span>
              </div>
          </div>
          <div className={styles.content}>
              {post.body}
            </div>
      </div>
    </div>
    </Suspense>
  )
}

export default SinglePagePost