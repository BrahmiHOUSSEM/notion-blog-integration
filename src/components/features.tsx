import Html from './svgs/htmlIcon'
import CssIcon from './svgs/CssIcon'
import JS from './svgs/JS'
import ReactJs from './svgs/ReactJs'
import TailWindCss from './svgs/TailWindCss'
import NextJs from './svgs/NextJs'
import Notion from './svgs/notion'
import BoostStrap from './svgs/BoostStrap'

const features = [
  {
    text: 'Hypertext Markup Language',
    icon: Html,
  },
  {
    text: 'Cascading Style Sheets',
    icon: CssIcon,
  },
  {
    text: 'JavaScript',
    icon: JS,
  },
  {
    text: 'React (JavaScript library) ',
    icon: ReactJs,
  },
  {
    text: 'Tailwind CSS (CSS framework)',
    icon: TailWindCss,
  },
  {
    text: 'Bootstrap (CSS framework)',
    icon: BoostStrap,
  },
  {
    text: 'Notion (Workspace and productivity tool)',
    icon: Notion,
  },
  {
    text: 'NextJs (React framework)',
    icon: NextJs,
  },
]

const Features = () => (
  <>
    <h3
      style={{
        textAlign: 'center',
        marginTop: '5rem',
        fontSize: '1.8rem',
        marginBottom: '0',
      }}
    >
      My Skills
    </h3>

    <div
      className="features"
      style={{ textAlign: 'center', marginTop: '1rem' }}
    >
      {features.map(({ text, icon: Icon }) => (
        <div className="feature" key={text}>
          {Icon && <Icon height={24} width={24} />}
          <h4
            style={{ fontSize: '.8rem', fontWeight: 'normal', color: '#333' }}
          >
            {text}
          </h4>
        </div>
      ))}
    </div>
  </>
)

export default Features
