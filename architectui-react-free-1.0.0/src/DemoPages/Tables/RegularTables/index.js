import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import TableDark from './Examples/TableDark';
import TableStriped from './Examples/TableStriped';


const RegularTables = (props) => {
    return (
        <Fragment>

                <Row>
                    <Col lg="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Table dark</CardTitle>
                                <TableDark/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="main-card mb-3">
                            <CardBody>
                                <CardTitle>Table striped</CardTitle>
                                <TableStriped/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
        </Fragment>
    );
};

export default RegularTables;
