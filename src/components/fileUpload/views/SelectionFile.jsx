import './../css/fileUpload.css'


export const SelectionFile = ({children, getFilesFromInput}) => {
    
    return(
        <div className="containerAddFiles">
            <div className="containerButtonSelectFiles">
                <label className="buttonSelectFiles">
                    <input type="file" multiple onChange={getFilesFromInput} />
                    {children[0]}
                </label>
                {children[1]}
            </div>
        </div>
    )
}