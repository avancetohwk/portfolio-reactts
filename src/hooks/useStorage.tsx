import { useEffect, useState } from "react";
import 'firebase/storage';
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";
// import 'firebase/firestore';



// const uploadFile = (file:any, noOfFiles:number ) =>{
   

    

//     storageRef.put(file).on('state_changed', (snap)=>{
//         let percentage = (snap.bytesTransferred/ snap.totalBytes) * (100/noOfFiles);
//         setProgress(progress +percentage);
//     }, (err)=>{
//         setError(err);
//     }, async()=>{
//         const url = await storageRef.getDownloadURL();
//         const createdAt = timestamp();
//         collectionRef.add({url, createdAt})
//         setUrl(url);
//     })

//     return {progress,url,error};
// }

export const UploadFiles = (files:any[])=>{
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<any | null>(null);
    const [url, setUrl] = useState<any | null>(null);

    
    const collectionRef = projectFirestore.collection('images');
    useEffect(() => {
        Promise.all(
            // Array of "Promises"
            [...files].map(file => {
                const storageRef = projectStorage.ref(file.name);
                storageRef.put(file).on('state_changed', (snap)=>{
                    let percentage = (snap.bytesTransferred/ snap.totalBytes) * (100/files.length);
                    setProgress(progress +percentage);
                    return percentage;
                }, (err)=>{
                    setError(err);
                }, async()=>{
                    const url = await storageRef.getDownloadURL();
                    const createdAt = timestamp();
                    collectionRef.add({url, createdAt})
                    setUrl(url);
                    return progress;
                })
            })
          )
          .then((res) => {
            console.log(res)
            console.log(`All success`)
            // const {progress, url} = res;
          })
          .catch((error) => {
            console.log(`Some failed: `, error.message)
          }).finally(()=>{
              //return {progress, url};
          })
    }, [files])
    
}


export default UploadFiles;