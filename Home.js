const title = document.getElementById('title');

title.addEventListener('mousemove', (event) => {
    const x = event.clientX / window.innerWidth; 
    const y = event.clientY/ window.innerHeight; 

    title.style.textShadow = `${x * 10}px ${y * 10}px 10px#e7c310`;
});

title.addEventListener('mouseleave', () => {
    title.style.textShadow = 'none';
});

//-----------------------------------------------//

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;
    if (!name || !email || !message) {
        alert('Please fill out all fields!');
      } else {
    document.getElementById("successMsg").style.display = "block";
    this.reset();

    setTimeout(() => {
        document.getElementById("successMsg").style.display = "none";
    }, 2000)};
});