import classes from './Post.module.css';
import { Link } from 'react-router-dom';

//Name options
//const names = ['Maximilian', 'Manuel'];


function Post({ id, author, body }) {

    //const chosenName = Math.random() > 0.5 ? names[0] : names[1]
    //Using tetiry operators for the if statements, if Math.random
    //is bigger then -.5, than do names[0], if not than do names[1]


    return (
        <li className={classes.post}>
            <Link to={id}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </Link>
        </li>
    );
}




export default Post;