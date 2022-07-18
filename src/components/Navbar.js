import React,{useState,useEffect} from 'react'
import logo from "../assets/images/logo.svg"
import hamburger from "../assets/images/icon-hamburger.svg"
import close from "../assets/images/icon-close.svg"  
import Button from './Button'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const items = [{
        page:"Home",
        Link :"/"
    },
    {
        page:"About",
        Link:""
    },
    {
        page:"Contact",
        Link:""
    },
    {
        page:"Blog",
        Link: "/blog"
    },
    {
        page:"Careers",
        Link:""
    }
]


    const [width,setWidth] = useState(window.innerWidth)
    const [show,setShow]= useState(false)
    const [mobilenav,setMobileNav] =useState(false)
    const updateDimensions = () => {
        setWidth(window.innerWidth);
      };
      
      useEffect(() => {
          window.addEventListener("resize", updateDimensions);
          return () => window.removeEventListener("resize", updateDimensions);
        }, []);
      const handleClick=()=>{
        if(!show ){
            setShow(true)
            setMobileNav(true)
        }

        else{
            setShow(false)
            setMobileNav(false) 

        }
        
      }
   
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="company-logo"/>
        </div>
        <div className='navbar-list'>
            <ul className='navbar-list-item' >
                {
                    items.map((navitem,index) => (
                        <>
                            <Link to ={navitem.Link}><li key={index}>{navitem.page}</li></Link>
                         
                        </>
                    ))
                } 
            </ul>
        </div>
        <div className='invite'>
        {
            width >= 920 ? <Button children={"Request Invite"}/>:
           <div className='hamburger' onClick={handleClick}>

            {show ? 
            <><img src={close} alt='close' sizes={35}/>
                
            </>
            
            :

            <img src={hamburger} alt='hbg' sizes={35}/>
        }
           </div>
            
        }
        { mobilenav ? <div className='mobile-nav'>
            
               
            
            <ul className='mobile-nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
           
        </div> : "" }
        </div>
    
    </div>
  )
}

export default Navbar
