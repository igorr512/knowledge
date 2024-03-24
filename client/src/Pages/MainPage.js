import SearchBar from "../Components/SearchBar";
import Procedures from "../Layouts/Procedures";
import "./MainPage.css";
const data = [
    {title:"blabla",text:"<p>ttt</p>"},
    {title:"blabla",text:"<p>ttt</p>"},
    {title:"blabla",text:"<h1><u>This is a title</u></h1><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p>"},
];
const MainPage = () => {
    return (
        <div className="container-outer">
            {/* <div className="container-inner"> */}
                {/*<SearchBar></SearchBar>*/}
                <Procedures procedureArray={data}></Procedures>
            {/* </div> */}
            
        </div>
    );
};
export default MainPage;
