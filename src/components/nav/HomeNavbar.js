import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { StateContext } from '../../services/context';
import { GuestUserNav } from './NavComponents';
import { useTheme,StyleProvider, theme } from '../../services/Theme'

const useStyles = makeStyles({
    root: {
        backgroundColor:theme.palette.main,
        flexGrow: 1
    },
    menuBar: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1)
    },
    login: {
        paddingTop: theme.spacing(2)
    },
    user:{
        flexGrow:.5,
    },
    title: {
        flexGrow: 1,
        alignSelf: 'flex-end'
    },

});

function HomeNavbar(props) {
    const css = useStyles();

    const {authState, tabIndex} = useContext(StateContext);
    //console.log(`val ${state.auth}`);
    //const [authState, setAuthSet] = auth;
    console.log(tabIndex);
    const [tab, setTabIndex] = tabIndex;
    let handleChange = (event, newValue) =>{
       
        setTabIndex(newValue);
    }
    
    return (
        <div>

            <AppBar position="static" className={css.root}>
                <Toolbar className={css.toolbar}>

                    
                    <IconButton edge="start" color="inherit" aria-label="menu" className={css.menuBar}>
                        <MenuIcon />
                    </IconButton>


                    
                    <Tabs value={tab} 
                        onChange={handleChange} 
                        className={css.title}
                        variant="scrollable"
                        scrollButtons="on"
                        >
                        <Tab label="Home" component={Link} to="/" />
                        <Tab label="tab two" to="/two" component={Link}/>
                        <Tab label="About" component={Link} to="/about">
                            About
                        </Tab>
                    </Tabs>
                    
                    

                    <GuestUserNav usercss={css} />

                </Toolbar>
            </AppBar>

        </div>

    );
}
export default HomeNavbar;