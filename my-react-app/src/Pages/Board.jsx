import './Board.css';
import Sidebar from '../Components/Sidebar.jsx';
import KanbanBoard from './KanbanBoard.jsx';

export default function Board() {
    return (
        <div className="board">
            <Sidebar />
            <div className="input-board-name">
                <input
                    type="text"
                    id="BoardName"
                    placeholder="Board Name"
                    required
                    readOnly // Add the readOnly attribute here
                />
               
            </div>
            <KanbanBoard />
            <div className="small-circle-board"></div>
        </div>
    );
}
