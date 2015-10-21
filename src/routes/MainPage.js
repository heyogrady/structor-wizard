
import React, { Component, PropTypes } from 'react';

import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.css';
import '../assets/css/app.css';
import '../assets/js/bootstrap.js';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import LandingImg from '../components/Site/LandingImg.jsx';
import ProjectThumbnailWrapper from '../components/Site/ProjectThumbnailWrapper.jsx';
import ProjectList from '../components/Site/ProjectList.jsx';


class MainPage extends Component {

    render() {
        return (
            <div>
                <div style={ {    margin: '2em 5% 0 5%',    fontSize: '16px',    borderBottom: '1px solid #fff'} } params={ this.props.params }>
                    <Grid fluid={ true } params={ this.props.params }>
                        <Row params={ this.props.params }>
                            <Col xs={ 6 }
                                 md={ 2 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://github.com/ipselon/structor"
                                       target="blank"
                                       params={ this.props.params }><span params={ this.props.params }>GitHub</span></a>
                                </p>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 2 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://github.com/ipselon/structor/wiki"
                                       target="blank"
                                       params={ this.props.params }><span params={ this.props.params }>StructorDocs</span></a>
                                </p>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 2 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://www.facebook.com/groups/1668757740011916/"
                                       target="blank"
                                       params={ this.props.params }><span params={ this.props.params }>FacebookGroup</span></a>
                                </p>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 2 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://www.youtube.com/playlist?list=PLAcaUOtEwjoR_U6eE2HQEXwkefeVESix1"
                                       target="blank"
                                       params={ this.props.params }><span params={ this.props.params }>YoutubeChannel</span></a>
                                </p>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 2 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://groups.google.com/forum/#!forum/structor-forum"
                                       target="blank"
                                       params={ this.props.params }><span params={ this.props.params }>GoogleGroup</span></a>
                                </p>
                            </Col>
                            <Col xs={ 6 }
                                 md={ 2 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://twitter.com/helmetrex"
                                       target="blank"
                                       params={ this.props.params }><span params={ this.props.params }>Twitter</span></a>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <h1 style={ {    textAlign: 'center',    fontSize: '50px',    fontWeight: 300,    letterSpacing: '1px'} } params={ this.props.params }><span params={ this.props.params }>Structor</span><span className="text-primary" params={ this.props.params }>Market</span></h1>
                <h3 className="under-title-text text-center" params={ this.props.params }><span params={ this.props.params }>Here you can find a variety of boilerplates ready to use in Structor</span></h3>
                <h3 className="under-title-text text-center" params={ this.props.params }><span style={ {    marginRight: '0.3em'} } params={ this.props.params }>Structor</span><span params={ this.props.params }>- user interface builder for ReactJS.</span><a href="https://github.com/ipselon/structor"
                                                                                                                                                                                                                                                          style={ {    marginLeft: '0.5em'} }
                                                                                                                                                                                                                                                          target="blank"
                                                                                                                                                                                                                                                          params={ this.props.params }><span params={ this.props.params }>Learn more...</span></a></h3>
                <div style={ {    margin: '0 5% 0 5%'} } params={ this.props.params }>
                    <LandingImg style={ {    width: '100%',    borderBottom: '1px solid #fff'} } params={ this.props.params }></LandingImg>
                </div>
                <div style={ {    marginTop: '4em'} } params={ this.props.params }>
                    <Grid fluid={ true } params={ this.props.params }>
                        <Row params={ this.props.params }>
                            <Col xs={ 12 }
                                 md={ 12 }
                                 sm={ 12 }
                                 lg={ 12 }
                                 params={ this.props.params }></Col>
                        </Row>
                        <Row params={ this.props.params }>
                            <Col xs={ 12 }
                                 sm={ 10 }
                                 md={ 10 }
                                 lg={ 10 }
                                 smOffset={ 1 }
                                 mdOffset={ 1 }
                                 lgOffset={ 1 }
                                 params={ this.props.params }>
                                <ProjectThumbnailWrapper params={ this.props.params }></ProjectThumbnailWrapper>
                                <ProjectList params={ this.props.params }></ProjectList>
                                <ProjectThumbnailWrapper params={ this.props.params }></ProjectThumbnailWrapper>
                            </Col>
                        </Row>
                    </Grid>
                </div>
                <div style={ {    margin: '100px 5% 0 5%',    fontSize: '16px',    height: '50px',    paddingTop: '1em',    borderTop: '1px solid #fff'} } params={ this.props.params }>
                    <Grid fluid={ true } params={ this.props.params }>
                        <Row params={ this.props.params }>
                            <Col xs={ 12 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 lgOffset={ 3 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <span params={ this.props.params }>Thank you for sharing</span>
                                </p>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="https://twitter.com/intent/tweet?text=Structor: UI builder for React&url=http://helmetrex.com"
                                       target="blank"
                                       params={ this.props.params }><span className="fa fa-twitter"
                                                                                                                                                                                               style={ {    width: '1.5em',    fontSize: '32px'} }
                                                                                                                                                                                               params={ this.props.params }></span></a>
                                </p>
                            </Col>
                            <Col xs={ 12 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <div style={ {    display: 'table',    width: '100%'} } params={ this.props.params }>
                                    <div style={ {    display: 'table-row'} } params={ this.props.params }>
                                        <div style={ {    display: 'table-cell',    verticalAlign: 'middle',    width: '100%',    height: '5em'} } params={ this.props.params }>
                                            <p className="text-center" params={ this.props.params }>
                                                <span params={ this.props.params }>HelmetRex © 2015</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={ 12 }
                                 md={ 4 }
                                 sm={ 4 }
                                 lg={ 2 }
                                 params={ this.props.params }>
                                <p className="text-center" params={ this.props.params }>
                                    <span params={ this.props.params }>Write to us</span>
                                </p>
                                <p className="text-center" params={ this.props.params }>
                                    <a href="mailto: support@helmetrex.com" params={ this.props.params }><span params={ this.props.params }>support@helmetrex.com</span></a>
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
            );
    }
}

export default MainPage;

