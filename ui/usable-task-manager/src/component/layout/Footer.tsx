import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { withStyles, WithStyles } from '@mui/styles';

const styles = {
  footerBar: {
    backgroundColor: '#1976d2',
    marginTop: 'auto',
  },
  footerText: {
    flexGrow: 1,
    textAlign: 'center' as const,
    color: '#fff',
    fontSize: '14px',
  },
};

interface Props extends WithStyles<typeof styles> {}

class Footer extends Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.footerBar}>
        <Toolbar>
          <Typography className={classes.footerText}>
            © {new Date().getFullYear()} MyApp. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
