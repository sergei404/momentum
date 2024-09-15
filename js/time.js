export default () => {
  const time = document.querySelector(".time");
  setTimeout(function run() {
    time.textContent = new Intl.DateTimeFormat("ru", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(new Date());
    setTimeout(run, 1000);
  }, 1000);
};


