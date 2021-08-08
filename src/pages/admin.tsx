import { Component, useEffect, useState } from "react";
import ProgressBar from "../components/progressbar/progressbar";
import { useForm, SubmitHandler } from "react-hook-form";
import './admin.scss'
import UploadFiles from "../hooks/useStorage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
type Inputs = {
    example: string,
    exampleRequired: string,
    file:File[]
};

const Admin: React.FC = () => {
    const [files, setFile] = useState<any | null>(null);
    const [error, setError] = useState<any | null>(null);
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [selectedFiles, setSelectedFiles] = useState<any|null>();
    const [thumbnails, setThumbnails] = useState<any|null>();
    const [uploadData, setUploadData] = useState<any|null>();
    const [toggleChecked, setToggleChecked] = useState<boolean>(false);

    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        setUploadData(data.file);
    };

    //runs everytime selectedFile is updated
    useEffect(() => {
        if (!selectedFiles) {
            return
        }

        const thumbnails = selectedFiles && selectedFiles.map(function(element:File){
            return (
                <div className="thumbnail" >
                    <img className="thumbnail-img" data-img-name={element.name}  src={URL.createObjectURL(element)} />
                    <div className="thumbnail-overlay" onClick={thumbnailDeleteHandler} data-img-name={element.name}>
                    <FontAwesomeIcon className="thumbnail-icon"  icon={faTimesCircle} />
                        
                    </div>
                    
                    {/* <button onClick={thumbnailDeleteHandler}>x</button> */}
                </div>
                
               
            );
        });
        setThumbnails(thumbnails);
    }, [selectedFiles])

    const thumbnailDeleteHandler = (e:any)=>{
        console.log(selectedFiles)
        let fileName = e.currentTarget.getAttribute("data-img-name");
        if(fileName){
            setSelectedFiles(selectedFiles.filter((f:File) => f.name !== fileName));
        }
        console.log(e.currentTarget.getAttribute("data-img-name"))
        console.log(selectedFiles)
    }
   

    const changeHandler = (e: any) =>{
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFiles(undefined)
            setFile(null);
            setError("Please select an image file (png or jpeg)");
            return
        }

        let selectedFilesArray = [...e.target.files];
        setSelectedFiles(selectedFilesArray); //to create thumbnails
        //setValue("file", selectedFilesArray); //to add to react-hook-form submit data
    }

    UploadFiles(uploadData);
    
    return (
        //     <div className="output">
        //         {error && <div className="error">{error}</div>}
        //         {/* { files && <div>{file.name}</div>} */}
        //         { files && <ProgressBar files={files} setFile={setFile}></ProgressBar>}
        //     </div>
        

        <div className="page" id="admin-page">
            <div className="card">
                <form onSubmit={handleSubmit(onSubmit)}>
                    

                    <div className="input toggle-container">
                        <input className="toggle" type="checkbox" name="switch" id="switch" defaultChecked={toggleChecked}
        onChange={() => setToggleChecked(!toggleChecked)}></input>
                        <label className="toggle-label" htmlFor="switch"></label>
                    </div>
                    <div>
                        {toggleChecked && 
                            <div className="input">
                                <select className="input-field" id="category-select" name="category">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="fiat">Fiat</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        }
                        {!toggleChecked && 
                            <div className="input">
                                <input type="text" className="input-field" value="Alexander Parkinson" required/>
                            </div>
                        }
                    </div>
                    <div className="input file-area">
                        <input type="file"  id="images" required={true} multiple={true} {...register("file")}
             
                        accept='image/png, image/jpeg'
                        onChange={changeHandler}/>
                        <div className="file-dummy">
                        <div className="success">Great, your files are selected. Keep on.</div>
                        <div className="default">Please select some files</div>
                        </div>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" />
                </form>
                <div className="thumbnails-container">
                    {thumbnails}
                </div>
                
            </div>
            
        </div>
        
    )
}
export default Admin;