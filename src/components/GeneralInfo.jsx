import { useState } from "react";

function GeneralInfo(){
    const [info, setInfo] = useState({name:"", email:"", phone:""});
    const [isEditing, setIsEditing] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        setIsEditing(false);
    }
    if(isEditing){
        return (
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="name"><h3>Enter Personal Details : </h3></label>
                <input key="name" placeholder="your name " type="text" value={info.name} onChange={(e) => setInfo({...info, name : e.target.value})} required/>
                {/* <label htmlFor="email">Enter email:</label> */}
                <input placeholder="example@domain.com" type="email" value={info.email} onChange={(e) => setInfo({...info, email : e.target.value})}/>
                <input placeholder="your phone number" type="tel" value={info.phone} onChange={(e) => setInfo({...info, phone : e.target.value})}/>

                <button type="submit">Submit</button>
            </form>
        )
    }

    return(
        <div>
            <h3>{info.name}</h3>
            <p>{info.email}</p>
            <p>{info.phone}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
    )
}

export default GeneralInfo