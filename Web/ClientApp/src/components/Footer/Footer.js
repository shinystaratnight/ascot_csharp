import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { withRouter } from "react-router-dom"

import Link from '@material-ui/core/Link'
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

function Footer(props) {
  const classes = useStyles();
  const { fluid, white } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white,
    [classes.right]: true
  });

  const handleLinks = (e, link) => {
    e.preventDefault();
    props.history.push(link)
  }

  return (
    <footer className={ classes.footer }>
      <div className={ container }>
        {/* <p className={classes.right}>
          &copy; {1900 + new Date().getYear()}{" "}
          Design Guide
        </p> */}
        <Link href="#" className={ classes.linkItem } onClick={ (e) => handleLinks(e, '/search') }>
          Search
        </Link>
        <Link href="#" className={ classes.linkItem } onClick={ (e) => handleLinks(e, '/design-guide') }>
          Design Guide
        </Link>
        <Link href="#" className={ classes.linkItem } onClick={ (e) => handleLinks(e, '/new') }>
          New
        </Link>
        <Link href="#" className={ classes.linkItem } onClick={ (e) => handleLinks(e, '/job-list') }>
          Job List
        </Link>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
};

export default withRouter(Footer)

