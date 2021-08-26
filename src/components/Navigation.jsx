import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Maps from './Maps';
import Alarms from './Alarms';
import Root from './Root';

const Navigation = () => {
    return (
            <Router>
                    <div className="container-fluid bg-danger mb-4">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="d-inline text-light">America Móvil</div>
                            </div>                            
                            <div className="col-sm-8">
                                <ListGroup className="justify-content-end" horizontal>
                                    <ListGroup.Item variant="info"><Link className="text-dark " to="/">root</Link></ListGroup.Item>
                                    <ListGroup.Item variant="info"><Link className="text-dark" to="/alarms">alarms</Link></ListGroup.Item>
                                    <ListGroup.Item variant="info"><Link className="text-dark" to="/maps">maps</Link></ListGroup.Item>
                                </ListGroup>                                
                            </div>                            
                        </div>                        
                    </div>
                    <Switch>
                        <Route path="/maps">
                            <Maps />
                        </Route>
                        <Route path="/alarms">
                            <Alarms />
                        </Route>
                        <Route path="/">
                            <Root />
                        </Route>
                    </Switch>
                
            </Router>
            );
}

export default Navigation;
