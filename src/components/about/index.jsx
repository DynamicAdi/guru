import React from 'react'
import "./styles.scss"
import plate from "/plate.png";

function About() {
  return (
    <div className='about' id='#about'>
        <h1>About <span>Us</span></h1>
        <div className="middle">
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quis laborum in numquam laudantium libero dolorem eveniet veniam, nesciunt minus, dignissimos optio ducimus adipisci accusamus dolorum? Natus rerum adipisci magnam.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia ab reprehenderit exercitationem aperiam nisi obcaecati aliquam temporibus quas, debitis provident, nobis explicabo aliquid delectus! Quaerat, sed accusamus sunt error quas incidunt beatae nostrum adipisci eius? Ad asperiores, reprehenderit vero sit culpa nihil ea eius quod necessitatibus labore, molestiae ratione voluptatem quis perspiciatis nobis dignissimos maxime, doloribus libero rem quas obcaecati sint autem nemo saepe. Ut maiores facere delectus nemo numquam! Neque provident dolores aliquid asperiores exercitationem quo totam repudiandae!
                </p>
            </div>
            <div className="images">
                <div className="dot">
                    <img src={plate} alt="plate" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About