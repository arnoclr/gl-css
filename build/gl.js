var gl = {

    "_b": document.querySelector('body'),
    "_lst": "gl-css-theme",
    "_pan": document.querySelector('aside.panel'),

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
                if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
        if(gl._b && gl._b.dataset.theme) {
            gl.appendThemeToBody(gl._b.dataset.theme)
        }

        if(localStorage.getItem(gl._lst)) {
            gl.appendThemeToBody(localStorage.getItem(gl._lst))
        }

        // drawer

        var _d_t = document.querySelector('.js-drawer-trigger')
        if(_d_t) {
            _d_t.addEventListener('click', () => {
                if(window.innerWidth < 600) {
                    document.querySelector('aside.drawer.modal').classList.toggle('open')
                } else {
                    document.querySelector('aside.drawer').classList.toggle('small')
                }
            })
        }

        var _d_c = document.querySelector('.js-drawer-closable')
        if(_d_c) {
            _d_c.addEventListener('click', () => {
                document.querySelector('aside.drawer.modal').classList.remove('open')
            })
        }

        var _d_is = document.querySelectorAll('.drawer .item')
        if(_d_is) {
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
            if(window.innerWidth < 600) {
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

        if(_d) {
            _setDrawerMode()
            window.addEventListener('resize', _setDrawerMode)
        }

        // modal

        document.querySelectorAll('.js-modal-trigger').forEach(a => {
            a.addEventListener('click', () => {
                h = a.getAttribute("href")
                if(h) {
                    id = h.substring(1)
                } else {
                    id = a.dataset.modal
                }
                if(id) {
                    document.getElementById(id).classList.add('open')
                    document.querySelector('#' + id + ' .content').setAttribute('tabindex', 0)
                }
            })
        })

        document.querySelectorAll('aside.js-modal .content').forEach(e => {
            e.setAttribute('tabindex', -1)
            e.addEventListener('click', e => {
                gl.stopPropagation(e)
            })
        })

        document.querySelectorAll('.js-modal-closable, .js-modal-close').forEach(e => {
            e.addEventListener('click', () => {
                gl.closeModals()
            })
        })

        // loader

        document.querySelectorAll('.js-circular-loader').forEach(l => {
            l.innerHTML += '<svg class="loader" width="42" height="42" xmlns="http://www.w3.org/2000/svg"><g><ellipse ry="16" rx="16" cy="21" cx="21" stroke-width="4" fill="none"/></g></svg>'
        })

        // panel
        if(gl._pan) {
            var _pan_show_ts = document.querySelectorAll('.js-show-panel'),
                _pan_hide_ts = document.querySelectorAll('.js-hide-panel')
            if(gl._pan.dataset.width) {
                gl._pan.style.maxWidth = gl._pan.dataset.width
                document.querySelector('main').style.marginLeft = gl._pan.dataset.width
            }
            _pan_show_ts.forEach(s => {
                s.addEventListener('click', gl.openPanel)
            })
            _pan_hide_ts.forEach(h => {
                h.addEventListener('click', e => {
                    gl.openPanel(e, false)
                })
            })
        }

        // menus
        var _men = document.querySelectorAll('.js-menu'),
            _men_tr = document.querySelectorAll('.js-menu-trigger')
        _men_tr.forEach(t => {
            t.addEventListener('click', e => {
                gl.stopPropagation(e)
                m = document.getElementById(t.dataset.menu)
                m.classList.add('open')
                gl.setTabIndex(Array.prototype.slice.call(m.children), 0)
                m.addEventListener('click', gl.stopPropagation)
                window.addEventListener('click', gl.closeMenus)
            })
        })
        _men.forEach(m => {
            gl.setTabIndex(Array.prototype.slice.call(m.children), -1)
        })
    },

    "closeMenus": function() {
        document.querySelectorAll('.js-menu.open').forEach(m => {
            m.removeEventListener('click', gl.stopPropagation)
            window.removeEventListener('click', gl.closeMenus)
            m.classList.remove('open')
            gl.setTabIndex(Array.prototype.slice.call(m.children), -1)
        })
    },

    "closeModals": function() {
        document.querySelectorAll('.js-modal.open').forEach(m => {
            m.removeEventListener('click', gl.stopPropagation)
            window.removeEventListener('click', gl.closeMenus)
            m.classList.remove('open')
        })
        document.querySelectorAll('.js-modal .content').forEach(c => {
            c.setAttribute('tabindex', -1)
        })
    },

    "openPanel": function(e, open = true) {
        if(open) {
            gl._pan.classList.remove('close')
        } else {
            gl._pan.classList.add('close')
        }
    },

    "setTabIndex": function(els, n) {
        els.forEach(a => {
            a.setAttribute('tabindex', n)
        })
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

window.addEventListener('keydown', e => {
    if(e.key === 'Escape' || e.key === 'Esc') {
        gl.closeMenus()
    }
})