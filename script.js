// const sidebarLinks = document.querySelectorAll(".sidebar .item-text");
// const currentPage = window.location.pathname.split("/").pop();

// sidebarLinks.forEach(link => {
//     if (link.getAttribute("href") === currentPage || 
//         (currentPage === "" && link.getAttribute("href") === "index.html")) {
//         link.classList.add("active");
//     }
// });


















// const pages = {
//     home: () => `
//         <h1>Dashboard</h1>
//         <div class="content">
//             <p>Welcome to your dashboard :D!</p>
//         </div>
//     `,
//     physics: () => `
//         <h1>Physics Notes</h1>
//         <div class="content">
//             <p>vectors</p>
//             <p>E</p>
//         </div>
//     `,
//     math: () => `
//         <h1>Math Notes</h1>
//         <div class="content">
//             <p>lorem ipsum</p>
//             <p> x = y</p>
//         </div>
//     `,
//     // additional pgs
// } // stores data for the pages 
// //access from postgres in future

// Actual file starts here ^^^

// const mainContent = document.querySelector(".main .container")

// async function renderPage(page) { 
//   try {
//     const response = await fetch(`pages/${page}.txt`)
//     if (!response.ok) throw new Error("File not found")
//     const content = await response.text()
//     mainContent.innerHTML = `<div class="content">${content}</div>`
//     history.pushState({ page }, "", page === "home" ? "/" : `/${page}`)
//   } catch (err) {
//     mainContent.innerHTML = `<h1>404</h1><p>Page not found</p>`
//   }
// }

// document.querySelectorAll(".sidebar .item-text").forEach(item => {
//   item.addEventListener("click", () => {
//     const page = item.dataset.page
//     renderPage(page)
//   })
// })

// window.onpopstate = e => {
//   const page = e.state?.page || "home"
//   renderPage(page)
// }

// renderPage("home")
