import React from 'react'

import PropTypes from "prop-types"
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state'

import { makeStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'

import AddIcon from '@material-ui/icons/Add'

import GridContainer from "components/Grid/GridContainer.js"
import Button from "components/CustomButtons/Button.js"
import GridItem from 'components/Grid/GridItem'

import styles from "assets/jss/material-dashboard-pro-react/components/popperStyle.js"


const useStyles = makeStyles(styles);

function CustomPopper(props) {

    const classes = useStyles();
    
    const { description } = props

    return (
      <PopupState variant="popper">
        {(popupState) => (
          <div className={ classes.justifyCenter }>
            <Button round {...bindToggle(popupState)} className={classes.actionButton + " " + classes.actionButtonRound}>
              <AddIcon className={classes.icon} />
            </Button>
            <Popper {...bindPopper(popupState)} transition placement="left-start" className={ classes.popperWrapper}>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper className={ classes.popperContent}>
                        <GridContainer className={ classes.contentWrapper }>
                            {
                                description.map((desc, index) => (
                                    <React.Fragment key={ index }>
                                        <GridItem xs={8}>
                                            <Typography variant="body1" gutterBottom>
                                                { desc.key }:
                                            </Typography>
                                        </GridItem>
                                        <GridItem xs={4}>
                                            <Typography variant="body1" gutterBottom>
                                                { desc.value }
                                            </Typography>
                                        </GridItem>
                                    </React.Fragment>
                                ))
                            }
                        </GridContainer>
                    </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    );
}

CustomPopper.propTypes = {
    description: PropTypes.array
}

export default CustomPopper
