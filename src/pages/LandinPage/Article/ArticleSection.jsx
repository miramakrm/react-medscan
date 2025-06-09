import styles from '../Article/ArticleSection.module.css';
import back from '../../../assets/images/landingPage/back.png';
import warning from '../../../assets/images/landingPage/warning.png';
import people from '../../../assets/images/landingPage/people.png';
import brain from '../../../assets/images/landingPage/brain.png';

function ArticleSection() {
  const articles = [
    {
      img: back,
      title: "Pain in Your Lower Left Abdomen",
      desc: "Pain in the lower left abdomen may be from constipation or gas, kidney stones, or a hernia. In women, menstruation or ovarian cysts can also cause pain there."
    },
    {
      img: warning,
      title: "What Causes Sharp Chest Pain?",
      desc: "Chest pain is a symptom that can range from mild discomfort to a serious medical emergency. It doesn’t always indicate a heart problem, but because it can be a sign of life-threatening conditions, it should never be ignored. The sensation may feel like pressure, squeezing, burning, or sharp pain, and it can be localized to one area or spread across the chest and into the arms, neck, or jaw."
    },
    {
      img: people,
      title: "What is the common symmptoms ?",
      desc: "The common cold is an infection of your nose, sinuses, throat and windpipe. Colds spread easily, especially within homes, classrooms and workplaces. More than 200 different viruses can cause colds. There’s no cure for a common cold, but it usually goes away within a week to 10 days. "
    },
    {
      img: brain,
      title: "What Causes Brain Tumors?",
      desc: "rain tumors are common, requiring general medical providers to have a basic understanding of their diagnosis and management. The most prevalent brain tumors are intracranial metastases from systemic cancers, meningiomas, and gliomas, specifically, glioblastoma"
    },
    {
      img: back,
      title: "Understanding Back Pain",
      desc: "Back pain is a common condition that affects many people at some point in their lives. It can range from a dull ache to a sharp, stabbing sensation and can be caused by various factors including muscle strain, herniated discs, or underlying medical conditions."
    },
    {
      img: warning,
      title: "Warning Signs of Heart Disease",
      desc: "Heart disease is a leading cause of death worldwide. Recognizing the early warning signs can be crucial for timely intervention and treatment. Symptoms may include chest pain, shortness of breath, fatigue, and irregular heartbeats."
    }
  ];

  // تقسيم المقالات إلى مجموعات (3 بطاقات في كل شريحة)
  const groupedArticles = [];
  for (let i = 0; i < articles.length; i += 3) {
    groupedArticles.push(articles.slice(i, i + 3));
  }

  return (
    <div className={`container my-5 ${styles.container}`} id="Top-articles">
      <h2 className={`text-center mb-4 ${styles.heading}`}>Top Articles</h2>

      <div id="articleCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedArticles.map((group, idx) => (
            <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
              <div className="row justify-content-center">
                {group.map((article, i) => (
                  <div className="col-md-4" key={i}> {/* Changed from col-md-6 to col-md-4 for 3 cards */}
                    <div className={`card mb-3 mx-2 ${styles.card}`}>
                      <img src={article.img} className={`card-img-top ${styles.image}`} alt="Article" />
                      <div className="card-body">
                        <h5 className={`card-title ${styles.title}`}>{article.title}</h5>
                        <p className={`card-text ${styles.desc}`}>{article.desc}</p>
                        <span className={styles.readMore}>Read More →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#articleCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#articleCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ArticleSection;