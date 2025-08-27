const app = document.getElementById("app");

// asosiy container
const container = document.createElement("div");
container.style.fontFamily = "Arial, sans-serif";
container.style.background = "#f4f4f8";
container.style.padding = "40px";
container.style.textAlign = "center";

// sarlavha
const title = document.createElement("h2");
title.textContent = "Advanced Statistics";
title.style.fontSize = "28px";
title.style.marginBottom = "10px";
title.style.color = "#333";

const desc = document.createElement("p");
desc.textContent =
  "Track how your links are performing across the web with our advanced statistics dashboard.";
desc.style.color = "#666";
desc.style.fontSize = "15px";
desc.style.marginBottom = "50px";
desc.style.maxWidth = "600px";
desc.style.marginLeft = "auto";
desc.style.marginRight = "auto";

container.appendChild(title);
container.appendChild(desc);

// kartalar uchun wrapper
const cardsWrapper = document.createElement("div");
cardsWrapper.style.display = "flex";
cardsWrapper.style.justifyContent = "center";
// cardsWrapper.style.
// cardsWrapper.style.
cardsWrapper.style.gap = "30px";

// card yaratish funksiyasi
function createCard(icon, heading, text) {
  const card = document.createElement("div");
  card.style.background = "#fff";
  card.style.padding = "25px";
  card.style.borderRadius = "8px";
  card.style.width = "250px";
  card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
  card.style.textAlign = "left";
  card.style.zIndex = "1";
  card.style.height = "190px";

  const circle = document.createElement("div");
  circle.style.width = "60px";
  circle.style.height = "60px";
  circle.style.borderRadius = "50%";
  circle.style.background = "#3A3054";
  circle.style.display = "flex";
  circle.style.alignItems = "center";
  circle.style.justifyContent = "center";
  circle.style.marginTop = "-55px";
  circle.style.marginBottom = "20px";
  circle.style.color = "#fff";
  circle.style.fontSize = "24px";
  if (typeof icon === "string" && icon.endsWith(".png")) {
    const img = document.createElement("img");
    img.src = icon;
    img.alt = heading;
    img.style.width = "40px";
    img.style.height = "40px";
    img.style.objectFit = "contain";
    circle.appendChild(img);
  } else {
    circle.textContent = icon;
  }
  //   chiziq uchun
  const line = document.createElement("div");
  line.style.position = "absolute";
  line.style.top = "50%";
  line.style.left = "auto";
  line.style.right = "auto";
  line.style.height = "8px";
  line.style.background = "#2BD0D0";
  cardsWrapper.appendChild(line);
  line.style.zIndex = "0";
  line.style.width = "800px";

  const h3 = document.createElement("h3");
  h3.textContent = heading;
  h3.style.fontSize = "18px";
  h3.style.marginBottom = "10px";
  h3.style.color = "#333";

  const p = document.createElement("p");
  p.textContent = text;
  p.style.fontSize = "14px";
  p.style.color = "#666";
  p.style.lineHeight = "1.5";

  card.appendChild(circle);
  card.appendChild(h3);
  card.appendChild(p);

  return card;
}

// 3 ta card
const card1 = createCard(
  "img/1.png",
  "Brand Recognition",
  "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content."
);
const card2 = createCard(
  "img/2.png",
  "Detailed Records",
  "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
);
const card3 = createCard(
  "img/3.png",
  "Fully Customizable",
  "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
);
card2.style.marginTop = "60px";
card3.style.marginTop = "90px";

cardsWrapper.appendChild(card1);
cardsWrapper.appendChild(card2);
cardsWrapper.appendChild(card3);

container.appendChild(cardsWrapper);
app.appendChild(container);
