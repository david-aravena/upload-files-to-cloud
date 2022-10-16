import {SelectionFile} from './views/SelectionFile'
import {HiFolderAdd} from 'react-icons/hi';




export const FileUpload = () => {
    
    return(
        <SelectionFile>
            <label className="buttonSelectFiles">
                <input type="file" multiple /*onChange={functions.getFilesFromInput}*/ />
                <HiFolderAdd size={"5rem"} className="iconButtonSelectFiles" />
            </label>
            <p>Seleccionar archivos para subir</p>
        </SelectionFile>
    )
}