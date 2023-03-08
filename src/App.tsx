import NotesList from './components/NotesList';
import { TextEditorProvider } from './TextEditor';
import TextEditor from './TextEditor/TextEditor';
import Tools from './Tools/Tools';

function App() {
  return (
    <>
      <NotesList />
      <TextEditorProvider >
        <TextEditor />
        <Tools />
      </TextEditorProvider>
    </>
  );
}

export default App;
