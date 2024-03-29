import Procedure from "../Components/Procedure";
import "./Procedures.css"
const Procedures = (props) =>{
    console.log(props);
    // props will containt array called "procedureArray" of title and texts of the procedures like:
    // [{title:this,text:<h1>tttt</h1>...},{title:another,text:<p>tttt</p>...}]
    return(
        <>
        {props.procedureArray.map((procedure)=>(
            <div className="container"><Procedure text={procedure.text} ></Procedure></div>
        ))}
        </>
    );

}
export default Procedures;