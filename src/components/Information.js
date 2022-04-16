import React from 'react'
import {Logo, ParalellogramSmall, ParalellogramLarge} from '../constants/icons'

const Information = ({theme, }) => {
    return (
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
    )
}

export default Information