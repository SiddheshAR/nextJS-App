
import styles from './blog.module.css';
import PostCard from '@/components/postCard/page.jsx';
const Blog = async () => {

    const resData = async()=>{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts',
      /*{cache:"no-store"}*/
            {next:{revalidate:3600}}
    );
      if(!res.ok){
        console.log("Error Fetching Data.")
      }else{
        const jsonData = await res.json();
        return jsonData;
      }
    } 
    let posts = await resData();
    
  return (
    <div className={styles.container}>
      {/* Hii this is the Blog Section. */}
      {posts.map((e)=>{
        return(<PostCard post={e} key={e.id}/>)
      })}
    </div>
  )
}

export default Blog
