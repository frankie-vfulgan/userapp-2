import React from "react";
import {Col, Card} from "react-bootstrap";

function UserItem(props) {
    return (
        <div>
            <Col md="4">
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">User Details</Card.Subtitle>
                        <Card.Title>{props.user.username}</Card.Title>
                        <Card.Text>
                            <p>{props.user.email}</p>
                            <p>{props.user.gen}</p>
                        </Card.Text>
                        <Card.Link href="#">Edit</Card.Link>
                        <Card.Link href="#">Delete</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default UserItem;
