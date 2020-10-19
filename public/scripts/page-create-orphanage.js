//create map
const map = L.map("mapid").setView([-29.4607681, -51.9763681], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon

const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

let marker;

//create and add marker

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add campo de fotos

function addPhotoField() {
  // pegar o container de fotos
  const container = document.querySelector("#images");
  // pegar o container para duplicar
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar o clone da ultima imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  //verificar se o campo está vazio, se sim, não adicionar ao container de imagens
  const input = newFieldContainer.children[0];
  if (input.value == "") return;

  //limpar o campo antes de adicionar ao container de imagens
  newFieldContainer.children[0].value = "";
  // adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  //limpar o campo
  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//select yes or no
function toggleSelect(event) {
  //pegar o botão clicado
  const button = event.currentTarget;

  //verificar

  //remover todas as classes .active
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));

  //adicionar a classe .active para este botão
  button.classList.add("active");

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  //verificar se sim ou não
  input.value = button.dataset.value;
}

function validateSubmit(event) {
  //validar se lat e lng estão preenchidos(DESAFIO)
  const needsLatAndLng = false;

  if (needsLatAndLng) {
    event.preventDefault();
    alert("Selecione o ponto no mapa");
  }
}
