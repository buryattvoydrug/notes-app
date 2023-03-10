import { EditorState } from 'draft-js';
import React, { useEffect, useState } from 'react'
import App from './App';
import { NoteElement } from './components/AddButton';
import store from './store'

export default function AppContainer() {
  const [appState, setAppState] = useState({
    notes: store.get('notes'),
    activeNote: -1,
    isChanged: false
  })

  useEffect(() => {
    if (appState.isChanged) {
      store.set('notes', appState.notes);
      setAppState(prev => ({...prev, isChanged: false}));
      console.log('Сохранено')
    }
  },[appState])


  const onOpenNote = (id: number) => {
    setAppState(prev => ({
      ...prev,
      activeNote: id
    }))
  }

  const onAddNote = (note: NoteElement) => {
    let notes = [...appState.notes, note];
    setAppState(prev => ({
      ...prev,
      notes,
      isChanged: true
    }));
  }

  const onRemoveNote = () => {
    let updatedNotes = [...appState.notes.slice(0, appState.activeNote), ...appState.notes.slice(appState.activeNote + 1)];
    setAppState(prev => ({
      ...prev,
      notes: updatedNotes,
      activeId: appState.notes.length - 1,
      isChanged: true
    }));
  }

  return (
    <App
      notes={appState.notes}
      activeNote={appState.activeNote}
      onOpenNote={onOpenNote}
      onAddNote={onAddNote}
      onRemoveNote={onRemoveNote}
    />
  )
}
