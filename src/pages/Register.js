import React from 'react'
import {Logo, ParalellogramSmall, ParalellogramLarge} from '../constants/icons'

function Register() {
  return (
    <div className='register'>
        <div className="info">
             <div className="InfoContainer">
                <div className="logo">
                    <Logo />
                </div>

                <div className="title">
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
                    <ParalellogramSmall />
                    <ParalellogramLarge />
                </div>
                

             </div>
        </div>
        <div className="form">else</div>
    </div>
  )
}

export default Register