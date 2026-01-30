import img1 from "../assets/images/image (4).png";
import img2 from "../assets/images/image (5).png";
import img3 from "../assets/images/image (6).png";
import img4 from "../assets/images/image (7).png";
import img5 from "../assets/images/image (8).png";
import img6 from "../assets/images/image (10).png";
import img7 from "../assets/images/image (11).png";
import { FaMinus, FaRetweet } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useState,useRef } from "react";
import { FaPlus } from "react-icons/fa";
type userReview = {
  userName: string;
  userNickName: string;
  userImg: string;
  reviewText: string;
  reviewTime: Date;
  numberOfRetweets: number;
};
export default function Reviews() {
  const reviews: userReview[] = [
    {
      userName: "Guillermo Rauch",
      userNickName: "rauchg",
      userImg: img1,
      reviewText:
        "Coolest domain. Check Coolest mission. Check Coolest product. Check",
      reviewTime: new Date("2021-09-15T17:48:00"),
      numberOfRetweets: 36,
    },
    {
      userName: "Matt Galligan",
      userNickName: "mg",
      userImg: img2,
      reviewText:
        "The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge.\n\nSo: can we please do the above for an email app, contacts app?",
      reviewTime: new Date("2026-09-10T17:48:00"),
      numberOfRetweets: 36,
    },
    {
      userName: "Thomas Paul Mann",
      userNickName: "thomaspaulmann",
      userImg: img3,
      reviewText:
        "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
      reviewTime: new Date("2022-09-07T06:19:00"),
      numberOfRetweets: 3,
    },
    {
      userName: "Farhaj May00n",
      userNickName: "farhajmayan",
      userImg: img4,
      reviewText:
        "As of today I'm officially a @calcom maxi. The product is epic. @peer_rich where can I buy merch??",
      reviewTime: new Date("2022-02-17T06:31:00"),
      numberOfRetweets: 3,
    },
    {
      userName: "KP",
      userNickName: "thisiskp_",
      userImg: img5,
      reviewText:
        "SaaS is eating the world\n\nAnd Open Source is eating SaaS for breakfast\n\nA lot of alternatives are rising up\n\nHere are a few:\n\nCalendly - @calcom\n\nAirtable - @baserow\n\nZapier - @n8n_io\n\nWhat else?",
      reviewTime: new Date("2022-07-21T12:27:00"),
      numberOfRetweets: 9,
    },
    {
      userName: "Sharath",
      userNickName: "5harath",
      userImg: img6,
      reviewText:
        "Probably the first calendar app in web3 space!\n\nGreat work @peer_rich and @calcom team",
      reviewTime: new Date("2022-02-08T13:51:00"),
      numberOfRetweets: 2,
    },
    {
      userName: "Talha Altinel",
      userNickName: "mr_wormhole",
      userImg: img7,
      reviewText:
        "I am amazed by @calcom (Calendso) 's success, I was quite pessimistic that it would take off as a project in 2020 but here we are using Calendso and trying to self-host with improved documentation 🤣🤣",
      reviewTime: new Date("2026-09-10T17:48:00"),
      numberOfRetweets: 36,
    },
    {
      userName: "Guillermo Rauch",
      userNickName: "rauchg",
      userImg: img1,
      reviewText:
        "Coolest domain. Check Coolest mission. Check Coolest product. Check",
      reviewTime: new Date("2021-09-15T17:48:00"),
      numberOfRetweets: 36,
    },
    {
      userName: "Matt Galligan",
      userNickName: "mg",
      userImg: img2,
      reviewText:
        "The more tools I use like @logseq @raycastapp and @calcom the more I believe in the power of an extension platform. Being able to tailor a tool to fit my needs is huge.\n\nSo: can we please do the above for an email app, contacts app?",
      reviewTime: new Date("2026-09-10T17:48:00"),
      numberOfRetweets: 36,
    },
    {
      userName: "Thomas Paul Mann",
      userNickName: "thomaspaulmann",
      userImg: img3,
      reviewText:
        "I'm already rocking the new @calcom extension to coordinate my meetings 😎",
      reviewTime: new Date("2022-09-07T06:19:00"),
      numberOfRetweets: 3,
    },
    {
      userName: "Farhaj May00n",
      userNickName: "farhajmayan",
      userImg: img4,
      reviewText:
        "As of today I'm officially a @calcom maxi. The product is epic. @peer_rich where can I buy merch??",
      reviewTime: new Date("2022-02-17T06:31:00"),
      numberOfRetweets: 3,
    },
    {
      userName: "KP",
      userNickName: "thisiskp_",
      userImg: img5,
      reviewText:
        "SaaS is eating the world\n\nAnd Open Source is eating SaaS for breakfast\n\nA lot of alternatives are rising up\n\nHere are a few:\n\nCalendly - @calcom\n\nAirtable - @baserow\n\nZapier - @n8n_io\n\nWhat else?",
      reviewTime: new Date("2022-07-21T12:27:00"),
      numberOfRetweets: 9,
    },
    {
      userName: "Sharath",
      userNickName: "5harath",
      userImg: img6,
      reviewText:
        "Probably the first calendar app in web3 space!\n\nGreat work @peer_rich and @calcom team",
      reviewTime: new Date("2022-02-08T13:51:00"),
      numberOfRetweets: 2,
    },
    {
      userName: "Talha Altinel",
      userNickName: "mr_wormhole",
      userImg: img7,
      reviewText:
        "I am amazed by @calcom (Calendso) 's success, I was quite pessimistic that it would take off as a project in 2020 but here we are using Calendso and trying to self-host with improved documentation 🤣🤣",
      reviewTime: new Date("2026-09-10T17:48:00"),
      numberOfRetweets: 36,
    },
  ];
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function convertDateToString(t: Date): string {
    const minutes = t.getMinutes();
    const month = months[t.getMonth()];
    const year = t.getFullYear();
    const date = t.getDate();
    const hoursT = t.getHours() >= 12 ? "PM" : "AM";
    let hours = t.getHours() - 12;
    if (hours <= 0) hours += 12;
    return `${hours}:${minutes} ${hoursT}   ${month} ${date}, ${year}`;
  }
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const topRef = useRef<HTMLDivElement>(null);
  function closeReviews() {
    setIsHidden(true);
    topRef.current?.scrollIntoView({behavior:"smooth"})
  }
  return (
    <section className="reviews">
      <div
        className="container"
        style={isHidden ? { overflow: "hidden", height: "500px" } : { overflow: "auto", height: "1300px", paddingBottom: "60px" }}
        ref={topRef}
      >
        {isHidden && (
          <div className="block">
            <button onClick={()=>setIsHidden(false)}>SHOW MORE <FaPlus className="plus"/></button>
          </div>
        )}
        {!isHidden && (
          <button className="closeButton" onClick={closeReviews}>SHOW LESS <FaMinus className="plus"/></button>
        )}
        <div className="reviewsWrapper">
          {reviews.map((el, id) => (
            <div className="review" key={id}>
              <div className="userInfo">
                <img src={el.userImg} alt="" />
                <div className="name">
                  <p className="name">{el.userName}</p>
                  <p className="nick">"@"+{el.userNickName}</p>
                </div>
              </div>
              <p className="reviewText">{el.reviewText}</p>
              <p className="tweetTime">{convertDateToString(el.reviewTime)}</p>
              <div className="interactions">
                <div className="retweet">
                  <button className="retweetB">
                    <FaRetweet />
                  </button>
                  <p className="retweetCount">{el.numberOfRetweets}</p>
                </div>
                <button className="like">
                  <FiHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
