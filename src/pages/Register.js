import React from 'react'
import {Logo, ParalellogramSmall, ParalellogramLarge, Underline} from '../constants/icons'
import { Formik } from 'formik';
import { RegisterSchema } from '../constants/yupSchema';


function Register() {
  return (
    <div className='register'>
        <div className="info">
             <div className="InfoContainer">
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
                    <div className="small"><ParalellogramSmall /></div>
                    <div className="large"><ParalellogramLarge /></div>
                </div>
                

             </div>
        </div>
        <div className="form">
            <div className="FormContainer">
            <div className="header">
                <h3>Kayıt</h3>
                <Underline />
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
                validationSchema={RegisterSchema}>
                    {
              ({ values, handleChange, handleSubmit, errors }) =>
                <form >
                    <div className={'formGroup'}>
                        <label className='title'>İSİM</label>
                        <input
                        type="text"
                        name="name"
                        placeholder='İsminizi giriniz'
                        value={values.name}
                        onChange={handleChange}
                    />
                    <span>{errors.name}</span>
                  </div>
                  <div className={'formGroup'}>
                    <label className='title'>SOYİSİM</label>
                    <input
                      type="text"
                      name="surname"
                      placeholder='Soyisminizi giriniz'
                      value={values.surname}
                      onChange={handleChange}
                      />
                    <span>{errors.surname}</span>
                  </div>
                  <div className={'formGroup'}>
                    <label className='required title'>EMAIL</label>
                    <input
                      type="text"
                      name="email"
                      placeholder='Eposta adresinizi giriniz'
                      value={values.email}
                      onChange={handleChange}
                      />
                    <span>{errors.email}</span>
                  </div>
                  <div className={'formGroup'}>
                    <label className='required title'>KULLANICI ADI</label>
                    <input
                      type="text"
                      name="username"
                      placeholder='Kullanıcı adınızı giriniz'
                      value={values.username}
                      onChange={handleChange}
                      />
                    <span>{errors.username}</span>
                  </div>

                  <div className={'formGroup'}>
                    <label className='required title'>PASSWORD</label>
                    <input
                      type="password"
                      name="password"
                      placeholder='Enter your password'
                      value={values.password}
                      onChange={handleChange}
                      />
                    <span>{errors.password}</span>
                  </div>

                  <div className={'formGroup'}>
                    <label className='required title'>ŞİFRENİ TEKRAR GİR</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder='Şifreni Doğrula'
                      value={values.confirmPassword}
                      onChange={handleChange}
                      />
                    <span>{errors.confirmPassword}</span>
                  </div>

                  
                  <div className='formGroup formButton'>
                    <button className='loginButton' type='submit' onClick={handleSubmit} >
                        Kayıt Ol                      
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