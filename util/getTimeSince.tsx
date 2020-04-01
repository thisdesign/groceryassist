function getTimeSince(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  const format = (num: number, unit: string, pluralize = true) =>
    `${num} ${unit}${num > 1 && pluralize ? "s" : ""} ago`

  let interval = Math.floor(seconds / 31536000)
  if (interval >= 1) {
    return format(interval, "year")
  }

  interval = Math.floor(seconds / 2592000)
  if (interval >= 1) {
    return format(interval, "month")
  }

  interval = Math.floor(seconds / 86400)
  if (interval >= 1) {
    return format(interval, "day")
  }

  interval = Math.floor(seconds / 3600)
  if (interval >= 1) {
    return format(interval, "hr", false)
  }

  interval = Math.floor(seconds / 60)
  if (interval >= 1) {
    return format(interval, "min", false)
  }

  return format(interval, "s", false)
}

export default getTimeSince
