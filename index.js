//Importando o express

const express = require('express')
const app = express();

//Definindo a Porta

const port = 3000;
const filmes = ['Resident Evil','Missão Impossível','Esquadrão Suicida','Rambo','Final Fantasy',];

//GET Home
app.get('/', (req, res) => {
    res.send("Sejam Bem Vindos A Filmes S/A.");
});

//Lendo os filmes
app.get('/filmes', (req, res) =>{
    res.send(filmes);
});

//GET /Filmes /ID, listando pelo iD

app.get('/filmes/:id', (req, res) =>{
    const id = req.params.id;
    const filme = filmes[id];
    if(!filme){
        res.send('Nenhum Filme encontrado')
    res.send(filme);
    }

});

app.listen(port, ()=> {
    console.info(`App running http://localhost:${port}/`);
})


