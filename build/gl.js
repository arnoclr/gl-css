// drawer

document.querySelector('.js-drawer-trigger').addEventListener('click', () => {
    if (window.innerWidth < 600) {
        document.querySelector('aside.drawer.modal').classList.toggle('open')
    } else {
        document.querySelector('aside.drawer').classList.toggle('small')
    }
})

document.querySelector('.js-drawer-closable').addEventListener('click', () => {
    document.querySelector('aside.drawer.modal').classList.remove('open')
})

document.querySelectorAll('.drawer .item').forEach(a => {
    a.addEventListener('click', e => {
        document.querySelectorAll('.drawer .item').forEach(i => {
            i.classList.remove('active')
        })
        a.classList.add('active')
    })
})

function _setDrawerMode() {
    if (window.innerWidth < 600) {
        document.querySelector('aside.drawer').classList.remove('small')
        document.querySelector('aside.drawer').classList.remove('open')
        document.querySelector('aside.drawer').classList.add('modal')
    } else {
        document.querySelector('aside.drawer').classList.remove('modal')
        if (window.innerWidth < 960) {
            document.querySelector('aside.drawer').classList.add('open')
            document.querySelector('aside.drawer').classList.add('small')
        } else {
            document.querySelector('aside.drawer').classList.remove('small')
            document.querySelector('aside.drawer').classList.add('open')
        }
    }
}

_setDrawerMode()
window.addEventListener('resize', _setDrawerMode)

// modal

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

// loader

document.querySelectorAll('.js-circular-loader').forEach(l => {
    l.innerHTML += '<svg class="loader" width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g><ellipse ry="16" rx="16" cy="21" cx="21" stroke-width="4" fill="none"/></g></svg>'
})