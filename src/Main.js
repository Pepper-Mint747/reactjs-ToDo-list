import React, {useState} from 'react';

const Main = () => {

    const [taskName, setTaskName] = useState("");
    const [taskList, setTaskList] = useState([]);


    function addTask() {
        setTaskList([...taskList, taskName])
        setTaskName("")
    }

    const taskListContent = taskList.map((task, index) => {

        return (
            <div>
                <p>{task}</p>
                <i className="fas fa-trash-alt" onClick={()=> deleteTask(index)}/>
            </div>
        )
    })

    function deleteTask(index) {
        let dupArray = [...taskList]
        dupArray.splice(index, 1)
        setTaskList(dupArray)
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>React TODO List</h1>

                    <input
                        type="text"
                        placeholder={"Enter task"}
                        className={"form-control"}
                        value={taskName}
                        onChange={(e) => {
                            setTaskName(e.target.value)
                        }}
                    />

                    <button
                        className={"btn btn-success"}
                        onClick={addTask}>
                        ADD
                    </button>

                    <br/>
                    {taskListContent}
                </div>
            </div>
        </div>
    );
};

export default Main;
