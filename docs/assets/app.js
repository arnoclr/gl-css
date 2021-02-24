const main = document.querySelector('main');
const content = document.getElementById('c');
const drawer = document.querySelector('aside.drawer');
const loader = document.getElementById('router-loader');
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/guide/quickstart';

const renderDrawer = () => {
    var drawerDom = '';
    Object.entries(routes).forEach(category => {
        drawerDom +=
        `<hr>
        <small>${category[0]}</small>`
        category[1].forEach(route => {
            drawerDom += 
            `<a href="#${route.path}">
                <div id="${btoa(route.path)}" role="button" class="item">
                    <i class="material-icons">${route.icon}</i>
                    <span>${route.label}</span>
                </div>
            </a>`;
        })
    })
    drawer.innerHTML = drawerDom;
}

const renderActiveTab = () => {
    const path = parseLocation();
    document.querySelectorAll('aside.drawer .item').forEach(e => {
        e.classList.remove('active');
    })
    document.getElementById(btoa(path)).classList.add('active');
}

const snippetHTML = (code) => {
    return `<div class="snippet">${code}</div>`
}

const snippetCode = (markdown) => {
    const lines = markdown.split('\n');
    var snippets = [],
        snippet = '',
        isCode = false;
    lines.forEach(line => {
        if(line.includes('```html')) {
            isCode = true;
        } else if(isCode && line.includes('```')) {
            isCode = false;
            snippets.push(snippet);
            snippet = '';
        } else if(isCode) {
            snippet += line;
        }
    })
    setTimeout(() => {
        var i = 0;
        document.querySelectorAll('pre').forEach(p => {
            var hasChildSnippet = p.querySelector('code.language-html');
            if(hasChildSnippet) {
                p.insertAdjacentHTML('afterEnd', snippetHTML(snippets[i]));
                i++;
            }
        })
        gl.init();
    }, 150);
}

const parseMarkdown = (markdown) => {
    snippetCode(markdown);
    return marked(markdown);

}

const router = () => {
    const path = parseLocation();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (data) {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            loader.style.display = 'none';
            if (status === 0 || (status >= 200 && status < 400)) {
                content.innerHTML = parseMarkdown(data.srcElement.responseText);
                content.classList.remove('loading');
                renderActiveTab();
                document.querySelectorAll('pre code').forEach(c => {
                    hljs.highlightBlock(c);
                });
            } else {
                content.innerHTML = 
                `<h1 style="color:var(--color-error)">Error</h1>
                <p>The requested page cannot be found.</p>
                <a href="#/guide/quickstart" class="btn">return to home</a>`;
                content.classList.remove('loading');
            }
        }     
    }
    xhr.open('GET', `docs${path}.md`);
    xhr.send();
    loader.style.display = 'block'; content.classList.add('loading');
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
window.addEventListener('load', renderDrawer);