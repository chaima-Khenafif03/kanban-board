import  { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import './Upload.css'; // Import your CSS file
import Sidebar from '../Components/Sidebar';

 export default function UploadFile() {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name;
            const fileType = fileName.split('.').pop();
            const newFile = { name: fileName, type: fileType };
            setUploadedFiles([...uploadedFiles, newFile]);
        }
    };

    const handleFileRemove = (fileName) => {
        const updatedFiles = uploadedFiles.filter((file) => file.name !== fileName);
        setUploadedFiles(updatedFiles);
    };

    return (
        <div>
            <Sidebar/>
            <div className="wrapperUpload">
                <div className="boxUpload">
                    <div className="input-bx">
                        <h2 className="upload-area-titleUpload">upload files</h2>
                        <form action="">
                            <input type="file" id="upload" accept=".doc,.docx,.pdf,.jpg,.png" hidden onChange={handleFileUpload} />
                            <label htmlFor="upload" className="upload-label">
                                <span><i> <FaCloudUploadAlt style={{color: "#3cb371",}} /></i></span>
                                <p>click to upload</p>
                            </label>
                        </form>
                    </div>
                    <div id="filewrapperUpload">
                        <h3 className="uploaded">upload document</h3>
                        {uploadedFiles.map((file, index) => (
                            <div className="showfileboxUpload" key={index}>
                                <div className="leftUpload">
                                    <span className="filetype">{file.type}</span>
                                    <h3>{file.name}</h3>
                                </div>
                                <div className="rightUpload">
                                    <span onClick={() => handleFileRemove(file.name)}>&#215;</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    );
}

