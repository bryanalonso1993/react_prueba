import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import shortid from 'shortid';

const Root = () => {
    const [user, setUser] = useState('');
    const [task, setTask] = useState('');
    const [users, setUsers] = useState([]);
    const actionClick = e => {
        e.preventDefault();
        setUsers([...users, {user: user, task:task}])
    }
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                onChange={ e => setUser(e.target.value) } 
                                type="text" 
                                placeholder="Ingresar Usuario" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Registrar Tareas</Form.Label>
                            <Form.Control 
                            onChange={ e => setTask(e.target.value) } 
                            as="textarea" 
                            rows={3} />
                        </Form.Group>
                        <Button onClick={ actionClick } variant="primary" type="submit">
                          Registrar
                        </Button>
                    </Form>
                    </div>
                    <div className="col-sm-6">
                        <Table bordered hover responsive size="sm">
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Activity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length === 0 ? 
                                    (<tr><td>No hay datos</td><td>#</td><td>#</td></tr>):
                                    (
                                        users.map( element  => (
                                            <tr key={ shortid.generate() }>
                                                <td>{ element.user }</td>
                                                <td>{ element.task }</td>
                                                <td>
                                                    <div className="d-inline">
                                                        <button className="btn btn-primary btn-sm mx-2">EDITAR</button>
                                                        <button className="btn btn-danger btn-sm">ELIMINAR</button>
                                                    </div>
                                                </td>
                                            </tr>)
                                        )
                                    )                
                                }
                            </tbody>
                        </Table>
                    </div>    
                </div>                
            </div>                      
        </Fragment>
    )
}

export default Root;
