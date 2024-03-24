import "./SearchBar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchBar = () => {
    return (
        <div className="search-container">
            <SearchOutlinedIcon></SearchOutlinedIcon>
            <input className="input-white"></input>
        </div>
    );
};

export default SearchBar;
