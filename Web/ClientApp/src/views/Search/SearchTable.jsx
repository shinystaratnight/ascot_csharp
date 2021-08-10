import React from "react"
import { useTable, useGlobalFilter } from 'react-table'

import { makeStyles } from "@material-ui/core/styles"

import Card from "components/Card/Card.js"
import CardBody from "components/Card/CardBody.js"

import styles from "assets/jss/material-dashboard-pro-react/components/customTableStyle"

const useStyles = makeStyles(styles);

function SearchTable (props) {

    const { columns, data } = props

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups,
        rows, 
        prepareRow
    } = useTable({ columns, data }, useGlobalFilter)

    const classes = useStyles();

    return (
        <Card>
            <CardBody className={ classes.overflowX }>
                <table { ...getTableProps() } className={ classes.table }>
                    <thead className={ classes.thead }>
                        {
                            headerGroups.map((headerGroup) => (
                                <tr { ...headerGroup.getHeaderGroupProps() }>
                                    { headerGroup.headers.map((column) => (
                                        <th { ...column.getHeaderProps() } className={ classes.th }>
                                            { column.render('Header') }
                                        </th>
                                    )) }
                                    
                                </tr>
                            ))
                        }
                        
                    </thead>
                    <tbody { ...getTableBodyProps() }>
                        {
                            rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr { ...row.getRowProps() }>
                                        {
                                            row.cells.map((cell) => {
                                                return <td { ...cell.getCellProps()} className={ classes.td }>{ cell.render('Cell')}</td>
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </CardBody>
        </Card>
     )
}

export default SearchTable
