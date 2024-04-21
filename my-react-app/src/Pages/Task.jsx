import { useState } from 'react';
import './Task.css';
import { Link } from 'react-router-dom';
const CardDetailsModal = () => {
    const [emojiListVisible, setEmojiListVisible] = useState(false);
    const [selectedEmoji, setSelectedEmoji] = useState('');

    const toggleEmojiList = () => {
        setEmojiListVisible(!emojiListVisible);
    };

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
        setEmojiListVisible(false); // Hide emoji list after selection
    };

    return (
        <div className='task-bg'>
            <div id="card-details-modal" className="modal">
            <div className="modal-content">
                <Link to='/Board'><span id="close-card-btn" className="closeTask">&times;</span></Link>
                <h2>Card Details :</h2>
                <form id="card-details-form">
                    <div className="input-group">
                        <label htmlFor="card-task">Task:</label>
                        <input type="text" id="card-task" placeholder="Enter task" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="card-description">Description:</label>
                        <textarea type="text" id="card-description" placeholder="Enter description" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="card-emoji">Emoji:</label>
                        <div className="emoji-dropdown">
                            <input
                                type="text"
                                id="card-emoji"
                                placeholder="Enter Emoji"
                                value={selectedEmoji}
                                readOnly
                                onClick={toggleEmojiList}
                            />
                            <div className={`emoji-list ${emojiListVisible ? 'visible' : ''}`}>
                                <div className="emoji-option" onClick={() => handleEmojiClick('😀')}>😀</div>
                                <div className="emoji-option" onClick={() => handleEmojiClick('😁')}>😁</div>
                                <div className="emoji-option" onClick={() => handleEmojiClick('😂')}>😂</div>
                                <div className="emoji-option" onClick={() => handleEmojiClick('😃')}>😃</div>
                                <div className="emoji-option" onClick={() => handleEmojiClick('💙')}>💙</div>
                                {/* Add more emoji options as needed */}
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="card-color">Card Color:</label>
                        <div className="color-options">
                            <div className="color-option" style={{ backgroundColor: '#3cb371' }}></div>
                            <div className="color-option" style={{ backgroundColor: '#add8e6' }}></div>
                            <div className="color-option" style={{ backgroundColor: '#ffa07a' }}></div>
                            <div className="color-option" style={{ backgroundColor: '#ffd700' }}></div>
                            <div className="color-option" style={{ backgroundColor: '#c0c0c0' }}></div>
                        </div>
                    </div>
                    {/* Date and time input fields */}
                    <div className="input-group">
                        <label htmlFor="card-date">Date and Time:</label>
                        <input type="datetime-local" id="card-date" required />
                    </div>
                    <button type="submit" id="save-card-btn" className='save-task'>Save Card</button>
                </form>
            </div>
        </div>
   
        </div>
    );    
        
};

export default CardDetailsModal;
