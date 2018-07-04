import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit"><center>
                <marquee direction="left" loop="700" scrollamount="5" scrolldelay="2" behavior="alternate" width="600%" >
                Take the next step in your career!</marquee></center>
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;  