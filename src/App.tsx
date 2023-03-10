import { TextEditorProvider } from './TextEditor';
import TextEditor from './TextEditor/TextEditor';
import Tools from './Tools/Tools';

function App() {
  return (
    <>
      <TextEditorProvider >
        <>
          <Tools />
          <TextEditor />
        </>
      </TextEditorProvider>
    </>
  );
}

export default App;
