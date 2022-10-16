import { useState } from 'react';
import {SelectionFile} from './views/SelectionFile'
import {HiFolderAdd} from 'react-icons/hi';
import {ListSelectionFile} from './views/ListSelectionFile'



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
                <SelectionFile>
                    <label className="buttonSelectFiles">
                        <input type="file" multiple onChange={getFilesFromInput} />
                        <HiFolderAdd size={"5rem"} className="iconButtonSelectFiles" />
                    </label>
                    <p>Seleccionar archivos para subir</p>
                </SelectionFile>
            }

            {filesSelected.length > 0 &&
                <ListSelectionFile filesSelected={filesSelected} deleteFileSelected={deleteFileSelected} />
            }
        </>
    )
}