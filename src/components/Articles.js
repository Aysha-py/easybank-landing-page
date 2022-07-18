import React from 'react'
import currency from '../assets/images/image-currency.jpg'
import confetti from '../assets/images/image-confetti.jpg'
import plane from '../assets/images/image-plane.jpg'
import restaurant from '../assets/images/image-restaurant.jpg'

const articles = () => {
    const Articles =[{
        id: 1,
        image: currency,
        author: "Claire Robinson",
        title:"Recieve Money in Any Currency with no fees",
        content:"The world is getting smaller and we getting more mobile. So why should you be forced to recieve money in a single ..."
    },
    {
        id: 2,
        image:restaurant,
        author: "Wilson Hutton",
        title:"Treat yourself without worrying about Money",
        content:"Our Simple budgeting feature allows you to seperate out your spending and set realistic limits every month. That means you ..."
    },
    {
        id: 3,
        image: plane,
        author: "Wilson Hutton",
        title:"Take your Easy Bank Card wherever you go",
        content:"We want you to enjoy your travels. This is why we don't charge any fees on purchase. While you are abroad we will even showyou ..."
    },
    {
        id: 4,
        author: "Claire Robinson",
        image: confetti,
        title:"Our Invite-Only Beta accounts are now live",
        content:"After a lot of Hardwork by the whole team, we are excited to launch our closed Beta. It is easy to request an invite through the site ..."
    }
]
  return (
    <div className='ArticleContent'>
    <h1>Latest Articles</h1>
        <div className='articleTiles'>
            
            {
                Articles.map((article)=>(
                    <div className='article' key={article.id}>
                        
                        <img src={article.image} alt='article png'/>
                        <h2>{`By ${article.author}`}</h2>
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default articles