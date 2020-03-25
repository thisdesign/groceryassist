import theme from './theme'

const { sizes } = theme

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Sizes = {
  [item in Size]: number
}

export type MediaQuery = {
  [item in Size]: string
}

const mq: MediaQuery = Object.keys(sizes).reduce(
  (acc, current) => ({
    ...acc,
    [current as Size]: `(min-width: ${Reflect.get(sizes, current)}px)`,
  }),
  { xs: '', sm: '', md: '', lg: '', xl: '' }
)

export default mq
