import React, { use, useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";
import Swal from 'sweetalert2';

const AddNote = ({ addnote, closeModal }) => {


    const showSwal = () => {
        Swal.fire({
            title: "<i>Warning</i>",
            text: 'Title and Content cannot be empty',
            icon: 'warning',
        })
    }


    const [inputTitle, setinputTitle] = useState(''); // Başlangıçta input boş olacak
    const [inputContent, setinputContent] = useState(''); // Başlangıçta input boş olacak

    const changeName = () => {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title === "" || content === "") {
            showSwal();
            return;
        }
        setinputTitle(title);
        setinputContent(content);
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }

    // inputTitle ve inputContent state'leri değiştiğinde çalışacak efekt
    useEffect(() => {
        if (inputTitle != "" && inputContent != "") {
            closeModal();
            addnote(inputTitle, inputContent);
            setinputTitle(''); // inputTitle'ı sıfırla
            setinputContent(''); // inputContent'ı sıfırla
        }
    }, [inputTitle, inputContent]); // inputTitle veya inputContent değişirse çalışır


    return (

        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}>
            <div className='modal-back'></div>
            <div className='modal rounded-xl w-[70%] bg-white shadow-xl p-5'>
                <div className="modal-header text-2xl p-2">
                    <h1>Add New Note</h1>
                    <div className=' text-black-500 cursor-pointer hover:text-red-500 transition duration-200 active:translate-y-[2px]'>
                        <IoClose onClick={closeModal} />
                    </div>
                </div>
                <div className="modal-body mt-5">

                    <div className='my-4'>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name='title' id='title' className='w-full border-2 border-gray-300 rounded-lg p-2 mt-2' />
                    </div>
                    <div className='my-4'>
                        <label htmlFor="content" className='mt-5'>Content:</label>
                        <textarea name="content" id="content" cols="30" rows="10" className='w-full border-2 border-gray-300 rounded-lg p-2 mt-2'></textarea>
                    </div>
                    <div className='flex items-center justify-end mt-5'>
                        <button onClick={changeName} className='bg-blue-500 cursor-pointer hover:bg-blue-700 transition duration-200 active:translate-y-[2px] text-white px-4 py-2 rounded flex gap-2 items-center text-center'>Save New Note</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddNote