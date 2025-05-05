import { Component } from "react";
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { withStyles, WithStyles } from '@mui/styles';

const styles = {
    appBar: {
      backgroundColor: '#1976d2',
    },
    title: {
      flexGrow: 1,
      fontWeight: 'bold',
      textAlign: 'center' as const,
    },
    navButton: {
      color: '#fff',
      marginLeft: '10px',
    },
  };

  const user = {
    name : "Deepak",
    role : "Engineer"
  }
  
  interface Props extends WithStyles<typeof styles> {}
  
  class Header extends Component<Props> {
    render() {
      const { classes } = this.props;
  
      return (
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              MyApp
            </Typography>
            <Button className={classes.navButton} color="inherit">Home</Button>
            <Button className={classes.navButton} color="inherit">About</Button>
            <Button className={classes.navButton} color="inherit">Contact</Button>
            <b>USER :</b> {user.role}-{user.name}
          </Toolbar>
        </AppBar>
      );
    }
  }
  
  export default withStyles(styles)(Header);