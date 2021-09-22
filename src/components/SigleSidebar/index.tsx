import * as S from './styles'

const SigleSidebar = () => (
  <S.Wrapper>
    <S.SidebarContent>
      <S.Item>
        <h3 className="asedr">Atendimento:</h3>
        <ul>
          <li>Mundubim</li>
          <li>Fortaleza - Ce</li>
          <li>Com local, Hotel, Motel</li>
          <li>Homens, Mulheres, Casais</li>
          <li>Dinhiero, cartão de credito</li>
        </ul>
      </S.Item>
      <S.Item>
        <h3>Cachê :</h3>
        <ul>
          <S.Box>
            <li>
              <div>1h</div>
              <span></span>
              <S.Itemres className="cache">170,00</S.Itemres>
            </li>
            <li>
              <div>2h</div>
              <span></span>
              <S.Itemres className="cache">340,00</S.Itemres>
            </li>
            <li>
              <div>Pernoite</div>
              <span></span>
              <S.Itemres className="cache">1270,00</S.Itemres>
            </li>
          </S.Box>
        </ul>
      </S.Item>
      <S.Item>
        <h3>Sobre :</h3>
        <ul>
          <S.Box>
            <li>
              <S.Itemres>Eu sou</S.Itemres>
              <span></span>
              <S.Itemres>Mulher</S.Itemres>
            </li>
            <li>
              <div>Idade</div>
              <span></span>
              <S.Itemres>21 anos</S.Itemres>
            </li>
            <li>
              <div>Altura</div>
              <span></span>
              <S.Itemres> 1,68 cm</S.Itemres>
            </li>
            <li>
              <div>Peso</div>
              <span></span>
              <S.Itemres>55 kgs</S.Itemres>
            </li>
          </S.Box>
        </ul>
      </S.Item>
      <S.Item>
        <h3>Descrição:</h3>
        <p>
          Com um par de pernas definidas de academia; um bumbum maravilhoso;
          pele macia; pelinhos dourados pelo corpo e um rosto com traços
          delicados, ela esbanja sensualidade por onde passa, e ainda mescla
          tudo isso com um jeitinho meiga; educada e simpática de ser. Esses
          foram alguns dentre vários atributos que constamos ao conhecê-la
          pessoalmente.!
        </p>
      </S.Item>
    </S.SidebarContent>
  </S.Wrapper>
)

export default SigleSidebar
