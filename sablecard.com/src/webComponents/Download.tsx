import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function Download() {
  return (
    <section className="download">
      <div className="container">
        <div className="left">
          <h2>Join over <span>400,000</span> accounts</h2>
          <h3>Download Sable: effortless, borderless banking for a more connected world.</h3>
        </div>
        <div className="right">
          <div className="buttons">
            <button>
              <FaGooglePlay className="image"/>
              <div className="text">
                <h4>GET IT ON</h4>
                <h5>Google Play</h5>
              </div>
            </button>
            <button>
              <FaApple className="image"/>
              <div className="text">
                <h4>Download on the </h4>
                <h5>App Store</h5>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}