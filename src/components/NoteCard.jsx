import React from 'react'
import { IoMdTrash } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const NoteCard = ({note, delfunc, cClick}) => {

    
    return (
        <div className='bg-white shadow-[0px_0px_10px_0.1px_rgba(0,0,0,0.5)] rounded-lg p-5 mt-5 h-full'>
            <div className="card-header flex items-center justify-between">

                <div className='flex items-center gap-3 cursor-pointer' onClick={() => cClick(note)}>
                    <div className="h-12 border-l-8 border-red-400 rounded-2xl"></div>
                    <div className='mr-2'>
                        <h1 className='text-xl font-semibold line-clamp-1'>{note.title}</h1>
                    </div>
                    
                </div>

                <div className='text-2xl text-red-500 cursor-pointer hover:text-red-700 transition duration-200 active:translate-y-[2px]'>
                    <IoMdTrash onClick={() => delfunc(note.id)} />
                </div>
            </div>
            <div className="card-body mt-3 line-clamp-3 cursor-pointer" onClick={() => cClick(note)}>
                <p>{note.content}</p>
            </div>


        </div>
    )
}

export default NoteCard