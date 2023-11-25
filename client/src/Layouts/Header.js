import "./Header.css";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
const Header = () => {
    return (
        <div className="header">
            <button> Hello </button>
            <div>
                <IconButton>
                    <AddIcon />{" "}
                </IconButton>
                <button> Hello </button>
            </div>
        </div>
    );
};
export default Header;
