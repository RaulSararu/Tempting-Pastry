import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function EmailConfirm() {

    const {token} = useParams()
    const [message, setMessage] = useState('')
    const history = useHistory()

    useEffect(() => {

        const getData = async () => {

            try {
                const response = await axios.get(`/src/${token}`) 
        
                console.log('reponse is', response)

                if (response.data.success) {
                    setMessage('Your email has been verified! In few seconds you will be redirected to the home page')

                    setTimeout(() => history.push('/'), 5000)
                    
                } else {
                    setMessage('Your email could not be verified, please contact the system administrators')
                }

            } catch (error) {
                
                console.log(error.message)
            }
        }

        getData()
    }, [])

    return <div className='container'>
        <p>Thank you for registering in our App</p>
        <p>Please wait a while until we verify your email</p>
        <p>{message}</p>
        </div>
}