import './css/fileUpload.css'
import {HiFolderAdd} from 'react-icons/hi';


export const FileUpload = () => {
    return(
        <div className="containerAddFiles">
            <div className="containerButtonSelectFiles">
                <label className="buttonSelectFiles">
                    <input type="file" multiple /*onChange={functions.getFilesFromInput}*/ />
                    <HiFolderAdd size={"5rem"} className="iconButtonSelectFiles" />
                </label>
                <p>Seleccionar archivos para subir</p>
            </div>
        </div>
    )
}