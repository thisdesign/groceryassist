import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en"

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo("en-US")

function getTimeSince(date: Date): string {
  return timeAgo.format(date)
}

export default getTimeSince
