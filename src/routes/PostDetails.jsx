import { useLoaderData, Link } from 'react-router-dom';

import useApiCall from '../api/api';

import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {

  const data = useApiCall();
  const posts = data.posts;

  //get URL and use it to get pageNumber, so you can detail right post
  const url = window.location.href;
  const pageNumber = url.substring(url.length-1, url.length) -1;
  const post = posts[pageNumber]; 



  function pageDetailsDisplay () {

    const pageDetailsArray = [];

    for (const [property, propertyValue] of Object.entries(post)) { 
      pageDetailsArray.push(`${property}: ${propertyValue}`)
    }

    pageDetailsArray.splice(0,2); //Dont show page and page details data
    pageDetailsArray.splice(pageDetailsArray.length-1, pageDetailsArray.length); //dont show id value

  return pageDetailsArray.map((element, index) => <p className={classes.text} key={index}>{element}</p> );
  }
  

  if (!post) {
    //Error Handling, if database is not returning back anything!!!
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}></p>
        <p className={classes.text}></p>
        {pageDetailsDisplay()}

      </main>
    </Modal>
  );
}

export default PostDetails;


export async function loader({params}) {
  /*
    const response = await fetch('http://localhost:8080/posts/' + params.id);
    const resData = await response.json();
    return resData.post;
    */
   return null;
}