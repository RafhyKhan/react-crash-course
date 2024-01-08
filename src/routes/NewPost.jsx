
import { Link, Form, redirect } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './NewPost.module.css';
import { useState } from 'react';


function NewPost() {


    return (
        <Modal>
            <Form method='post' className={classes.form} >
                <p>
                    <label htmlFor="name">Page Type</label>
                    <input type="text" id="author" name="author" required />
                </p>
                <p>
                    <label htmlFor="name">textSecond</label>
                    <input type="text" id="name" name="textTwo"  />
                </p>
                <p>
                    <label htmlFor="name">textThree</label>
                    <input type="text" id="name" name="textThree"  />
                </p>
                <p>
                    <label htmlFor="body">Page Description</label>
                    <textarea id="body" name="body" required rows={3} />
                </p>
                {/* Submit button requires a function, to submit whole form for 
                    Data processing, Transforming, 
                    Final page(PDF download, email to them, etc; Proof of use) */}
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
}