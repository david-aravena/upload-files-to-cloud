import './../css/processUpload.css'
import {showSizeFile} from './../../../utils/showSizeFile'
import {HiFolderAdd} from 'react-icons/hi';

export const ProcessUpload = ({uploadFilesProgress, filesSelected, linksForDownload}) => {

    const uploadedFileInfo = Object.entries(uploadFilesProgress);
     
    return (
        <div className="containerProcessUpload">
            {filesSelected.length === linksForDownload.length &&
                /* Boton para subir mas archivos luego de finalizar la subida de archivos */
                <div className="containerUploadMoreFiles">
                    <button className="buttonUploadMoreFiles" onClick={() => window.location.href = window.location.href}>
                    <HiFolderAdd size={"3rem"} className="iconButtonSelectFiles" />
                    </button>
                </div>        
            }

            {uploadedFileInfo.map((file, index) => {
                return (
                    <div key={index} className="fileProgress">
                        {/* Barra con progreso de archivo que se esta subiendo */}
                        <div className="info">
                            <div className="data-file">
                                <p><span>Nombre</span>: {file[0]}</p>
                                <p><span>Tamaño</span>: {showSizeFile(file[1][1])}</p>
                                <p><span>bytes subidos</span>: {showSizeFile(file[1][0])}</p>
                            </div>
                            <div className="percentUpload">
                                <p>{`${Math.round((file[1][0]/file[1][1]*100))}`}%</p>
                            </div>
                        </div>

                        <div className="progressbar">
                            <progress value={file[1][0]} max={file[1][1]} style={{minWidth: "10px"}}></progress>
                        </div>
                        
                        {/* Barras inferiores con links para descargar archivos subidos */}
                        <div className="linksForDownload">
                            {linksForDownload.length !== 0 && 
                                linksForDownload.map((url, index) => {
                                    return(
                                        <div key={index} className="containerLinkForDownload">
                                            {url.nameFile === file[0] &&
                                                <>
                                                    <p>Completado</p>
                                                </>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                )
            })}
        </div>
    
    )
}







