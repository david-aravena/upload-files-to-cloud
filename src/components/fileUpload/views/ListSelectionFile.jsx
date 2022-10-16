import './../css/listSelectionFile.css'
import {showSizeFile} from './../../../utils/showSizeFile'

export const ListSelectionFile = ({filesSelected, deleteFileSelected}) => {
    return(
        <>
            <div className="containerListFilesSelected">
                {filesSelected.map((file, index) => {
                    return (
                        <div className="file" key={index}>
                            <div className="fileInfo">
                                    <p><span>Nombre</span>: {file.name}</p>

                                    <p><span>Tamaño</span>: {showSizeFile(file.size)}</p>

                                    <p><span>Formato</span>: {file.type} </p>
                            </div>
                            <div className="containerCloseButton">
                                <button onClick={() => deleteFileSelected(index)}>x</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}