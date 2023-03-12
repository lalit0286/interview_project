import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterModal from '../FilterModal';
import { Col } from 'reactstrap';
function ItemNavBar() {
    const [openModal, setOpenModal] = useState(false);

    const openFilterModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
        <div style={{marginTop:"80px"}}>
        <Col xl="4" md="4" sm="4" lg="4">
        <h4><strong>Item Library</strong></h4>
        </Col>
            <Grid container spacing={1} className="mt-1 gx-1">
                <Grid item xl={2}>
                    <Grid container spacing={0}> 
                        <Grid item  xl={7}>
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                All Items
                            </Button>
                        </Grid>
                        <Grid item xl={5} className="ms-3">
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                <strong>+</strong>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={8} xl={4} md={4} style={{ display: 'flex', flexGrow: 1 }}>
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
                </Grid>
                <Grid item xs={12} lg={5} xl={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={3} xl={3} md={3}>
                            <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }} onClick={openFilterModal}>
                                Filter <FilterAltIcon />
                            </Button>
                            {openModal && <FilterModal open={openModal} handleCloseModal={handleCloseModal} />}
                        </Grid>
                        <Grid item xl={3} md={3}>
                        <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                Sort <ImportExportIcon />
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={2} xl={2}>
                        <Button variant="contained" style={{ backgroundColor: "#e5e7eb", color: "black" }}>
                                <MoreHorizIcon />
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={4} xl={4}>
                        <Button variant="contained" style={{ backgroundColor: "#0d9488", color: "black" }}>
                                Add Item +
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </>
    );
}

export default ItemNavBar;
