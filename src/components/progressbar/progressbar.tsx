import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';
import './progressbar.scss';

interface IProgressBarProps{
    file:File
    setFile:any
}
const ProgressBar: React.FC<IProgressBarProps> = (props: IProgressBarProps)=>{
    const {file, setFile } = props;
    const {url, progress} = useStorage(file);


    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])

    return (
        <div className="progress-bar" style={{width: progress+'%'}}></div>
    )
}

export default ProgressBar;