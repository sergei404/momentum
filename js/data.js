export default () => {
  const data = document.querySelector('.date')

  const date = new Intl.DateTimeFormat("ru", { day: "numeric",   month: 'long'}).format(new Date()) + ', ' +  new Intl.DateTimeFormat("ru", { weekday: "long",}).format(new Date())

  data.textContent = date
}