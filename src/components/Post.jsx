import classes from './Post.module.css';
import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

//Name options
//const names = ['Maximilian', 'Manuel'];


function Post({ id, page, pageDetails }) {

    //const chosenName = Math.random() > 0.5 ? names[0] : names[1]
    //Using tetiry operators for the if statements, if Math.random
    //is bigger then -.5, than do names[0], if not than do names[1]


    return (
        <li className={classes.post}>
            <Link to={"/page/:" + id}>
                <p className={classes.author}>{page}</p>
                <p className={classes.text}>{pageDetails}</p>
            </Link>
            <Link to={"/edit-page/:" + id} className={classes.button} >
                <MdPostAdd size={18} />
                    Edit
            </Link>
        </li>
    );
}




export default Post;