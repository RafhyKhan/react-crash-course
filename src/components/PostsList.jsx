import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Post from './Post';
import classes from './PostsList.module.css';


function PostsList() {

    //let data = useLoaderData();

    let data;
    data = 
        {
        "posts":[
            {
                "author":"Page 1",
                "textTwo":"",
                "textThree":"",
                "body":"Basic Information\n",
                "id":"0.059066050834105654"
            },
            {
                "author":"Page 2",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },
            {
                "author":"Page 3",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },
            {
                "author":"Page 4",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },
            {
                "author":"Page 5",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },
            {
                "author":"Page 6",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },
            {
                "author":"Page 7",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },
            {
                "author":"Page 8",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            },            {
                "author":"Page 9",
                "textTwo":"text second entered",
                "textThree":"text three entered",
                "body":"Financial Data\n",
                "id":"0.06559258975135807"
            }
        ]}

    let posts = data.posts;

    console.log(posts.length);

    return (
        <>
        {/** If post has any than do this */}       
            <ul className={classes.posts}>
                {posts.map((post) => <Post key={post.id} id={post.id} author={post.author} body={post.body} />)}
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