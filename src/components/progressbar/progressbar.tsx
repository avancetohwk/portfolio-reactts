import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import UploadFiles from '../../hooks/useStorage';
import './progressbar.scss';

interface IProgressBarProps{
    files:File[]
    setFile:any
}
const ProgressBar: React.FC<IProgressBarProps> = (props: IProgressBarProps)=>{
    const {files, setFile } = props;
    UploadFiles(files);


    // useEffect(()=>{
    //     if(url){
    //         setFile(null);
    //     }
    // },[url,setFile])

    return (
        <div className="progress-bar" style={{width: +'50%'}}></div>
    )
}

export default ProgressBar;