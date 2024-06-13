import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

type UsersListProps = {
    productList: Product[];
};

const UsersList: React.FC<UsersListProps> = ({ productList }) => {
    return (
        <div className="row">
            {productList.map(product => (
                <div key={product.id} className="col-md-4 mb-4">
                    <div className="card">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text"><strong>${product.price}</strong></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UsersList;
