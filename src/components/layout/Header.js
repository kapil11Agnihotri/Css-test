import React from 'react';
import classes from './Header.module.css'

const Header = () => {
  return <header className={classes.header}>
     <img src="images/Vector.png" alt="Vector.png" />
    <img src="images/CompanyLogo.png" alt="CompanyLogo.png" className='companyLogo'/>
  </header>;
};

export default Header;
