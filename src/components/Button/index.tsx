import React, {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  // pode ser qualquer tipo
  size?: 'small' | 'medium' | 'large'
  minimal?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

// !! significa dupla negação
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    minimal = false,
    fullWidth = false,
    ...props
  },
  ref
) => (
  //hasIcon verifica se tem icone ou não
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
