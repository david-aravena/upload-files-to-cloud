import { useState } from 'react';
import {SelectionFile} from './views/SelectionFile'
import {ListSelectionFile} from './views/ListSelectionFile'
import {ButtonsAddUpload} from './views/ButtonsAddUpload'
import { MdOutlineUploadFile } from 'react-icons/md';
import {HiFolderAdd} from 'react-icons/hi';



export const FileUpload = () => {

    const [filesSelected, setFilesSelected] = useState([]);


    const getFilesFromInput = (e) => {
        const filesFromInput = e.target.files;
        setFilesSelected([...filesSelected, ...filesFromInput]);
    }

    const deleteFileSelected = (file) => {
        const files = filesSelected;
        files.splice(file, 1);
        setFilesSelected([...files]);
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
                    <ButtonsAddUpload getFilesFromInput={getFilesFromInput}>
                        <HiFolderAdd size={"3rem"} className="iconButtonSelectFiles" />
                        <MdOutlineUploadFile size={"3rem"} className="iconAnimatedUpload" />
                    </ButtonsAddUpload>

                    <ListSelectionFile filesSelected={filesSelected} deleteFileSelected={deleteFileSelected} />
                </>
            }
        </>
    )
}