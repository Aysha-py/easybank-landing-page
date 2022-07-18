import React,{useEffect,useState} from 'react'
import desktopintro from '../assets/images/bg-intro-desktop.svg'
import mobileintro from '../assets/images/bg-intro-mobile.svg'
import mockup from '../assets/images/image-mockups.png'
import budgeting from "../assets/images/icon-budgeting.svg"
import onboarding from "../assets/images/icon-onboarding.svg"
import online from "../assets/images/icon-online.svg"
import api from "../assets/images/icon-api.svg"
import Button from '../components/Button'

const MainPage = () => {
    const cards =[{
        id: 1,
        image: online,
        title:"online banking",
        content:"Our modern web and mobile applications allow you to keep tracks of your finances wherever you are in the world"
    },
    {
        id: 2,
        image:budgeting,
        title:"Simple Budgeting",
        content:"Our modern web and mobile applications allow you to keep tracks of your finances wherever you are in the world"
    },
    {
        id: 3,
        image: onboarding,
        title:"fast onboarding",
        content:"Our modern web and mobile applications allow you to keep tracks of your finances wherever you are in the world"
    },
    {
        id: 4,
        image: api,
        title:"open Api",
        content:"Our modern web and mobile applications allow you to keep tracks of your finances wherever you are in the world"
    }
]
const [width,setWidth] = useState(window.innerWidth)

    const updateDimensions = () => {
        setWidth(window.innerWidth);
      };
      
      useEffect(() => {
          window.addEventListener("resize", updateDimensions);
          return () => window.removeEventListener("resize", updateDimensions);
        }, []);
      
  return (
 
    <div className='mainPage'>
        <div className='main-content'>
            <div className='details'>
                <h1> Next generation digital banking </h1>
                <p>Take your financial life online. Your easy bank account wil be a one-stop-shop for 
                    spending, saving, budgeting, investing and much more.
                </p>
                <Button children={"Request Invite"}/>
               
            </div>
            <div className='contentImage'>
                <div className='mockup'>
                    <img src={mockup} alt=''/>
                </div>
                <div className='detailsImage'>
                    {width>=920?<img src={desktopintro} alt=''/>: <img src={mobileintro} alt=''/>}
                </div>
                
            </div>
           
        </div>
        <div className='Tiles'>
        
            <div className='why'>
                <h1> Why Choose EasyBank? </h1>
                <p>We leverage open banking to turn your bank account into ypur financial
                    hub. Control your finances like never before.
                </p>
            </div>

            <div className='cardTiles'>
                {
                    cards.map((card)=>(
                        <div className='card' key={card.id}>
                            <img src={card.image} alt=''/>
                            <h2>{card.title}</h2>
                            <p>{card.content}</p>
                        </div>
                    ))
                }
            </div>
          
        </div>

    </div>
    

    
  
    
  )
}

export default MainPage