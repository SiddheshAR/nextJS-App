"use client"
import {getPosts} from '../libs/data.js';
const HydrationTest = () => {
  const a = Math.random();
  getPosts();
  console.log(a);
  return (
    <div>{a}</div>
  )
}
export default HydrationTest