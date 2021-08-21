import React from "react";
import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightBulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopWatch from "../assets/stopwatch.svg";
import root from "../assets/root.svg";
import { Link } from "react-router-dom";
import documentsAnimation from "../animations/documentsAnimation/data";
import Lottie from "react-lottie";
import scale from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data.js";
import { useTheme } from "@material-ui/core/styles";
import CallToAction from "./ui/callToAction";

const useStyle = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
   paddingLeft:"5em",
   paddingRight:"5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",

    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));
const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const documentsOption = {
    loop: true,
    autoPlay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOption = {
    loop: true,
    autoPlay: true,
    animationData: scale,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoPlay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const UXOption = {
    loop: true,
    autoPlay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction={"column"} >
      
      <Grid
        item
        container className={classes.rowContainer}
        direction={"row"}
        style={{
          marginTop:matchesXS?"1em":"2em"
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
              to={"/services"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
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
              Custom Software development
            </Typography>
            <Grid item>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Whether we're replacing old software or inventing new solutions,
                Arch Development is here to help your business tackle
                technology.
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Using regular Commercial Software leaves you with a lot of stuff
                you don't need without some of the stuff you do need, and
                ultimately control the eay you work. Without using any software
                at all you risk falling behind competitors and missing out on a
                huge efficinecy.
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Our custom solutions are designed from the ground up with your
                need, wants, and goal at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing coast than generalized
                options
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We create exactly what you want, exactly how you want it
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to={"/mobileapps"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
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
        container className={classes.rowContainer}
        direction={"row"}
        justify={"center"}
        style={{
          marginTop: "15em",
          marginBottom: "20em",
        }}
      >
        <Grid
          item
          container
          direction={"column"}
          md
          alignItems={"center"}
          style={{
            maxWidth: "40em",
          }}
        >
          <Grid item>
            <Typography variant={"h4"}>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightBulb} alt="Light Bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          md
          alignItems={"center"}
          style={{
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
            maxWidth: "40em",
          }}
        >
          <Grid item>
            <Typography variant={"h4"}>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopWatch} alt="Light Bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={"column"}
          md
          alignItems={"center"}
          style={{
            maxWidth: "40em",
          }}
        >
          <Grid item>
            <Typography variant={"h4"}>Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="Light Bulb" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container className={classes.rowContainer}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify={"space-between"}
      >
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          style={{
            marginBottom: matchesMD ? "15em" : 0,
          }}
          md
        >
          <Grid item container direction={"column"} md>
            <Grid item>
              <Typography
                variant={"h4"}
                align={matchesSM ? "center" : undefined}
              >
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={"body1"}
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Reduce Error. Reduce waste <br /> Reduce Cost
              </Typography>
              <Typography
                variant={"body1"}
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Billions are spent annually on the purchasing, printing and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well
              </Typography>
              <Typography
                variant={"body1"}
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                By Utilizing Digital form and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOption}
              isStopped={true}
              style={{
                maxHeight: 275,
                maxWidth: 275,
                minHeight: 250,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOption}
              style={{
                maxHeight: 260,
                maxWidth: 280,
              }}
            />
          </Grid>
          <Grid item container direction={"column"} md>
            <Grid item>
              <Typography variant={"h4"} align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={"body1"}
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Weather you're a large brand,just getting started, or talking
                off right now,our application architecture ensure pain free
                growth and reliability
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={"row"} className={classes.rowContainer}
        style={{
          marginTop: "20em",
          marginBottom: "20em",
        }}
      >
        <Grid item container direction={"column"} alignItems={"center"}>
          <Grid item>
            <img
              src={root}
              alt="Tree with root extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant={"h4"} align={"center"} gutterBottom>
              Root cause Analysis
            </Typography>
            <Typography variant={"body1"} align={"center"} paragraph>
              Many Problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant={"body1"} align={"center"} paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a historic plan for the most effective implementation of
              technology
            </Typography>
          </Grid>
        </Grid>
      </Grid>{" "}
      <Grid
        item
        container
        className={classes.rowContainer}  direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify={"space-between"}
        style={{
          marginBottom: "20em",
        }}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          style={{
            marginBottom: matchesMD ? "15em" : 0,
          }}
          md
        >
          <Grid item container direction={"column"} md>
            <Grid item>
              <Typography
                variant={"h4"}
                align={matchesSM ? "center" : undefined}
              >
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={"body1"}
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Why waste time when you don't have to?
              </Typography>
              <Typography
                variant={"body1"}
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant={"body1"}
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Increasing Efficiency increases profits, leaving you more time
                to focus on your business, not busywork
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{
                maxHeight: 290,
                maxWidth: 280,
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? "column" : "row"}
          md
        >
          <Grid item md>
            <Lottie
              options={UXOption}
              style={{
                maxHeight: 310,
                maxWidth: 155,
              }}
            />
          </Grid>
          <Grid item container direction={"column"} md>
            <Grid item>
              <Typography variant={"h4"} align={matchesSM ? "center" : "right"}>
                User Experience
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={"body1"}
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                A good design that isn't usable isn't a good design
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software complicated, confusing and
                frustrating
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable experiences
                that solve problems rather than creating new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item >
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;