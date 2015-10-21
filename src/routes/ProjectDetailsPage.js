
import React, { Component, PropTypes } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.css';
import '../assets/css/app.css';
import '../assets/js/bootstrap.js';

import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ProjectOverview from '../components/Site/ProjectOverview.jsx';


class ProjectDetailsPage extends Component {

    render() {
        return (
            <div>
                <Grid fluid={ true } params={ this.props.params }>
                    <Row params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 10 }
                             sm={ 10 }
                             lg={ 10 }
                             mdOffset={ 1 }
                             smOffset={ 1 }
                             lgOffset={ 1 }
                             params={ this.props.params }>
                            <h1 style={ {    textAlign: 'center',    fontSize: '50px',    fontWeight: 300,    letterSpacing: '1px'} } params={ this.props.params }><span params={ this.props.params }>Structor</span><span className="text-primary" params={ this.props.params }>Market</span></h1>
                            <p className="text-center" params={ this.props.params }>
                                <span params={ this.props.params }>Project detailed overview</span><span style={ {    marginLeft: '0.5em'} } params={ this.props.params }>or</span>
                                <Link
                                to="/"
                                style={ {    marginLeft: '0.5em'} }
                                params={ this.props.params }>
                                    <span params={ this.props.params }>Back Home</span>
                                    </Link>
                            </p>
                        </Col>
                    </Row>
                    <Row params={ this.props.params }>
                        <Col xs={ 12 }
                             md={ 10 }
                             sm={ 10 }
                             lg={ 10 }
                             lgOffset={ 1 }
                             mdOffset={ 1 }
                             smOffset={ 1 }
                             params={ this.props.params }>
                            <ProjectOverview params={ this.props.params }></ProjectOverview>
                            <p className="text-center" params={ this.props.params }>
                                <Link to="/"
                                      style={ {    marginLeft: '0.5em'} }
                                      params={ this.props.params }>
                                <span params={ this.props.params }>Back Home</span>
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            );
    }
}

export default ProjectDetailsPage;

