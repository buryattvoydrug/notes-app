import { convertFromRaw, convertToRaw, EditorState } from 'draft-js';
import { useEffect, useMemo, useState } from 'react'

export interface EditorStateI {
  editorState: EditorState,
  onChange: (state: EditorState) => void,
}

export const useEditor = (): EditorStateI => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  
  useEffect(() => {
    getEditorContent()    
  }, [])

  const getEditorContent = () => {
    const localSavedState = localStorage.getItem("currentEditorData")
    if (localSavedState) {
      const savedContent = convertFromRaw(JSON.parse(localSavedState))
      setEditorState(EditorState.createWithContent(savedContent))
    }
  }

  const saveEditorContent = (newState: EditorState) => {
    setEditorState(newState)
    const raw = convertToRaw(newState.getCurrentContent())
    localStorage.setItem("currentEditorData", JSON.stringify(raw));
  }

  return useMemo(() => ({
    editorState,
    onChange: saveEditorContent
  }), [editorState])
}
