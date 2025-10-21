import {kluuvi_menu, kamppi_menu} from "./entities/menus"
import Menu from "./components/menu"
import { useState } from 'react'
import controlTopNav from './services/control-top-nav'

const getImageUrl = (name) => {
  return new URL(`/src/assets/img/${name}`, import.meta.url).href
}

const IndexFI = ({language, setLanguage}) =>{

    const scrollToSession = (id) =>{
        const element = document.getElementById(id)
        element.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }

    controlTopNav()

    const [currentMenu, setCurrentMenu] = useState(kluuvi_menu)

    const buttons = [
        {id:"kluuvi", label:"Kluuvi",menu:kluuvi_menu},
        {id:"kamppi",label:"Kamppi",menu:kamppi_menu}
    ]

    const haddleButtonClick = (b) =>{
        
        console.log(b);
        
        setCurrentMenu(b.menu);
        setActiveId(b.id);
    }

    const [activeId, setActiveId] = useState(buttons[0].id);
    console.log(currentMenu);
    
    return(
        <div className="full-width body">
        <div className="header full-width" id="header">
            <div className="header-content full-height">
                <div className="header-upper full-width" id="header-upper">
                    <img src={getImageUrl('logo.png')} alt="" className="header-logo" id="header-logo"/>
                    <button className="language-tag" id="top-langauge-tag" onClick={()=>setLanguage("en")}>English</button>
                </div>
                <div className="nav full-width" id="nav">
                    <div className="nav-tag-list">
                        <img src={getImageUrl('logo.png')} alt="" className="nav-logo box" id="nav-logo"/>
                        <button onClick={()=>scrollToSession("about")} className="nav-tag">Tietoja Poke Moodista</button>
                        <button onClick={()=>scrollToSession("menu")} className="nav-tag">Valikko</button>
                        <button onClick={()=>scrollToSession("visit")} className="nav-tag">Yhteystiedot</button>
                        <button onClick={()=>scrollToSession("visit")} className="nav-button-tag">Käy ravintolassamme</button>
                        <button onClick={()=>setLanguage("en")} className="language-tag box" id="nav-langauge-tag">English</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-nav-container full-width">
                <div className="mobile-nav-contant full-width full-height">
                    <button onClick={()=>scrollToSession("about")} className="mobile-nav-tag" id="mobile-nav-about">Tietoja</button>
                    <button onClick={()=>scrollToSession("menu")} className="mobile-nav-tag" id="mobile-nav-menu">Valikko</button>
                    <button onClick={()=>scrollToSession("visit")} className="mobile-nav-tag" id="mobile-nav-visit">Käy ravintolassamme</button>
                    <button onClick={()=>setLanguage("en")} className="mobile-nav-tag" id="mobile-nav-language">English</button>
                </div>
        </div>
        <div className="top-banner-container justify-center full-width">
            <div className="top-banner-content full-height full-width">
                <div className="intro-img-container justify-center full-width">
                    <img src={getImageUrl('banner_with_logo_2.png')} alt="" className="intro-img full-width"/>
                </div>
            </div>
        </div>
        <div className="sub-banner-container">
            <div className="sub-banner-content justify-center full-height">
                <a href="#visit">
                <p className="sub-banner-title">Visit our new restaurant Gyoza King opened in Kluuvi!</p>
                </a>
            </div>
        </div>
        <div className="info-container full-width justify-center" id="about">
            <div className="info">
                <div className="info-image-container">
                    <img src={getImageUrl('dishes-01.jpg')} alt="" className="full-width"/>
                </div>
                <div className="info-content-container full-width">
                    <div className="info-title"><p className="no_deco">Tietoja Pokemoodista</p><p className="no_deco">—</p></div>
                    <p>
                        Poke Mood tarjoaa herkullisia poke-kulhoja. Lounasaikaan voit valita kaikki täytteet itse! Tavoitteenamme on tarjota paikallisille asukkaille käteviä, nopeita, terveellisiä ja ravitsevia aterioita joka päivä. Ruokamme kunnioittaa erilaisia ruokavalioita ja varmistaa, että kaikille on tarjolla laaja valikoima herkullisia vaihtoehtoja....
                    </p>
                
                </div>
            </div>
            <div className="info">
                <div className="info-content-container full-width">
                    <div className="info-title"><p className="no_deco">Maistuvien tuotteidemme salaisuus</p><p className="no_deco">—</p></div>
                    <p>Havaijilta lähtöisin oleva poke bowl on yhdistelmä tuoreita raaka-aineita. Kulho koostetaan usein haluamastasi proteiinista, kuten kalasta (raakana tai kypsänä), paistetusta kanasta, katkaravuista tai tofusta, sekä vihanneksista, kasviksista ja hedelmistä. Erilaiset kastikkeet kruunaavat annoksen, joka tarjoillaan riisin tai salaatin kanssa.</p>
                </div>
                <div className="info-image-container">
                    <img src={getImageUrl('dishes-02.jpg')} alt="" className="full-width"/>
                </div>
            </div>
            <div className="info">
                <div className="info-image-container">
                    <img src={getImageUrl('dishes-03.jpg')} alt="" className="full-width full-height cover"/>
                </div>
                <div className="info-content-container full-width">
                    <div className="info-title"><p className="no_deco">Miksi Pokemood?</p><p className="no_deco">—</p></div>
                    <p>
                        Poke Mood tarjoaa paitsi herkullisen makuelämyksen myös terveellisen vaihtoehdon pikaruoalle ja poke bowl sopii hyvin niin lounaaksi kuin illalliseksikin.Build a bowl, match the mood!
                    </p>
                
                </div>
            </div>
        </div>
        <div className="menu-container full-width justify-center" id="menu">
            <div className="menu-title full-width justify-center">
                <p className='component-title'>Valikko</p>
            </div>
            <div className="menu-select-button-container">
                {buttons.map(button => {

                    const isActive = button.id === activeId;
                    const buttonClassName = `menu-select-button ${isActive ? 'is-active' : ''}`;
                    return(
                        <button className={buttonClassName} key={button.id} onClick={()=>haddleButtonClick(button)}>{button.label}</button>
                    )
                    })}
            </div>
            <Menu images={currentMenu.menu}/>
        </div>
        <div className="visit-location-container full-width justify-center flex-direction-column align-items-center" id="visit">
            <div className="visit-location-title">
                <p className="no_deco">Käy ravintolassamme</p>
            </div>
            <div className="location-in-city full-width justify-center flex-direction-column">
                <div className="city-title">
                    <p className="no_deco">Helsinki</p>
                </div>
                <div className="restaurant-container full-width">
                    <div className="restaurant-content">
                        <div className="restaurant-container-left">
                            <div className="restaurant-image full-width">
                                <img src={getImageUrl('kamppi_rest.jpg')} alt="" className="full-width restaurant-image-img"/>
                            </div>
                        </div>
                        <div className="restaurant-container-right">
                            <div className="restaurant-title">Poke Mood Kamppi</div>
                            <div className="restaurant-location">Eerikinkatu 12, 00100 Helsinki</div>
                            <div className="restaurant-description">+358 0449259529</div>
                            <div className="retaurant-open-hour">
                                <p className="no_deco">Avoinna:</p>
                                <p>Ma-Pe: 10:30 - 21:00</p>
                                <p>La: 12:00 - 21:00</p>
                                <p>Su: 12:00 - 20:00</p>
                            </div>
                            <a href="https://maps.app.goo.gl/37j1efhd7AxP9zbM6" className="map-link">Tarkista Google Mapsista</a>
                        </div>
                    </div>
                    <div className="restaurant-content">
                        <div className="restaurant-container-left">
                            <div className="restaurant-image full-width">
                                <img src={getImageUrl('kluuvi_rest.jpg')} alt="" className="full-width restaurant-image-img"/>
                            </div>
                        </div>
                        <div className="restaurant-container-right">
                            <div className="restaurant-title">Poke Mood Kluuvi</div>
                            <div className="restaurant-location">Eerikinkatu 12, 00100 Helsinki</div>
                            <div className="restaurant-description">+358 0442459754</div>
                            <div className="retaurant-open-hour">
                                <p className="no_deco">Avoinna:</p>
                                <p>Ma-Pe: 10:30 - 19:00</p>
                                <p>La-Su: 12:00 - 19:00</p>
                            </div>
                            <a href="https://maps.app.goo.gl/fqL582PsNvSdrSwr9" className="map-link">Tarkista Google Mapsista</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-container full-width justify-center align-items-center">
            <div className="footer-content">
                <div className="footer-left full-width align-items-center">
                    <p>Copyright Poke Mood © 2025 | Website Developed by <a href="https://www.linkedin.com/in/zongru-li-2b8726325/">Zongru Li</a></p>
                </div>
                <div className="footer-right">
                    <img src={getImageUrl('logo.png')} className="footer-logo" alt=""/>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default IndexFI