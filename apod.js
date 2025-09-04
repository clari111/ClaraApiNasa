

fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  .then(res => res.json())
  .then(datos => {
    const contenedor = document.querySelector("#contenedor");

    // Creamos una tarjeta con los datos
    contenedor.innerHTML =
      `<h2>${datos.title}</h2>
      <p><strong>Fecha:</strong> ${datos.date}</p>
      <img src="${datos.url}" alt="${datos.title}" width="500">
      <p>${datos.explanation}</p>`;
  });

  // Creamos una tarjeta con los datos
contenedor.innerHTML =
`<h2>${datos.title}</h2>
 <p><strong>Fecha:</strong> ${datos.date}</p>
 <img src="${datos.url}" alt="${datos.title}" width="500">
 <p>${datos.explanation}</p>`;