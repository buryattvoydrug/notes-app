import { convertFromRaw, convertToRaw, EditorState, RichUtils } from 'draft-js';
import { useCallback, useEffect, useMemo, useState } from 'react'
import { InlineStyle } from './config';

export interface EditorStateI {
  editorState: EditorState,
  onChange: (state: EditorState) => void,
  toggleInlineStyle: (inlineStyle: InlineStyle) => void,
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean,
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

  const toggleInlineStyle = useCallback((inlineStyle: InlineStyle) => {
    setEditorState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = useCallback(
    (inlineStyle: InlineStyle) => {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(inlineStyle);
    },
    [editorState]
  );
  

  return useMemo(() => ({
    editorState,
    onChange: saveEditorContent,
    toggleInlineStyle,
    hasInlineStyle,
  }), [
    editorState,
    toggleInlineStyle,
    hasInlineStyle,
  ])
}