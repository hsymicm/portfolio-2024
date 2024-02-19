export function formatDate(date: string) {
  const d = new Date(date)
  const options: any = {
    month: "long",
    year: "numeric",
  }
  return d.toLocaleDateString("en-US", options)
}
