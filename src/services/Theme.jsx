import React, {  } from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette:{
        primary:{
            main:'#303f9f',
        }
    }
});

export function StyleProvider(props){
    return(
        <ThemeProvider theme={theme} >
            {props.children}
        </ThemeProvider>
    );
}


