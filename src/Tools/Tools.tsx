import { useEditorApi } from '../TextEditor'
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import { Button, ButtonGroup } from '@material-ui/core';

export default function Tools() {
  const editor = useEditorApi()
  console.log(editor.editorState)
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0"
    }}>
      <ButtonGroup 
        // fullWidth
        color="primary" 
        aria-label="outlined primary"
        >
        <Button>
          <FormatBoldIcon />
        </Button>
        <Button>
          <FormatItalicIcon />
        </Button>
        <Button>
          <FormatUnderlinedIcon />
        </Button>
        <Button>
          <FormatStrikethroughIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
