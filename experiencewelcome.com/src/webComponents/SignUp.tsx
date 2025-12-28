import { IoMdArrowForward } from "react-icons/io";
export default function Signup() {
  return (
    <section className="signup">
      <div className="container">
        <h2>Signup for the<br/>newsletter</h2>
        <div className="bottom">
          <h3>Stay connected</h3>
          <form>
            <div><input type="text" placeholder="First name"/></div>
            <div>
              <input type="email" placeholder="Email"/>
              <button><IoMdArrowForward style={{fontSize:"23px"}} /></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}