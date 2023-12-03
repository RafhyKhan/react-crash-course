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
