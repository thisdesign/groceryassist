const sizes = {
  xl: 1900,
  lg: 1440,
  md: 1024,
  sm: 768,
  xs: 576
}

export type Size = "xs" | "sm" | "md" | "lg" | "xl"

export type Sizes = {
  [item in Size]: number
}

export type MediaQuery = {
  [item in Size]: string
}

const mq: MediaQuery = Object.keys(sizes).reduce(
  (acc, current) => ({
    ...acc,
    [current as Size]: `(min-width: ${Reflect.get(sizes, current)}px)`
  }),
  { xs: "", sm: "", md: "", lg: "", xl: "" }
)

export default mq
