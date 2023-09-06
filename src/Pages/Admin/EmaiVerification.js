import React, { useEffect, useState } from 'react'
import { Alert, Card, Container, Spinner } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
import { verifyAdminEmail } from '../../AxiosHelper/apiHelper';

//show the spinner first 
//grab the c and e from the query string parameters
//create an axios funciton to call the server
//create api end point to receive the code 
//check if the combination of the email and code exist in the user table, if so activate the user and send email notification

export const EmaiVerification = () => {
    const [queryParams] = useSearchParams();
    const [isPending, setIsPending] = useState(true);
    const [response, setResponse] = useState({})

    useEffect(() => {
        const obj = {
            emailValidationCode: queryParams.get('c'),
            email: queryParams.get('e'),
        };
        // Call axios to call the server
        (async () => {
            const result = await verifyAdminEmail(obj);
            setResponse(result);
            setIsPending(false);
        })();

    }, [queryParams]);

    return (
        <Container>
            {
                isPending ? (
                    <Card className='p-3 m-auto' style={{ width: '20rem' }}>
                        <Spinner animation="border" role="status" className='m-auto' />
                        <h5>Email verification process please wait...</h5>
                    </Card>
                ) : (
                    response.message && (
                        <Alert variant={response.status === 'success' ? 'success' : 'danger'} className='m-auto text-center' style={{ width: '10rem' }}>
                            {response.message}
                        </Alert>
                    )
                )
            }
        </Container>
    );
}
