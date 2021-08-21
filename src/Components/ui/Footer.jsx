import React from "react";
import {Grid, Hidden, makeStyles} from "@material-ui/core";
import footerAdornment from "../../assets/Footer Adornment.svg";
import {Link} from "react-router-dom";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";

const useStyle = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adorment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  logo: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socailContainer: {
    position: "absolute",
    marginTop: "-6em ",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));
const Footer = (props) => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify={"center"}
          spacing={2}
          className={classes.mainContainer}
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction={"column"}>
              <Grid
                item
                component={Link}
                to={"/"}
                onClick={() => {
                  props.setValue(0);
                }}
                className={classes.link}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                component={Link}
                to={"/services"}
                className={classes.link}
              >
                Services
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                component={Link}
                to={"/customsoftware"}
                className={classes.link}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                component={Link}
                to={"/mobileapps"}
                className={classes.link}
              >
                IOS/Android Apps Development
              </Grid>
              <Grid
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                item
                component={Link}
                to={"/websites"}
                className={classes.link}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                onClick={() => {
                  props.setValue(2);
                }}
                item
                component={Link}
                to={"/revolution"}
                className={classes.link}
              >
                The Revolution
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(2);
                }}
                component={Link}
                to={"/revolution"}
                className={classes.link}
              >
                Vision
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(2);
                }}
                component={Link}
                to={"/revolution"}
                className={classes.link}
              >
                Technology
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(2);
                }}
                component={Link}
                to={"/revolution"}
                className={classes.link}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                onClick={() => {
                  props.setValue(3);
                }}
                component={Link}
                to={"/about"}
                className={classes.link}
              >
                About us
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(3);
                }}
                component={Link}
                to={"/about"}
                className={classes.link}
              >
                History
              </Grid>
              <Grid
                item
                onClick={() => {
                  props.setValue(3);
                }}
                component={Link}
                to={"/about"}
                className={classes.link}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction={"column"} spacing={2}>
              <Grid
                item
                onClick={() => {
                  props.setValue(4);
                }}
                component={Link}
                to={"/contact"}
                className={classes.link}
              >
                Contact us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        className={classes.adorment}
        src={footerAdornment}
        alt="black Decorative slash"
      />
      <Grid
        container
        justify={"flex-end"}
        spacing={2}
        className={classes.socailContainer}
      >
        <Grid item component={"a"} href={"https://www.facebook.com"}>
          <img src={facebook} className={classes.logo} alt="facebook logo" />
        </Grid>
        <Grid item component={"a"} href={"https://www.instagram.com"}>
          <img src={twitter} className={classes.logo} alt="Twitter logo" />
        </Grid>
        <Grid item component={"a"} href={"https://www.twitter.com"}>
          <img src={instagram} className={classes.logo} alt="Instagram logo" />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;