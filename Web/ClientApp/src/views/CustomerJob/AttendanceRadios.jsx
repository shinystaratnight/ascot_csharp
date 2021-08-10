import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"

import FiberManualRecord from "@material-ui/icons/FiberManualRecord"

import styles from "assets/jss/material-dashboard-pro-react/components/radioGroupStyle.js"

const useStyles = makeStyles(styles)

function AttendanceRadios(props) {

    const { title, radioItems, disabled, name, handleRadio, error } = props

    const [selectedValue, setSelectedValue] = React.useState(null);

    const handleChange = event => {
        setSelectedValue(event.target.value);
        if ((handleRadio !== undefined) & (handleRadio !== null)) {
            handleRadio(event)
        }
    };

    const classes = useStyles()

    return (
        <div className={ classes.wrapper }>
            <div className={ classes.title }>
                <FormLabel
                    className={
                    classes.labelHorizontal +
                    " " +
                    classes.labelHorizontalRadioCheckbox
                    }
                    error={ error }
                >
                    { title }
                </FormLabel>
            </div>
            <div className={ classes.radioGroup }>
                {
                    radioItems.map((item, index) => (
                        <div
                            key={ index }
                            className={
                            classes.checkboxAndRadio +
                            " " +
                            classes.checkboxAndRadioHorizontal + " " +
                            classes.radioItem
                            }
                        >
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={ selectedValue === item.value }
                                        onChange={ handleChange }
                                        value={ item.value }
                                        name={ name }
                                        aria-label={ item.value }
                                        icon={
                                            <FiberManualRecord
                                            className={classes.radioUnchecked}
                                            />
                                        }
                                        checkedIcon={
                                            <FiberManualRecord
                                            className={classes.radioChecked}
                                            />
                                        }
                                        classes={{
                                            checked: classes.radio,
                                            root: classes.radioRoot
                                        }}
                                        disabled={ disabled }
                                    />
                                }
                                classes={{
                                    label: classes.label,
                                    root: classes.labelRoot
                                }}
                                label={ item.label }
                            />
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}

export default AttendanceRadios
