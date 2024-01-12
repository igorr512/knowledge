import { Button, TextField } from "@mui/material";
import axios from 'axios';
import Editor from "../Components/Editor";
import Tags from "../Layouts/Tags";
import "./EditorPage.css";
import { useState } from "react";
import config from '../Config';

const EditorPage = () => {
    const [titleValue,setTitleValue] = useState("");
    const [editorText, setEditorText] = useState("");
    const [tagsArray, setTagsArray] = useState([]);


    const onChangeTitle = (event)=>{
        setTitleValue(event.target.value);
    }
    const onProcedureSubmit = async () => {
        try{
            const url = 'http://' + config.backend + '/procedures/addProcedure';
            const response = await axios.post(url,{
                "title":titleValue,
                "content":editorText,
                "tags":tagsArray
            })
            console.log(response);
        }
        catch (error){

        }

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
                        <Button variant="contained" onClick={onProcedureSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditorPage;
