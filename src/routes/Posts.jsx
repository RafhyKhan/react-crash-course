import { Outlet } from 'react-router-dom';

import PostsList from "../components/PostsList";


function Posts() {
  //Only allowed to return one element, heres main, or div, has to encapsulate all other elements


  return (
    <>
      <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
  );

}

export default Posts;


export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
}
