import React, { useState, useEffect } from 'react';
import { auth } from '../Firebase'; // import your firebase config
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import upload from '../assets/file uplaod.png';
import illustration from '../assets/upload illustration.png'

export function UserPage() {
    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const user = auth.currentUser;
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('dragleave', handleDragLeave);
        document.addEventListener('drop', handleDrop);

        return () => {
            document.removeEventListener('dragover', handleDragOver);
            document.removeEventListener('dragleave', handleDragLeave);
            document.removeEventListener('drop', handleDrop);
        };
    }, []);

    if (!user || user == null || user == undefined) {
        toast.error("Not authorized to view this page. Please login first.")
        navigate('/login')
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);

        if (e.dataTransfer.files) {
            setImages([...e.dataTransfer.files]);
        }
    };

    const handleChange = (e) => {
        if (e.target.files) {
            setImages([...e.target.files]);
        }
    };

    const handleUpload = async () => {
        // Implement your image upload logic here
        // You can use the setImages state to get the selected images
    };

    return (
        // <div className={`user-page-container ${isDragOver ? 'drag-over' : ''}`}>
        //     <h1 className='upload-heading'>Welcome, {user && user.displayName}</h1>

        //     <label
        //         className="custom-file-upload"
        //         onDragOver={handleDragOver}
        //         onDragLeave={handleDragLeave}
        //         onDrop={handleDrop}
        //     >
        //         <input
        //             type="file"
        //             onChange={handleChange}
        //             multiple
        //             style={{ display: 'none' }}
        //         />
        //         <img className='upload-image' src={upload} alt="Upload Icon" />
        //         {isDragOver ? 'Drop Images Here' : 'Drag & Drop Images or Click to Select'}
        //     </label>
        // </div>

        <div className='upload'>
            <h1 className='upload-heading'>Welcome, {user && user.displayName}</h1>

            <div className='upload-main-content'>
                <div className='upload-container'>
                    <label 
                        className="upload-label"
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                    <img src={upload} alt="" />
                    <input type="file" onChange={handleChange} multiple style={{ display: 'none' }} />
                    </label>
                </div>

                <div>
                    <img src={illustration} alt="" />
                </div>
            </div>
        </div>
    );
}
