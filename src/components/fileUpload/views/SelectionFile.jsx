import './../css/fileUpload.css'


export const SelectionFile = ({children}) => {
    
    return(
        <div className="containerAddFiles">
            <div className="containerButtonSelectFiles">
                {children}
            </div>
        </div>
    )
}