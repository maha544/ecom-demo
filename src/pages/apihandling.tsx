import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import UsersList from '../components/PostCards';
import Navbar from '../components/Navbar';

const apiUrl = 'https://fakestoreapi.com/products';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const ApiHandling = () => {
    const [productList, setProductList] = useState<Product[]>([]);

    const getData = () => {
        axios.get(apiUrl)
            .then((res) => {
                console.log('Get Data Successfully');
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container className="mt-5">
            <Navbar />
            <h1 className="my-5 text-success">Shopping Items</h1>
            <div className="row">
                {productList.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><strong>${product.price}</strong></p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default ApiHandling;
