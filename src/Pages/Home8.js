import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Link from '@material-ui/core/Link';
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
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
            coach: "Find Coaches", description: " Iam looking for someone to coach me"
        },
        {
            coach: "Find Coaches", description: " Iam looking for someone to coach me"
        },

    ]
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", backgroundColor: "#FF8E3133" }}>
                <AppBar style={{ backgroundColor: 'white' }} position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Material-UI
          </Typography>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search for coaches"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <div style={{ marginLeft: "40%" }}>
                            <Button style={{ float: "right", color: "#000000" }} href="#text-buttons" color="primary">
                                login
      </Button>

                            <Button style={{ color: "#000000" }} variant="outlined" size="small" >
                                find a coach
        </Button>

                            <Button style={{ backgroundColor: "#FF8E31", color: "#000000" }} variant="contained" size="small" >
                                join as a coach
        </Button>

                            <Button style={{ float: "right", color: "#000000" }} href="#text-buttons" color="primary">
                                how it works
      </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <div style={{ marginTop: "3%" }}>
                    {data.map((e, i) => (
                        <Card style={{ width: "250%", marginLeft: "20%", marginTop: "5%" }}>
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
                                        justify="flex-start" item xs={11}>
                                        < ArrowRightAltOutlinedIcon style={{ color: "#B0BCC6" }} />
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <img style={{ marginLeft: "30%", width: "10%", height: "5%" }}
                    src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=d3a59eb0-2dfc-46b1-8b34-d00b81be94ab&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img style={{ marginLeft: "3%", width: "10%", height:"5%"}} src ="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=3079cfd5-406d-40ee-a67b-7af10bb3ee5f&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%" }} src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=aec5dd24-4503-4c53-b008-dab610125de8&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img style={{ marginLeft: "46%", width: "10%", height: "5%", marginTop: "-15%" }}
                  src= "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=7fca4fa1-9d63-4901-a4b4-0955704be0c4&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "-15%" }}
                src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=d619c779-5a5b-4b80-91d8-9c8f7b1b8a6b&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91"/>
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "-15%" }} src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=af246fdc-e6a7-453c-aef2-ad4c79acc78c&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img style={{ marginLeft: "46%", width: "10%", height: "5%" }} src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=cc2e738d-437c-4d97-872e-69dd9583a949&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img
                    style={{ marginLeft: "3%", width: "10%", height: "5%" }} src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=0785a4b9-9041-4ae9-9608-938bb18f9b7e&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%" }} src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=419887d6-a665-43d3-9e3b-b4a8d656124c&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
            </div>
            <p style={{ fontSize: "24px", color: "#FF8E31", marginLeft: "28%" }}>Our seller coaches awaits you</p>
            <b style={{ fontSize: "50px", alignItems: "center", marginLeft: "28%" }}>Find the right coach who helps <br /><span style={{ marginLeft: "28%" }}>
                you transform  </span></b>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <img style={{}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip5FSAo5EKXyZQwOBlReC5m2JjKs0lZggBA&usqp=CAU" />
                <img style={{}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIAoi6Zq7_jVmTlDoTI6ZptmUOjpwGe6gv01Ps-JH01Qq8Fg41yl7WkdZTo8kwnd-pID4&usqp=CAU" />

                <img style={{}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhLwi9h5WsBDSfzmnoTdfsDo3C9M-wdVGXCA&usqp=CAU" />
            </div>
            <b style={{ fontSize: "50px", marginLeft: "5%", justifyContent: "center" }} >Looking  to coach?
            <span style={{ color: "#FF8E31" }}>start now!</span></b>
            <div style={{ display: "flex", flexDirection: "row", marginLeft: "5%" }}>
                <DoneIcon style={{ color: "#52D268" }} />
                <p>FREE DAY TRIAL</p>
                <DoneIcon style={{ color: "#52D268" }} />
                <p>FLEXIBLE PLAN VIEW PRICING</p>
                <DoneIcon style={{ color: "#52D268" }} />
                <p>NO CREDIT CARD REQUIRED</p>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField style={{ marginLeft: "5%" }}
                    id="outlined-size-small"
                    defaultValue="Enter your email"
                    variant="outlined"
                    size="small"
                />
                
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", marginTop: "5%" }}>
                <div>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=5106f8f6-110a-4dcb-a8d9-ffe32b3a29cf&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                </div>
                <div style={{ marginLeft: "5%" }}>
                    <b style={{ fontSize: "40px" }}> A much needed platform <br /> for coaches built by coaches</b>
                    <p style={{ fontSize: "35px" }}><img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=8f7f6595-5063-43bd-8505-b5c6676ede6f&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                  Its all happening in the channel
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Follow everything related to individual topics projects or teams in their dedicated channel</p>
                    <p style={{ fontSize: "35px" }}><img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=ee129d55-3106-4654-bf8f-79f37e4b9d54&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                 History you can see and search
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Follow everything related to individual topics projects or teams in their dedicated channel</p>

                    <p style={{ fontSize: "35px" }}><img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=138a74b0-9920-4789-a424-14273c3dc5d5&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
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
                        <img  style ={{marginLeft:"2%"}} src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=0fdd129d-91d9-4529-903e-b2cd01e84b8d&api_key=CometServer1&access_token=1617125493_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_55b8fa89c8d58623d784745a1de143e57e231061"/>
                        </div>

                </div>
                    <div>

                    </div>
                    <div>
                        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=16a7c4d3-44a6-4344-98e8-6faef93906ac&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                    </div>
                </div>
                <div style={{ display: "flex", color: "white", flexDirection: "row", justifyContent: "center", backgroundColor: "#FF8E31" }}>
                    <div>
                        <b style={{ fontSize: "50px" }}>Never miss an update!</b>
                        <p style={{ fontSize: "20px" }}>Subscribe and stay in loop for our latest features and news,wepromise we wont spam ujr mail box</p>
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
                        /></p>
                        <Button style={{ marginLeft: "5%", marginBottom: "3%" }} variant="contained" color="primary">
                            subscribe
      </Button>
                        <Card style={{ width: "100%", height: "70%" }} className={classes.root}>
                            <CardContent>

                                <Grid container spacing={0}>
                                    <Grid item xs={8}>
                                        <p style={{ fontSize: "37px" }}> Meet my Coach </p>
                                        <p>Meet my coach allows coaches and consultantgs to explore new opporftunities connect with employes and buisness
                        </p>
                                        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=451fc640-1eb1-412f-8527-3efca580da6c&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                                        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=c0b9befb-7dde-4850-931e-1d94c8104de7&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                                        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=99440b9e-b94f-4ffc-90c2-daf6d9489e2e&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />
                                        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=9bfb528a-58df-43a4-9562-1df114ef50b2&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" />

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

    );
}