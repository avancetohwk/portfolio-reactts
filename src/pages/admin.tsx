import { Component, useState } from "react";
import ProgressBar from "../components/progressbar/progressbar";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    example: string,
    exampleRequired: string,
    file:FileList
};

const Admin = () => {
    const [files, setFile] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
    };


    const changeHandler = (e: any) =>{
        let selected = e.target.files;
        setValue("file", selected)
        // if(selected){
        //     setFile(selected);
        //     setError("");
        // }else{
        //     setFile(null);
        //     setError("Please select an image file (png or jpeg)");
        // }

    }

    return (
        // <div>
        //     <input
        //     type='file'
        //     id='photo'
        //     name='photo'
        //     multiple={true}
        //     accept='image/png, image/jpeg'
        //     onChange={changeHandler}
        //     ></input>
        //     <div className="output">
        //         {error && <div className="error">{error}</div>}
        //         {/* { files && <div>{file.name}</div>} */}
        //         { files && <ProgressBar files={files} setFile={setFile}></ProgressBar>}
        //     </div>
        // </div>
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input 
            required={true}
            type="file"
            {...register("file")}
            id='photo'
            name='photo'
            multiple={true}
            accept='image/png, image/jpeg'
            onChange={changeHandler}
            />
            {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
    </form>
    )
}
export default Admin;