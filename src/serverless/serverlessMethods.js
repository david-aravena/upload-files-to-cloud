import {app} from './serverlessConfig'
import { getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage";

const storage = getStorage(app);

export const sendFilesToStorage = (files, setUploadFilesProgress, setLinksDownload) => {
    /* esto hay que refactorizarlo entero */
    console.log("send files to storage")
    let progressUploadFiles = {}
    let filesUpload = []
    for(let i in files){
        const storageRef = ref(storage, `uploadfiles/${files[i].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[i]);

        uploadTask.on('state_changed',
        (snapshot) => {
            progressUploadFiles[snapshot.ref.name]=[snapshot.bytesTransferred, snapshot.totalBytes]
            setUploadFilesProgress({...progressUploadFiles});
            
        },
        (error) => {
            
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                console.log("get download")
                const objeto = {link: url, namefile: uploadTask.snapshot.ref.name}
                filesUpload.push(objeto);
                setLinksDownload([...filesUpload])
            })
        }
        )
    }
}