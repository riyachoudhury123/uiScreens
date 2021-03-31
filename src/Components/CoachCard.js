import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles({
    
    root: {
        minWidth: 10,
        height: 170,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        top: "468px",
        left: "344px",
        width: "522px",
        height: "24px",
    },
    input: {
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
    pos: {
        marginBottom: 12,
    },
});

export default function CoachCard({coach}) {
    const theme = createMuiTheme({
        palette: {
            primary: cyan,
        },
    });
    const classes = useStyles();

    return (
        <div style={{marginLeft:80,marginRight:"20%",marginTop: 10}}>
            {/* <InputBase style={{color:"FIF3F6"}}
        className={classes.input}
        placeholder="Search"     
      /> */}
      
        <Card className={classes.root}>
            <CardContent>
            
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <img style={{ width: 50, marginLeft: "70px", marginTop: 20 }}
                            src="data:image/jpeg;base64,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
                ARwhGAoxCEACKEIAOKEIAMQhCACMDCEQCnR5m/nR3whJfRUez32n+bT2fxmZgdh7/wAIoTBnSiON2juk8DsPeIoSSjLhCEAP/9k="
                            alt="new"
                        />
                    </Grid>
                    <Grid style={{ marginTop: 10,marginLeft: "5%" }} item xs={4}>

                        <p style={{fontSize:"12px",color:"#858A9A"}}> <b style={{fontSize:"19px",color:"#565757"}}> {coach.header}</b><br/>
                        {coach.title} </p>

                    </Grid>
                    <Grid style={{ marginTop: 40,marginLeft: "15%",fontSize:"22px",color:"#858A9A" }} item xs={2}>

                       <b>{coach.money} <br/>
                        <span style={{fontSize:"10px",color:"#565757" }}>{coach.members}</span>
                      </b>
                    </Grid>
                    <Grid item xs={1}>

                    <Link style={{color:"#565757"}} href="#">
        Edit
      </Link>
                    </Grid>
                    <Grid item xs={0}>

                    <Link style={{color:"#565757"}} href="#">
        Remove
      </Link>
</Grid>
</Grid>
                <Grid style={{ marginLeft: "40px" }} container spacing={0}>
                    <Grid item xs={2}>
                    <ThemeProvider theme={theme}>
        <Button style={{backgroundColor:"#CCEBFF",color:"#FF8E31"}} variant="contained"  className={classes.margin}>
          {coach.jobtype}
        </Button></ThemeProvider>
                    </Grid>
                    <Grid item xs={2}>

                        <Button style={{color:"#858A9A"}} variant="contained" className={classes.margin}>
                        {coach.facility}
        </Button>
                    </Grid>
                    <Grid item xs={2}>

                        <Button style={{color:"#858A9A"}} variant="contained" className={classes.margin}>
                        {coach.facility2}
        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button style={{color:"#858A9A"}} href="#text-buttons" >
                        {coach.apply}
      </Button>
                    </Grid>
                </Grid>

            </CardContent>


        </Card>
        </div >

    );
}