export const sendEmail = async (link) => {
    const mail = prompt("escriba su mail para enviarle el link")
    try{
        const result = await fetch(
            'https://us-central1-upload-files-175fa.cloudfunctions.net/helloWorld',
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