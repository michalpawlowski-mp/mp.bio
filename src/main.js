import { socialMediaData } from "./socialMedia.data.js";
import "./style.css";

const app = document.querySelector("#app");

const socialMedia = socialMediaData
  .map(
    (item) => `
    <section class="card" data-id="${item.id}">
      <a href="${item.href}" target="_blank" rel="noopener noreferrer">
        <img src="${item.social}" alt="${item.text}" class="icon" />
        
        <div class="content">
          ${item.profile ? `<img src="${item.profile}" alt="" class="profile-pic" />` : ""}
          <h4>${item.text}</h4>
        </div>
      </a>
    </section>
  `,
  )
  .join("");

app.innerHTML = `
  <main>
    <div class="avatar-wrapper">
      <img class="avatar" src="https://github.com/michalpawlowski-mp.png" alt="">
      <div class="avatar-ring"></div>
    </div>

    <h1>Michał Pawłowski</h1>
    <p class="tagline">mpdev_ • ajpar_</p>

    <div class="links">
      ${socialMedia}
    </div>
  </main>
`;
