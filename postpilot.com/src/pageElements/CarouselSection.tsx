import { FaTwitter } from "react-icons/fa";
import girlImg from '../assets/images/girl.jpg'
import dudeImg from '../assets/images/dude.jpg'
import basisDudeImg from '../assets/images/basisDude.jpg'
import dude3Img from '../assets/images/dude3.png'
import girl2Img from '../assets/images/girl2.png'
import girl3Img from '../assets/images/girl3.png'
import dude4Img from '../assets/images/dude4.png'
type CarouselItem={
    name:string,
    nick:string,
    img:string,
    text:string,
}
export default function CarouselSection() {
    const carouselArray:CarouselItem[]=[
        {
            name:"Helen Guo",
            nick:"@HelenGuo_",
            img:girlImg,
            text:"Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging."
        },
        {
            name:"Emily Chen",
            nick:"@emilychenny",
            img:girl3Img,
            text:"PostPilot is game changer if you layer it correctly. Our ROI has doubled."
        },
        {
            name:"Nathan Woods",
            nick:"@HeisNathan",
            img:dudeImg,
            text:"We have done some rad winbacks to 360-720 days since purchase that have rocked. PostPilot team is one of my favs."
        },
        {
            name:"Alex Kim",
            nick:"@alexxis",
            img:dude4Img,
            text:"Such a killer tool. PostPilot makes personalization easy and effective."
        },
        {
            name:"Chris Lander",
            nick:"@chris_basis",
            img:basisDudeImg,
            text:"Been using PostPilot for years. Good for re-engagement. And you can get creative with your messaging."
        },
        {
            name:"Jon Tucker",
            nick:"@JonTuckerUSA",
            img:dude3Img,
            text:"Email is a killer channel, but if you layer in postal mail you can really supercharge results. The team at @getpostpilot will spark ideas for ya."
        },
        {
            name:"Sarah Jenkins",
            nick:"@sarah_jenkins",
            img:girl2Img,
            text:"Been using PostPilot for montsh. Incredible for customer retention. The messaging features are top-notch."
        },
    ]
  return (
    <div className="carouselSection">
        <div className="container">
            <h2>PostPilot is 🔥 for <span>DTC</span></h2>
            <div className="carousel">
                <div className="group">
                    {carouselArray.map((el,id)=>(<div className="carouselItem" key={id}>
                        <div className="profil">
                            <div className="profilContainer">
                                <img src={el.img} alt="" />
                                <div className="nickname">
                                    <p className="name">{el.name}</p>
                                    <p className="nick">{el.nick}</p>
                                </div>
                            </div>
                            <FaTwitter style={{fontSize:'32px'}}/>
                        </div>
                        <p>{el.text}</p>
                    </div>))}
                </div>
                <div aria-hidden className="group">
                    {carouselArray.map((el,id)=>(<div className="carouselItem" key={id}>
                        <div className="profil">
                            <div className="profilContainer">
                                <img src={el.img} alt="" />
                                <div className="nickname">
                                    <p className="name">{el.name}</p>
                                    <p className="nick">{el.nick}</p>
                                </div>
                            </div>
                            <FaTwitter style={{fontSize:'32px'}}/>
                        </div>
                        <p>{el.text}</p>
                    </div>))}
                </div>
            </div>
            <button>TRY IT RISK-FREE</button>
        </div>
    </div>
  )
}
