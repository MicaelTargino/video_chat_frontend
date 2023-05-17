import React, {useContext, useState} from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '90%',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        gap: '20px'
      },
    },
    container: {
      width: '600px',
      margin: '35px 0',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
   }));


const Options = ({children}) => {
    const {me, callAccepted, name, setName, leaveCall, callUser, callEnded } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={5}>
                            <Typography gutterBottom variant="h6">
                                Account Info
                            </Typography>
                            <TextField label="name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            {console.log(me)}
                            <CopyToClipboard text={me} className={classes.margin}>
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                       </Grid>
                       <Grid item xs={12} md={5}>
                            <Typography gutterBottom variant="h6">
                                Make a call
                            </Typography>
                            <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button className={classes.margin} onClick={leaveCall} variant="contained" color="secondary" fullWidth startIcon={<PhoneDisabled fontSize="large" /> }>Hang Up</Button>
                            ): (
                                <Button className={classes.margin} onClick={() => {callUser(idToCall)}} variant="contained" color="primary" fullWidth startIcon={<Phone fontSize="large" /> }>Call</Button>
                                
                            )}
                       </Grid>
                    </Grid>
                </form>
            {children}
            </Paper>
            </Container>
        </div>
    )
}

export default Options
