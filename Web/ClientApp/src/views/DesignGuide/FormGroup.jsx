import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"

import Check from "@material-ui/icons/Check"
import FiberManualRecord from "@material-ui/icons/FiberManualRecord"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import PriorityHigh from "@material-ui/icons/PriorityHigh"
import Warning from "@material-ui/icons/Warning"
import Close from "@material-ui/icons/Close"
import Favorite from "@material-ui/icons/Favorite"

import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Card from "components/Card/Card.js"
import CardHeader from "components/Card/CardHeader.js"
import CardText from "components/Card/CardText.js"
import CardBody from "components/Card/CardBody.js"
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from "components/CustomButtons/Button.js"

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
import Divider from '@material-ui/core/Divider'

import styles from "assets/jss/material-dashboard-pro-react/views/formGroupStyle.js"

const useStyles = makeStyles(styles);

function FormGroup() {

    const [checked, setChecked] = React.useState([24, 22]);
    const [selectedValue, setSelectedValue] = React.useState(null);

    const handleChange = event => {
        setSelectedValue(event.target.value);
    };

    const handleToggle = value => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
    
    const dropDownData = [
        { 
            value: "Paris",
            text: "Paris"
        },
        {
            value: "Rome",
            text: "Rome"
        },
        {
            value: "New York",
            text: "New York"
        },
        {
            value: "Miami",
            text: "Miami"
        }
    ]

    const classes = useStyles();
    return (
        <GridItem xs={12} sm={12} md={12}>
            <Card>
                <CardHeader color="rose" text>
                    <CardText color="rose">
                        <h4 className={classes.cardTitle}>Form Elements</h4>
                    </CardText>
                </CardHeader>
                <CardBody>
                    <form>
                        <GridContainer>
                            <GridItem xs={12} sm={2}>
                                <FormLabel className={classes.labelHorizontal}>
                                    Auto Focus
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={10}>
                                <CustomInput
                                    id="auto-focus"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        style: { fontSize: 20 },
                                        placeholder: "",
                                    }}
                                    autoFocus
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={2}>
                                <FormLabel className={classes.labelHorizontal}>
                                    Text Field
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={10}>
                                <CustomInput
                                    id="help-text"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        style: { fontSize: 20 },
                                        placeholder: "",
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={2}>
                                <FormLabel className={classes.labelHorizontal}>
                                    Number Field
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={10}>
                                <CustomInput
                                    id="help-text"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "number",
                                        style: { fontSize: 20 },
                                        placeholder: ""
                                    }}
                                />
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={12} sm={2}>
                                <FormLabel className={classes.labelHorizontal}>
                                    Password
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={10}>
                                <CustomInput
                                    id="placeholder"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "password",
                                        style: { fontSize: 20 }
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        
                        <GridContainer>
                            <GridItem xs={12} sm={2}>
                                <FormLabel className={classes.labelHorizontal}>
                                    Placeholder
                                </FormLabel>
                            </GridItem>
                            <GridItem xs={12} sm={10}>
                                <CustomInput
                                    id="Disabled"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        type: "text",
                                        style: { fontSize: 20 },
                                        placeholder: "Disabled",
                                        disabled: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>

                        <GridContainer>
                            <GridItem xs={12} sm={6}>
                                <GridContainer>
                                    <GridItem xs={12} sm={5}>
                                        <FormLabel
                                            className={
                                            classes.labelHorizontal +
                                            " " +
                                            classes.labelHorizontalRadioCheckbox
                                            }
                                        >
                                            Checkboxes and radios
                                        </FormLabel>
                                    </GridItem>
                                    <GridItem xs={12} sm={7}>
                                        <div
                                            className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                            }
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        onClick={() => handleToggle(3)}
                                                        checkedIcon={
                                                            <Check className={classes.checkedIcon} />
                                                        }
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot
                                                        }}
                                                    />
                                                }
                                                classes={{
                                                    label: classes.label,
                                                    root: classes.labelRoot
                                                }}
                                                label="First Checkbox"
                                            />
                                        </div>
                                        <div
                                            className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                            }
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        tabIndex={-1}
                                                        onClick={() => handleToggle(4)}
                                                        checkedIcon={
                                                            <Check className={classes.checkedIcon} />
                                                        }
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot
                                                        }}
                                                    />
                                                }
                                                classes={{
                                                    label: classes.label,
                                                    root: classes.labelRoot
                                                }}
                                                label="Second Checkbox"
                                                />
                                        </div>
                                        <div
                                            className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                            }
                                        >
                                            <FormControlLabel
                                            control={
                                                <Radio
                                                checked={selectedValue === "a"}
                                                onChange={handleChange}
                                                value="a"
                                                name="radio button demo"
                                                aria-label="A"
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
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot
                                            }}
                                            label="First Radio"
                                            />
                                        </div>
                                        <div
                                            className={
                                            classes.checkboxAndRadio +
                                            " " +
                                            classes.checkboxAndRadioHorizontal
                                            }
                                        >
                                            <FormControlLabel
                                            control={
                                                <Radio
                                                checked={selectedValue === "b"}
                                                onChange={handleChange}
                                                value="b"
                                                name="radio button demo"
                                                aria-label="B"
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
                                                />
                                            }
                                            classes={{
                                                label: classes.label,
                                                root: classes.labelRoot
                                            }}
                                            label="Second Radio"
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                            
                            <GridItem xs={12} sm={6}>
                                <GridContainer>
                                    <GridItem xs={12} sm={6}>
                                        <legend className={ classes.dropdownLegend }>Dropdown & Dropup</legend>
                                        <CustomDropdown id="dropdown" menuList={ dropDownData } fullWidth />
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>

                        <Divider className={ classes.divider } />

                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.cardHeader}>
                                    <h4 className={classes.buttonGroupTitle}>Pick your Color</h4>
                                </div>
                                <div className={classes.cardContentLeft}>
                                    <Button color="primary" size="lg" className={classes.marginRight}>
                                        Primary
                                    </Button>
                                    <Button color="info" size="lg" className={classes.marginRight}>
                                        Info
                                    </Button>
                                    <Button color="success" size="lg" className={classes.marginRight}>
                                        Success
                                    </Button>
                                    <Button color="warning" size="lg" className={classes.marginRight}>
                                        Warning
                                    </Button>
                                    <Button color="danger" size="lg" className={classes.marginRight}>
                                        Danger
                                    </Button>
                                    <Button color="rose" size="lg" className={classes.marginRight}>
                                        Rose
                                    </Button>
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.cardHeader}>
                                    <h4 className={classes.buttonGroupTitle}>Buttons with Label</h4>
                                </div>
                                <div className={classes.cardContentRight}>
                                <Button className={classes.marginRight} size="lg">
                                    <KeyboardArrowLeft className={classes.icons} /> Left
                                </Button>
                                <Button className={classes.marginRight} size="lg">
                                    Right <KeyboardArrowRight className={classes.icons} />
                                </Button>
                                <Button color="info" size="lg" className={classes.marginRight}>
                                    <PriorityHigh className={classes.icons} /> Info
                                </Button>
                                <Button color="success" size="lg" className={classes.marginRight}>
                                    <Check className={classes.icons} /> Success
                                </Button>
                                <Button color="warning" size="lg" className={classes.marginRight}>
                                    <Warning className={classes.icons} /> Warning
                                </Button>
                                <Button color="danger" size="lg" className={classes.marginRight}>
                                    <Close className={classes.icons} /> Danger
                                </Button>
                                </div>
                            </GridItem>
                        </GridContainer>
                        
                        <GridContainer>
                            
                            <GridItem xs={12} sm={12} md={6}>
                                <div className={classes.cardHeader}>
                                    <h4 className={classes.buttonGroupTitle}>Pick your Style</h4>
                                </div>
                                <div className={classes.cardContentRight}>
                                    <Button color="primary" size="lg" className={classes.marginRight}>
                                        Default
                                    </Button>
                                    <Button color="primary" size="lg" round className={classes.marginRight}>
                                        round
                                    </Button>
                                    <Button color="primary" size="lg" round className={classes.marginRight}>
                                        <Favorite className={classes.icons} /> with icon
                                    </Button>
                                    <Button
                                        justIcon
                                        round
                                        color="primary"
                                        className={classes.marginRight}
                                        size="lg"
                                    >
                                        <Favorite className={classes.icons} />
                                    </Button>
                                    <Button color="primary" size="lg" simple className={classes.marginRight}>
                                        simple
                                    </Button>
                                </div>
                            </GridItem>
                        </GridContainer>
                    </form>
                </CardBody>
            </Card>
        </GridItem>
    )
}

export default FormGroup
