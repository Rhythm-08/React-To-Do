import './HomeComponent.css';
import { ChangeEvent, useEffect, useState } from 'react';

const HomeComponent = () => {

    const [task, setTask] = useState('');
    const [toDoList, setToDoList] = useState<string[]>([]);

    const handleSubmission = async (event: any) => {
        event.preventDefault();
        await postData(task);
        if (task.length) {
            setToDoList((prevToDoList) => [...prevToDoList, task]);
            setTask('');
        }
        console.log(toDoList);
    }

    const postData = async (data: string) => {
        fetch('http://localhost:3000/todoList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Post request successful: ', data);
            })
            .catch(error => {
                console.error('Error during post request: ', error);

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
            console.log('Requested data is here:', data);

            if (data && data.length > 0) {
                setToDoList([...data.map((list: any) => list?.data)]);
            }
        } catch (error) {
            console.error('Error during get request:', error);
        }
    };

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
            {
                toDoList.map((name, index) => (
                    <div key={index} className='list'>
                        <div className='list-block'>
                            <button className='task-complete'>Mark Complete</button>

                            <span className='task-name'>{name}</span>
                            <button className='task-delete'>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default HomeComponent;