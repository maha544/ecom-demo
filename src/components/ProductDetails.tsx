import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const apiUrl = 'https://fakestoreapi.com/products';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`${apiUrl}/${id}`)
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch product details.');
                setLoading(false);
                console.error(err);
            });
    }, [id]);

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    if (!product) {
        return <div>No product found</div>;
    }

    return (
        <Container className="mt-5">
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    width="300"
                    image={product.image}
                    alt={product.title}
                    style={{ objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {product.title}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        ${product.price}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {product.description}
                    </Typography>
                    <Typography color="textSecondary">
                        Category: {product.category}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ProductDetails;
