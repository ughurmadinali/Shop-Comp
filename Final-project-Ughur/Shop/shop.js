const users  = JSON.parse(localStorage.getItem('users'))
const nav = document.querySelector('.nav')

let mark = []
let computers = []

for(let user of users){
    for(let comp of user.computers){
        computers.push(comp)

        if(!marks.includes(comp.mark)){
            marks.push(comp.mark)
        }
        
    }
}

for(let mark of marks){
    nav.innerHTML = `<button class="nav-link" id="v-pills- ${mark}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${mark}" type="button" role="tab" aria-controls="v-pills-${mark}" aria-selected="true">${mark}</button>`
}