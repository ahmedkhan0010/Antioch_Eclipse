/* ── STARS ── */
(function () {
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  let stars = [];
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function createStars() {
    stars = [];
    for (let i = 0; i < 180; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        alpha: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.3 + 0.05,
        twinkle: Math.random() * Math.PI * 2,
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((s) => {
      s.twinkle += 0.015;
      const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinkle));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(94, 255, 192, ${a})`;
      ctx.fill();
      s.y -= s.speed;
      if (s.y < -2) {
        s.y = canvas.height + 2;
        s.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }
  resize();
  createStars();
  draw();
  window.addEventListener("resize", () => {
    resize();
    createStars();
  });
})();

/* ── SQUAD DATA ── */
const players = [
  {
    image: "images/Rabee.png",
    number: "#1",
    name: "Rabee Lodhi",
    role: "Captain",
    stats: {
      matches: 178,
      runs: 2265,
      wickets: 34,
    },
    profileUrl:
      "https://cricclubs.com/viewPlayer.do?playerId=1705404&clubId=12719",
  },
  {
    image: "images/Jawad.jpeg",
    number: "#2",
    name: "Jawad Khan",
    role: "Vice Captain",
    stats: {
      matches: 69,
      runs: 1807,
      wickets: 64,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleTennesseeCricketLeague/viewPlayer.do?playerId=1424355&clubId=12719",
  },
  {
    image: "images/Safi.png",
    number: "#3",
    name: "Safiullah Lodhi",
    role: "All Rounder",
    stats: {
      matches: 159,
      runs: 2654,
      wickets: 79,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleTennesseeCricketLeague/viewPlayer.do?playerId=2603258&clubId=12719",
  },
  {
    image: "images/Awais.jpeg",
    number: "#4",
    name: "Awais Khan",
    role: "All Rounder",
    stats: {
      matches: 67,
      runs: 1556,
      wickets: 59,
    },
    profileUrl:
      "https://cricclubs.com/NPL/viewPlayer.do?playerId=4481115&clubId=65#",
  },
  {
    image: "images/Zammer.jpg",
    number: "#5",
    name: "Zammeruddin Lodhi",
    role: "All Rounder",
    stats: {
      matches: 249,
      runs: 3290,
      wickets: 187,
    },
    profileUrl:
      "https://www.cricclubs.com/DPLGA/viewPlayer.do?playerId=931981&clubId=69",
  },

  {
    image: "images/Aleem.jpeg",
    number: "#6",
    name: "Aleem Bajwa",
    role: "All Rounder",
    stats: {
      matches: 114,
      runs: 2115,
      wickets: 134,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleTennesseeCricketLeague/viewPlayer.do?playerId=1751444&clubId=12719",
  },

  {
    image: "images/Fasial.jpeg",
    number: "#7",
    name: "Faisal Hussain",
    role: "All Rounder",
    stats: {
      matches: 62,
      runs: 120,
      wickets: 39,
    },
    profileUrl:
      "https://cricclubs.com/NPL/viewPlayer.do?playerId=2457659&clubId=65",
  },

  {
    image: "images/zaid.jpeg",
    number: "#8",
    name: "Zaid Hussain",
    role: "All Rounder",
    stats: {
      matches: 10,
      runs: 27,
      wickets: 5,
    },
    profileUrl:
      "https://cricclubs.com/NPL/viewPlayer.do?playerId=3715510&clubId=65",
  },

  {
    image: "images/shahzaib.jpeg",
    number: "#9",
    name: "Shahzaib Akhter",
    role: "Batsmen",
    stats: {
      matches: 37,
      runs: 316,
      wickets: 4,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleCricketLeague/user/5BGb3N4druOuWBE2iJNAMw?playerName=Shahzaib+Akhtar",
  },

  {
    image: "images/khaja.jpeg",
    number: "#10",
    name: "Khaja Hussain",
    role: "Batsmen",
    stats: {
      matches: 57,
      runs: 1024,
      wickets: 3,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleCricketLeague/user/Z5OjSPCVkeWDvhVxnQYfTA?playerName=Khaja+Hussain",
  },

  {
    image: "images/Ahsan.JPG",
    number: "#11",
    name: "Ahsan Zulfiqar",
    role: "Bowler",
    stats: {
      matches: 33,
      runs: 98,
      wickets: 27,
    },
    profileUrl:
      "https://cricclubs.com/NPL/viewPlayer.do?playerId=44389&clubId=65",
  },

  {
    image: "images/ahmed.jpeg",
    number: "#12",
    name: "Ahmed Khan",
    role: "All Rounder",
    stats: {
      matches: 273,
      runs: 4047,
      wickets: 347,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleCricketLeague/user/cLf-8m-cxclTkouPpGrvjQ?playerName=Ahmed+Khan",
  },

  {
    image: "images/kausal.jpeg",
    number: "#13",
    name: "Kaushal Patel",
    role: "Batsmen",
    stats: {
      matches: 278,
      runs: 6398,
      wickets: 31,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleCricketLeague/user/auknFmvsdwRW4JNLaYcRjg?playerName=Kaushal+Patel",
  },

  {
    image: "images/fakhr.jpeg",
    number: "#14",
    name: "Fakhruddin Lodhi",
    role: "All Rounder",
    stats: {
      matches: 221,
      runs: 1298,
      wickets: 221,
    },
    profileUrl:
      "https://cricclubs.com/NashvilleCricketLeague/user/r2UCtNj3TzrtZrOP8c702A?playerName=Fakhruddin+Lodhi",
  },
];

const grid = document.getElementById("squad-grid");
players.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "player-card reveal";
  card.style.transitionDelay = `${(i % 4) * 80}ms`;
  card.innerHTML = `
    <div class="player-avatar">
      ${p.image ? `<img src="${p.image}" alt="${p.name}" />` : p.emoji}
    </div>
    <div class="player-number">${p.number}</div>
    <div class="player-name">${p.name}</div>
    <div class="player-role">${p.role}</div>
    ${p.stats ? `<div class="player-stats">Matches: ${p.stats.matches} · Runs: ${p.stats.runs} · Wickets: ${p.stats.wickets}</div>` : ""}
    ${p.profileUrl ? `<a class="player-link" href="${p.profileUrl}" target="_blank" rel="noreferrer">Cricclubs profile</a>` : ""}
  `;
  grid.appendChild(card);
});

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ── COUNTER ANIMATION ── */
function animateCount(el, target) {
  let current = 0;
  const step = Math.ceil(target / 50);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 25);
}
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        document.querySelectorAll("[data-count]").forEach((el) => {
          animateCount(el, parseInt(el.dataset.count));
        });
        heroObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 },
);
heroObserver.observe(document.getElementById("hero"));

/* ── MOBILE NAV ── */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileClose = document.getElementById("mobile-close");
hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
mobileClose.addEventListener("click", () =>
  mobileMenu.classList.remove("open"),
);
document.querySelectorAll(".mobile-nav-link").forEach((a) => {
  a.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

/* ── FORM ── */
document.getElementById("form-submit").addEventListener("click", () => {
  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const role = document.getElementById("f-role").value;
  if (!name || !email || !role) {
    alert("Please fill in your name, email, and playing role.");
    return;
  }
  document.getElementById("join-form").style.display = "none";
  document.getElementById("form-success").style.display = "block";
});

/* ── NAV SCROLL EFFECT ── */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.borderBottomColor =
    window.scrollY > 60 ? "rgba(94,255,192,0.2)" : "rgba(94,255,192,0.1)";
});
