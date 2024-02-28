import './HomeComponent.css';

const HomeComponent = () => {
    return (
        <form action="">
            <div className="home-page">
                <div className="input-box">
                    <div>
                        <input type="text" aria-label="add title" className="input-id" placeholder='Enter Task'/>
                    </div>
                    <div>
                        <button className="add-btn" type='submit'>Add</button> 
                    </div>
                </div>
            </div>
        </form>
     );
}
 
export default HomeComponent;