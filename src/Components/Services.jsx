import React from "react";
import {Button, Grid, makeStyles, Typography, useMediaQuery,} from "@material-ui/core";
import {Link} from "react-router-dom";
import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcons from "../assets/websiteIcon.svg";
import {useTheme} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
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
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
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
}));
const Services = ({ setValue, setSelectedIndex }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction={"column"}>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant={"h2"}
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      {/*IOS/Android Block*/}
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.servciesContainer}
          style={{
            marginTop: matchesSM ? "1em" : "5em",
          }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
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
              width="250em"
              src={mobileAppsIcon}
              alt="Mobile Phone Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
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

      {/*Websites Blocks*/}
      <Grid item>
        <Grid
          container
          direction={"row"}
          justify={matchesSM ? "center" : "flex-end"}
          style={{
            marginBottom: "10em",
          }}
          className={classes.servciesContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
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
          <Grid
            item
            width="250em"
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img
              src={websitesIcons}
              alt="Websites Icon"
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;