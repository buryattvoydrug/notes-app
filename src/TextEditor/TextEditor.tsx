import { convertFromRaw, convertToRaw, Editor, EditorState } from 'draft-js'
import { useEffect, useState } from 'react';

export default function TextEditor() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    getEditorContent()    
  }, [])

  const getEditorContent = () => {
    const localSavedState = localStorage.getItem("editorData")
    if (localSavedState) {
      const savedContent = convertFromRaw(JSON.parse(localSavedState))
      setEditorState(EditorState.createWithContent(savedContent))
    }
  }

  const saveEditorContent = (newState: EditorState) => {
    setEditorState(newState)
    const raw = convertToRaw(newState.getCurrentContent())
    localStorage.setItem("editorData", JSON.stringify(raw));
  }

  return (
    <div>
      <Editor 
        editorState={editorState}
        onChange={saveEditorContent}
      />
    </div>
  )
}

