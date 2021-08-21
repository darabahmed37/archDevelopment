import React from "react";
import {Button, Grid, makeStyles, Typography, useMediaQuery, useTheme,} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import {Link} from "react-router-dom";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useStyle = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
  },
  estiamteButton: {
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
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));
const CallToAction = ({ setValue }) => {
  const theme = useTheme();
  const classes = useStyle();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      alignItems={"center"}
      container
      direction={matchesSM ? "column" : "row"}
      className={classes.background}
      justify={matchesSM ? "center" : "space-between"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : " 5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container direction={"column"}>
          <Grid item>
            <Typography variant={"h2"}>
              Simple Software. <br />
              Revolutionary Results
            </Typography>
            <Typography
              variant={"subtitle2"}
              style={{
                fontSize: "1.5rem",
              }}
            >
              Take Advantage of 21<sup>st</sup> century
            </Typography>{" "}
            <Grid container item justify={matchesSM ? "center" : undefined}>
              <Button
                className={classes.learnButton}
                variant={"outlined"}
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
  );
};

export default CallToAction;