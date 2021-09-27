import dynamic from 'next/dynamic'
import isMobile from 'hooks/responsive/isMobile'
import isBot from 'hooks/responsive/isBot'

import FeedMock from 'components/VideoFeed/mock'

import { SigleTemplateProps } from 'templates/SiglePage/desktop'
const Mobile = dynamic(() => import('templates/SiglePage/mobile'))
const Desktop = dynamic(() => import('templates/SiglePage/desktop'))
export default function Index(props: SigleTemplateProps) {
  const isMobileDevice = isMobile()
  const isBotDevice = isBot()
  return (
    <>
      {!isBotDevice ? (
        isMobileDevice ? (
          <Mobile {...props} />
        ) : (
          <Desktop {...props} />
        )
      ) : null}
    </>
  )
}
// gera as paginas durante o Build
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'rachelstarr' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover: 'img/cover.jpg',
      userInfo: {
        useAvatar: {
          username: 'Giliard',
          img: '/img/avatar/avatar1.jpg',
          nickname: '@giliardmast',
          size: 'medium',
          usergp: false,
          price: '200',
          age: '25',
          bg: false
        },
        linkSocias: {
          twitter: 'juizgxxx',
          youtube: 'juizgxxx',
          instagram: 'giliard558',
          telegram: 'giliard558',
          tiktok: 'giliard558',
          link: 'giliard558'
        }
      },
      feedItems: FeedMock
    }
  }
}
