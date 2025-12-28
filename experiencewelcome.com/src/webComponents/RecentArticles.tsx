import img1 from '../assets/images/bulp.png'
import img2 from '../assets/images/People.jpg'
import img3 from '../assets/images/multipleUsers.jpg'
interface article{
  tags: string[],
  article:string,
  img: string;
}
export default function RecentArticles() {
  const articles:article[]=[
    {
      tags:["Inspiration"],
      article:"8 Creative Ways to Repurpose Your Webinar Content",
      img: img1,
    },
    {
      tags:["Inspiration"],
      article:"Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About",
      img: img2,
    },
    {
      tags:["Inspiration"],
      article:"How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps",
      img: img3,
    },
  ]
  return (
    <section className="recentArticles">
      <div className="container">
        <h2>Recent articles</h2>
        <div>
          <div className="articles">
            {articles.map((el,id)=>(
              <div className='article' key={id}>
                <img src={el.img} alt="" />
                <div className="tags">
                  {el.tags.map((el,id)=>(
                    <a key={id} href='#'>{el}</a>
                  ))}
                </div>
                <p>{el.article}</p>
                <a href="#">Read</a>
              </div>
            )
            )}
          </div>
          <button>Read the blog</button>
        </div>
      </div>
    </section>
  );
}