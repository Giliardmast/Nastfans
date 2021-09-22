import SiglePage, { SigleTemplateProps } from 'templates/SiglePage'
export default function Index(props: SigleTemplateProps) {
  return <SiglePage {...props} />
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
      itemsCard: {
        itemCard: {
          url: 'vids/tiktok1.mp4',
          soundBar: false
        }
      }
    }
  }
}
