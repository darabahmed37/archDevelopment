import React, {useEffect, useState} from "react";
import {
  AppBar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyle = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: 25,
  },
  button: {
    borderRadius: "50px",
    marginLeft: 50,
    marginRight: 25,
    height: 45,
    ...theme.typography.estimate,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: 50,
    width: 50,
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemsSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  AppBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = (props) => {
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const classes = useStyle();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "IOS/Android app Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];
  const routes = [
    {
      name: "Home",
      link: "/",
      activeIndex: 0,
    },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      onMouseOver: (e) => handleClick(e),
    },
    {
      name: "The Revolution",
      link: "/revolution",
      activeIndex: 2,
    },
    {
      name: "About",
      link: "/about",
      activeIndex: 3,
    },
    {
      name: "Contact us",
      link: "/contact",
      activeIndex: 4,
    },
  ];

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/estimate":
          setValue(5);
          setSelectedIndex(6);
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, routes, selectedIndex]);

  const handleMenuItemCLick = (e, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(index);
  };
  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor={"primary"}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-haspopup={route.ariaPopup}
            aria-owns={route.ariaOwns}
            onMouseOver={route.onMouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant={"contained"}
        color={"secondary"}
        className={classes.button}
        component={Link}
        to={"/"}
        onClick={() => {
          setValue(5);
          setSelectedIndex(8);
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id={"simple-menu"}
        MenuListProps={{ onMouseLeave: handleClose }}
        anchorEl={anchorEl}
        open={openMenu}
        classes={{ paper: classes.menu }}
        onClose={handleClose}
        elevation={0}
        style={{
          zIndex: 1302,
        }}
        keepMounted
      >
        {menuOptions.map((menu, index) => (
          <MenuItem
            key={`${menu}${index}`}
            component={Link}
            to={menu.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              setValue(1);
              handleClose(e);
              handleMenuItemCLick(e, index);
            }}
            selected={index === selectedIndex && value === 1}
          >
            {menu.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        classes={{
          paper: classes.drawer,
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={`${route}${index}`}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemsSelected }}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            divider
            button
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            className={classes.drawerItemEstimate}
            selected={value === 5}
            component={Link}
            to={"/estimate"}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemsSelected,
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position={"fixed"} className={classes.AppBar}>
          <Toolbar disableGutters={true}>
            <Button
              component={Link}
              to={"/"}
              className={classes.logoContainer}
              disableRipple
              onClick={() => setValue(0)}
            >
              <img alt={"Company logo"} className={classes.logo} src={logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;