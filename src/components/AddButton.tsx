import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { EditorState } from 'draft-js';
import { useEditorApi } from '../TextEditor';

export interface NoteElement {
  editorState: EditorState,
  date: number,
}

interface AddButtonProps {
  onAddNote(note: NoteElement): void,
}

export default function AddButton({onAddNote}: AddButtonProps) {

  const { editorState } = useEditorApi();

  const onClickHandle = () => {
    const newNote: NoteElement = {
      editorState: editorState,
      date: +(new Date())
    };
    onAddNote(newNote);
  }

  return (
    <>
      <Fab 
        color="primary" 
        aria-label="add" 
        style={{position: "fixed", bottom: '20px', right: "20px"}}
        onClick={onClickHandle}
        >
        <AddIcon />
      </Fab>
    </>
  )
}
