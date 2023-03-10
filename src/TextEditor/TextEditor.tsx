import { Editor } from 'draft-js'
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

