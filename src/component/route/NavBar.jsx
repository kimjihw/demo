import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, Icon} from '@material-ui/core';
import logo from '../img/logo.jpg'

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <ToolBar >
                    <Avatar src={logo}/>
                    <Typography variant="h6" style={style} color="textPrimary">
                        자유 게시판
                    </Typography>
                    <Typography variant="h6" style={style} color="textPrimary">
                        비밀 게시판
                    </Typography>
                    <Typography variant="h6" style={style} color="textPrimary">
                        우리학교
                    </Typography>
                    <Button color="black">Login</Button>
                </ToolBar>
            </AppBar>
        </div>
    )
}


const style={
    flexGrow: 1
}

export default NavBar;