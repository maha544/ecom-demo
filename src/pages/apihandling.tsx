import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import UsersList from '../components/PostCards';

const apiUrl = 'https://fakestoreapi.com/products';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

const ApiHandling= () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [response, setResponse] = useState<string>('');

    const getData = () => {
        axios.get(apiUrl)
            .then((res) => {
                console.log('Get Data Successfully');
                setProductList(res.data);
                setResponse(JSON.stringify(res.data, null, 2));
            })
            .catch((err) => {
                console.log(err);
                setResponse('Unsuccessful, error: ' + err.message);
            });
    };

    const postData = () => {
        axios.post(apiUrl, {
            title: 'Product Name',
            price: 29.99,
            description: 'A new product description',
            category: 'electronics',
            image: 'https://via.placeholder.com/150/00FF00/0000FF'
        })
        .then((res) => {
            console.log(res.data);
            setResponse(JSON.stringify(res.data, null, 2));
        })
        .catch((error) => {
            console.log(error);
            setResponse('Unsuccessful, error: ' + error.message);
        });
    };

    const putData = () => {
        axios.put(`${apiUrl}/1`, {
            title: 'Updated Product Name',
            price: 19.99,
            description: 'An updated product description',
            category: 'electronics',
            image: 'https://via.placeholder.com/150/00FF00/0000FF'
        })
        .then((res) => {
            console.log(res.data);
            setResponse(JSON.stringify(res.data, null, 2));
        })
        .catch((error) => {
            console.log(error);
            setResponse('Unsuccessful, error: ' + error.message);
        });
    };

    const deleteData = () => {
        axios.delete(`${apiUrl}/1`)
            .then((res) => {
                console.log(res.data);
                setResponse('Deleted successfully');
            })
            .catch((error) => {
                console.log(error);
                setResponse('Unsuccessful, error: ' + error.message);
            });
    };

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Shopping Items</h1>
            <Button sx={{ margin: 1 }} variant="contained" color="primary" className="mb-3" onClick={getData}>
                GET
            </Button>
            <Button sx={{ margin: 1 }} variant="contained" color="secondary" className="mb-3" onClick={postData}>
                POST
            </Button>
            <Button sx={{ margin: 1 }} variant="contained" color="success" className="mb-3" onClick={putData}>
                PUT
            </Button>
            <Button sx={{ margin: 1 }} variant="contained" color="error" className="mb-3" onClick={deleteData}>
                DELETE
            </Button>
            <UsersList productList={productList} />
        </Container>
    );
};

export default ApiHandling;
