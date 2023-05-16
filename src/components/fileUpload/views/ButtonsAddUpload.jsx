import {HiFolderAdd} from 'react-icons/hi';
import { MdOutlineUploadFile } from 'react-icons/md';
import './../css/buttonsAddSend.css';

export const ButtonsAddUpload = ({getFilesFromInput, uploadFiles}) => {
    return(
        <>
            <div className="containerButtons">
                <label className="buttons">
                    <input type="file" multiple onChange={getFilesFromInput} />
                    <HiFolderAdd size={"3rem"} className="iconButtonSelectFiles" />
                </label>
                <button className="buttons" onClick={uploadFiles}>
                    <MdOutlineUploadFile size={"3rem"} className="iconAnimatedUpload" />
                </button>
            </div>
        </>
    )
}

