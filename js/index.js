const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Content
const nav = document.querySelector('header nav');
const navContent = siteContent["nav"];

const gallery = document.createElement('a');
gallery.href = "#";
gallery.textContent = "Gallery";
const merch = document.createElement('a');
merch.href = "#";
merch.textContent = "Merch";

nav.querySelector('a:nth-child(1)').textContent = navContent["nav-item-1"];
nav.querySelector('a:nth-child(2)').textContent = navContent["nav-item-2"];
nav.querySelector('a:nth-child(3)').textContent = navContent["nav-item-3"];
nav.querySelector('a:nth-child(4)').textContent = navContent["nav-item-4"];
nav.querySelector('a:nth-child(5)').textContent = navContent["nav-item-5"];
nav.querySelector('a:nth-child(5)').textContent = navContent["nav-item-6"];
nav.appendChild(gallery);
nav.prepend(merch)

// CTA
const cta = document.querySelector('.cta-text');
const ctaContent = siteContent["cta"];
  const heading = ctaContent["h1"].split(" ").join("<br>");


cta.querySelector("h1").innerHTML = heading;
cta.querySelector("button").textContent = ctaContent["button"];
document.querySelector(".cta img").src = ctaContent["img-src"];

//Main Content
document.querySelector(".top-content .text-content:nth-child(1) h4").textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".top-content .text-content:nth-child(1) p").textContent = siteContent["main-content"]["features-content"];
document.querySelector(".top-content .text-content:nth-child(2) h4").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".top-content .text-content:nth-child(2) p").textContent = siteContent["main-content"]["about-content"];

document.querySelector(".middle-img").src = siteContent["main-content"]["middle-img-src"];

document.querySelector(".bottom-content .text-content:nth-child(1) h4").textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".bottom-content .text-content:nth-child(1) p").textContent = siteContent["main-content"]["services-content"];
document.querySelector(".bottom-content .text-content:nth-child(2) h4").textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".bottom-content .text-content:nth-child(2) p").textContent = siteContent["main-content"]["product-content"];
document.querySelector(".bottom-content .text-content:nth-child(3) h4").textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(".bottom-content .text-content:nth-child(3) p").textContent = siteContent["main-content"]["vision-content"];


//Contact
const addressSplit = siteContent["contact"]["address"].split(" ");
addressSplit.splice(4,0, "<br>")
const addressArray = addressSplit.join(" ");
const address = addressArray;

document.querySelector(".contact h4").textContent = siteContent["contact"]["contact-h4"];
document.querySelector(".contact p:nth-child(2)").innerHTML = address;
document.querySelector(".contact p:nth-child(3)").textContent = siteContent["contact"]["phone"];
document.querySelector(".contact p:nth-child(4)").textContent = siteContent["contact"]["email"];

//Footer
document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];
