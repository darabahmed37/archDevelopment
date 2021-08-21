import React from "react";
import animationData from "../animations/landinganimation/data";
import {Button, Card, CardContent, Grid, makeStyles, Typography, useMediaQuery,} from "@material-ui/core";
import {Link} from "react-router-dom";
import Lottie from "react-lottie";
import ButtonArrow from "./ui/ButtonArrow";
import {useTheme} from "@material-ui/core/styles";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcons from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/callToAction";

const useStyle = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialtext: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  servciesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("xs")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
}));
const LandingPage = ({ setSelectedIndex, setValue }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOption = {
    loop: true,
    autoPlay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction={"column"} className={classes.mainContainer}>
      <Grid item>
        {/*Hero Block*/}
        <Grid
          container
          justify={"flex-end"}
          alignItems={"center"}
          direction={"row"}
        >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align={"center"} variant={"h2"}>
              Brining the West Cost Technology
              <br />
              to the mid west
            </Typography>
            <Grid
              container
              justify={"center"}
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  variant={"contained"}
                  className={classes.estimateButton}
                  component={Link}
                  onClick={() => {
                    setValue(5);
                  }}
                  to={"/estimate"}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant={"outlined"}
                  className={classes.learnButtonHero}
                  component={Link}
                  to={"/revolution"}
                  onClick={() => {
                    setValue(2);
                  }}
                >
                  <span
                    style={{
                      marginRight: 10,
                    }}
                  >
                    Learn More
                  </span>
                  <ButtonArrow
                    width={"15px"}
                    height={"15px"}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOption} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      {/*Custom Software*/}
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={matchesSM ? "center" : undefined}
          className={classes.servciesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant={"h4"}>Custom Software Development</Typography>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
              Save Energy. Save Time .Save Money
            </Typography>
            <Typography variant={"subtitle1"}>
              Complete Digials solutions, from investigation to{" "}
              <span className={classes.specialtext}>Celebration</span>.
            </Typography>
            <Button
              className={classes.learnButton}
              component={Link}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              to={"/customsoftware"}
              variant={"outlined"}
            >
              <span
                style={{
                  marginRight: 10,
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
          <Grid item>
            <img
              src={customSoftwareIcon}
              alt="Custom Software Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*IOS/Android Block*/}
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.servciesContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant={"h4"}>IOS/Android App Development</Typography>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement
            </Typography>
            <Typography variant={"subtitle1"}>
              Integrate Your WebExperince or created a standAlone App
              {matchesSM ? null : <br />} with Either Mobile Platform
            </Typography>
            <Button
              className={classes.learnButton}
              component={Link}
              to={"/mobileapps"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              variant={"outlined"}
            >
              <span
                style={{
                  marginRight: 10,
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
          <Grid item>
            <img
              style={{
                marginRight: matchesSM ? 0 : "5em",
              }}
              src={mobileAppsIcon}
              alt="Mobile Phone Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*Websites Blocks*/}
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={matchesSM ? "center" : undefined}
          className={classes.servciesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant={"h4"}>Websites Development</Typography>
            <Typography variant={"subtitle1"} className={classes.subtitle}>
              Reach More .Discover More. Sell More
            </Typography>
            <Typography variant={"subtitle1"}>
              Optimized for Search Engines biult for speed
              <span className={classes.specialtext}>Celebration</span>.
            </Typography>
            <Button
              className={classes.learnButton}
              variant={"outlined"}
              component={Link}
              to={"/websites"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span
                style={{
                  marginRight: 10,
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
          <Grid item>
            <img
              src={websitesIcons}
              alt="Websites Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/*Revolution*/}
      <Grid item>
        <Grid
          container
          alignItems={"center"}
          justify={"center"}
          style={{
            height: "100em",
            marginTop: "10em",
          }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction={"column"}
                style={{ textAlign: "center" }}
              >
                <Grid item>
                  <Typography variant={"h3"} gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant={"subtitle1"}>
                    Visionary Insights coupled with cutting edge Technology is a
                    recipy for revolution
                  </Typography>
                  <Button
                    variant={"outlined"}
                    component={Link}
                    onClick={() => {
                      setValue(2);
                    }}
                    to={"/revolution"}
                    className={classes.learnButtonHero}
                  >
                    <span
                      style={{
                        marginRight: 10,
                      }}
                    >
                      Learn More
                    </span>
                    <ButtonArrow
                      width={"15px"}
                      height={"15px"}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/*  Information Block*/}
      <Grid item>
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          className={classes.infoBackground}
          style={{ height: "80em" }}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesXS ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{
                marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em",
              }}
            >
              <Grid
                container
                direction={"column"}
                style={{
                  marginBottom: matchesXS ? "10em" : 0,
                }}
              >
                <Typography variant={"h2"} style={{ color: "white" }}>
                  About us
                </Typography>
                <Typography variant={"subtitle2"}>
                  Lets get Personal.
                </Typography>{" "}
                <Grid item>
                  <Button
                    className={classes.learnButton}
                    component={Link}
                    to={"/about"}
                    onClick={() => {
                      setValue(3);
                    }}
                    style={{
                      color: "white",
                      borderColor: "white",
                    }}
                    variant={"outlined"}
                  >
                    <span
                      style={{
                        marginRight: 10,
                      }}
                    >
                      Learn More
                    </span>
                    <ButtonArrow width={10} height={10} fill={"white"} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
              sm
            >
              <Grid container direction={"column"}>
                <Typography variant={"h2"} style={{ color: "white" }}>
                  Contact us
                </Typography>
                <Typography variant={"subtitle2"}>
                  Say Hello{" "}
                  <span role={"img"} aria-label={"Waving Hand Emoji"}>
                    🖐
                  </span>
                </Typography>{" "}
                <Grid item>
                  <Button
                    className={classes.learnButton}
                    component={Link}
                    onClick={() => {
                      setValue(4);
                    }}
                    to={"/contact"}
                    style={{
                      color: "white",
                      borderColor: "white",
                    }}
                    variant={"outlined"}
                  >
                    <span
                      style={{
                        marginRight: 10,
                      }}
                    >
                      Learn More
                    </span>
                    <ButtonArrow width={10} height={10} fill={"white"} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};
export default LandingPage;