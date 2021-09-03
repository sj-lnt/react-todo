import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';
import NotesApp from './components/notes-app/index.js';
const title = "Notes App";
function App() {
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilterNotes] = useState([])
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [testid, setTestId] = useState('allButton')
  const [errorClass, setErrorClass] = useState('')
  const updateValue = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setStatus(e.target.value)
    }

  }
  const addNotes = () => {
    if (title === '' || status === '') {
      setErrorClass('error')
      return
    }
    let data = [...notes,{
        'title': title,
        'status': status
      }]
    setNotes(data)
    setFilterNotes(data)
  }
  const removeErrorClass = (e) => {
    setErrorClass('')
  }
  const changeTap = (e) => {
    let filterData = JSON.parse(JSON.stringify(notes));
    let status = ''
    setFilterNotes(filterData);
    setTestId(e.target.dataset.testid)
    if (e.target.dataset.testid !== 'allButton') {
      let index = 0;
      while (index < notes.length) {
        if (notes.length && notes[index].status !== e.target.innerText) {
          console.log('ddddddddddd')
          delete filterData[index]
        }
        index += 1;
      }
      var filtered = filterData.filter(function () { return true });
      setFilterNotes(filtered)
    } else if (e.target.dataset.testid === 'activeButton') {
      status = 'ALL'
      setFilterNotes(notes)
    }
  }

  return (
    <div>
      <h8k-navbar />
      <NotesApp
        notes={filteredNotes}
        addNotes={addNotes}
        updateValue={updateValue}
        testid={testid}
        changeTap={changeTap}
        errorClass={errorClass}
        removeErrorClass={removeErrorClass}
      />
    </div>
  );
}

export default App;
