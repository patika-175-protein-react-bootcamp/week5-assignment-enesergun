import React from 'react'
import {LoadingIcon} from '../constants/icons'


const RegisterButton = (props) => {
    return (
        <button className={props.theme === 'light' ? "RegisterButton" : "RegisterButton RegisterButtonDark"} type='submit' onClick={props.onClick} >
            {
                props.loading ? <LoadingIcon size={15} /> : 'KAYIT OL'
            }                      
        </button>  
    )
}


export default RegisterButton