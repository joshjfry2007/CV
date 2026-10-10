import { useState } from "react";

function EducationInfo(){
    const [info, setInfo] = useState({sname: "",title:"",date:""});
    const [isEditing, setIsEditing] = useState(true);
    function handleSubmit(e){
        e.preventDefault();
        setIsEditing(false);
    }

    if(isEditing){
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="sname"><h3>Enter Educational Details : </h3></label>
                <input id="sname" placeholder="your School name " type="text" value={info.sname} onChange={(e) => setInfo({...info, sname : e.target.value})} required/>
                {/* <label htmlFor="email">Enter email:</label> */}
                <input placeholder="your Title of study " type="text" value={info.title} onChange={(e) => setInfo({...info, title : e.target.value})} required/>
                <input placeholder="Date " type="text" value={info.date} onChange={(e) => setInfo({...info, date : e.target.value})} required/>

                <button type="submit">Submit</button>
            </form>
        )
    }

    return(
        <div>
            <h3>{info.sname}</h3>
            <p>{info.title}</p>
            <p>{info.date}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    )
}

export default EducationInfo;