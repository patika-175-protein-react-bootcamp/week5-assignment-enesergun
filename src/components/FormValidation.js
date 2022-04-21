import React from 'react'
import { RegisterSchema } from '../constants/yupSchema';
import { Formik } from 'formik';

let validatonElements = [{
    /* {name : {type : text, name: "name", placeholder : 'İsminizi giriniz.'}},
    {surname: {type: text, name: "surname", placeholder: "Soyisminizi giriniz."}}, */
    email : {type: "email", name: "email", required: "required", placeholder: "Eposta adresinizi giriniz", innerText: "E-POSTA"},
    username: {type: "text", name: "username", required: "required", placeholder: "Kullanıcı adınızı giriniz", innerText: "KULLANICI ADI"},
    password: {type: "password", name: "password", required: "required", placeholder:"Şifrenizi gir.", innerText: "ŞİFRE"},
    confirmPassword: {type: "password", name: "confirmPassword", required: "required", placeholder:"Şifreni doğrula.", innerText: "ŞİFRENİ TEKRAR GİR"}
}]



/* console.log(Object.keys(validatonElements[0]).map((item, index) => console.log(validatonElements[0][item].innerText))) */


const FormValidation = ({values, theme, handleChange, errors, touched, handleBlur  }) => {

    return (
        <>
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
                    <span className="error">{touched.name && errors.name}</span>
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
                    <span className="error">{touched.surname && errors.username}</span>
            </div>
        </div>
        {/* {
            Object.keys(validatonElements[0]).map((item, index) => (
                <div className='formGroup' key={index}>
                    <div className={`formElement ${validatonElements[0][item].name}`}>
                    <label className={theme === 'light' ? `${validatonElements[0][item].required} title` : `${validatonElements[0][item].required} title titleDark`}>{validatonElements[0][item].placeholder}</label>
                    <input
                        type={validatonElements[0][item].type}
                        name={validatonElements[0][item].name}
                        placeholder={validatonElements[0][item].placeholder}
                        value={values.email}
                        onChange={handleChange}                        
                        />
                        {errors[item] && <span className='error'>{errors[item]}</span>}     
                    </div>
                </div>
            ))
        } */}
                  
                  <div className={'formGroup'}>
                    <div className="formElement email">
                        <label className={theme === 'light' ? 'required title' : 'required title titleDark'}>E-POSTA</label>
                        <input
                        type="text"
                        name="email"
                        placeholder='Eposta adresinizi giriniz'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        <span className="error">{touched.email && errors.email}</span>
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
                      onBlur={handleBlur}
                      />
                    <span className="error">{touched.username && errors.username} </span>
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
                      onBlur={handleBlur}
                      />
                    <span className="error">{touched.password && errors.password}</span>
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
                      onBlur={handleBlur}
                      />
                    
                      <span className='error'>{touched.confirmPassword && errors.confirmPassword}</span>
                    
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
        </>
    )
}

export default FormValidation