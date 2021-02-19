var gl = {

    "_b": document.querySelector('body'),
    "_lst": "gl-css-theme",

    "appendThemeToBody": function(x) {
        function rd() {
            gl._b.classList.remove('dark')
        }
        function ad() {
            gl._b.classList.add('dark')
        }
        switch (x) {
            case 'dark':
                ad()
                break
            case 'light':
                rd()
                break
            case 'auto':
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    ad()
                } else {
                    rd()
                }
                break
            default:
                break
        }
    },

    "init": function () {
        // dark mode
        if (gl._b && gl._b.dataset.theme) {
            gl.appendThemeToBody(gl._b.dataset.theme)
        }

        if (localStorage.getItem(gl._lst)) {
            gl.appendThemeToBody(localStorage.getItem(gl._lst))
        }

        // drawer

        var _d_t = document.querySelector('.js-drawer-trigger')
        if (_d_t) {
            _d_t.addEventListener('click', () => {
                if (window.innerWidth < 600) {
                    document.querySelector('aside.drawer.modal').classList.toggle('open')
                } else {
                    document.querySelector('aside.drawer').classList.toggle('small')
                }
            })
        }

        var _d_c = document.querySelector('.js-drawer-closable')
        if (_d_c) {
            _d_c.addEventListener('click', () => {
                document.querySelector('aside.drawer.modal').classList.remove('open')
            })
        }

        var _d_is = document.querySelectorAll('.drawer .item')
        if (_d_is) {
            _d_is.forEach(a => {
                a.addEventListener('click', e => {
                    document.querySelectorAll('.drawer .item').forEach(i => {
                        i.classList.remove('active')
                    })
                    a.classList.add('active')
                })
            })
        }

        var _d = document.querySelector('aside.drawer')

        function _setDrawerMode() {
            if (window.innerWidth < 600) {
                _d.classList.remove('small')
                _d.classList.remove('open')
                _d.classList.add('modal')
            } else {
                _d.classList.remove('modal')
                if (window.innerWidth < 960) {
                    _d.classList.add('open')
                    _d.classList.add('small')
                } else {
                    _d.classList.remove('small')
                    _d.classList.add('open')
                }
            }
        }

        if (_d) {
            _setDrawerMode()
            window.addEventListener('resize', _setDrawerMode)
        }

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

        // panel

        var _pan = document.querySelector('aside.panel')
        if (_pan.dataset.width) {
            _pan.style.maxWidth = _pan.dataset.width
            document.querySelector('main').style.marginLeft = _pan.dataset.width
        }

        // menus
        var _men = document.querySelectorAll('.js-menu'),
            _men_tr = document.querySelectorAll('.js-menu-trigger')
        _men_tr.forEach(t => {
            t.addEventListener('click', e => {
                gl.stopPropagation(e)
                m = document.getElementById(t.dataset.menu)
                m.classList.add('open')
                m.addEventListener('click', gl.stopPropagation)
                window.addEventListener('click', _toggle_menu)
            })
        })

        function _toggle_menu(e) {
            m.removeEventListener('click', gl.stopPropagation)
            window.removeEventListener('click', _toggle_menu)
            m.classList.remove('open')
        }
    },

    "setTheme": function(t) {
        localStorage.setItem(gl._lst, t)
        gl.appendThemeToBody(t)
    },

    "stopPropagation": function(e) {
        e.stopPropagation()
    }

}

window.addEventListener('DOMContentLoaded', e => {
    if(document.body.dataset.noinit != '') {
        gl.init()
    } 
})