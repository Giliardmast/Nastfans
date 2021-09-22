import Heading from 'components/Heading'
import Link from 'next/link'
import Logo from 'components/Logo'
import * as S from './styles'
import Social from 'components/Social'

const Footer = () => (
  <S.Wrapper>
    <S.Content></S.Content>
    <S.Social>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Social socials={['twitter', 'instagram', 'youtube']} />
    </S.Social>
    <S.Column>
      <S.SubColumn>
        <div>
          <Heading size="small" lineBottom lineColor="secondary" color="white">
            Sobre
          </Heading>
          <nav aria-labelledby="sobre o site">
            <Link href="#">
              <a>Home</a>
            </Link>
            <Link href="#">
              <a>Anunciar</a>
            </Link>
            <Link href="#">
              <a>Faturamento</a>
            </Link>
            <Link href="#">
              <a>Blog</a>
            </Link>
            <Link href="#">
              <a>Ajuda</a>
            </Link>
          </nav>
        </div>
        <div>
          <Heading size="small" lineBottom lineColor="secondary" color="white">
            Info
          </Heading>
          <nav aria-labelledby="Informações do site">
            <Link href="#">
              <a>DMCA</a>
            </Link>
            <Link href="#">
              <a>Politicas de Cookies</a>
            </Link>
            <Link href="#">
              <a>Privacidade</a>
            </Link>
            <Link href="#">
              <a>Termos de uso</a>
            </Link>
            <Link href="#">
              <a>Afiliado</a>
            </Link>
            <Link href="#">
              <a>Noticias</a>
            </Link>
          </nav>
        </div>
      </S.SubColumn>

      <S.Notification>
        <Heading size="small" lineBottom lineColor="secondary" color="white">
          Nota:
        </Heading>
        <p>
          Isenção de responsabilidade: Quaisquer referências, nomes, logotipos,
          marcas e quaisquer outras marcas registradas ou imagens apresentadas
          ou mencionadas no Snapchat e no Instagram site fancentro.com são
          propriedade de seus respectivos detentores de marcas registradas.
          Esses detentores de marcas registradas não são afiliados ao
          fancentro.com.
        </p>
        <p>
          O Lindas.com.br não é uma agência, não intermedeia ou agencia. Fazemos
          apenas a publicidade das acompanhantes e cada uma é responsável pelas
          informações que cadastra em seu anúncio. Para mais informações, leia
          os termos de uso do site
        </p>
      </S.Notification>
    </S.Column>
    <S.Copyright>
      2016 - 2021 © fancentro.com Todos os direitos reservados. Todos os
      direitos reservados.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
