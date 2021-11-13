import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Car = (props) => {
    const{_id,name,img,fuel_type,engine,drive,pre_price,price,description,stock,rating}=props.car;
    return (
        <Col>
      <Card style={{height:'32rem'}}>
        <Card.Img style={{height:'14rem'}} variant="top" src={img} />
        <Card.Body>
        <Row className="mb-3">
            <Col className="text-start" xs={6} md={6}>
                <Card.Title>{name}</Card.Title>
                </Col>
            <Col className="bg-warning" xs={6} md={6}>
                <Card.Title className="text-decoration-line-through">{pre_price}</Card.Title>
                <Card.Title className="text-light">$ {price}</Card.Title>
                </Col>
        </Row>
        <Row>
            <Col xs={4} md={4}>
            <i style={{color:'grey'}} className="fas fa-gas-pump"> <span className="ps-1">Fuel Type</span> </i>
                <Card.Text>{fuel_type}</Card.Text>
                </Col>
            <Col xs={4} md={4}>
            <i style={{color:'grey'}} className="fab fa-searchengin"><span className="ps-1">Engine</span></i>
                <Card.Text>{engine}</Card.Text>
                </Col>
            <Col xs={4} md={4}>
            <i style={{color:'grey'}} className="fas fa-car"><span className="ps-1">Drive</span></i>
                <Card.Text>{drive}</Card.Text>
                </Col>
        </Row>
        <div className="text-start pt-3">
        <Button style={{backgroundColor:'#f0f2f5',border:'none',color:'#979797'}}>STOCK#{stock}</Button>
        </div>
       
        <div className="text-start pt-3">
            <NavLink to={`/cars/${_id}`}>
            <Button className="btn btn-danger">purchase</Button>
            </NavLink>
     
        </div>
          
        </Card.Body>
      </Card>
    </Col>
    );
};

export default Car;