import React, { useState } from 'react';
import {AppBar, Toolbar, Typography, Tabs, Tab} from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import {NavLink} from 'react-router-dom';


const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#AD88C6'}} position='sticky'>
            <Toolbar>
                <NavLink to={"/"} style={{color : "white"}}>
                    <Typography>
                        <CollectionsBookmarkIcon/>
                    </Typography>
                </NavLink>
                <Tabs 
                    sx={{ml: 'auto'}}
                    textColor='inherit' 
                    indicatorColor="secondary" 
                    value={value} 
                    onChange={(e, val)=>setValue(val)}
                >
                    <Tab LinkComponent={NavLink} to="/add" label = 'Add Book' />
                    <Tab LinkComponent={NavLink} to="/books" label = 'Books' />
                    <Tab LinkComponent={NavLink} to="/about" label = 'About Us' />
                    <Tab LinkComponent={NavLink} to="/login" label = 'Login' />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;