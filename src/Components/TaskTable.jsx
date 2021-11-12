import React from 'react';
import { Table, Button } from 'reactstrap';

const TaskTable = (props) => {
    return (
        <div>
            <h3>Current Tasks</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Type</th>
                        <th>SubType</th>
                        <th>Details</th>
                        <th>Solved?</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.tasks.map((task, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{task.id}</th>
                                    <td>{task.type}</td>
                                    <td>{task.subType}</td>
                                    <td>{task.Details}</td>
                                    <td>{task.solved}</td>
                                    <td>
                                        <Button id={task.id} onClick={props.delete} color="danger">Delete</Button>|
                                        <Button id={task.id} onClick={e => props.update(e, task)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default TaskTable;