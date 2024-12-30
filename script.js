const tabs = document.querySelectorAll("[data-tab-target]")

tabs.forEach(tab => {
    tab.addEventListener("click" , () => {
        const target = document.querySelector(tab.datatset.tabTarget)
        target.classList.add("active")
    })
})