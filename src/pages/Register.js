import { useState, useEffect } from 'react'
import {Logo, ParalellogramSmall, ParalellogramLarge, Underline, DarkModeIcon, LightModeIcon} from '../constants/icons'
import { Formik } from 'formik';
import { RegisterSchema } from '../constants/yupSchema';
import useTheme from '../hooks/useTheme'
import RegisterButton from '../components/RegisterButton'
import Information from '../components/Information'
import FormValidation from '../components/FormValidation'



function Register() {
  const [loading, setLoading] = useState(false)
  const [theme, ThemeSwitcher] = useTheme();

  const handleTheme = (mode) => {
    ThemeSwitcher(mode)
  }

  const sendRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

    
  return (
    <div className={theme === 'light' ? "register" : "register registerDark"}>
      {<div className="icon" onClick={() => handleTheme(theme)}>{theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}</div>}

      <Information theme={theme} />
        

        <div className="form">
            <div className="FormContainer">
            <div className={theme === 'light' ? 'header' : 'header headerDark'} >
                <h3>Kayıt</h3>
                <span className='underline'><Underline color={theme === 'light' ? "#444AFF" : "#FFBF5E"} /></span>
            </div>
            <Formik 
                initialValues={{ 
                    name: '',
                    surname: '',
                    email: '',
                    username: '',
                    password: '',
                    confirmPassword: '',
                    }} 
                validationSchema={RegisterSchema}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={() => sendRequest()}>
                    {
              ({ values, handleChange, handleSubmit, errors, touched  }) =>
                <form >
                  <FormValidation values={values} theme={theme} handleChange={handleChange} errors={errors} />
                    
                  <div className='formGroup formButton'> 
                    <RegisterButton theme={theme} onClick={handleSubmit} loading={loading}/>                  
                  </div>
                </form>
            }
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default Register