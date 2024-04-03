import { Chip, Menu, MenuItem, TextField } from "@mui/material";
import "./Tags.css";
import { useState } from "react";

const options = ["Object", "Message"];

const Tags = (props) => {
  // Tags state that will be moved outside of the component
  // const [tags, setTags] = useState(() => {
  //   if (!props.tagsArray) {
  //     return [];
  //   } else {
  //     return props.tagsArray;
  //   }
  // });
  // For Options bar
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectOptions, setSelectOptions] = useState(options); //Change with redux when available
  const [selectedOption, setSelectedOption] = useState("");
  // For textbox
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");

  const clickOptionHandler = (item) => {
    /**
     * A function that runs when a option is being clicked (the option that appearafter clicking the add tag)
     * @param item - The selected item that was clicked (from the options)
     */
    setSelectedOption(item);
    setIsOpen(true);
    handleClose();
  };
  const onChangeTextInput = (event) => {
    /**
     * a function that runs when the textbox is being changed (written to or deleted from)
     * @param event - the variable that is passed when the text in the textbox is changed
     */
    setText(event.target.value);
  };
  const handleKeyDown = (event) => {
    /**
     * a function that will run on every keystroke looking for the Enter press
     * when Enter press is found it will update the tags array with the new tag
     * * @param event - the variable that is passed when a keystroke is registerd
     */
    if (event.key === "Enter" && !event.shiftKey) {
      setIsOpen(false);
      props.setTags([...props.tags, { [selectedOption]: text }]);
      setText("");
      setSelectedOption("");
      console.log("BBB");
    }
  };

  const clickHandler = (event) => {
    /**
     * a function that runs when the "add tag" button is pressed
     * @param event - a variable that holds the position of the click, so to know where to open the options bar
     */
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    /**
     * a function that closes the options bar, it does so by setting the anchorEl to null
     */
    
    setAnchorEl(null);
  };
  const tagDeleteHandler = (index) =>{
    /**
     * a function that will run when the tag will be clicked (to delete it)
     * @param index - the index of the tag in the array
     */
    debugger;
    const updatedItems = props.tags.filter((_,i)=>i!==index);
    props.setTags(updatedItems);

  }

  return (
    <div className="tags-layout">
      <div>
        <Chip label="Add tag" color="success" onClick={clickHandler} />
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
          onKeyDown={handleKeyDown}
          value={text}
          onChange={onChangeTextInput}
        />
      )}
      {props.tags.length > 0 &&
        props.tags.map((tag,index) => (
          <Chip
            key={index}
            label={Object.keys(tag)[0] + ": " + tag[Object.keys(tag)[0]]}
            color="primary"
            onDelete={()=>tagDeleteHandler(index)}
          ></Chip>
        ))}
    </div>
  );
};
export default Tags;
