import { useEffect, useState } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";
// import 'firebase/firestore';



const useFirestore = (collection:any ) =>{
    const [docs, setDocs] = useState<any[]>([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
                        .orderBy('createdAt')
                        .onSnapshot((snap)=>{
                            let documents:any[] = [];
                            snap.forEach(d=>{
                                documents.push({...d.data(), id: d.id});
                            })
                            setDocs(documents);
                        })
        return()=> unsub();
    }, [collection])

    return {docs};
}

export default useFirestore;