const websites = [
  { name: "Poornata Portal", img: "P.JPG", url: "https://www.portal.poornata.com/Pages/Home.aspx" },
  { name: "HI Portal", img: "https://adityabirla.sharepoint.com/_layouts/15/images/favicon.ico?rev=43", url: "https://adityabirla.sharepoint.com/sites/Hindalco" },
  { name: "Hindalco Service Desk", img: "H.gif", url: "https://hsd.adityabirla.com/MDLIncidentMgmt/EndUser_Dashboard.aspx" },
  { name: "Ekaayan Hindalco", img: "a.jpg", url: "https://onehindalco.adityabirla.com/" },
  { name: "Bill Tracking Syatem", img: "B.jpg", url: "http://10.36.42.9/BTS/Account/Login" },
  { name: "File Movement & Management System", img: "F.JPG", url: "http://10.36.42.9/FMMS/frmlogin.aspx" },
  { name: "e-Permit", img: "EP.JPG", url: "http://10.36.121.75/PTW/" },
  { name: "Sprash-Centralized Payroll System", img: "S.JPG", url: "https://sparsh.adityabirla.com" },
  { name: "Shillim 365", img: "B.jpg", url: "https://hrfjne8ujy3mixh-hilapex.adb.ap-mumbai-1.oraclecloudapps.com/ords/r/xxhildsprd01/hindalco_hr_feedback_system/login?session=1313228016839712" },
  { name: "Carman", img: "CARMAN.JPG", url: "https://carman.live/signin.aspx" },
  { name: "Visitor", img: "v.JPG", url: "https://hindalco.axiscrm.in/" },
  { name: "Pehel", img: "PEHEL.JPG", url: "https://health.adityabirla.com/" },
  { name: "Coal Supply Chain Tracking System", img: "CS.png", url: "http://10.36.24.112:9060/#/login" },
  { name: "Coal Yard Management System", img: "B.jpg", url: "http://10.36.42.9/CYMS/" },
  { name: "RFID/SWS Report Portal", img: "B.jpg", url: "http://10.36.42.9/sws/" },
  { name: "Coal Sampling Management System", img: "B.jpg", url: "http://10.36.42.9/CSMS/" },

  { name: "PF Portal", img: "RK.png", url: "https://hrfjne8ujy3mixh-hilapex.adb.ap-mumbai-1.oraclecloudapps.com/ords/r/xxhilapxprdpf/renukoot-pf-portal224285283500627/login?session=604402786184394" },
  { name: "Compliance Manager", img: "CM.JPG", url: "http://10.1.202.17:85/" },
  /* { name: "EUREKA/KAIZEN PORTAL", img: "F.JPG", url: "https://www.reddit.com" }, */
  { name: "IT Spare Management System", img: "B.jpg", url: "http://10.36.42.9/ITSMS/Account/Login" },
  { name: "HIIMS Portal", img: "HIIMS.JPG", url: "https://hilims.adityabirla.com" },
  { name: "eSigner Portal", img: "E.png", url: "https://esign.adityabirla.com/Areas/AD/Login" },
  { name: "Contract Labour Management System", img: "L.jpg", url: "https://hilclms.adityabirla.com/labourworks/Login.aspx" },
  { name: "APAR Portal", img: "B.jpg", url: "http://10.36.42.9/APAR/Account/Login" },
  { name: "Punch Portal(OLD)", img: "PUNCH.JPG", url: "http://prodapps01.hil.com:8020/OA_HTML/AppsLocalLogin.jsp" }
];

const websitesList = document.getElementById("websitesList");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearSearchBtn");
const scrollBtn = document.getElementById("scrollTopBtn");

function renderWebsites(filter = "") {
  websitesList.innerHTML = "";
  const filtered = websites.filter(site => site.name.toLowerCase().includes(filter.toLowerCase()));
  filtered.forEach(site => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-4 mb-4";
    /* col.innerHTML = `
      <a href="${site.url}" target="_blank" class="text-decoration-none text-dark">
        <div class="card shadow-sm h-100 d-flex align-items-center p-3">
          <img src="${site.img}" class="site-image" alt="${site.name} logo">
          <div class="flex-grow-1">
           
            <h5 class="text-truncate mb-0" style="max-width: 200px;">${site.name}</h5>
          </div>
        </div>
      </a>
    `; */

 col.innerHTML = `
  <a href="${site.url}" target="_blank" class="text-decoration-none text-dark">
    <div class="card shadow-sm h-100 d-flex align-items-center p-3">
      <img src="${site.img}" class="site-image" alt="${site.name} logo">
      <div class="card-body">
        <h5 class="mb-0">${site.name}</h5>
      </div>
    </div>
  </a>
`;



    websitesList.appendChild(col);
  });
}

// Initial render
renderWebsites();

// Search functionality
searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "block" : "none";
  renderWebsites(searchInput.value);
});

// Clear button
clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearBtn.style.display = "none";
  renderWebsites();
  searchInput.focus();
});

// Scroll to top button
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
