import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loding = () => {
    return (
        <div className='w-50 mx-auto d-block'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    );
};

export default Loding;