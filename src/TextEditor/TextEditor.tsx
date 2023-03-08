import { convertFromRaw, convertToRaw, Editor, EditorState } from 'draft-js'
import { useEffect, useState } from 'react';
import { useEditorApi } from './context';

export default function TextEditor() {
  const { editorState, onChange } = useEditorApi();

  return (
    <div>
      <Editor 
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  )
}

