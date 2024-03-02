import './HomeComponent.css';
import { ChangeEvent, useEffect, useState } from 'react';

interface HomeComponentProps {
    showHistory: boolean;
    showTasks: boolean;
}
const HomeComponent: React.FC<HomeComponentProps> = ({ showHistory, showTasks = true }) => {
    const [task, setTask] = useState('');
    const [toDoList, setToDoList] = useState<object[]>([]);;


    const handleSubmission = async (event: any) => {
        event.preventDefault();
        const objectModal = { taskName: task, isCompleted: false, isDeleted: false };
        await postData(objectModal);
        if (task.length) {
            setToDoList((prevToDoList) => [...prevToDoList, objectModal]);
            setTask('');
        }
    }

    const postData = async (data: object) => {
        fetch('http://localhost:3000/todoList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // console.log('Post request successful: ', data);
            })
            .catch(error => {
                // console.error('Error during post request: ', error);

            });
    };

    const getToDoList = async () => {
        try {
            const response = await fetch('http://localhost:3000/todoList', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            // console.log('Requested data is here:', data);

            if (data && data.length > 0) {
                setToDoList([...data]);
            }
        } catch (error) {
            // console.error('Error during get request:', error);
        }
    };

    const handleCompletedTask = async (data: any) => {
        const sendData = data;
        sendData['isCompleted'] = true;
        try {
            const response = await fetch(`http://localhost:3000/todoList/${sendData?.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sendData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            getToDoList();

        }
        catch (e) {
            console.log(e);

        }

    }

    const handleDeletedTask = async (data: any) => {
        const sendData = data;
        sendData['isDeleted'] = true;
        try {
            const response = await fetch(`http://localhost:3000/todoList/${sendData?.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sendData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            getToDoList();

        }
        catch (e) {
            console.log(e);
        }
    }




    useEffect(() => {
        getToDoList();
    }, []);

    return (
        <>
            <form action="" onSubmit={handleSubmission}>
                <div className="home-page">
                    <div className="input-box">
                        <div>
                            <input type="text" aria-label="add title" className="input-id" placeholder='Enter Task' value={task}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} />
                        </div>
                        <div>
                            <button className="add-btn" type='submit'>Add</button>
                        </div>
                    </div>
                </div>
            </form>
            {showHistory ? (
                <div className="history-table">
                    <h2>History </h2>
                    {
                        toDoList.map((data: any, index: number) => (
                            <div key={index} >
                                {data.isCompleted && !data?.isDeleted && <div className='list'>
                                    <div className='list-block'>
                                        <button className='task-complete' type="button" onClick={() => handleCompletedTask(data)}>Mark Complete</button>
                                        <span className='task-name'>{data?.taskName}</span>
                                        <button className='task-delete' type="button" onClick={() => handleDeletedTask(data)}>Delete</button>
                                    </div>
                                </div>}
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="tasks-table">
                    <h2>Active Tasks</h2>
                    {
                        toDoList.map((data: any, index: number) => (
                            <div key={index} >
                                {!data.isCompleted && !data?.isDeleted && <div className='list'>
                                    <div className='list-block'>
                                        <button className='task-complete' type="button" onClick={() => handleCompletedTask(data)}>Mark Complete</button>
                                        <span className='task-name'>{data?.taskName}</span>
                                        <button className='task-delete' type="button" onClick={() => handleDeletedTask(data)}>Delete</button>
                                    </div>
                                </div>}
                            </div>
                        ))
                    }
                </div>
            )
            }
        </>
    );
}

export default HomeComponent;