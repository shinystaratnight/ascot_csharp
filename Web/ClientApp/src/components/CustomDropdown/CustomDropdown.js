import React, { useState, useEffect } from "react"

import PropTypes from "prop-types"
import classNames from "classnames"
import { makeStyles } from "@material-ui/core/styles"

import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import styles from "assets/jss/material-dashboard-pro-react/components/customDropdownStyle.js"

const useStyles = makeStyles(styles);

function CustomDropdown(props) {

	const { 
		id,
		menuList,
		fullWidth,
		classeNames,
		disabled,
		name,
		handleDropdown,
		error,
		defaultValue,
		readOnly
	} = props

	const [value, setValue] = useState("")

	const classes = useStyles();
	
	const handleChange = (event) => {
		setValue(event.target.value)
		if ((handleDropdown !== null) & (handleDropdown !== undefined)) {
			handleDropdown(event)
		}
	}

	var formControlClasses;
	if (classeNames !== undefined) {
		formControlClasses = classNames(
			classeNames,
			classes.formControl
		);
	} else {
		formControlClasses = classes.formControl;
	}

	useEffect(() => {
		if (defaultValue !== undefined) {
			setValue(defaultValue)
		}
	}, [props])
	
	return (
		<FormControl variant="outlined" fullWidth={ fullWidth } className={ formControlClasses }>
			<Select
				id={ id }
				value={ value }
				onChange={ handleChange }
				className={ classes.select }
				disabled={ disabled }
				name={ name }
				error={ error }
				readOnly={ readOnly }
			>
				{
					menuList.map((menu, index) => (
						<MenuItem value={ menu.value } key={ index } className={ classes.menuItem }>{ menu.text }</MenuItem>
					))
				}
			</Select>
		</FormControl>
	)
}

CustomDropdown.propsTypes = {
	id: PropTypes.string,
	menuList: PropTypes.array,
	fullWidth: PropTypes.bool,
	classes: PropTypes.string,
	readOnly: PropTypes.bool
}

export default CustomDropdown
