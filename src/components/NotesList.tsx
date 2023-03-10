import React, { useEffect, useState } from 'react'
import { NoteElement } from './AddButton'
import NoteCard from './NoteCard'

export default function NotesList() {

  const [notes, setNotes] = useState<Array<NoteElement>>([])

  useEffect(() => {
    const localNotes = localStorage.getItem('notes')
    if (localNotes) {
      setNotes(JSON.parse(localNotes))
    }
  }, [])

  console.log(notes)

  return (
    <>
      {notes.map((item) => 
        <NoteCard/>
      )}
    </>
  )
}
