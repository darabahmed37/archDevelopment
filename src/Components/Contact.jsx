import React, {useState} from "react";
import {
    Button, Dialog, DialogContent, Grid, makeStyles, TextField, Typography, useMediaQuery,
} from "@material-ui/core";
import mobileBackground from "../assets/mobileBackground.jpg";
import {useTheme} from "@material-ui/core/styles";
import background from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import aeroplane from "../assets/send.svg";
import ButtonArrow from "./ui/ButtonArrow";
import {Link} from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    Background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "60em",
        paddingBottom: "10em",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
        },
    }, estiamteButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        width: 205,
        background: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        [theme.breakpoints.down("md")]: {
            marginLeft: 0, marginRight: 0,
        },
    }, learnButton: {
        ...theme.typography.learnButton, fontSize: "0.7rem", height: 35, padding: 5, [theme.breakpoints.down("md")]: {
            marginBottom: "2em",
        },
    }, message: {
        border: `2px solid ${theme.palette.common.blue}`, marginTop: "5em", borderRadius: 5,
    }, sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: "1rem",
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
        [theme.breakpoints.down("sm")]: {
            height: 40, width: 225,
        },
    },
}));

const Contact = ({setSelectedIndex, setValue}) => {
    const classes = useStyle();
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const onChange = (event) => {
        let valid;
        switch (event.target.id) {
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if (!valid) {
                    setEmailHelper("Invalid Email🙄");
                } else {
                    setEmailHelper("");
                }
                break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if (!valid) {
                    setPhoneHelper("Invalid Phone Number 😒");
                } else {
                    setPhoneHelper("");
                }
                
                break;
            default:
                break;
        }
    };
    return (<Grid container direction={"row"}>
            <Grid
                item
                container
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
                lg={4}
                style={{
                    marginBottom: matchesMD ? "5em" : 0, marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
                }}
                xl={3}
            >
                <Grid item>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography
                                align={matchesMD ? "center" : undefined}
                                variant={"h2"}
                                style={{
                                    lineHeight: 1,
                                }}
                            >
                                Contact US
                            </Typography>
                            <Typography
                                variant={"body1"}
                                align={matchesMD ? "center" : undefined}
                                style={{
                                    color: theme.palette.common.blue,
                                }}
                            >
                                We're waiting
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            style={{
                                marginTop: "2em",
                            }}
                        >
                            <Grid item>
                                <img
                                    src={phoneIcon}
                                    alt="Phone Icon"
                                    style={{
                                        marginRight: "0.5em",
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant={"body1"}
                                    style={{
                                        color: theme.palette.common.blue, fontSize: "1rem",
                                    }}
                                >
                                    <a
                                        style={{
                                            textDecoration: "none", color: "inherit",
                                        }}
                                        href="tel: (555) 555-5555"
                                    >
                                        {" "}
                                        (555) 555-5555
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>{" "}
                        <Grid
                            item
                            container
                            style={{
                                marginBottom: "2em",
                            }}
                        >
                            <Grid item>
                                <img
                                    src={emailIcon}
                                    alt="email"
                                    style={{
                                        marginRight: "0.5em", verticalAlign: "bottom",
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant={"body1"}
                                    style={{
                                        color: theme.palette.common.blue, fontSize: "1rem",
                                    }}
                                >
                                    <a
                                        style={{
                                            textDecoration: "none", color: "inherit",
                                        }}
                                        href="mailto:darabahmed@gmail.com"
                                    >
                                        {" "}
                                        darabahmed@gmail.com
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction={"column"}
                            style={{
                                maxWidth: "20em",
                            }}
                        >
                            <Grid
                                item
                                style={{
                                    marginBottom: "0.5em",
                                }}
                            >
                                <TextField
                                    label={"Name"}
                                    id={"name"}
                                    fullWidth
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </Grid>
                            <Grid
                                item
                                style={{
                                    marginBottom: "0.5em",
                                }}
                            >
                                <TextField
                                    label={"Email"}
                                    id={"email"}
                                    fullWidth
                                    helperText={emailHelper}
                                    error={emailHelper.length !== 0}
                                    value={email}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid
                                item
                                style={{
                                    marginBottom: "0.5em",
                                }}
                            >
                                <TextField
                                    label={"Phone"}
                                    id={"phone"}
                                    fullWidth
                                    helperText={phoneHelper}
                                    error={phoneHelper.length !== 0}
                                    value={phone}
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            style={{
                                maxWidth: "20em",
                            }}
                        >
                            <TextField
                                value={message}
                                id={"message"}
                                multiline
                                inputProps={{disableUnderline: true}}
                                rows={10}
                                className={classes.message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            justify={"center"}
                            style={{
                                marginTop: "2em",
                            }}
                        >
                            <Button
                                variant={"contained"}
                                className={classes.sendButton}
                                onClick={() => {
                                    setOpen(true);
                                }}
                                disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                            >
                                Send Message
                                <img
                                    src={aeroplane}
                                    style={{
                                        marginLeft: "1em",
                                    }}
                                />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Dialog
                fullScreen={matchesXS}
                open={open}
                style={{
                    zIndex: 1302,
                }}
                onChange={() => {
                    setOpen(false);
                }}
                PaperProps={{
                    style: {
                        paddingTop: matchesXS ? "1em" : "5em",
                        paddingBottom: matchesXS ? "1em" : "5em",
                        paddingLeft: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em",
                        paddingRight: matchesXS ? 0 : matchesSM ? "5em" : matchesMD ? "10em" : "20em",
                    },
                }}
            >
                <DialogContent>
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography align={"center"} variant={"h4"} gutterBottom>
                                Confirm Message
                            </Typography>
                        </Grid>
                        
                        <Grid
                            item
                            style={{
                                marginBottom: "0.5em",
                            }}
                        >
                            <TextField
                                label={"Name"}
                                id={"name"}
                                fullWidth
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            style={{
                                marginBottom: "0.5em",
                            }}
                        >
                            <TextField
                                label={"Email"}
                                id={"email"}
                                fullWidth
                                helperText={emailHelper}
                                error={emailHelper.length !== 0}
                                value={email}
                                onChange={onChange}
                            />
                        </Grid>
                        <Grid
                            item
                            style={{
                                marginBottom: "0.5em",
                            }}
                        >
                            <TextField
                                label={"Phone"}
                                id={"phone"}
                                fullWidth
                                helperText={phoneHelper}
                                error={phoneHelper.length !== 0}
                                value={phone}
                                onChange={onChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        style={{
                            maxWidth: matchesXS ? "100%" : "20em",
                        }}
                    >
                        <TextField
                            value={message}
                            id={"message"}
                            multiline
                            fullWidth={matchesXS}
                            inputProps={{disableUnderline: true}}
                            rows={10}
                            className={classes.message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                    </Grid>
                </DialogContent>
                <Grid
                    item
                    container
                    style={{marginTop: "2em"}}
                    alignItems={"center"}
                    direction={matchesSM ? "column" : "row"}
                >
                    <Grid item>
                        <Button
                            style={{
                                fontWeight: 300,
                            }}
                            color={"primary"}
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant={"contained"}
                            className={classes.sendButton}
                            onClick={() => {
                                setOpen(true);
                            }}
                            disabled={name.length === 0 || message.length === 0 || phoneHelper.length !== 0 || emailHelper.length !== 0}
                        >
                            Send Message
                            <img
                                src={aeroplane}
                                style={{
                                    marginLeft: "1em",
                                }}
                            />
                        </Button>
                    </Grid>
                </Grid>
            </Dialog>
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                className={classes.Background}
                lg={8}
                justify={matchesMD ? "center" : undefined}
                xl={9}
                alignItems={"center"}
            >
                {" "}
                <Grid
                    item
                    style={{
                        marginLeft: matchesMD ? 0 : " 3em", textAlign: matchesMD ? "center" : "inherit",
                    }}
                >
                    <Grid container direction={"column"}>
                        <Grid item>
                            <Typography
                                variant={"h2"}
                                align={matchesMD ? "center" : undefined}
                            >
                                Simple Software. <br/>
                                Revolutionary Results
                            </Typography>
                            <Typography
                                variant={"subtitle2"}
                                align={matchesMD ? "center" : undefined}
                                style={{
                                    fontSize: "1.5rem",
                                }}
                            >
                                Take Advantage of 21<sup>st</sup> century
                            </Typography>{" "}
                            <Grid container item justify={matchesMD ? "center" : undefined}>
                                <Button
                                    className={classes.learnButton}
                                    variant={"outlined"}
                                    align={matchesMD ? "center" : undefined}
                                    onClick={() => setValue(2)}
                                >
                  <span
                      style={{
                          marginRight: 5,
                      }}
                  >
                    Learn More
                  </span>
                                    <ButtonArrow
                                        width={10}
                                        height={10}
                                        fill={theme.palette.common.blue}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant={"contained"}
                        component={Link}
                        to={"/estimate"}
                        onClick={() => {
                            setValue(5);
                        }}
                        className={classes.estiamteButton}
                    >
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>);
};

export default Contact;