import React, { useState } from 'react';
import { Card, Row, Col, Form } from 'react-bootstrap';

const Buscador = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data
        .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.title.localeCompare(b.title)); // Orden alfabético

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="🔍 Busca por título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form.Group>

            <Row>
                {filteredData.map(post => (
                    <Col key={post.id} md={6} lg={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title className="h6">{post.title}</Card.Title>
                                <Card.Text className="small text-muted">
                                    {post.body.substring(0, 100)}...
                                </Card.Text>
                                <Card.Text className="text-primary">
                                    Usuario ID: {post.userId}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {filteredData.length === 0 && (
                <div className="text-center py-4">
                    <p>❌ No se encontraron posts con "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default Buscador;