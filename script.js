/* =========================
   TEXT GLOW + SPARKLES
========================= */
/* =========================
   OPEN SURPRISE — PAGE 2
========================= */
console.log("SCRIPT STARTED");
console.log("OPEN BUTTON:", document.getElementById("openSurprise"));
console.log("BIRTHDAY PAGE:", document.getElementById("birthdayPage"));
const openSurprise =
    document.getElementById("openSurprise");

const openingScreen =
    document.querySelector(".opening-screen");

const birthdayPage =
    document.getElementById("birthdayPage");
const birthdayBack = document.getElementById("birthdayBack");

if (birthdayBack) {
    birthdayBack.addEventListener("click", () => {
        birthdayPage.classList.remove("active");

        setTimeout(() => {
            openingScreen.style.display = "flex";
            openingScreen.style.opacity = "1";
            openingScreen.style.transform = "scale(1)";
        }, 500);
    });
}
   
const birthdayNext = document.getElementById("birthdayNext");
const birthdayHub = document.getElementById("birthdayHub");

if (birthdayNext && birthdayHub) {

    birthdayNext.addEventListener("click", () => {

        birthdayPage.classList.remove("active");

        setTimeout(() => {
            birthdayHub.classList.add("active");
        }, 450);

    });

}
openSurprise.addEventListener("click", () => {
    console.log("BUTTON CLICKED");
console.log("OPEN SURPRISE CLICKED");
    const partyBursts =
        document.querySelectorAll(".party-burst");

    partyBursts.forEach((burst) => {
        burst.style.left =
            `${Math.random() * 92 + 4}%`;

        burst.style.top =
            `${Math.random() * 86 + 7}%`;
    });

    const confettiContainer =
        document.querySelector(".party-confetti");

    confettiContainer.innerHTML = "";

    const confettiItems = [
        "🎊", "✨", "🎉", "💫",
        "🎈", "✦", "💖", "✧"
    ];

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.textContent =
            confettiItems[
                Math.floor(
                    Math.random() *
                    confettiItems.length
                )
            ];

        piece.style.position = "absolute";
        piece.style.left =
            `${Math.random() * 100}%`;

        piece.style.top =
            `${Math.random() * 15 - 20}%`;

        piece.style.fontSize =
            `${18 + Math.random() * 30}px`;

        piece.style.opacity =
            `${0.65 + Math.random() * 0.35}`;

        piece.style.zIndex = "9";
        piece.style.pointerEvents = "none";

        confettiContainer.appendChild(piece);

        const duration =
            1200 + Math.random() * 1100;

        const delay =
            Math.random() * 500;

        piece.animate(
            [
                {
                    transform:
                        "translate(0,0) rotate(0deg) scale(.7)",
                    opacity: 0
                },
                {
                    transform:
                        `translate(${(Math.random() - .5) * 180}px,45vh)
                         rotate(${Math.random() * 360}deg)
                         scale(1)`,
                    opacity: 1
                },
                {
                    transform:
                        `translate(${(Math.random() - .5) * 280}px,115vh)
                         rotate(${Math.random() * 720}deg)
                         scale(.8)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "cubic-bezier(.15,.7,.25,1)",
                fill: "forwards"
            }
        );
    }

    const partyIntro =
        document.getElementById("partyIntro");

    openingScreen.style.transition =
        "opacity .65s ease, transform .65s ease";

    openingScreen.style.opacity = "0";
    openingScreen.style.transform = "scale(1.02)";

    setTimeout(() => {

        openingScreen.style.display = "none";

        birthdayPage.classList.add("active");

        setTimeout(() => {
            partyIntro.classList.add("active");
        }, 120);

    }, 650);

});

const glowTexts = document.querySelectorAll(
    ".krishna-content h1, .krishna-content .intro-line, .krishna-content .intro-joke"
);

let lastSparkleTime = 0;

document.addEventListener("mousemove", (event) => {

    glowTexts.forEach((text) => {

        const rect = text.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.hypot(
            event.clientX - centerX,
            event.clientY - centerY
        );

        /* TEXT GLOW */

        if (distance < 230) {
            text.classList.add("cursor-glow");
        } else {
            text.classList.remove("cursor-glow");
        }

        /* SPARKLES */

        if (distance < 180) {

            const now = Date.now();

            if (now - lastSparkleTime < 150) return;

            lastSparkleTime = now;

            const sparkleCount =
                text.tagName === "H1" ? 3 : 1;

            for (let i = 0; i < sparkleCount; i++) {

                const sparkle = document.createElement("span");

                const symbols = ["✦", "✧", "✨"];

                sparkle.textContent =
                    symbols[Math.floor(Math.random() * symbols.length)];

                sparkle.className = "cursor-sparkle";

                sparkle.style.left =
                    `${event.clientX + (Math.random() - 0.5) * 90}px`;

                sparkle.style.top =
                    `${event.clientY + (Math.random() - 0.5) * 70}px`;

                sparkle.style.setProperty(
                    "--sparkle-x",
                    `${(Math.random() - 0.5) * 100}px`
                );

                sparkle.style.setProperty(
                    "--sparkle-y",
                    `${-20 - Math.random() * 70}px`
                );

                sparkle.style.fontSize =
                    `${10 + Math.random() * 12}px`;

                document.body.appendChild(sparkle);

                setTimeout(() => {
                    sparkle.remove();
                }, 900);
            }
        }

    });

});


/* =========================
   DECORATION EMOJIS
========================= */

const decorationEmojis =
    document.querySelectorAll(".decorations span");


decorationEmojis.forEach((emoji) => {

    emoji.addEventListener("click", () => {
        createSparkles(emoji);
    });

    emoji.addEventListener("dblclick", () => {
        createCelebration(emoji);
    });

});


/* =========================
   EMOJI CLICK SPARKLE
========================= */

function createSparkles(element) {

    const rect = element.getBoundingClientRect();

    const sparkle = document.createElement("span");

    sparkle.textContent = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left =
        `${rect.left + rect.width / 2}px`;

    sparkle.style.top =
        `${rect.top + rect.height / 2}px`;

    sparkle.style.fontSize = "24px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.zIndex = "100";
    sparkle.style.animation =
        "sparklePop 0.8s ease forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}


/* =========================
   EMOJI DOUBLE CLICK BURST
========================= */

function createCelebration(element) {

    const rect = element.getBoundingClientRect();

    const emojis = [
        "✨",
        "💖",
        "🌸",
        "🎀",
        "💫"
    ];

    for (let i = 0; i < 6; i++) {

        const burst = document.createElement("span");

        burst.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        burst.style.position = "fixed";

        burst.style.left =
            `${rect.left + rect.width / 2}px`;

        burst.style.top =
            `${rect.top + rect.height / 2}px`;

        burst.style.fontSize =
            `${18 + Math.random() * 14}px`;

        burst.style.pointerEvents = "none";
        burst.style.zIndex = "100";

        burst.style.setProperty(
            "--x",
            `${(Math.random() - 0.5) * 130}px`
        );

        burst.style.setProperty(
            "--y",
            `${(Math.random() - 0.5) * 130}px`
        );

        burst.style.animation =
            "celebrationBurst 0.9s ease forwards";

        document.body.appendChild(burst);

        setTimeout(() => {
            burst.remove();
        }, 900);
    }
}


/* =========================
   EMOJI DISTANCE GLOW
========================= */

const emojiElements =
    document.querySelectorAll(".decorations span");


document.addEventListener("mousemove", (event) => {

    emojiElements.forEach((emoji) => {

        const rect = emoji.getBoundingClientRect();

        const emojiX =
            rect.left + rect.width / 2;

        const emojiY =
            rect.top + rect.height / 2;

        const distance = Math.hypot(
            event.clientX - emojiX,
            event.clientY - emojiY
        );

        if (distance < 220) {

            const intensity =
                1 - distance / 220;

            emoji.style.transform =
                `scale(${1 + intensity * 0.9})
                 rotate(${intensity * 10}deg)`;

            emoji.style.filter = `
                drop-shadow(0 0 22px rgba(255,247,239,1))
                drop-shadow(0 0 45px rgba(216,181,106,1))
                drop-shadow(0 0 80px rgba(216,181,106,1))
                drop-shadow(0 0 120px rgba(216,181,106,0.9))
                drop-shadow(0 0 170px rgba(216,181,106,0.65))
            `;

            emoji.style.opacity = "1";

        } else {

            emoji.style.transform = "";
            emoji.style.filter = "";
            emoji.style.opacity = "";
        }

    });

});
/* =========================================
   PAGE 3 — BIRTHDAY HUB CARD NAVIGATION
========================================= */

const hubCards = document.querySelectorAll(".hub-card");
const birthdayHubPage = document.getElementById("birthdayHub");

hubCards.forEach((card) => {

    card.addEventListener("click", () => {

        const targetId = card.dataset.section;
        const targetSection = document.getElementById(targetId);

        if (!targetSection) {
            console.log("Section not found:", targetId);
            return;
        }

        birthdayHubPage.classList.remove("active");

        setTimeout(() => {
            targetSection.classList.add("active");
        }, 400);

    });

});


/* =========================================
   INNER PAGE — BACK TO HUB
========================================= */

document.addEventListener("click", (event) => {

    if (!event.target.classList.contains("inner-page-back")) {
        return;
    }

    const currentSection =
        event.target.closest(".birthday-inner-section");

    if (!currentSection) return;

    currentSection.classList.remove("active");

    setTimeout(() => {
        birthdayHubPage.classList.add("active");
    }, 400);

});
/* =========================================
   CAKE — MAKE A WISH
========================================= */

const wishButton =
    document.getElementById("wishButton");

const wishMessage =
    document.getElementById("wishMessage");

if (wishButton && wishMessage) {

    wishButton.addEventListener("click", () => {

        wishMessage.classList.add("show");

        wishButton.textContent =
            "✨ Wish Made! ✨";

        wishButton.style.pointerEvents =
            "none";

    });

}
/* =====================================================
   💫 WISH PAGE — COMPLETE NAVIGATION
===================================================== */

const wishSection =
    document.getElementById("wishSection");

const wishBack =
    document.getElementById("wishBack");

const wishHubCard =
    document.querySelector(
        '.hub-card[data-section="wishSection"]'
    );


/* =====================================================
   💫 BIRTHDAY HUB → WISH PAGE
===================================================== */

if (wishHubCard && birthdayHub && wishSection) {

    wishHubCard.addEventListener("click", () => {

        birthdayHub.classList.remove("active");

        setTimeout(() => {

            wishSection.classList.add("active");

        }, 400);

    });

}


/* =====================================================
   🤍 WISH PAGE → BIRTHDAY HUB
===================================================== */

if (wishBack && wishSection && birthdayHub) {

    wishBack.addEventListener("click", () => {

        wishSection.classList.remove("active");

        setTimeout(() => {

            birthdayHub.classList.add("active");

        }, 400);

    });

}

/* =====================================================
   ✨ NORMAL WISH → COMEDY WISH
===================================================== */

if (wishRevealBtn && wishComedyPage) {

    wishRevealBtn.addEventListener("click", () => {

        const wishCard =
            document.querySelector(".wish-card");

        const wishIntro =
            document.querySelector(".wish-intro");

        const wishTitle =
            document.querySelector(".wish-title");

        const wishEyebrow =
            document.querySelector(".wish-eyebrow");


        /* Hide normal wish */

        if (wishCard) {
            wishCard.style.display = "none";
        }

        if (wishIntro) {
            wishIntro.style.display = "none";
        }

        if (wishTitle) {
            wishTitle.style.display = "none";
        }

        if (wishEyebrow) {
            wishEyebrow.style.display = "none";
        }


        /* Show comedy wish */

        wishComedyPage.classList.add("show");

    });

}


/* =====================================================
   😂 COMEDY WISH → NORMAL WISH
===================================================== */

if (comedyBackBtn && wishComedyPage) {

    comedyBackBtn.addEventListener("click", () => {

        /* Hide comedy page */

        wishComedyPage.classList.remove("show");


        /* Show normal wish again */

        const wishCard =
            document.querySelector(".wish-card");

        const wishIntro =
            document.querySelector(".wish-intro");

        const wishTitle =
            document.querySelector(".wish-title");

        const wishEyebrow =
            document.querySelector(".wish-eyebrow");


        if (wishCard) {
            wishCard.style.display = "";
        }

        if (wishIntro) {
            wishIntro.style.display = "";
        }

        if (wishTitle) {
            wishTitle.style.display = "";
        }

        if (wishEyebrow) {
            wishEyebrow.style.display = "";
        }

    });

}
