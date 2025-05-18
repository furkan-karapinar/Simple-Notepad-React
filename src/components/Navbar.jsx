import React from 'react'
import { BiSolidNotepad } from "react-icons/bi";

const Navbar = () => {
    return (
        <div className='text-2xl p-3 font-semibold shadow-xl bg-white sticky top-0 z-50 '>
            <div className='flex items-center justify-center gap-4'>
                <BiSolidNotepad className='text-4xl text-black' />
                <h1 className=''>Simple Notepad</h1>
            </div>
        </div>
    )
}

export default Navbar