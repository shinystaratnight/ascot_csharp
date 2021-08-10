import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-pro-react/layouts/adminStyle.js"


var ps;

const useStyles = makeStyles(styles);

export default function MainLayout(props) {
  
  const { ...rest } = props;

  const [miniActive, setMiniActive] = React.useState(false);

  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
   
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
     
    };
  });
  // functions for changeing the states from components


  const getActiveRoute = routes => {
    let activeRoute = "Design Guide";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
   
        return (
          <Route
            path={ prop.path }
            component={ prop.component }
            key={ key }
          />
        );
     
    });
  };
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };


  return (
    <div className={classes.wrapper}>
      <div className={ mainPanelClasses } ref={ mainPanel }>
        <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={ miniActive }
          brandText={getActiveRoute(routes)}
          {...rest}
        />
       
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              { getRoutes(routes) }
              {/* <Redirect from="/" to="/search" /> */}
            </Switch>
          </div>
        </div>
        <Footer fluid />
      </div>
      <ToastContainer autoClose={ 3000 } />
    </div>
  );
}
