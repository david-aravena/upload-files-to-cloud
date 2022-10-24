import { useEffect } from 'react';
import './../css/listSavedFiles.css'
import {RiMailSendLine} from 'react-icons/ri';
import {sendEmail} from './../../../utils/sendEmail'

export const ListSavedFiles = ({linksForDownload}) => {

    useEffect(() => {
        let height = document.querySelector("body").scrollHeight
        window.scroll({
            top: height,
            behavior: 'smooth'
        });
    }, [])

    return(
        <div className="containerList">
            {linksForDownload.map((link, index) => {
                return(
                    <div className="fileInList" key={index}>
                        <div className="fileInfo">
                                <p><span>Archivo</span>: {link.nameFile}</p>
                                <a href={link.link} target="blank">link de descarga</a>
                        </div>
                        <div className="containerButtons">
                            <button onClick={() => {sendEmail(link)
                                .then((result) => {
                                    alert("El link a sido enviado a su correo") 
                                    window.location.href = window.location.href
                                })
                                .catch((error) => {
                                    alert("A ocurrido un error. Intentelo nuevamente")
                                })
                            }}>
                                <RiMailSendLine size={"2rem"}/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
