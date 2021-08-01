import { Component, useState } from "react";
import ProgressBar from "../components/progressbar/progressbar";



const Admin = () => {
    const [file, setFile] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);


    const changeHandler = (e: any) =>{
        let selected = e.target.files[0];
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
            accept='image/png, image/jpeg'
            onChange={changeHandler}
            ></input>
            <div className="output">
                {error && <div className="error">{error}</div>}
                { file && <div>{file.name}</div>}
                { file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
            </div>
        </div>
    )
}
export default Admin;