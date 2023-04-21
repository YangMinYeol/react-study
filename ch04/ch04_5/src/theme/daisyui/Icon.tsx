import type {FC} from 'react'
import type {ButtonProps} from './Button'
import type {IconProps as CIconProps} from '../../components'
import {Button} from './Button'
import {Icon as CIcon} from '../../components'

/**
 * IconProps타입을 정의하고 export한다
 * 이 타입은 ButtonProps와 CIconProps를 상속한다
 */
export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string
  }

export const Icon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) => {
  const btnClassName = ['btn-circle', className].join(' ')
  return (
    <Button {...buttonProps} className={btnClassName}>
      <CIcon className={iconClassName} name={name} />
    </Button>
  )
}
