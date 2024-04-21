import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import './CreateBoard.css';


export default function CreateBoard(){
    return(
        <div className='create-board-bg'>
            <Sidebar />
            <Link to="/BoardModel" id="create-board-btn"> <button>Create New Board</button>  </Link>    
            <div className="circle1"></div>
            <div className="circle2"></div>

        </div>
    );
} 