import userImg from "../assets/images/image (3).png";
type commentT = {
  comment: string;
  userName: string;
  userPhoto: string;
};
export default function CommentsSlider() {
  const comments: commentT[] = [
    {
      comment: '"cal.com (@calcom) is awesome AND built on open source"',
      userName: "Andy Randall",
      userPhoto: userImg,
    },
    {
      comment: '"cal.com (@calcom)1 is awesome AND built on open source"',
      userName: "Andy Randall",
      userPhoto: userImg,
    },
    {
      comment: '"cal.com (@calcom)2 is awesome AND built on open source"',
      userName: "Andy Randall",
      userPhoto: userImg,
    },
  ];
  return (
    <section className="commentsSlider">
      <div className="container">
        <div className="commentsSliderWrapper">
          {comments.map((el, id) => (
            <div className="comment" key={id}>
              <p className="text">{el.comment}</p>
              <div className="userInfo">
                <p className="userName">{el.userName}</p>
                <img src={el.userPhoto} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
