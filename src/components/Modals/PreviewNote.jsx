import React from 'react'
import { IoClose } from "react-icons/io5";

const PreviewNote = ({note,closeModal,editModal}) => {



  return (
    <div className={` fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}>
                <div className='modal-back'></div>
                <div className='modal rounded-xl w-[70%] bg-white shadow-xl p-5'>
                    <div className="modal-header text-2xl p-2">
                        <h1>{note.title}</h1>
                        <div className=' text-black-500 cursor-pointer hover:text-red-500 transition duration-200 active:translate-y-[2px]'>
                            <IoClose onClick={closeModal} />
                        </div>
                    </div>
                    <div className="modal-body mt-5">
                        <div className='my-4'>
                            <textarea name="content" id="content" rows={15} className='w-full border-2 border-gray-300 rounded-lg p-2 mt-2' defaultValue={note.content} readOnly></textarea>
                        </div>
                    </div>
                    <div className='flex items-center justify-end mt-5'>
                        <button onClick={editModal} className='bg-blue-500 cursor-pointer hover:bg-blue-700 transition duration-200 active:translate-y-[2px] text-white px-4 py-2 rounded flex gap-2 items-center text-center'>Edit</button>
                    </div>
                </div>
            </div>
  )
}

export default PreviewNote