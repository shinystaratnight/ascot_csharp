import React from "react"

import { makeStyles } from "@material-ui/core/styles"

import FormGroup from "./FormGroup"
// import TypographyGroup from "./TypographyGroup"
import ColourPalette from "./ColourPalette"
import GridContainer from "components/Grid/GridContainer.js"

function DesignGuide() {

    return (
        <GridContainer>
             <ColourPalette />
             <FormGroup />
            {/* <TypographyGroup />  */}
        </GridContainer>
    )
}

export default DesignGuide
