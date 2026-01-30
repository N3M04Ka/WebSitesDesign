import aicpaImg from '../assets/images/image (12).png'
import ccpaImg from '../assets/images/image (13).png'
import gdprImg from '../assets/images/image (14).png'
import slackImg from '../assets/images/slack1.png'
import twitterImg from '../assets/images/twitter.png'
import gitHubImg from '../assets/images/gitHub.png'
export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="left">
					<p className="logo">Cal.com</p>
					<p className="rightReserved">© 2022 Cal.com,<br/>Inc.<br/>support@cal.com</p>
					<div className="images">
						<img src={aicpaImg} alt="" />
						<div className="rightImgs">
							<div className="top">
								<img src={ccpaImg} alt="" />
								<img src={gdprImg} alt="" />
							</div>
							<div className="bottom">
								<img src={slackImg} alt="" />
								<img src={twitterImg} alt="" />
								<img src={gitHubImg} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<div className="column">
						<p className="columnName">Solutions</p>
						<a href="#">Self-hosted</a>
						<a href="#">SaaS Hosting</a>
						<a href="#">Platform</a>
						<a href="#">Desktop App</a>
					</div>
					<div className="column">
						<p className="columnName">Documentation</p>
						<a href="#">Product</a>
						<a href="#">Developers</a>
						<a href="#">Public API</a>
						<a href="#">Docker</a>
					</div>
					<div className="column">
						<p className="columnName">Resources</p>
						<a href="#">Blog</a>
						<a href="#">Merch Store</a>
						<a href="#">Open Startup</a>
						<a href="#">Embed</a>
						<a href="#">Developers</a>
						<a href="#">Routing Forms</a>
						<a href="#">Workflows</a>
						<a href="#">App Store</a>
					</div>
					<div className="column">
						<p className="columnName">Company</p>
						<a href="#">About</a>
						<a href="#">Privacy</a>
						<a href="#">Terms</a>
						<a href="#">License</a>
						<a href="#">Security</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
