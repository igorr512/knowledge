import { Button, TextField } from "@mui/material";
import Editor from "../Components/Editor";
import Tags from "../Layouts/Tags";
import "./EditorPage.css";
const EditorPage = () => {
  return (
    <div className="editorpage-layout">
      <div className="editorpage-inner">
        <TextField label="Enter title.." className="title-label"></TextField>
        <Editor />
        <Tags />
        <Button variant="contained" className="submit-button">
          Submit
        </Button>
      </div>
    </div>
  );
};
export default EditorPage;
