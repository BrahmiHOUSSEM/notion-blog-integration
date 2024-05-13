import ExtLink from './ext-link'
import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'
import Link from 'next/link'

const contacts = [
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/BrahmiHOUSSEM',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/brhsm/',
  },
  {
    Comp: Envelope,
    alt: 'email icon',
    link: 'mailto:brhhsm55@gmail.com',
  },
]

export default function Footer() {
  return (
    <>
      <footer>
        <Link className="logoLink" href={'/'}>
          <img src="/avatar.png" height={60} width={60} alt="avatar" />
        </Link>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </footer>
    </>
  )
}
