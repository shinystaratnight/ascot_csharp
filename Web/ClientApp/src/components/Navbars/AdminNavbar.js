import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"
import { withRouter } from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"

import SearchIcon from '@material-ui/icons/Search'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'

import Button from "components/CustomButtons/Button.js"

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.js"

const useStyles = makeStyles(styles);

function AdminNavbar(props) {

  const classes = useStyles();
  const { color, rtlActive } = props;

  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  const sidebarMinimize =
    classes.sidebarMinimize +
    " " +
    cx({
      [classes.sidebarMinimizeRTL]: rtlActive
    });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={ classes.container }>
   
          <div className={ sidebarMinimize }>
            <Button
              justIcon
              round
              color="info"
              onClick={ () => props.history.push('/') }
            >
              <SearchIcon className={ classes.sidebarMiniIcon } />
            </Button>
            <Button justIcon round color="info" className={ classes.jobListBtn } onClick={ () => props.history.push('/job-list') }>
                <FormatListBulletedIcon />
            </Button>

          </div>
      </Toolbar>
    </AppBar>
  );
}

AdminNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  brandText: PropTypes.string,
  miniActive: PropTypes.bool,
  sidebarMinimize: PropTypes.func
};

export default withRouter(AdminNavbar)
