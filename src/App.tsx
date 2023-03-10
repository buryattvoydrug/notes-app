import { AppBar, Container, Fab, IconButton, Toolbar } from '@material-ui/core';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ListIcon from '@material-ui/icons/List';
import NotesList from './components/NotesList';
import { TextEditorProvider } from './TextEditor';
import TextEditor from './TextEditor/TextEditor';
import Tools from './Tools/Tools';
import './App.css'
import EditorPage from './pages/EditorPage';
import ListPage from './pages/ListPage';
import { EditorState } from 'draft-js';
import AddButton, { NoteElement } from './components/AddButton';

interface AppProps {
  notes: Array<EditorState>,
  activeNote: number,
  onOpenNote(id: number): void,
  onAddNote(note: NoteElement): void,
  onRemoveNote(): void,
}

function App({notes, activeNote, onOpenNote, onAddNote, onRemoveNote}: AppProps) {
  return (
    <>
    <Router>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Container style={{display: 'flex', justifyContent: 'space-between'}}>
            <Link to="/">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <>Заметки</>
              </IconButton>
            </Link>
            <Link to="/notes">
              <IconButton edge="start" color="inherit">
                <ListIcon/>
              </IconButton>
            </Link> 
          </Container>
          
        </Toolbar>
      </AppBar>
      <Container style={{marginTop: "80px"}}>

      <TextEditorProvider >
        <Routes>
            <Route path='/notes' element={<ListPage/>}/>
            <Route path='/' element={<EditorPage/>}/>
          </Routes>
          <AddButton onAddNote={onAddNote}/>
      </TextEditorProvider>
        
      </Container>
    </Router>
    </>
  );
}

export default App;
