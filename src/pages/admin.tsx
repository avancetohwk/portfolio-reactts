import { Component, useState } from "react";
import ProgressBar from "../components/progressbar/progressbar";



const Admin = () => {
    const [files, setFile] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);


    const changeHandler = (e: any) =>{
        let selected = e.target.files;
        if(selected){
            setFile(selected);
            setError("");
        }else{
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }

    }

    return (
        <div>
            <input
            type='file'
            id='photo'
            name='photo'
            multiple={true}
            accept='image/png, image/jpeg'
            onChange={changeHandler}
            ></input>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {/* { files && <div>{file.name}</div>} */}
                { files && <ProgressBar files={files} setFile={setFile}></ProgressBar>}
            </div>
        </div>
    )
}
export default Admin;