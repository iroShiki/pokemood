import {kluuvi_menu, kamppi_menu} from "./entities/menus"
import Menu from "./components/menu"
import { useState } from 'react'

const Index = ({language, setLanguage}) =>{

    const scrollToSession = (id) =>{
        const element = document.getElementById(id)
        element.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }


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
                    <img src="src/assets/logo.png" alt="" className="header-logo" id="header-logo"/>
                    <button className="language-tag" id="top-langauge-tag" onClick={()=>setLanguage("fi")}>Suomi</button>
                </div>
                <div className="nav full-width" id="nav">
                    <div className="nav-tag-list">
                        <img src="../img/gyozaking_logo.png" alt="" className="nav-logo box" id="nav-logo"/>
                        <button onClick={()=>scrollToSession("about")} className="nav-tag">About Poke Mood</button>
                        <button onClick={()=>scrollToSession("menu")} className="nav-tag">Menu</button>
                        <button onClick={()=>scrollToSession("contact")} className="nav-tag">Contact</button>
                        <button onClick={()=>scrollToSession("visit")} className="nav-button-tag">Visit Our Restaurant</button>
                        <button onClick={()=>setLanguage("fi")} className="language-tag box" id="nav-langauge-tag">Suomi</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-nav-container full-width">
                <div className="mobile-nav-contant full-width full-height">
                    <button onClick={()=>scrollToSession("about")} className="mobile-nav-tag" id="mobile-nav-about">About</button>
                    <a href="#menu" className="mobile-nav-tag" id="mobile-nav-menu">Menu</a>
                    <a href="#visit" className="mobile-nav-tag" id="mobile-nav-visit">Visit Our Restaurant</a>
                    <a href="../fi/index.html" className="mobile-nav-tag" id="mobile-nav-language">Suomi</a>
                </div>
        </div>
        <div className="top-banner-container justify-center full-width">
            <div className="top-banner-content full-height full-width">
                <div className="intro-img-container justify-center full-width">
                    <img src="src/assets/banner_with_logo_2.png" alt="" className="intro-img full-width"/>
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
                    <img src="src/assets/dishes-01.jpg" alt="" className="full-width"/>
                </div>
                <div className="info-content-container full-width">
                    <div className="info-title"><p className="no_deco">About Pokemood</p><p className="no_deco">—</p></div>
                    <p>
                        Poke Mood offers delicious poke bowls. At lunchtime, you can choose all your own toppings!Our goal is to provide local residents with convenient, quick, healthy, and nutritious meals every day.Our food respects different diets, ensuring that there is a wide selection of delicious options for everyone....
                    </p>
                
                </div>
            </div>
            <div className="info">
                <div className="info-content-container full-width">
                    <div className="info-title"><p className="no_deco">The secret to our great tastes</p><p className="no_deco">—</p></div>
                    <p>Originating in Hawaii, poke bowls are a combination of fresh ingredients. The bowl is often composed of your choice of protein, such as fish (raw or cooked), fried chicken, shrimp, or tofu, as well as vegetables and fruit. Various sauces top off the dish, which is served with rice or salad.</p>
                </div>
                <div className="info-image-container">
                    <img src="src/assets/dishes-02.jpg" alt="" className="full-width"/>
                </div>
            </div>
            <div className="info">
                <div className="info-image-container">
                    <img src="src/assets/dishes-01.jpg" alt="" className="full-width"/>
                </div>
                <div className="info-content-container full-width">
                    <div className="info-title"><p className="no_deco">Why Pokemood</p><p className="no_deco">—</p></div>
                    <p>
                        Poke Mood offers not only a delicious taste experience but also a healthy alternative to fast food, and poke bowls are perfect for both lunch and dinner.Build a bowl, match the mood!
                    </p>
                
                </div>
            </div>
        </div>
        <div className="menu-container full-width justify-center" id="menu">
            <div className="menu-title full-width justify-center">
                <p className='component-title'>Menu</p>
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
                <p className="no_deco">Visit our Restaurant</p>
            </div>
            <div className="location-in-city full-width justify-center flex-direction-column">
                <div className="city-title">
                    <p className="no_deco">Helsinki</p>
                </div>
                <div className="restaurant-container full-width">
                    <div className="restaurant-content">
                        <div className="restaurant-container-left">
                            <div className="restaurant-image full-width">
                                <img src="src/assets/kamppi_rest.jpg" alt="" className="full-width restaurant-image-img"/>
                            </div>
                        </div>
                        <div className="restaurant-container-right">
                            <div className="restaurant-title">Poke Mood Kamppi</div>
                            <div className="restaurant-location">Eerikinkatu 12, 00100 Helsinki</div>
                            <div className="retaurant-description"></div>
                            <div className="retaurant-open-hour">
                                <p>Open on:</p>
                                <p>Mon-Fri: 11:00 - 19:00</p>
                                <p>Sat-Sun: 12:00 - 19:00</p>
                            </div>
                            <a href="https://maps.app.goo.gl/AqeRfYVG1p5Bw9eVA" className="map-link">Check on Google Map</a>
                        </div>
                    </div>
                    <div className="restaurant-content">
                        <div className="restaurant-container-left">
                            <div className="restaurant-image full-width">
                                <img src="src/assets/kluuvi_rest.jpg" alt="" className="full-width restaurant-image-img"/>
                            </div>
                        </div>
                        <div className="restaurant-container-right">
                            <div className="restaurant-title">Poke Mood Kluuvi</div>
                            <div className="restaurant-location">Eerikinkatu 12, 00100 Helsinki</div>
                            <div className="retaurant-description"></div>
                            <div className="retaurant-open-hour">
                                <p>Open on:</p>
                                <p>Mon-Fri: 11:00 - 19:00</p>
                                <p>Sat-Sun: 12:00 - 19:00</p>
                            </div>
                            <a href="https://maps.app.goo.gl/AqeRfYVG1p5Bw9eVA" className="map-link">Check on Google Map</a>
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
                    <img src="../img/gyozaking_logo.png" className="full-height" alt=""/>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Index