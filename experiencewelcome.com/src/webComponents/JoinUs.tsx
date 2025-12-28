import img from '../assets/images/womanAndMan.jpg'
export default function JoinUs() {
  return (
    <section className="joinUs">
      <div className="container">
        <div className="top">
          <h2>Join us</h2>
          <a href="#">All events</a>
        </div>
        <div className="meetingInfo">
          <div className="info">
            <h3>December 21, 2022</h3>
            <p>Attention-Grabbing Marketing in a Noisy Market</p>
            <button>Register</button>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}