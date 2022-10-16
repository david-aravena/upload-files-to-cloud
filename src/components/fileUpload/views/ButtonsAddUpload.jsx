import './../css/buttonsAddSend.css';

export const ButtonsAddUpload = ({children, getFilesFromInput}) => {
    return(
        <>
            <div className="containerButtons">
                <label className="buttons">
                    <input type="file" multiple onChange={getFilesFromInput} />
                    {children[0]}
                </label>
                <button className="buttons" /*</div>onClick={functions.uploadFiles}*/>
                    {children[1]}
                </button>
            </div>
        </>
    )
}

