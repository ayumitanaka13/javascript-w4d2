const ul = document.querySelector('ul');
const btn = document.querySelector('button');

const getDataJokes = async () => {
    const res = await axios.get('https://icanhazdadjoke.com', {
        headers: { 'Accept': 'application/json' }
    });
    return res.data.joke;
};

btn.addEventListener('click', async function(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText =  await getDataJokes();
    ul.appendChild(li);
});