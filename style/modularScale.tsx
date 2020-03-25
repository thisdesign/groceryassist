interface IModularscale {
  length?: number
  scale?: number
  base?: number
  stepsDown?: number
}

const modularScale = (options: IModularscale = {}): number[] => {
  const length = options.length || 10
  const scale = options.scale || 1.25
  const base = options.base || 1
  const stepsDown = options.stepsDown || 0

  const adjustedBase = (() => {
    let result = base
    for (let i = 0; i < stepsDown; i += 1) {
      result /= scale
    }
    return result
  })()

  return (Array.from({ length }) as [])
    .reduce(
      (acc: number[], _: any, i: number) => [
        ...acc,
        i > 0 ? acc[i - 1] * scale : adjustedBase,
      ],
      []
    )
    .map((item: number) => Math.round(item * 100) / 100)
}

export default modularScale
