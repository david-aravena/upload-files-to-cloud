import {HiFolderAdd} from 'react-icons/hi';
import './../css/fileUpload.css'


export const SelectionFile = ({getFilesFromInput}) => {
    
    return(
        <div className="containerAddFiles">
            <div className="containerButtonSelectFiles">
                <label className="buttonSelectFiles">
                    <input type="file" multiple onChange={getFilesFromInput} />
                    <HiFolderAdd size={"5rem"} className="iconButtonSelectFiles" />
                </label>
                <p>Seleccionar archivos para subir</p>
            </div>
        </div>
    )
}