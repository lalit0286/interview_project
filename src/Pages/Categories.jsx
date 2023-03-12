import React from 'react'
import SideBar from '../Component/verticalNavBar/SideBar'
import Box from '@mui/material/Box';
import { Input, Row, Col, Label } from "reactstrap";
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Button from '@mui/material/Button';
import CategoriesTable from './CategoriesTable';

function Categories() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <SideBar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Row style={{ marginTop: "80px" }} className="d-flex justify-content-around">
                    <h3><strong>Categories</strong></h3>

                        <Col xl="6" style={{ display: 'flex', flexGrow: 1 }}>
                            <OutlinedInput
                                placeholder="Enter your text here"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                sx={{ flexGrow: 1, height: '70%' }} // set the flex-grow to 1 for the input field
                            />
                        </Col>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Reorder <ImportExportIcon />
                            </Button>
                        </Col>
                        <Col xl="3">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Add Category {"+"}
                            </Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Col xl="11">
                            <CategoriesTable />
                        </Col>
                    </Row>
                </Box>
            </Box>
        </>
    )
}

export default Categories
