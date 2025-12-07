import ObviImg from '../assets/images/obvi.png'
import OverlandingImg from '../assets/images/overlander.png'
import ParagonImg from '../assets/images/paragon.png'

export default function Quotes() {
  return (
    <div className="quotes">
        <div className="container">
            <h2>PostPilot makes it a <span>cinch</span> to <br/> send personalized,profit-<br/>generating postcards.</h2>
            <div className="quotesItems">
                <div className="quoteItem">
                    <h3><span>Powerful</span><br/>acquasition <br/> & retention</h3>
                    <h4>Send one-off triggered campaigns to customers <br/>& prospects.Target email leads with MailMatch</h4>
                    <div className="directQuote">
                        <p>It's like Klaviyo for direct mail. The results are <br/>absoluterly insane.</p>
                        <div className="quoteAuthor">
                            <span>Ash Melwani, CMO</span>
                            <img src={ObviImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="quoteItem">
                    <h3><span>Fight back</span>against iOS <br/> updates jacked-up <br/> CPCs & spam folders</h3>
                    <h4>Deliver your message to all of your customers — for less than the<br/> cost of a click</h4>
                    <div className="directQuote">
                        <p>PoosPilot is our new weapon against sinking email engagement and rising<br/> PPC costs. Tthe results and ROI have been outstanding. It's now one of<br/>our core marketing channels to increase acquasition &LTV.</p>
                        <div className="quoteAuthor">
                            <span>Leah Keith,GM</span>
                            <img src={OverlandingImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="quoteItem">
                    <h3>Done for <span>you</span></h3>
                    <h4>From design & stategy to stamp-licking, our ecom<br/> experts help you every step of the way.</h4>
                    <div className="directQuote">
                        <p>The team is so knowledgeable and beyond helpful.<br/> I'm blown away by their communication, datail, and <br/> attentiveness and always feel like they have our best <br/>interest in mind.Definetely worth a try.</p>
                        <div className="quoteAuthor">
                            <span>Holly Davies, Marketing Director</span>
                            <img src={ParagonImg} alt="" />
                        </div>
                    </div>
                    <button>TRY IT RISK FREE</button>
                </div>
            </div>
        </div>
    </div>
  )
}
