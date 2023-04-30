export const sendEmail = async (link) => {
    const mail = prompt("escriba su mail para enviarle el link")
    try{
        const result = await fetch(
            process.env.REACT_APP_URL_SEND_EMAIL,
            {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: mail, ...link})
            }
        )
        return 
    }catch(error){
        return error;
    }
}