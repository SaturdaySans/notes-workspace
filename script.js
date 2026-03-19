const pages = {
    home: () => `
        <h1>Dashboard</h1>
        <div class="content">
            <p>Welcome to your dashboard :D!</p>
        </div>
    `,
    physics: () => `
        <h1>Physics Notes</h1>
        <div class="content">
            <p>vectors</p>
            <p>E</p>
        </div>
    `,
    math: () => `
        <h1>Math Notes</h1>
        <div class="content">
            <p>lorem ipsum</p>
            <p> x = y</p>
        </div>
    `,
    // additional pgs
} // stores data for the pages 
//access from postgres in future

const mainContent = document.querySelector(".main .container")

function renderPage(page) { //renders page based on wt user chooses
  if (pages[page]) {
    mainContent.innerHTML = pages[page]();
    history.pushState({ page }, "", page === "home" ? "/" : `/${page}`);
  }
}

document.querySelectorAll(".sidebar .item-text").forEach(item => {
  item.addEventListener("click", () => {
    const page = item.dataset.page;
    renderPage(page);
  });
});

window.onpopstate = e => {
  const page = e.state?.page || "home";
  renderPage(page);
};

renderPage("home");
