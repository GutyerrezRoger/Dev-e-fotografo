// script.js
// Documentação: Este script gerencia a navegação entre as seções do portfólio de forma dinâmica,
// carregando o conteúdo das galerias de fotografia.

document.addEventListener("DOMContentLoaded", () => {
  // --- Referências para os Elementos do DOM ---
  const homeLink = document.getElementById("home-link");
  const btnDev = document.getElementById("btn-dev");
  const btnFoto = document.getElementById("btn-foto");
  const btnVoltar = document.querySelectorAll(".btn-voltar");
  const btnVoltarGaleria = document.querySelector(".btn-voltar-galeria");

  const introSection = document.getElementById("intro-section");
  const devSection = document.getElementById("portfolio-dev");
  const fotoSection = document.getElementById("portfolio-foto");
  const galeriaSection = document.getElementById("galeria-fotografia");
  const galeriaGrid = document.getElementById("galeria-grid");
  const galeriaTitulo = document.getElementById("galeria-titulo");

  const fotoCards = document.querySelectorAll(".projeto-foto-card");

  // --- Função para Exibir e Esconder Seções ---
  // Aprimorada para ser mais robusta e evitar repetição de código.
  function showSection(sectionToShow) {
    const allSections = [introSection, devSection, fotoSection, galeriaSection];
    allSections.forEach((section) => {
      section.style.display = "none";
    });

    sectionToShow.style.display = "flex";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // --- Lógica de Navegação Principal ---
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(introSection);
    });
  }

  if (btnDev) {
    btnDev.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(devSection);
    });
  }

  if (btnFoto) {
    btnFoto.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(fotoSection);
    });
  }

  btnVoltar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(introSection);
    });
  });

  // --- Lógica da Galeria de Fotografia ---
  const imagensGaleria = {
    "ensaio-urbano": [
      "ensaios/urbano/img1.jpg",
      "ensaios/urbano/img2.jpg",
      "ensaios/urbano/img3.jpg",
      "ensaios/urbano/img4.jpg",
      "ensaios/urbano/img5.jpg",
    ],
    casamento: [
      "ensaios/casamento/img1.jpg",
      "ensaios/casamento/img2.jpg",
      "ensaios/casamento/img3.jpg",
      "ensaios/casamento/img4.jpg",
      "ensaios/casamento/img5.jpg",
    ],
  };

  function carregarGaleria(projetoId, projetoTitulo) {
    galeriaTitulo.textContent = projetoTitulo;
    galeriaGrid.innerHTML = ""; // Limpa a galeria para novas imagens

    if (imagensGaleria[projetoId]) {
      imagensGaleria[projetoId].forEach((url) => {
        const imgElement = document.createElement("img");
        imgElement.src = url;
        imgElement.alt = `Foto do projeto ${projetoTitulo}`;
        galeriaGrid.appendChild(imgElement);
      });
    }
  }

  // Adiciona o evento de clique aos cards de fotografia
  fotoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const projetoId = card.dataset.projetoId;
      const projetoTitulo = card.querySelector("h3").textContent;
      carregarGaleria(projetoId, projetoTitulo);
      showSection(galeriaSection);
    });
  });

  // Evento para o botão "Voltar" da galeria
  if (btnVoltarGaleria) {
    btnVoltarGaleria.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(fotoSection);
    });
  }
});
