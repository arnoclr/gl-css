document.querySelector('.js-drawer-trigger').addEventListener('click', () => {
    document.querySelector('aside.drawer').classList.toggle('small');
})

document.querySelectorAll('.drawer .item').forEach(a => {
    a.addEventListener('click', e => {
        document.querySelectorAll('.drawer .item').forEach(i => {
            i.classList.remove('active')
        })
        a.classList.add('active')
    })
})

document.querySelectorAll('.js-modal-trigger').forEach(a => {
    a.addEventListener('click', () => {
        document.querySelector(a.getAttribute("href")).classList.add('open')
    })
})

document.querySelectorAll('aside.modal .content').forEach(e => {
    e.addEventListener('click', e => {
        e.stopPropagation()
    })
})

document.querySelectorAll('.js-modal-closable, .js-modal-close').forEach(e => {
    e.addEventListener('click', () => {
        e.classList.remove('open')
    })
})