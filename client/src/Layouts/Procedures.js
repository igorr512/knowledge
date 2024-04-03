import Procedure from "../Components/Procedure";
import "./Procedures.css"
const Procedures = (props) =>{
    // A functional component that renders a group of procedures
    // Props:
    // - procedureArray (array): An array of objects, each with 'title' (string) property  and with 'text' (string) property  
    // - example:
    // - [{title:this,text:<h1>tttt</h1>...},{title:another,text:<p>tttt</p>...}]

    const maxLetters = 100;
    return(
        <>
        {props.procedureArray.map((procedure,index)=>(
            <div key={index} className="container"><Procedure text={procedure.text} maxLetters={maxLetters}></Procedure></div>
        ))}
        </>
    );

}
export default Procedures;