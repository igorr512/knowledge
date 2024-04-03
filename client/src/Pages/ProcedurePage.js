import { useState } from "react";
import Procedure from "../Components/Procedure";


const temp = "<h1><u>This is a title</u></h1><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p><p>this is not </p><p><br></p>";

const ProcedurePage = () =>{
    const [text,setText] = useState(temp);

    //setText(temp);




    // Functional component of a page that displays a single procedure
    // Props:
    // - text (string): The text that will be displayed in the procedure
    return(
    <Procedure text={text}/>
    );
    
}
export default ProcedurePage;