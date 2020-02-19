
import React from 'react';
import logo from '../../logo.svg';
import Grid from '@material-ui/core/Grid'
import '../../App.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Avatar from '@material-ui/core/Avatar'





export default function MainPage() {
    return (
        <div>
            <header className="App-header">

                <h1>
                    Welcome to my personal portfolio site 
                </h1>
                <Grid container justify='center'>
                    <div>
                        <img src={require('../../profile.jpg')} className="profile-img">
                        </img>
                    </div>
                    
                </Grid>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                

                <Grid container justify='center'>
                
                    <a
                    className="account-link" 
                    href="https://github.com/mato9020"
                    target="_blank"
                    rel="noopener noreferrer">
                        <GitHubIcon fontSize='large'></GitHubIcon>
                    </a>


                    <a className="account-link" 
                    href="https://linkedin.com/in/justus-matteson-947701158"
                    target="_blank"
                    rel="noopener noreferrer">
                        <LinkedInIcon fontSize='large'>
                        </LinkedInIcon>
                    </a>
                </Grid>
                
                
                <img src={logo} className="App-logo" alt="logo" />
                <p className="react-shout" >
                    Built in React
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            </header>
        </div>
    )
}