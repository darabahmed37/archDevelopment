import React from "react";
import {
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import { useTheme } from "@material-ui/core/styles";
import analytics from "../assets/analytics.svg";
import ecommerce from "../assets/ecommerce.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";
import CallToAction from "./ui/callToAction";

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
  paragraph: {
    maxWidth: "30em",
  },
}));
const Website = ({ setSelectedIndex, setValue }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container direction={"column"}>
      <Grid
        item
        container
        className={classes.rowContainer}
        direction={matchesSM ? "column" : "row"}
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
              to={"/mobileapps"}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
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
              Website development
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
                Having a website is necessary in today's business world. They
                give you one central, public location to let people who you are,
                what you do, and why are you best at it
              </Typography>
              <Typography
                variant={"body1"}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                For simply having your hour posted to having a full fledged
                online store, making your self as accesible as possible to users
                online drives growth and enables you to reach new customers
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
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
              <img src={forwardArrow} alt="back IOS/Android" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems={"center"}
        className={classes.rowContainer}
        style={{
          marginTop: "15em",
        }}
      >
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                variant={"h4"}
                align={matchesSM ? "center" : undefined}
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{
                  marginLeft: "-2.75em",
                }}
                alt="Graphs"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant={"body1"}
            className={classes.paragraph}
          >
            Knowledge is power, and data is 21st century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decision with measurable effects
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems={"center"}
        justify={"flex-end"}
        className={classes.rowContainer}
        style={{
          marginTop: "15em",
          marginBottom: "15em",
        }}
      >
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant={"h4"}
                gutterBottom
              >
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt="$" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "1em",
          }}
        >
          <Typography
            variant={"body1"}
            className={classes.paragraph}
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            It is no secret that people like to shop online
          </Typography>
          <Typography
            variant={"body1"}
            className={classes.paragraph}
            align={matchesSM ? "center" : undefined}
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it's time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>{" "}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems={"center"}
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant={"h4"}
                gutterBottom
              >
                OutReach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="Mega Phone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }}>
          <Typography
            variant={"body1"}
            align={matchesSM ? "center" : undefined}
            className={classes.paragraph}
          >
            Drawing people in with a dazzling website. showing off your products
            online is a great way to help customer decide what's right for them
            before visiting in person
          </Typography>
        </Grid>
      </Grid>{" "}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems={"center"}
        justify={"flex-end"}
        style={{
          marginTop: "15em",
          marginBottom: "15em",
        }}
        className={classes.rowContainer}
      >
        <Grid item>
          <Grid container direction={"column"}>
            <Grid item>
              <Typography
                variant={"h4"}
                align={matchesSM ? "center" : undefined}
                gutterBottom
                align={"center"}
              >
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="SEO" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.paragraph}
          style={{ marginLeft: matchesSM ? 0 : "1em" }}
        >
          <Typography
            variant={"body1"}
            align={matchesSM ? "center" : undefined}
          >
            How often have you ever been on Google page # 2 Results
          </Typography>
          <Typography
            variant={"body1"}
            align={matchesSM ? "center" : undefined}
          >
            If you are like us probably never
          </Typography>{" "}
          <Typography
            variant={"body1"}
            align={matchesSM ? "center" : undefined}
          >
            Customer don't go there either, so we make sure your website is
            designed to end up on top
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default Website;