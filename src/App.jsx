import './App.css'
import Navbar from './components/Navbar'
import NoteCard from './components/NoteCard'
import { FaPlus } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react';
import AddNote from './components/Modals/AddNote'
import PreviewNote from './components/Modals/PreviewNote';
import EditNote from './components/Modals/EditNote';
import Swal from 'sweetalert2';



function App() {

  const date = new Date();

  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  const [note, setNote] = useState({
    id: "",
    title: "",
    content: ""
  });

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [nNotes, setNNotes] = useState(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []);

  const addnote = (title, content) => {
    const newNote = {
      id: Math.random(),
      title: title,
      content: content
    };

    setNNotes((prevNotes) => [...prevNotes, newNote]);

    Swal.fire({
      icon: 'success',
      title: 'Note added successfully',
      text: 'You can view your note in the list.',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const deleteNote = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setNNotes((prevNotes) => prevNotes.filter((nte) => nte.id !== id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your note has been deleted.',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

  }

  // Modal'ı açma fonksiyonu
  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  // Modal'ı kapatma fonksiyonu
  const closeModals = () => {
    setIsPreviewModalOpen(false);
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  // Edit modal'ı açma fonksiyonu
  const openEditModal = () => {
    setIsEditModalOpen(true);
  }

  // Veri gönderme işlemi
  const handleSubmit = (nte) => {
    setNote(nte);
    openPreviewModal();
  };

  // Veri güncelleme fonksiyonu
  const updateNote = (id, title, content) => {
    const updatedNotes = nNotes.map((nte) => {
      if (nte.id === id) {
        return { ...nte, title: title, content: content };
      }
      return nte;
    });
    setNNotes(updatedNotes);
  }

  // localStorage'dan veri al
  useEffect(() => { localStorage.setItem("notes", JSON.stringify(nNotes)) }, [nNotes]);

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white shadow-xl rounded-lg p-5 w-[90%] h-[90%]'>
          <div className="card-header">
            <div className="flex items-center justify-between">
              <div className='flex items-center gap-3'>
                <div className="h-15 border-l-8 border-blue-400 rounded-2xl"></div>
                <div className='flex justify-center flex-col'>
                  <h1 className='text-3xl font-semibold'>My Notes</h1>
                  <h2 className='text-sm font-semibold text-blue-500'>{formattedDate}</h2>
                </div>

              </div>

              <button onClick={openAddModal} className='bg-blue-500 cursor-pointer hover:bg-blue-700 transition duration-200 active:translate-y-[2px] text-white px-4 py-2 rounded flex gap-2 items-center text-center hover:'><FaPlus /> New Note</button>
            </div>
          </div>

          {isAddModalOpen && <AddNote addnote={addnote} closeModal={closeModals} />}


          <div className="card-body mt-5 mx-6">



            <div className={`${nNotes.length === 0 ? "" : "hide"} text-center`}>
              <h1 className='text-2xl font-semibold'>Welcome to Simple Notepad</h1>
              <p className='mt-2'>This is a simple notepad application built with React.</p>
            </div>

            <div className='grid grid-cols-3 grid-rows-2 gap-5 mt-5'>
              {
                nNotes.map((nte) => (
                  <div key={nte.id}>
                    <NoteCard note={nte} delfunc={deleteNote} cClick={handleSubmit} />
                  </div>
                ))
              }
            </div>

          </div>


          {isPreviewModalOpen && <PreviewNote note={note} closeModal={closeModals} editModal={openEditModal} />}
          {isEditModalOpen && <EditNote note={note} closeModal={closeModals} updateNote={updateNote} />}

        </div>
      </div>
    </>
  )
}

export default App
