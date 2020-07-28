const contentTarget = document.querySelectorAll(".full")
const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullTicketPurchased", event => {
        contentTarget.forEach(target => {
            target.innerHTML += `<div class="person bigSpender"></div>`
            
        });
    })
}