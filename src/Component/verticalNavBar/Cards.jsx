import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./verticalNavbar.css"
import Typography from '@mui/material/Typography';
import { Input, Row, Col, Label } from "reactstrap";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Product from '../../Product';
import { useState } from 'react';
import { useEffect } from 'react';
import Badge from '@mui/material/Badge';

export default function Cards() {
    const [productData, setProductData] = useState([])
    // To get ProductData
    useEffect(() => {
        setProductData(Product)
    }, [])
    const breadcrumbs = [
        <Link key="1" color="inherit" style={{ textDecoration: "none" }}>
            Boxers
        </Link>,
        <Link
            key="2"
            color="inherit"
            style={{ textDecoration: "none" }}
        >
            Shorts
        </Link>,
    ];
    return (
        <>
            <div className='mt-2'>
                <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                    <Badge color="error" badgeContent={12}>
                        <h6 className='mt-1'><strong>Boxers</strong></h6>
                    </Badge>
                </Stack>
            </div>
            <div className='d-flex jstify-content-center align-item-center '>
                {productData.map((product, id) => {
                    return (
                        <>
                            <Card sx={{ maxWidth: 250 }} sm="12" className="mt-2 ms-5 " key={id}>
                                <div className='productImage'>
                                    <CardMedia
                                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                                        component="img"
                                        alt="green iguana"
                                        height="200"
                                        image={product.image}
                                    />
                                </div>
                                <CardContent>
                                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                                        {breadcrumbs}
                                    </Breadcrumbs>
                                    <Row>
                                        <Col xl="8" md="6">
                                            <h6 style={{ whiteSpace: 'nowrap' }}><strong>{product.name}</strong></h6>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="2">
                                            <p><strong>{product.price}</strong> </p>
                                        </Col>
                                        <Col xl="2" className='ms-2'>
                                            <p style={{ textDecoration: "line-through" }}>{product.actualPrice}</p>
                                        </Col>
                                        <Col xl="6">
                                            <Stack direction="row" className='mt-0'>
                                                <p><Chip label={product.discount} size="small" style={{ backgroundColor: "#ef4444", color: "white" }} /></p>
                                            </Stack>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Typography variant="caption">{product.locations}</Typography>
                                        </Col>
                                        <Col>
                                            <Typography variant="caption">{product.variants}</Typography>
                                        </Col>
                                    </Row>
                                </CardContent>
                                <Stack direction="row" className="mb-2 ms-2">
                                    <Chip label={`${product.stock.status}-${product.stock.value}`} className={product.stock.status === "in stock" ? "bg-success text-white" : product.stock.status === "Out Of stock" ? "bg-danger text-white" : "bg-secondary text-white"
                                    } />
                                </Stack>
                            </Card>
                        </>

                    )
                })}
            </div>
        </>

    );
}