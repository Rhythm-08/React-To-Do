import './SidebarComponent.css'

interface SidebarComponentProps {
    onHistoryClick: () => void;
    onShowTaskClick: () => void;
}

const SidebarComponent: React.FC<SidebarComponentProps> = ({ onHistoryClick, onShowTaskClick }) => {
    return (
        <div className="sidebar-section">
            <div className='task-section' onClick={onShowTaskClick}>
                Tasks
            </div>
            <div className='history-section' onClick={onHistoryClick}>
                History
            </div>
        </div>
    );
}

export default SidebarComponent;