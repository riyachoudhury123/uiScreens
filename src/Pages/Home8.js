import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import boy from '../Images/boy.png';
import dashboard from '../Images/dashboard.png';
import ball from '../Images/ball.png';
import bird from '../Images/bird.png';
import buisnessman from '../Images/buisnessman.png';
import cooking from '../Images/cooking.png';
import dog from '../Images/dog.png';
import fb from '../Images/fb.png';
import finance from '../Images/finance.png';
import food from '../Images/food.png';
import girl from '../Images/girl.png';
import msg from '../Images/msg.png';
import insta from '../Images/insta.png';
import notification from '../Images/notification.png';
import relation from '../Images/relation.png';
import tech from '../Images/tech.png';
import teens from '../Images/teens.png';
import logo from '../Images/logo.png';


















const useStyles = makeStyles({
    title: {
        fontSize: 14,
    },
    text: {
        color: "#ff8e31",
        fontSize: 25,
        opacity: 1,
    },
    pos: {
        marginBottom: 12,
    },
    input: {
        color: "black",
    },
    root: {
        background: "white"
    },

});


export default function Home8() {
    const classes = useStyles()

    const data = [
        {
            coach: "Find Coaches", description: " Iam looking for someone to coach me"
        },
        {
            coach: "Find Coaching jobs", description: " Iam a coach and looking for new opportunities"
        },
        {
            coach: "Post a job", description: " Iam an employer and looking fcor coach"
        },

    ]
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: "#FF8E3133" }}>
                <AppBar style={{ backgroundColor: 'white' }} position="static">

                    {/* <div>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>                       
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Search for coaches"                 
                        />
                        <IconButton type="submit"  className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        </div>  */}
                    <div>
                        <Box display="flex" justifyContent="flex-end" >
                            <Box p={1}>
                                <Button style={{ color: "#000000" }} href="#text-buttons" color="primary" >
                                    how it works
                            </Button>
                            </Box>
                            <Box p={1}>
                                <Button style={{ color: "#000000" }} variant="outlined" size="small" >
                                    find a coach
                        </Button>
                            </Box>
                            <Box p={1}>
                                <Button style={{ backgroundColor: "#FF8E31", color: "#000000" }} variant="contained" size="small" >
                                    join as a coach
                        </Button>
                            </Box>
                            <Box p={1}>
                                <Button style={{ float: "right", color: "#000000" }} href="#text-buttons" color="primary">
                                    login
                    </Button>
                            </Box>
                        </Box>
                    </div>
                </AppBar>
                <Grid container spacing={0}>
                    <Grid style={{ marginLeft: "3%", marginTop: "1%" }} item xs={1}>
                        <Chip style={{ backgroundColor: "#52D268" }} label="New" />
                    </Grid>

                    <Grid item xs={3}>
                        <p>New feature available communication for coaches</p>
                    </Grid>

                    <Grid style={{ marginTop: "1%" }} item xs={1}>
                        <ChevronRightIcon />
                    </Grid>
                </Grid>
                <div style={{ marginTop: "3%" }}>
                    {/* <Chip style={{backgroundColor:"#52D268"}} label="New" />
                    <p>New feature available communication for coaches</p> */}

                    {data.map((e, i) => (
                        <Card style={{ width: "200%", marginLeft: "55%", marginTop: "5%" }}>
                            <CardContent>
                                <Grid
                                >
                                    <Grid item xs={6}>
                                        <Typography className={classes.text} variant="h5" component="h2">
                                            {e.coach}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {e.description}
                                        </Typography>

                                    </Grid>
                                    <Grid item
                                        container
                                        direction="column"
                                        alignItems="flex-end"
                                    // justify="flex-start" item xs={11}
                                    >
                                        < ArrowRightAltOutlinedIcon style={{ color: "#B0BCC6" }} />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <img style={{ marginLeft: "42%", width: "10%", height: "5%" }}
                    src={relation} alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%" }} src={finance} alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%" }} src={food} alt="new" />
                <img style={{ marginLeft: "60%", width: "10%", height: "7%", marginTop: "-15%" }}
                    src={cooking} alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "-15%" }}
                    src={tech} alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "-13%" }} src={teens} alt="new" />
                <img style={{ marginLeft: "60%", width: "10%", height: "7%" }} src={buisnessman} alt="new" />
                <img
                    style={{ marginLeft: "3%", width: "10%", height: "5%" }} src={girl} alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "1%" }} src={dog} alt="new" />
            </div>
            <p style={{ fontSize: "24px", color: "#FF8E31", marginLeft: "18%" }}>Our seller coaches awaits you</p>
            <b style={{ fontSize: "50px", alignItems: "center", marginLeft: "18%" }}>Find the right coach who helps <br /><span style={{ marginLeft: "18%" }}>
                you transform  </span></b>
            <ArrowForwardIosIcon style={{ float: "right" }} />
            <ArrowBackIosIcon style={{ float: "right" }} />
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "3%" }}>
                <img style={{}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip5FSAo5EKXyZQwOBlReC5m2JjKs0lZggBA&usqp=CAU" alt="new" />
                <img style={{ marginLeft: "6%", marginRight: "6%" }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAoi6Zq7_jVmTlDoTI6ZptmUOjpwGe6gv01Ps-JH01Qq8Fg41yl7WkdZTo8kwnd-pID4&usqp=CAU" alt="new" />

                <img style={{}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLwi9h5WsBDSfzmnoTdfsDo3C9M-wdVGXCA&usqp=CAU" alt="new" />
            </div>
            <b style={{ fontSize: "50px", marginLeft: "8%", justifyContent: "center" }} >Looking  to coach?
            <span style={{ color: "#FF8E31" }}>start now!</span></b>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "8%" }}>
                <DoneIcon style={{ color: "#52D268" }} />
                <p>FREE DAY TRIAL</p>
                <DoneIcon style={{ color: "#52D268" }} />
                <p>FLEXIBLE PLAN VIEW PRICING</p>
                <DoneIcon style={{ color: "#52D268" }} />
                <p>NO CREDIT CARD REQUIRED</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField style={{ marginLeft: "8%" }}
                    id="outlined-size-small"
                    defaultValue="Enter your email"
                    variant="outlined"
                    size="small"
                />
                <Button style={{ backgroundColor: "#FF8E31", marginLeft: "1%" }} variant="contained" className={classes.margin}>
                    sign up now
        </Button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "5%" }}>
                <div>
                    <img src={dashboard} alt="new" />
                </div>
                <div style={{ marginLeft: "5%" }}>
                    <b style={{ fontSize: "40px" }}> A much needed platform <br /> for coaches built by coaches</b>
                    <p style={{ fontSize: "35px" }}><img style={{ color: "white" }} src={notification} alt="new" />
                  Its all happening in the channel
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Follow everything related to individual topics projects or teams in their dedicated channel</p>
                    <p style={{ fontSize: "35px" }}><img src={ball} alt="new" />
                 History you can see and search
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Projects end,teams change and slack saves everything,Rather than trying to remember,easily finde what you are looking for</p>

                    <p style={{ fontSize: "35px" }}><img src={msg} alt="new" />
                  Work more closely with other companies
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Follow everything related to individual topics projects or teams in their dedicated channel</p>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "#FF8E3133" }}>
                <div><b style={{ fontSize: "50px" }}>Explore <span style={{ fontSize: "50px", color: "#FF8E31" }}>
                    trending skills</span></b>
                    <p tyle={{ fontSize: "20px" }}>stay up to date on whats happening on technology,leadership skill development and more</p>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                            </Button>
                        </Grid>

                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                        </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                        </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                        </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
                         </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="white"
                                endIcon={<AddOutlinedIcon />}
                            >
                                mental
      <                     /Button>
                        </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                            </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                            </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                            </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                             </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                            </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    color="white"
                                    endIcon={<AddOutlinedIcon />}
                                >
                                    mental
                                </Button>
                            </Grid>
                        </Grid>
                        <div style={{ marginTop: "8%" }}>
                            <Link style={{ fontSize: "24px", marginTop: "8%" }} href="#">
                                Add 274 other skills
                        </Link>
                            <ArrowForwardIosIcon style={{ color: "#231F20B2", marginLeft: "2%" }} />
                        </div>

                 </div>
                    <div>

                    </div>
                    <div>
                        <img src={boy} alt="new" />
                    </div>
                </div>
                <div style={{ display: "flex", color: "white", flexDirection: "row", justifyContent: "center", backgroundColor: "#FF8E31" }}>
                    <div>
                        <b style={{ fontSize: "50px", marginLeft: "20%" }}>Never miss an update!</b>
                        <p style={{ fontSize: "20px", marginLeft: "20%" }}>Subscribe and stay in loop for our latest features and news,wepromise we wont spam ujr mail box</p>
                    </div>
                    <div>
                        <TextField
                            style={{ marginLeft: "5%", marginTop: "3%" }}
                            defaultValue="Name"
                            className={classes.root}
                            InputProps={{
                                className: classes.input
                            }}
                        />
                        <p><TextField
                            style={{ marginLeft: "5%" }}
                            defaultValue="Email"
                            className={classes.root}
                            InputProps={{
                                className: classes.input
                            }}
                        />
                        </p>
                        <Button style={{ marginLeft: "5%", marginBottom: "3%" }} variant="contained" color="primary">
                            subscribe
      </Button>
                        <div style={{ marginRight: "50%" }}>
                            <Card style={{ width: "160%", height: "70%", marginRight: "30%" }} className={classes.root}>
                                <CardContent>

                                    <Grid container spacing={0}>
                                        <Grid item xs={8}>
                                            <p style={{ fontSize: "37px" }}> Meet my Coach </p>
                                            <p>Meet my coach allows coaches and consultantgs to explore new opporftunities connect with employes and buisness
                        </p>
                                            <img src={fb} alt="new" />
                                            <img src={logo} alt="new" />
                                            <img src={bird} alt="new" />
                                            <img src={insta} alt="new" />

                                        </Grid>
                                        <Grid item xs={2}>
                                            <p>Support center</p>
                                            <p>why meeting coach?</p>
                                            <p>Plans & Pricing</p>
                                            <p>For Buisness</p>
                                            <p>Resources</p>
                                            <p>Use Cases</p>
                                            <p>About us</p>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <p>Term of use</p>
                                            <p>privacy policy</p>
                                            <p>Coach usage policy</p>
                                            <p>Employer job policy</p>
                                            <p>Language Policy</p>
                                            <p>Contact us</p>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>

    );
}