window.addEventListener('load', function (e) {
    const socket = io()

    const msg = document.querySelector('#msg');
    const form = document.querySelector('form');
    const p = document.querySelector('p');

    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const text = msg.value
        socket.emit('msg', text)
        msg.value = ''
    })

    socket.on('msg', function (msg) {
        const span = document.createElement('span');
        const br = document.createElement('br');
        span.innerHTML = msg
        br.innerHTML = msg
        p.append(br)
        p.append(span)
        p.style.color = '#fff'
    })
});