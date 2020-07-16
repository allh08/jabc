import React from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar
} from '@material-ui/core';

const AppHeader = () => (
  <AppBar position="static" color="white">
    <Toolbar>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <img src="https://businesslaureatesbc.org/wp-content/uploads/2016/10/JA-British-Columbia_Primary_Preferred_Opt2_600.png" alt="logo" className='icon' style={{'height':'5em', 'margin':'2em'}} />
      </Link>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
