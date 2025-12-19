import phoneImg from '../assets/images/section.jpg'
export default function CustomerStories() {
  return (
    <section className="customerStories">
      <div className="container">
        <div className="info">
          <h2>"Makes other platforms look like the 1990's"</h2>
          <h3>Nate Skinner, CMO at Onfido</h3>
          <button>Read customer stories</button>
        </div>
        <img src={phoneImg} alt="" />
      </div>
    </section>
  );
}