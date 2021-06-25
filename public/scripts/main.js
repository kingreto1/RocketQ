import  Modal  from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal-content h2')
const modalText = document.querySelector('.modal-content p')
const modalButton = document.querySelector('button.button.delete')




const deleteButtons = document.querySelectorAll('.actions a.delete-question')
const checkButtons = document.querySelectorAll('.actions a.checked-question')


deleteButtons.forEach(button => {
    button.addEventListener('click', event => handleClick(event, false))
})

checkButtons.forEach(button => {
    button.addEventListener('click', event => handleClick(event, true))
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal-content form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    check ? modalButton.style.background = 'var(--blue)' : modalButton.style.background = 'var(--red)';
    modalTitle.innerHTML = `${text} a pergunta`
    modalText.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} a pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    
    modal.open()
}