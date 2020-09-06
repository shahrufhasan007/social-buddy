import React from 'react';
import{AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import {Menu, AccountCircle} from '@material-ui/icons';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" edge='start' aria-label='menu'>
                        <Menu/>
                    </IconButton>
                        <Typography variant="h5" style={{flexGrow : 1}}>
                            Social Buddy
                        </Typography>
                        <Button color="inherit">
                            Login
                        </Button>
                        <Button color="inherit">
                            Register
                        </Button>
                    <IconButton color="inherit" aria-label='account'>
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;