import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Form, FormGroup } from 'react-bootstrap'
import { setSlectedOrder } from '../../Redux/Orders/OrderSlice'
import { getSingleOrder } from '../../Redux/Orders/OrderAction'

export const OrderEditFor = () => {
    const { _id } = useParams()
    const dispatch = useDispatch()
    const { orders, selectedOrder } = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getSingleOrder(_id))
    }, [dispatch, _id]);

    const { cart } = selectedOrder

    return (
        <div >
            {/* status  */}
            <div className="fw-bold py-2 d-flex justify-content-between">
                <div>Status: {selectedOrder?.status}</div>
                <div className=''>
                    <Form className='d-flex gap-1'>
                        <FormGroup>
                            <Form.Select>
                                <option value=''>-- Select --</option>
                                <option value='shipped'>Shipped</option>
                                <option value='cancelled'>Cancelled</option>
                            </Form.Select>
                        </FormGroup>
                        <Button variant={"warning"} type='submit'> Update</Button>
                    </Form>
                </div>
            </div>

            {/* buyer info */}
            <div className="shippinginfo card p-2 my-2">
                <h4>Shipping Details</h4>
                <hr />
                <p>
                    Order Date:{ } <br />
                    Name : {selectedOrder?.buyer?.fName} {selectedOrder?.buyer?.lName}<br />
                    Phone:  {selectedOrder?.buyer?.phone}<br />
                    Email:  {selectedOrder?.buyer?.email}<br />
                    Shipping Address: {selectedOrder?.shipping?.street}, {selectedOrder?.shipping?.state}, {selectedOrder?.shipping?.postcode},  {selectedOrder?.shipping?.country} <br />
                </p>
            </div>

            {/* payer info  */}
            <div className="paymentInfo card p-2 my-2">
                <h4>Payment Info </h4>
                <hr />
                <p>
                    Status: {selectedOrder?.paymentInfo?.status} <br />
                    Total Amount : {selectedOrder?.paymentInfo?.paidAmount} <br />
                    Paid Date:  {selectedOrder?.paymentInfo?.paidDate.substring(0, 10)}<br />
                    Method:  {selectedOrder?.paymentInfo?.method}<br />
                    Transaction ID: {selectedOrder?.paymentInfo?.transactionId} <br />
                </p>
            </div>

            {/* shopping info  */}
            <div className="cartDetail card p-2 my-2">
                <h4>Cart Detail</h4>
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Thumbnail</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item?.thumbnail}</td>
                                <td>{item?.productName}</td>
                                <td>{`$${item?.salesPrice}`}</td>
                                <td>{item?.qty}</td>
                                <td>{`$${item?.subTotal}`}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* history  */}
        </div>
    )
}
