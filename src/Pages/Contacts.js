import React, {Component} from 'react';
import {Form ,Button, Container} from 'react-bootstrap'

class Contacts extends Component {
    render() {
        return (
            <Container className='mt-2' style={{width: '500px'}}>
                <h1 className='text-center'> Contact Us</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="enter email"></Form.Control>
                        <Form.Text>Well newer share your email with anyone else</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>

                </Form>
            </Container>
        );
    }
}

export default Contacts;