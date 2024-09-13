export function convertIsoStringToDisplayDate(isoString: string) {
  return (new Date(isoString)).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}