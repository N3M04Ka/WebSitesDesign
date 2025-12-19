import { GoArrowRight } from "react-icons/go";
import startingSoonImg from "../assets/images/startingSoon.png"
import oldWomanImg from '../assets/images/oldWoman.jpg'
import commentImg from '../assets/images/comment.png';
import messagesImg from '../assets/images/messages.png'
export default function Experience() {
  return (
    <section className="experience">
      <div className="container">
        <h1><span>An unmatched attendee</span><br/>Experience</h1>
        <div className="cardsLayout">
          <div className="card1">
            <h2>Interactive overlays</h2>
            <p>Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and dispaly clickable CTAs.</p>
          </div>
          <div className="card2">
            <h2>Interactive Polls</h2>
            <p>Embed polls directly on stage and watch the results populate in real-time. Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
          </div>
          <div className="card3">
            <h2>HD Video Quality</h2>
            <p>Provide a better experience for your viewers with crystal clear HD video streaming.</p>
            <img src={startingSoonImg} alt="" />
            <img src={oldWomanImg} alt="" />
          </div>
        </div>
        <div className="lastRow">
          <div className="card4">
            <h2>Q&A</h2>
            <p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
            <img src={commentImg} alt="" />
          </div>
          <div className="card5">
            <h2>Chat</h2>
            <p>Chat is where engagement happens. With a slack-like experience, attendees can use emojis, reactions, and gifs to express themselves.</p>
            <img src={messagesImg} alt="" />
          </div>
        </div>
        <button><p>See all features</p><GoArrowRight className="arrow"/></button>
      </div>
    </section>
  );
}