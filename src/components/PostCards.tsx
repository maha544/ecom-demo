import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

type PostCardsProps = {
    product: Product;
};

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    cursor: 'pointer',
    marginBottom: '20px',
    borderRadius: '15px',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    marginBottom: '20px',
}));

const ProductImage = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
}));

const IconContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '10px',
}));

const PostCards: React.FC<PostCardsProps> = ({ product }) => {
    const navigate = useNavigate();

    const cardClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <StyledCard onClick={cardClick}>
            <StyledCardContent>
                <ImageContainer>
                    <ProductImage src={product.image} alt={product.title} />
                </ImageContainer>
                <Typography variant="h5" component="h2">
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
                <IconContainer>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="add to cart">
                        <ShoppingCartIcon />
                    </IconButton>
                </IconContainer>
            </StyledCardContent>
        </StyledCard>
    );
};

type UsersListProps = {
    productList: Product[];
};

const UsersList: React.FC<UsersListProps> = ({ productList }) => {
    return (
        <Container>
            {productList.map((product, index) => (
                <PostCards key={index} product={product} />
            ))}
        </Container>
    );
};

export default UsersList;
