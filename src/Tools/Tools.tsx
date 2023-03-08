import { Editor } from 'draft-js'
import { useEditorApi } from '../TextEditor'

export default function Tools() {
  const editor = useEditorApi()
  console.log(editor.editorState)
  return (
    <>
       {/* <Editor 
          editorState={editor.editorState}
          onChange={console.log}
      /> */}
    </>
  )
}
