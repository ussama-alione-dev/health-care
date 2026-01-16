let demandes = [
  {
    id: 1,
    nom: "El Amrani",
    prenom: "Yassine",
    telephone: "0612345678",
    email: "yassine.elamrani@gmail.com",
    motif: "consultation",
    date: "2026-01-10",
  },
  {
    id: 2,
    nom: "Benali",
    prenom: "Sara",
    telephone: "0623456789",
    email: "sara.benali@gmail.com",
    motif: "controle",
    date: "2026-01-11",
  },
  {
    id: 3,
    nom: "Haddad",
    prenom: "Amine",
    telephone: "0634567890",
    email: "amine.haddad@gmail.com",
    motif: "urgence",
    date: "2026-01-12",
  },
  {
    id: 4,
    nom: "Fassi",
    prenom: "Khadija",
    telephone: "0645678901",
    email: "khadija.fassi@gmail.com",
    motif: "consultation",
    date: "2026-01-12",
  },
  {
    id: 5,
    nom: "Alaoui",
    prenom: "Hamza",
    telephone: "0656789012",
    email: "hamza.alaoui@gmail.com",
    motif: "analyse",
    date: "2026-01-13",
  },
  {
    id: 6,
    nom: "Ziani",
    prenom: "Imane",
    telephone: "0667890123",
    email: "imane.ziani@gmail.com",
    motif: "controle",
    date: "2026-01-13",
  },
  {
    id: 7,
    nom: "Raji",
    prenom: "Mehdi",
    telephone: "0678901234",
    email: "mehdi.raji@gmail.com",
    motif: "consultation",
    date: "2026-01-14",
  },
  {
    id: 8,
    nom: "Tahiri",
    prenom: "Salma",
    telephone: "0689012345",
    email: "salma.tahiri@gmail.com",
    motif: "urgence",
    date: "2026-01-14",
  },
  {
    id: 9,
    nom: "Aliouane",
    prenom: "Oussama",
    telephone: "0643016364",
    email: "aliouaneoussama89@gmail.com",
    motif: "consultation",
    date: "2026-01-14",
  },
  {
    id: 10,
    nom: "Bennani",
    prenom: "Anas",
    telephone: "0690123456",
    email: "anas.bennani@gmail.com",
    motif: "analyse",
    date: "2026-01-15",
  },
  {
    id: 11,
    nom: "Chafik",
    prenom: "Nadia",
    telephone: "0601234567",
    email: "nadia.chafik@gmail.com",
    motif: "controle",
    date: "2026-01-15",
  },
  {
    id: 12,
    nom: "Kabbaj",
    prenom: "Ayoub",
    telephone: "0613456789",
    email: "ayoub.kabbaj@gmail.com",
    motif: "consultation",
    date: "2026-01-16",
  },
  {
    id: 13,
    nom: "Lahlou",
    prenom: "Hajar",
    telephone: "0624567891",
    email: "hajar.lahlou@gmail.com",
    motif: "urgence",
    date: "2026-01-16",
  },
  {
    id: 14,
    nom: "Saidi",
    prenom: "Rachid",
    telephone: "0635678912",
    email: "rachid.saidi@gmail.com",
    motif: "analyse",
    date: "2026-01-17",
  },
  {
    id: 15,
    nom: "Mernissi",
    prenom: "Ikram",
    telephone: "0646789123",
    email: "ikram.mernissi@gmail.com",
    motif: "consultation",
    date: "2026-01-17",
  },
  {
    id: 16,
    nom: "Mernissi",
    prenom: "Ikram",
    telephone: "0646789123",
    email: "ikram.mernissi@gmail.com",
    motif: "consultation",
    date: "2026-01-17",
  },
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^\d{10}$/;
// ----------------selectors----------------------
const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

const demandesBtn = document.querySelector(".demandes-btn");
const ajouterDemandeBtn = document.querySelector(".ajouter-demande-btn");

const section1 = document.querySelector(".section--1");
const section2 = document.querySelector(".section--2");

const messagesArea = document.querySelector(".message-area");

let currentPage = 1;
const pageItems = 5;

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let currentID = 1;
// ------------------------------------------------

demandesBtn.addEventListener("click", function () {
  section1.classList.add("hide");
  section2.classList.remove("hide");

  this.classList.add("hide");
  ajouterDemandeBtn.classList.remove("hide");
});

ajouterDemandeBtn.addEventListener("click", function () {
  section1.classList.remove("hide");
  section2.classList.add("hide");

  this.classList.add("hide");
  demandesBtn.classList.remove("hide");
});

function createAndShowMessage(message, type) {
  messagesArea.innerHTML = "";

  const messageElement = document.createElement("p", "message");
  messageElement.textContent = message;

  messageElement.classList.add("message");
  messageElement.classList.add(type);

  messagesArea.append(messageElement);

  setTimeout(() => {
    messagesArea.innerHTML = "";
  }, 2000);
}

function ajouterDemande(event) {
  event.preventDefault();

  const nom = document.querySelector("#nom").value;
  const prenom = document.querySelector("#prenom").value;
  const telephone = document.querySelector("#telephone").value;
  const email = document.querySelector("#email").value;
  const motif = document.querySelector("#motif").value;
  const date = document.querySelector(".date").value;

  console.log(telRegex.test(telephone));
  console.log(emailRegex.test(email));

  if (
    !nom ||
    !prenom ||
    !motif ||
    !date ||
    !telRegex.test(telephone) ||
    !emailRegex.test(email)
  ) {
    createAndShowMessage("svp entrer les format valide des champs !", "error");
    return;
  }

  const newDemande = {
    id: currentID++,
    nom,
    prenom,
    telephone,
    email,
    motif,
    date,
  };

  demandes.push(newDemande);

  afficherLesDemandes();
  createAndShowMessage("la demande a ete ajouter avec success !", "success");
  this.reset();
}

form.addEventListener("submit", ajouterDemande);

const afficherLesDemandes = () => {
  tbody.innerHTML = "";

  next.disabled = false;
  prev.disabled = false;

  const start = (currentPage - 1) * pageItems;
  const end = start + pageItems;

  demandes.slice(start, end).forEach((demande) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${demande.nom}</td>
            <td>${demande.prenom}</td>
            <td>${demande.telephone}</td>
            <td>${demande.email}</td>
            <td>${demande.motif}</td>
            <td>${demande.date}</td>
            <td><button class="delete" onClick="deleteDemande(${demande.id})">🗑️</button></td>

        `;
    tbody.append(tr);
  });

  updatePagination();
};

function deleteDemande(id) {
  demandes = demandes.filter((demande) => demande.id !== id);

  createAndShowMessage("la demande a ete supprimer avec success !", "success");
  afficherLesDemandes();
}

function updatePagination() {
  const totalPages = Math.ceil(demandes.length / 5);
  if (currentPage === 1) {
    prev.disabled = true;
  }
  if (currentPage === totalPages) {
    next.disabled = true;
  }

  document.querySelector(
    ".pagination-result"
  ).innerHTML = `<span class="pages">${currentPage}</span><span>/${Math.ceil(
    demandes.length / 5
  )}</span>`;
}

afficherLesDemandes();

next.addEventListener("click", () => {
  currentPage++;
  afficherLesDemandes();
});
prev.addEventListener("click", () => {
  currentPage--;
  afficherLesDemandes();
});
