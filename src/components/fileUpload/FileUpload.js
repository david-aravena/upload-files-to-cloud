import { useState } from 'react';
import {SelectionFile} from './views/SelectionFile'
import {ListSelectionFile} from './views/ListSelectionFile'
import {ButtonsAddUpload} from './views/ButtonsAddUpload'
import { MdOutlineUploadFile } from 'react-icons/md';
import {HiFolderAdd} from 'react-icons/hi';
import {sendFilesToStorage} from './../../serverless/serverlessMethods'
import {ProcessUpload} from './views/ProcessUpload'
import {ListSavedFiles} from './views/ListSavedFiles'


export const FileUpload = () => {

    const [filesSelected, setFilesSelected] = useState([]);
    const [uploadFilesProgress, setUploadFilesProgress] = useState(null);
    const [linksForDownload, setLinksForDownload] = useState([])

    const getFilesFromInput = (e) => {
        const filesFromInput = e.target.files;
        setFilesSelected([...filesSelected, ...filesFromInput]);
    }

    const deleteFileSelected = (file) => {
        const files = filesSelected;
        files.splice(file, 1);
        setFilesSelected([...files]);
    }

    const uploadFiles = () => {
        sendFilesToStorage(filesSelected, setUploadFilesProgress, setLinksForDownload)
    }
    
    return(
        <>
            {filesSelected.length === 0 && 
                <SelectionFile getFilesFromInput={getFilesFromInput}>
                    <HiFolderAdd size={"5rem"} className="iconButtonSelectFiles" />
                    <p>Seleccionar archivos para subir</p>
                </SelectionFile>
            }

            {filesSelected.length > 0 &&
                <>
                    {!uploadFilesProgress ?
                        <>
                            <ButtonsAddUpload getFilesFromInput={getFilesFromInput} uploadFiles={uploadFiles}>
                                <HiFolderAdd size={"3rem"} className="iconButtonSelectFiles" />
                                <MdOutlineUploadFile size={"3rem"} className="iconAnimatedUpload" />
                            </ButtonsAddUpload>
                            
                            <ListSelectionFile filesSelected={filesSelected} deleteFileSelected={deleteFileSelected} />
                        </>
                    :
                        <>
                            <ProcessUpload 
                                uploadFilesProgress={uploadFilesProgress} 
                                filesSelected={filesSelected} 
                                linksForDownload={linksForDownload} 
                            />
                        </>
                    }
                </>
            }
            {linksForDownload.length === filesSelected.length &&
                <ListSavedFiles linksForDownload={linksForDownload} />        
            }
        </>
    )
}