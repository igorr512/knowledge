import { Card } from "@mui/material";
import ReactQuill from "react-quill";
const Procedure = (props) =>{

    return(
        <ReactQuill value={props.text}
        readOnly={true}
        theme="bubble"
        ></ReactQuill>
    );
}
export default Procedure;