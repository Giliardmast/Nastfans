import Home, { HomeTemplateProps } from 'templates/Home'
import UserStoriesMock from 'components/SliderStories/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  // faz a logica
  //pode buscar dados na API

  // faz calculos dos dados de
  return {
    props: {
      UserStories: UserStoriesMock
    }
  }
}
