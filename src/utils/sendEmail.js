export const sendEmail = async (link) => {
    try{
        const result = await fetch(
            'https://us-central1-upload-test-28989.cloudfunctions.net/helloWorld/',
            {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(link)
            }
        )
        return true
    }catch(error){
        return error;
    }
}