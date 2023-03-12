import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { CategoryData } from '../CategoryData';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}



export default function CategoriesTable() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        setCategory(CategoryData)
    })
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Category</StyledTableCell>
                        <StyledTableCell align="right">Products</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {category.map((product, id) => (
                        <StyledTableRow key={product.name}>
                            <StyledTableCell component="th" scope="row">
                                <img src={product.image} alt="" style={{height: '50px', width: '50px'}} />
                                <strong className='ms-2'>{product.name}</strong>
                            </StyledTableCell>
                            <StyledTableCell align='right'>{product.value}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}