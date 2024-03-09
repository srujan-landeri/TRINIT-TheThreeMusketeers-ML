import React, { useEffect } from 'react';

import { auth } from '../Firebase'; // import your firebase config
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

import upload from '../assets/file upload.png';
import illustration from '../assets/upload illustration.jpg'
import icon from "../assets/icon.png"

export function UserPage() {
    const user = auth.currentUser;
    const navigate = useNavigate();

    function signout(){
        auth.signOut().then(() => {
          navigate('/login')
        }).catch((error) => {
          console.log(error)
        });
      }

    useEffect(() => {

        // Not Logged in properly
        if(!user){
            navigate('/login');
        }

        const container = document.querySelector('.upload-main-content');
        container.addEventListener('dragover', handleDragOver);
        container.addEventListener('dragleave', handleDragLeave);
        container.addEventListener('drop', handleDrop);

        return () => {
            container.removeEventListener('dragover', handleDragOver);
            container.removeEventListener('dragleave', handleDragLeave);
            container.removeEventListener('drop', handleDrop);
        };
    }, []);

    function signout(){
        auth.signOut().then(() => {
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        });
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        document.querySelector('.upload-container').style.transform = 'scale(1.2)';
    };

    const handleDragLeave = () => {
        document.querySelector('.upload-container').style.transform = 'scale(1)';
    };

    const handleDrop = (e) => {
        e.preventDefault();
        document.querySelector('.upload-container').style.transform = 'scale(1)';

        if (e.dataTransfer.files.length > 0) {
            // Handle the dropped files here
            console.log('Files dropped:', e.dataTransfer.files);
            toast.success('Files dropped successfully');
        }
    };

    return (
        <div className='upload'>
            <div className='upload-heading'>
                <div>
                    <img src={icon} alt="" />
                    <h1>PaveGuardian</h1>
                </div>
                
                <button onClick={signout}>
                    Logout
                    <FaSignOutAlt />    
                </button>
            </div>

            <div className='upload-main-content'>
                <div className='upload-content'>
                    <h2>Upload images and scan for damaged roads</h2>
                    <div className='upload-container'>
                        <label className="upload-label">
                            <img src={upload} alt="" />
                            <input type="file" onChange={() => { }} multiple style={{ display: 'none' }} />
                            <p>UPLOAD / DRAG AND DROP IMAGES</p>
                        </label>
                    </div>
                </div>
                <div className='upload-image-container'>
                    <img src={illustration} alt="" />
                </div>
            </div>
        </div>
    );
}
