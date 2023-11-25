import { Chip, Menu, MenuItem, Paper, TextField } from "@mui/material";
import "./Tags.css";
import { useState, useRef } from "react";

const options = ["Object", "Message"];

const Tags = (props) => {
  const [tags, setTags] = useState(() => {
    if (!props.tagsArray) {
      return [];
    } else {
      return props.tagsArray;
    }
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectOptions, setSelectOptions] = useState(options); //Change with redux when available
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [text, setText] = useState("");

  const clickOptionHandler = (item) => {
    setSelectedOption(item);
    setIsOpen(true);
    console.log(item);
    handleClose();
  };
  const onChangeTextInput = (event) => {
    setText(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      setIsOpen(false);
      setTags([...tags, { [selectedOption]: text }]);
      setText("");
      setSelectedOption("");
      console.log("BBB");
    }
  };

  const clickHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="tags-layout">
      <div>
        <Chip label="Add tag" color="success" onClick={clickHandler} />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperComponent={Paper}
      >
        {selectOptions.map((option, index) => (
          <MenuItem
            key={index}
            value={option}
            onClick={() => clickOptionHandler(option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
      {isOpen && (
        <TextField
          id={selectedOption}
          label={selectedOption}
          placeholder="bb"
          onKeyDown={handleKeyDown}
          value={text}
          onChange={onChangeTextInput}
        />
      )}
      {console.log(tags)}
      {tags.length > 0 &&
        tags.map((tag) => (
          <Chip
            label={Object.keys(tag)[0] + ": " + tag[Object.keys(tag)[0]]}
            color="primary"
          ></Chip>
        ))}
    </div>
  );
};
export default Tags;
