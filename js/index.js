const handleClick = (event) => {
  event.preventDefault();

  const table = document.querySelector(".table");
  const title = document.querySelector(".title").value;
  const body = document.querySelector(".body").value;
  const description = document.querySelector(".description").value;

  table.innerHTML += `<tr><td>${title}</td><td>${body}</td><td>${description}</td></tr>`;
};
