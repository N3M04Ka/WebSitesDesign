import img1 from '../assets/images/div4.png'
import img2 from '../assets/images/div3.jpg'
import img3 from '../assets/images/div5.jpg'
export default function OurProduct() {
  const images = [img1, img2, img3];
  const images2 = [img3, img1, img2];
  return (
    <section className="ourProduct">
      <div className="container">
        <h2>Experience<br/>Welcome</h2>
        <p>A webinar platform designed for marketers to host jaw-<br/>dropping experiences that drive revenue.</p>
        <button>Request a demo</button>
        <div className="carousel">
          <div className="top">
            <div className="group">
              {images.map((el,id)=>(
                <img src={el} key={id} />
              ))}
            </div>
            <div aria-hidden className="group">
              {images.map((el,id)=>(
                <img src={el} key={id} />
              ))}
            </div>
          </div>
          <div  className="bottom">
            <div  className="group">
              {images2.map((el,id)=>(
                <img src={el} key={id} />
              ))}
            </div>
            <div aria-hidden className="group">
              {images2.map((el,id)=>(
                <img src={el} key={id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}