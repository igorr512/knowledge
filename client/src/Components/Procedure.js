import { Card, PopoverPaper } from "@mui/material";
import "./Procedure.css";
import ReactQuill from "react-quill";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

const Procedure = (props) => {
  console.log(props);
  const [showShortText, setShowShortText] = useState(true);
  const maxLetters = 100;
  const isLongText = props.text.length > maxLetters;
  const shortText = props.text.substring(0, maxLetters) + "...";
  //const text = isLongText?  props.text.substring(0, maxLetters) + '...' : props.text;

  const iconArrowClick = () => {
    setShowShortText(!showShortText);
    console.log(showShortText);
  };
  return (
    <div className="container">
      <ReactQuill
        value={
          isLongText ? (showShortText ? shortText : props.text) : props.text
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
