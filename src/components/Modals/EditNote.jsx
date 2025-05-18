import React from 'react'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Swal from 'sweetalert2';


const EditNote = ({ note, closeModal, updateNote }) => {

    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    // onChange handler'ları tanımlıyoruz
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleUpdate = () => {
        if (title === "" || content === "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please fill in all fields.',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        else {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, change it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    updateNote(note.id, title, content);
                    closeModal();
                    Swal.fire({
                        title: 'Changed!',
                        text: 'Your note has been changed.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }


    }



    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}>
            <div className='modal-back'></div>
            <div className='modal rounded-xl w-[70%] bg-white shadow-xl p-5'>
                <div className="modal-header text-2xl p-2">
                    <h1>Edit Note</h1>
                    <div className=' text-black-500 cursor-pointer hover:text-red-500 transition duration-200 active:translate-y-[2px]'>
                        <IoClose onClick={closeModal} />
                    </div>
                </div>
                <div className="modal-body mt-5">

                    <div className='my-4'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' id='title' onChange={handleTitleChange} defaultValue={note.title} className='w-full border-2 border-gray-300 rounded-lg p-2 mt-2' />
                    </div>
                    <div className='my-4'>
                        <label htmlFor="content" className='mt-5'>Content:</label>
                        <textarea name="content" id="content" cols="30" rows="10" onChange={handleContentChange} className='w-full border-2 border-gray-300 rounded-lg p-2 mt-2' defaultValue={note.content}></textarea>
                    </div>
                    <div className='flex items-center justify-end mt-5'>
                        <button onClick={() => handleUpdate()} className='bg-blue-500 cursor-pointer hover:bg-blue-700 transition duration-200 active:translate-y-[2px] text-white px-4 py-2 rounded flex gap-2 items-center text-center'>Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditNote