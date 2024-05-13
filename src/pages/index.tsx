import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Brahmi HOUSSEM</h1>
        <h2>FRONT-END DEVELOPER</h2>

        <Features />
        <div className="explanation" style={{ textAlign: 'justify' }}>
          <h3
            style={{
              textAlign: 'center',
              marginTop: '5rem',
              fontSize: '1.8rem',
              marginBottom: '0',
            }}
          >
            Introducing my dynamic portfolio
          </h3>
          <p>
            Introducing my dynamic portfolio, seamlessly connected to my Notion
            blog for real-time updates. With each new project or article
            acquired, this portfolio evolves, ensuring you're always in sync
            with my latest endeavors. Experience rich content displays,
            effortless navigation, and personalized viewing options, all powered
            by the seamless integration between Notion and my portfolio.
          </p>
        </div>

        <div className="explanation" style={{ textAlign: 'justify' }}>
          <h3
            style={{
              textAlign: 'center',
              marginTop: '5rem',
              fontSize: '1.8rem',
              marginBottom: '0',
            }}
          >
            About Me
          </h3>
          <p>
            Absolutely! Here's a tailored version for your portfolio: Hello
            there! I'm [Your Name], a physicist by training who has ventured
            into the world of web development. Armed with a Master's degree in
            Physics, I embarked on a journey of self-teaching to master HTML,
            CSS, JavaScript, React.js, Next.js, Tailwind CSS, and Bootstrap.
            Through relentless dedication and a thirst for knowledge, I've not
            only honed my skills but also created a portfolio of projects that
            showcase my expertise in web development.
          </p>

          <p>
            My passion for understanding the intricacies of the universe has
            seamlessly merged with my enthusiasm for crafting digital solutions.
            From designing responsive layouts to implementing dynamic
            functionalities, I've delved deep into the world of front-end
            development, constantly pushing boundaries and exploring new
            technologies.
          </p>
          <p>
            In addition to my projects, I've also contributed articles to share
            my insights and experiences in web development. Whether it's
            discussing best practices, sharing tips and tricks, or exploring
            emerging trends, I'm dedicated to fostering a community of learning
            and collaboration within the web development sphere.
          </p>
          <p>
            Join me as I continue to expand my skills, tackle new challenges,
            and make meaningful contributions to the ever-evolving landscape of
            web development.
          </p>
        </div>
      </div>
    </>
  )
}
