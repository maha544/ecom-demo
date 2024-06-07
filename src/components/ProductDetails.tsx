import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

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

    useEffect(() => {
        axios.get(`${apiUrl}/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container className='m-5'>
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
            <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
        </Container>
    );
};

export default ProductDetails;
