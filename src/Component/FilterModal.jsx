import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { OutlinedInput } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { Input, Row, Col, Label } from "reactstrap";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height: "70%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function FilterModal({ open, handleCloseModal }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='d-flex justify-content-center align-item-center'>
                        <h6>Filters</h6>
                    </div>
                    <Divider />
                    <Row className='mt-3'>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Where
                            </Button>
                        </Col>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Category
                            </Button>
                        </Col>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }} className="ms-4">
                                Is
                            </Button>
                        </Col>
                        <Col xl="5">
                            <OutlinedInput placeholder="Enter your text here" sx={{ height: '70%' }} />
                        </Col>
                        <Col xl="1">
                            <CancelIcon />
                        </Col>
                    </Row>
                    <Row className='mt-1'>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                And
                            </Button>
                        </Col>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Inventory
                            </Button>
                        </Col>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }} className="ms-4">
                                Is
                            </Button>
                        </Col>
                        <Col xl="5">
                            <OutlinedInput placeholder="Enter your text here" sx={{ height: '70%' }} />
                        </Col>
                        <Col xl="1">
                            <CancelIcon />
                        </Col>
                    </Row>

                    <Row className='mt-1'>
                        <Col xl="2">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Or
                            </Button>
                        </Col>
                        <Col xl="3">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Sale Price
                            </Button>
                        </Col>
                        <Col xl="3" sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Less Than
                            </Button>
                        </Col>
                        <Col xl="3">
                            <OutlinedInput placeholder="Enter your text here" sx={{ height: '70%' }} />
                        </Col>
                        <Col xl="1">
                            <CancelIcon />
                        </Col>
                    </Row>
                    <Row className='mt-2 mb-3'>
                        <Col>
                            <Button variant="outlined" style={{ color: "#0d9488" }}>
                                Add Another Condition</Button>
                        </Col>
                    </Row>
                    <Divider />
                    <Row className='mt-3' >
                        <Col xl="6">
                            <Button variant="outlined" color='error'>reset filetrs</Button>
                        </Col>
                        <Col xl="3">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Cancel</Button>
                        </Col>
                        <Col xl="3">
                            <Button variant="contained" style={{ backgroundColor: "#0d9488",color:"black" }}>Save</Button>
                        </Col>
                    </Row>
                </Box>
            </Modal>
        </div>
    );
}