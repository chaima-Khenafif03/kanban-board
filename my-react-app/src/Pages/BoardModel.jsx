
import './BoardModel.css';
import { Link } from 'react-router-dom';

export default function BoardModel(){
    return (
        <div className='board-bg'>
            <div id="board-details-modal" className="board-modal">
            <div className="board-modal-content">
                <Link to='/CreateBoard'> <span id="close-board-btn" className="closeBoard">&times;</span></Link>
                <h2>Board Details :</h2>
                <form id="board-details-form">
                    <div className="board-input-group">
                        <label htmlFor="board-task">Board Name:</label>
                        <input type="text" id="board-name" placeholder="Enter task" required />
                    </div>
                    <div className="board-input-group">
                        <label htmlFor="column-nbr">Columns number:</label>
                        <input type="text" id="column-nbr" placeholder="Enter column number" required />
                    </div>
                    <div className="board-input-group">
                        <label htmlFor="column-name">columns name:</label>
                        <input type="text" id="columns-name" placeholder="Enter column(s) name" required />
                    </div>
                    <div className="board-input-group">
                        <label htmlFor="column-position">Board Name:</label>
                        <input type="text" id="culomns-position" placeholder="Enter the position of the column" required />
                    </div>
                    
                    
                
                    <button type="submit" id="save-board-btn" className='save-board'>Save Board</button>
                </form>
            </div>
        </div>
   
        </div>
    );    
        
}
