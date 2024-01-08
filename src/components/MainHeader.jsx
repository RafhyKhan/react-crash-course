
import { Link } from 'react-router-dom';
import { MdPostAdd, MdAttachMoney } from 'react-icons/md';
import { CiUser } from "react-icons/ci";

import classes from './MainHeader.module.css';


function MainHeader() {

  //main header function
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdAttachMoney size={40} />
        Data Entry App
      </h1>
      <p>
        <Link to="/" className={classes.button} >
                <CiUser size={25} />
                    Login
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;