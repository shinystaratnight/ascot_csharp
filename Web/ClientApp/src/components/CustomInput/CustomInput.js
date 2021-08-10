import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import OutlinedInput from '@material-ui/core/OutlinedInput';

import styles from "assets/jss/material-dashboard-pro-react/components/customInputStyle.js";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
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
    rows,
    value,
    startAdornment,
    inputRef
  } = props;

  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined
  });
  // const inputClasses = classNames({
  //   [classes.input]: true,
  //   [classes.whiteInput]: white
  // });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }
  var helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error
  });
  let newInputProps = {
    maxLength:
      inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
    minLength:
      inputProps && inputProps.minLength ? inputProps.minLength : undefined,
    fontSize:
      fontSize ? inputProps.fontSize : undefined,    
  };
 
  return (
    <FormControl {...formControlProps} className={ formControlClasses }>    
      <OutlinedInput 
        autoFocus={ autoFocus } 
        required 
        error={ error } 
        id={ id } 
        { ...inputProps } 
        inputProps={ newInputProps }
        startAdornment={ startAdornment } 
        ref={ inputRef }
      />
     
      {helperText !== undefined ? (
        <FormHelperText id={id + "-text"} className={helpTextClasses}>
          {helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  helperText: PropTypes.node,
  fontSize: PropTypes.string,
  autoFocus: PropTypes.bool,
  rows: PropTypes.number
};
