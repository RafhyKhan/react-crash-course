
import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { useState } from 'react';
import useApiCall, {updateDatabase} from '../api/api';


//get URL and use it to get pageNumber, so you can edit the right post DOESNT WORK URL DOES NOT CHANGE PER POST
const url = window.location.href;
const pageNumber = url.substring(url.length-1, url.length) -1;
console.log(pageNumber);


function NewPost() {

    //get URL and use it to get pageNumber, so you can edit the right post DOESNT WORK URL DOES NOT CHANGE PER POST
    const url = window.location.href;
    const pageNumber = url.substring(url.length-1, url.length) -1;
    console.log(pageNumber);



    //Getting data to get questions based on post.
    let data = useApiCall();
    let posts = data.posts;
    let post = posts[pageNumber];


    //need to get the questions, which is different for each page
    function pageQuestionsDisplay () {

        const pageQuestionsArray = [];
    
        for (const [property, propertyValue] of Object.entries(post)) { 
            pageQuestionsArray.push(`${property}`)
        }
    
        pageQuestionsArray.splice(0,2); //Dont show page and page details data
        pageQuestionsArray.splice(pageQuestionsArray.length-1, pageQuestionsArray.length); //dont show id value
    
      return pageQuestionsArray.map((element, index) =>                 
            <p>
                <label htmlFor="name">{element}</label>
                <input type="text" key={index} name={element}  />
            </p> 
        );
    }

    

    function submitHandler () {
        //need to use function in api to update the post data
        //with form variables? if possible.
    }

    return (
        <Modal>
            <Form method='post' className={classes.form} >
                {pageQuestionsDisplay()}

                {/* Submit button only submit the form for a update of page*/}
                <p className={classes.actions}>
                    <Link to="/" type="button" >Cancel</Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;


export async function action({request}) {


    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    
    //console.log(pageNumber); //got the page Number varirable corret
    //console.log(postData); //got the data they inputed in this array of objects for specific page
    

    updateDatabase(pageNumber, postData);

    //Action need to use, so if they close model, it still SAVE
    /*
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
    // formData.get('body'); //extract the data provided by the user
    const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);
    return (redirect('/'));
    */



    return (redirect('/'));
}