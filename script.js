
let jmeno = prompt('Zadejte křestní jméno:')
let prijmeni = prompt('Zadejte příjmení:')

jmeno = jmeno.toLowerCase()
prijmeni = prijmeni.toLowerCase()

jmeno = jmeno.trim()
prijmeni = prijmeni.trim()


const email = {
    userName: prijmeni.slice(0, 5) + jmeno.slice(0, 3),
    domain: '@fit.cvut.cz'
}


document.body.innerHTML += `
    <p> ${email.userName + email.domain} </p>
`