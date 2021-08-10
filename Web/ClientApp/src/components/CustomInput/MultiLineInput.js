import React from 'react'

import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles"

import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from "@material-ui/core/FormControl"

import styles from "assets/jss/material-dashboard-pro-react/components/multiLineInputStyle.js"

const useStyles = makeStyles(styles)

function MultiLineInput(props) {

    const classes = useStyles();
    const {
        formControlProps,
        id,
        labelProps,
        inputProps,
        error,
        white,
        inputRootCustomClasses,
        success,
        helperText,
        fontSize,
        autoFocus,
        rows
    } = props;

    var formControlClasses;
    if (formControlProps !== undefined) {
        formControlClasses = classNames(
        formControlProps.className,
        classes.formControl
        );
    } else {
        formControlClasses = classes.formControl;
    }

    let newInputProps = {
        maxLength:
          inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
        minLength:
          inputProps && inputProps.minLength ? inputProps.minLength : undefined,
        fontSize:
          fontSize ? inputProps.fontSize : undefined
      };

    return (
        <FormControl {...formControlProps} className={ formControlClasses }>    
            <OutlinedInput
                multiline
                rows={ rows }
                variant="outlined"
                id={ id } 
                { ...inputProps } 
                inputProps={ newInputProps }
                error={ error }
            />
        </FormControl>
    )
}

export default MultiLineInput
