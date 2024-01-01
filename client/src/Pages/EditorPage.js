import { Button, TextField } from "@mui/material";
import Editor from "../Components/Editor";
import Tags from "../Layouts/Tags";
import "./EditorPage.css";
import { useState } from "react";
const EditorPage = () => {
    const [titleValue,setTitleValue] = useState("");
    const [editorText, setEditorText] = useState("");
    const [tagsArray, setTagsArray] = useState([]);

    const onChangeTitle = (event)=>{
        setTitleValue(event.target.value);
    }

    return (
        <div className="editorpage-layout">
            <div className="editorpage-inner">
                <div className="editorpage-positioning">
                    <TextField
                        label="Enter title.."
                        className="title-label"
                        value={titleValue}
                        onChange={onChangeTitle}
                    ></TextField>
                    <Editor text={editorText} setText={setEditorText}/>
                    {console.log(editorText)};
                </div>
                <div className="tags-submit-position">
                    <Tags tags={tagsArray} setTags={setTagsArray} />
                    <div className="button-spacing">
                        <Button variant="contained">Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditorPage;
