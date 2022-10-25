import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header/Header';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='4' className=''>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <p><small>Copyright Reserved by RM Learning Point</small></p>
        </div>
    );
};

export default Main;