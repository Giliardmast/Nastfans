import Button from 'components/Button'
import * as S from './styles'

const PromotionalCard = () => (
  <S.ContentPromotion>
    <div>
      <h2>ACESSO AO COMTEUDO VIP</h2>
      <p>Veja todo conteudo de Nicole maya</p>
    </div>
    <S.ContentPreco>
      <S.box>
        <span>Apartir de </span>
        <S.Preco>
          135,90 <span>mês</span>
        </S.Preco>
      </S.box>
      <S.box>
        <Button>Assinar </Button>
      </S.box>
    </S.ContentPreco>
    <S.ContentInfo>
      <h3>Acesso FanCentro incluído:</h3>
      <ul>
        <li>Meu feed</li>
        <li>Bate-papo direto comigo</li>
        <li>FanCentro Stories</li>
      </ul>
    </S.ContentInfo>
  </S.ContentPromotion>
)

export default PromotionalCard
