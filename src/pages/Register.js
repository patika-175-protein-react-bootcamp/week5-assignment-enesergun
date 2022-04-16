import { useState, useEffect } from 'react'
import {Logo, ParalellogramSmall, ParalellogramLarge, Underline, DarkModeIcon, LightModeIcon, LoadingIcon} from '../constants/icons'
import { Formik } from 'formik';
import { RegisterSchema } from '../constants/yupSchema';
import useTheme from '../hooks/useTheme'



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


        <div className={theme === 'light' ? "info" : "info infoDark"}>
             <div className={theme === 'light' ? "InfoContainer" : "InfoContainer InfoContainerDark"}>
                <div className="logo">
                    <Logo />
                </div>

                <div className="header">
                    <h2>YAZILIM PATİKALARI</h2>
                </div>

                <div className="article">
                    <p>
                    Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. 
                    Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. 
                    Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. 
                    Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar.
                     Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
                    </p>                    
                </div>

                <div className="parallelograms">
                    <span className="small"><ParalellogramSmall color={theme === 'light' ? "#444AFF" : "#FFBF5E"}/></span>
                    <div className="large"><ParalellogramLarge color={theme === 'light' ? "#444AFF" : "#FFBF5E"} /></div>
                </div>
                
             </div>
        </div>

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
                    <div className={'formGroup firstName'}>
                        <div className="formElement name">
                            <label className={theme === 'light' ? 'title' : 'title titleDark'}>İSİM</label>
                            <input
                            type="text"
                            name="name"
                            placeholder='İsminizi giriniz'
                            value={values.name}
                            onChange={handleChange}
                        />
                            {errors.name && <div className='error'>{errors.name}</div>}
                        </div>
                        <div className="formElement surname">
                            <label className={theme === 'light' ? 'title' : 'title titleDark'}>SOYİSİM</label>
                            <input
                            type="text"
                            name="surname"
                            placeholder='Soyisminizi giriniz'
                            value={values.surname}
                            onChange={handleChange}
                            />
                            {errors.surname && <div className='error'>{errors.surname}</div>}
                        </div>
                    </div>
                  
                  <div className={'formGroup'}>
                    <div className="formElement email">
                        <label className={theme === 'light' ? 'required title' : 'required title titleDark'}>E-POSTA</label>
                        <input
                        type="text"
                        name="email"
                        placeholder='Eposta adresinizi giriniz'
                        value={values.email}
                        onChange={handleChange}                        
                        />
                        {errors.email && <span className='error'>{errors.email}</span>}                      
                    </div>
                  </div>
                  <div className={'formGroup'}>
                    <div className="formElement username">
                    <label className={theme === 'light' ? 'required title' : 'required title titleDark'}>KULLANICI ADI</label>
                    <input
                      type="text"
                      name="username"
                      placeholder='Kullanıcı adınızı giriniz'
                      value={values.username}
                      onChange={handleChange}
                      />
                    {errors.username && <span className='error'>{errors.username}</span>}   
                    </div>
                  </div>

                  <div className={'formGroup'}>
                    <div className="formElement password">
                    <label className={theme === 'light' ? 'required title' : 'required title titleDark'}>ŞİFRE</label>
                    <input
                      type="password"
                      name="password"
                      placeholder='Enter your password'
                      value={values.password}
                      onChange={handleChange}
                      />
                    {errors.password && <span className='error'>{errors.password}</span>}   
                    </div>
                  </div>

                  <div className={'formGroup'}>
                    <div className="formElement confirmPassword">
                    <label className={theme === 'light' ? 'required title' : 'required title titleDark'}>ŞİFRENİ TEKRAR GİR</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder='Şifreni Doğrula'
                      value={values.confirmPassword}
                      onChange={handleChange}
                      />
                    {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}   
                    </div>
                  </div>

                  <div className="formGroup">
                    <div className="formElement">
                        <label className="checkBoxLabel">
                        <input type="checkbox" name="checked" value="acceptTerm" />                                                    
                            <p>Sözleşmeyi kabul ediyorum</p>
                        </label>
                        
                    </div>
                  </div>
                  <div className='formGroup formButton'>
                    <button className={theme === 'light' ? "RegisterButton" : "RegisterButton RegisterButtonDark"} type='submit' onClick={handleSubmit} >
                    {
                        loading ? <LoadingIcon size={15} /> : 'KAYIT OL'
                      }                      
                    </button>
                    <span></span>
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