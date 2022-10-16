import './../css/buttonsAddSend.css';

export const ButtonsAddUpload = ({children, getFilesFromInput, uploadFiles}) => {
    return(
        <>
            <div className="containerButtons">
                <label className="buttons">
                    <input type="file" multiple onChange={getFilesFromInput} />
                    {children[0]}
                </label>
                <button className="buttons" onClick={uploadFiles}>
                    {children[1]}
                </button>
            </div>
        </>
    )
}

