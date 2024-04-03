import { Card, PopoverPaper } from "@mui/material";
import "./Procedure.css";
import ReactQuill from "react-quill";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

// Functional component of a procedure
// Props:
// - text (string): The text that will be displayed in the procedure
// - maxLetters (int): The number that decides if the procedure is too long, -1 means not to check

const Procedure = (props) => {
    console.log(props);
    const [showShortText, setShowShortText] = useState(true);

    //const isLongText = props.text.length > props.maxLetters;
    let isLongText;
    if (props.maxLetters === -1) {
        isLongText = false;
    } else {
        if (props.text.length > props.maxLetters) {
            isLongText = true;
        } else {
            isLongText = false;
        }
    }

    const shortText = props.text.substring(0, props.maxLetters) + "...";
    //const text = isLongText?  props.text.substring(0, maxLetters) + '...' : props.text;

    const iconArrowClick = () => {
        setShowShortText(!showShortText);
        console.log(showShortText);
    };
    return (
        <div className="container">
            <ReactQuill
                value={
                    isLongText
                        ? showShortText
                            ? shortText
                            : props.text
                        : props.text
                }
                readOnly={true}
                theme="bubble"
            ></ReactQuill>
            {isLongText && (
                <div className="arrow-right">
                    <IconButton onClick={iconArrowClick}>
                        {showShortText ? (
                            <KeyboardArrowDownIcon />
                        ) : isLongText ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            ""
                        )}
                    </IconButton>
                </div>
            )}
        </div>
    );
};
export default Procedure;
