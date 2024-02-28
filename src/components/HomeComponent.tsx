import './HomeComponent.css';
import { ChangeEvent, useState } from 'react';

const HomeComponent = () => {

    const [task, setTask] = useState('');
    const [toDoList,setToDoList] = useState<string[]>([]);

    const handleSubmission = (event:any) => {
        event.preventDefault();
        if(task.length){
            setToDoList((prevToDoList) => [...prevToDoList, task]);
            setTask(''); 
        }
        console.log(toDoList);
        
    }

    return (
        <>
            <form action=""  onSubmit={ handleSubmission}>
                <div className="home-page">
                    <div className="input-box">
                        <div>
                            <input type="text" aria-label="add title" className="input-id" placeholder='Enter Task' value = {task}
                            onChange = {(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} />
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