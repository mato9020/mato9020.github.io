import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import { createContext, provider, MyContext } from '../../services/context';
import Box from '@material-ui/core/Box'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    avatar: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(.5)
    },
    
    icon: {
        ariaLabel: "display more actions",
        color: 'inherit',
        alignSelf: 'flex-end'
    },
    loginButton:{
        variant:'contained',
        className:'login',
        color:'primary.dark',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(.5),
    }

}));
export function GuestUserNav(props) {
    const css = useStyles();
    return (
        <div >
            <Box display="flex" flexDirection="row" alignItems='flex-end' p={1} m={1}>

                <Button variant='contained' className={css.loginButton} color='primary.dark'>
                    Login
                </Button>
                <Avatar className={css.avatar} >
                    
                </Avatar>
                <IconButton className={css.icon}>
                    <MoreIcon />
                </IconButton>
            </Box>

        </div>
    );
}

export function AuthUserNav(props) {

}