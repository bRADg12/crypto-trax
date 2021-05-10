import React, { useState, useEffect } from 'react';
import "./App.css";
import { makeStyles, Theme, createMuiTheme, createStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from "react-router-dom";
import Nav from './Nav/Nav';
import { AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
      marginLeft: '10px'
    },
  }),
);

interface MappedPropsType {
    message?: string;
}
const App: React.FC<MappedPropsType> = () => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routeToHome = () => {
    history.push('/home');
  }

  let localDarkState = localStorage.getItem("DARK_MODE");
  const darkState = (localDarkState === 'true');

  const [darkMode, setDarkMode] = useState(darkState);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
  useEffect(() => {
    localStorage.setItem("DARK_MODE", String(darkMode));
  }, [darkMode]);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {main:'#23629F'},
      secondary:{main:'#F7945F',
      contrastText: '#FFFFFF',}
    },
    typography: {
      fontFamily: `Play, Roboto, sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
      }
  });
  return (
    <div className={classes.root}>
      <Router>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Crypto Trax
          </Typography>
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDarkMode}
          >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to='/'>
              <ListItem button key={'Home'}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
              <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
            <Link to='/portfolio'>
              <ListItem button key={'Portfolio'}>
                <ListItemIcon><PieChartIcon /></ListItemIcon>
                <ListItemText primary={'Portfolio'} />
              </ListItem>
            </Link>
            <Link to='/prices'>
              <ListItem button key={'Prices'}>
                <ListItemIcon><BarChartIcon /></ListItemIcon>
                <ListItemText primary={'Prices'} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
                
            </Route>
            <Route path="/portfolio">
              
            </Route>
            <Route path="/prices">
              
            </Route>
          </Switch>
        </main>
      </ThemeProvider>
    </Router>
  </div>
  );
}

export default App;
