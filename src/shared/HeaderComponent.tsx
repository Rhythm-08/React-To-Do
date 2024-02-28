import './HeaderComponent.css';

const HeaderComponent = () => {
    return ( 
        <div className="header-color">
            <div className="left-section">
                <img src="https://th.bing.com/th/id/R.6dffd49b9b21c72f529e3f076d147464?rik=b2v7zFPv8BUaZA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fto-do-list-png-the-power-of-a-to-do-list-imodelafrica-1024.png&ehk=%2f%2fJUZ%2fij5yJIw9XJ2oyR3jbzP%2bK8u8YwNodX%2f6zrSeU%3d&risl=&pid=ImgRaw&r=0" alt="todo-img" width="100px" height="100px" />
            </div>
            <div className="right-section">
                <div>
                    <h1>To Do List</h1>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderComponent;