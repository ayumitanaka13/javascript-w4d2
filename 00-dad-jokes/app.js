const btn = document.querySelector('button');
// const ul = document.querySelector('ul');

// const getDataJokes = async () => {
//     const res = await axios.get('https://icanhazdadjoke.com', {
//         headers: { 'Accept': 'application/json' }
//     });
//     return res.data.joke;
// };

// btn.addEventListener('click', async function(e){
//     e.preventDefault();
//     const li = document.createElement('li');
//     li.innerText =  await getDataJokes();
//     ul.appendChild(li);
// });

btn.addEventListener('click', async function(e){
    e.preventDefault();

    const option = { headers: { 'Accept': 'application/json' } };
    const response = await axios.get('https://icanhazdadjoke.com', option);

    const li = document.createElement('li');
    li.innerText =  response.data.joke;

    const ul = document.querySelector('ul');
    ul.appendChild(li);
});