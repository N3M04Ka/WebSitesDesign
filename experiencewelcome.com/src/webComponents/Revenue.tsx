import laptopImg from '../assets/images/span.jpg'
export default function Revenue() {
  return (
    <section className="revenue">
      <div className="container">
        <div className="left">
          <h2>Drive</h2>
          <div>
            <img src={laptopImg} alt="" />
            <h2>Revenue</h2>
          </div>
        </div>
        <div className="right">
          <div className="infBlock">
            <h3>+87%</h3>
            <p>increased attendee engagement</p>
            <span>at Bitwise</span>
          </div>
          <div className="infBlock">
            <h3>$1.7M</h3>
            <p>pipeline generated</p>
            <span>at Everbridge</span>
          </div>
          <div className="infBlock">
            <h3>58%</h3>
            <p>attendee conversion rate</p>
            <span>at Interfolio</span>
          </div>
        </div>
      </div>
    </section>
  );
}