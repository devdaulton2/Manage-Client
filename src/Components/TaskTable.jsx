import React from 'react';
import { Table, Button } from 'reactstrap';
import TaskEdit from './TaskEdit';

const TaskTable = (props) => {
    console.log(props.tasks, "this is coming from the task table")
    return (
        <div>
            <h3>Current Tasks</h3>
            <hr />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Task ID</th>
                        <th>Type</th>
                        <th>SubType</th>
                        <th>Details</th>
                        <th>Solved?</th>
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
                                    <td>{task.details}</td>
                                    <td>{task.solved}</td>
                                    <td>
                                        <Button id={task.id} onClick={props.delete} color="secondary">Delete</Button>|
                                        <TaskEdit task={task} />
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