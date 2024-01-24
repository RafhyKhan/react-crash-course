import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useApiCall from '../api/api.jsx';

import Post from './Post';
import classes from './PostsList.module.css';


function PostsList() {

    //let data = useLoaderData();

    let data = useApiCall();
    let posts = data.posts;
    

    return (
        <>
        {/** If post has any than do this */}       
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} page={post.page} pageDetails={post.pageDetails} />)}
            </ul>

            {/** What to do when there are no post in db (only {})  */}
            {posts.length === 0 &&  (<div style={{textAlign:'center', color:'white'}}>
                <h2>There are no posts yet.</h2>
                <p>Start adding some!</p>
            </div>  )}  

            <p className={classes.submission}>
                <Link to="/" className={classes.button} >
                        Submit
                </Link>
            </p>
        </>
    );
}


export default PostsList;