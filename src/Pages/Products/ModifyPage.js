import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Button, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductAction, getSingleProductAciton } from '../../Redux/Products/productAction';

export const ModifyPage = () => {
    const { _id } = useParams();
    console.log(_id)
    const dispatch = useDispatch();

    const { selectedProduct } = useSelector(state => state.products)

    useEffect(() => {
        _id && dispatch(getSingleProductAciton(_id))
    }, [_id, dispatch])

    const handelOnDelete = () => {
        if (window.confirm("are you sure you want to delete this item")) {
            const { thumbnail, images } = selectedProduct;
            const imgs = [thumbnail, ...images]
            console.log([...new Set(imgs)]);

            deleteProductAction(_id, [...new Set(imgs)])
        }
    }

    return (
        <Container>
            <Link to="/products">
                <Button variant="none">
                    <IoIosArrowBack /> Back
                </Button>
            </Link>
            <h1>Update Product</h1>
            <hr />
            <div className=''>Edit form goes here</div>

            <div className='text-end py-3'>
                <Button variant='danger' onClick={handelOnDelete}>Delete Button</Button>
            </div>

        </Container>
    );
};
