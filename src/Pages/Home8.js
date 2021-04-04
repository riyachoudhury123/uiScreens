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
                    src="data:image/jpeg;base64,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" alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%" }} src="https://lh3.googleusercontent.com/CSlGCGCsN-5DYFLPGLCLC_veh5s8iXfMIztRHcGPJD4IXdai6F7IDpK4WttGOkciP75VnA=s125" alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%" }} src="https://lh3.googleusercontent.com/qxl2FEczy45BZmKvnnx7cxL6TPOeRiEqDp2UdMh6YTBEa0uLRL3yrFpRPaMQh5FJA5E3Bg=s85" alt="new" />
                <img style={{ marginLeft: "60%", width: "10%", height: "7%", marginTop: "-15%" }}
                    src="https://lh3.googleusercontent.com/Dbi6TWuO8FnIJBT4WmFTTeaG3IAzmG0Xpir_qKsvts-fi-661Bu7Rwxy1kp8YsbixH32mg=s85" alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "-15%" }}
                    src="https://lh3.googleusercontent.com/YlhI7gJ56pnP6yKMh0H5cniFJwh47okrYRQQ8tDA9P2Ot95DI-7XNd-8XMA5-VO-9eqVXuk=s851" alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "-13%" }} src="https://lh3.googleusercontent.com/MoZW9yqFaVtV_-RSkQI1guQ84UXfE93W0Qd9_VyiLuOaXBGAqmI9ArHtkRpl40bWzCi2=s85" alt="new" />
                <img style={{ marginLeft: "60%", width: "10%", height: "7%" }} src="https://lh3.googleusercontent.com/YE-bt9EyhuDCM7xzP7aAWvXV4lwtfzyzUCkDiKm_zj42PSz2c9mRvLu5dBy6q2i_rfR5=s85" alt="new" />
                <img
                    style={{ marginLeft: "3%", width: "10%", height: "5%" }} src="https://lh3.googleusercontent.com/dMmGDWyL-2ASVzROPmdhKak-I_8HIXhT_z7YUeIpW1_Rg5aXabSHl1dr8y0w6QaP8eT8iw=s87" alt="new" />
                <img style={{ marginLeft: "3%", width: "10%", height: "5%", marginTop: "1%" }} src="https://lh3.googleusercontent.com/3XgP1P-3WPCaz7h21pnDKF16nOCKamNblsKPf9X0PEcJUZJTcI0Rnn1KuBJcuvKibU9bK-w=s85" alt="new" />
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
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=5106f8f6-110a-4dcb-a8d9-ffe32b3a29cf&api_key=CometServer1&access_token=1617603754_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_3fa555eaeadbfe5d46f7841bb3b635f9865bd4e5" alt="new" />
                </div>
                <div style={{ marginLeft: "5%" }}>
                    <b style={{ fontSize: "40px" }}> A much needed platform <br /> for coaches built by coaches</b>
                    <p style={{ fontSize: "35px" }}><img style={{ color: "white" }} src="https://lh3.googleusercontent.com/LZpCHF3vjNfdtkV-IVcF_Y5ND2jKmrATEAeON7W1DClWIqOfpx4xRvqznBJ-LzZu9YHDMhI=s50" alt="new" />
                  Its all happening in the channel
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Follow everything related to individual topics projects or teams in their dedicated channel</p>
                    <p style={{ fontSize: "35px" }}><img src="https://lh3.googleusercontent.com/ItjBsiTD-XYiVidsFc6_txb5hYgZZznZr0LwNjd00DnJoXzfmPjV3g2Ba-pXz3PkZKxykQ=s50" alt="new" />
                 History you can see and search
                  </p>
                    <p style={{ fontSize: "20px", marginLeft: "3%" }}>Projects end,teams change and slack saves everything,Rather than trying to remember,easily finde what you are looking for</p>

                    <p style={{ fontSize: "35px" }}><img src="https://lh3.googleusercontent.com/Vvkko9neougeNN5S7MmgJ15clhdzDW_dbUHXXDB-v6W_OQq7qxrJyVJfC1DiWcDI6lUITRs=s50" alt="new" />
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
                        <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=16a7c4d3-44a6-4344-98e8-6faef93906ac&api_key=CometServer1&access_token=1617603754_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_3fa555eaeadbfe5d46f7841bb3b635f9865bd4e5" alt="new" />
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
                                            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=451fc640-1eb1-412f-8527-3efca580da6c&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" alt="new" />
                                            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=c0b9befb-7dde-4850-931e-1d94c8104de7&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" alt="new" />
                                            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=99440b9e-b94f-4ffc-90c2-daf6d9489e2e&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" alt="new" />
                                            <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:bb383bae-0d24-45b0-8dbf-2df1f938d6ea;revision=0?component_id=9bfb528a-58df-43a4-9562-1df114ef50b2&api_key=CometServer1&access_token=1617214023_urn%3Aaaid%3Asc%3AUS%3Abb383bae-0d24-45b0-8dbf-2df1f938d6ea%3Bpublic_98180c79c5d9b223449eff603aacee5b625e2f91" alt="new" />

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