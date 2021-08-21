import React from "react";
import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import Lottie from "react-lottie";
import IntegrationAnimation from "../animations/integrationAnimation/data.json";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/callToAction";

const defaultOptions = {
  loop: true,
  autoPlay: true,
  animationData: IntegrationAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));
const MobileApps = ({ setValue, setSelectedIndex }) => {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyle();
  return (
    <Grid container direction={"column"}>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={"row"}
        style={{
          marginTop: matchesXS ? "1em" : "2em",
        }}
        justify={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{
              marginRight: "1em",
              marginLeft: "-3.5em",
            }}
          >
            <IconButton
              component={Link}
              to={"/customsoftware"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <img src={backArrow} alt="BackArrow" />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction={"column"} className={classes.heading}>
          <Grid item>
            <Typography variant={"h2"} align={matchesMD ? "center" : undefined}>
              IOS/Android Apps development
            </Typography>
            <Grid item>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Mobile apps allow you to take your tools on the go
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Weather you want an app for your customer, employees, or
                yourself, we can build cross platform native solutions for any
                part of your business process.This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notification, and more
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Convenience, Connection
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to={"/websites"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <img src={forwardArrow} alt="forward IOS/Android" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        style={{
          marginTop: "15em",
          marginBottom: "15em",
        }}
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
      >
        <Grid item container direction={"column"} md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant={"h4"}
              gutterBottom
            >
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant={"body1"}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place
            </Typography>
            <Typography
              align={matchesSM ? "center" : undefined}
              variant={"body1"}
              paragraph
            >
              This allow you to extend your research,reinvent interactions, and
              develop a stronger relationship with your user than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            style={{
              maxWidth: "20em",
            }}
          />
        </Grid>{" "}
        <Grid item container direction={"column"} md>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant={"h4"}
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant={"body1"}
              paragraph
            >
              Out cutting edge development process allow us to create apps for
              iphone, Android, and tablets - all at the same time
            </Typography>
            <Typography
              align={matchesSM ? "center" : "right"}
              variant={"body1"}
              paragraph
            >
              This significantly reduces cost and creates a more unified brand
              experience across all devices{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{
          marginBottom: "15em",
        }}
        className={classes.rowContainer}
      >
        <Grid item container direction={"column"} alignItems={"center"} md>
          <Grid item>
            <Typography align={"center"} variant={"h4"} gutterBottom>
              Extend functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>{" "}
        <Grid
          item
          container
          direction={"column"}
          alignItems={"center"}
          style={{
            marginTop: matchesMD ? "10em" : 0,
            marginBottom: matchesMD ? "10em" : 0,
          }}
          md
        >
          <Grid item>
            <Typography align={"center"} variant={"h4"} gutterBottom>
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={access}
              style={{
                maxWidth:matchesXS?"20em": "28em",
              }}
              alt="Extend Access"
            />
          </Grid>
        </Grid>{" "}
        <Grid item container direction={"column"} alignItems={"center"} md>
          <Grid item>
            <Typography align={"center"} variant={"h4"} gutterBottom>
              Increase engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="Increase engagement" />
          </Grid>
        </Grid>
      </Grid>
        <Grid item>
            <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        </Grid>
    </Grid>
  );
};

export default MobileApps;