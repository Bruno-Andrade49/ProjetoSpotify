const baseDeMusicas = [
    {
    'name': 'O papa e pop',
    'artist': 'Engenheiros do Hawaii',
    'path': 'src/audio/01-O papa e ppop.mp3',
    'album': 'Acústico Engenheiros',
},
{
    'name': 'Até o fim',
    'artist': 'Engenheiros do Hawaii',
    'path': 'src/audio/02-Ate o fim.mp3',
    'album': 'Acústico Engenheiros',
},
{
    'name': 'Vida real',
    'artist': 'Engenheiros do Hawaii',
    'path': 'src/audio/03-Vida real.mp3',
    'album': 'Acústico Engenheiros',
},
{
    'name': 'Infinita Highway',
    'artist': 'Engenheiros do Hawaii',
    'path': 'src/audio/04-Infinita highway.mp3',
    'album': 'Acústico Engenheiros',
},
{
    'name': 'Armas químicas e poetas',
    'artist': 'Engenheiros do Hawaii',
    'path': 'src/audio/05-Armas quimicas e poetas.mp3',
    'album': 'Acústico Engenheiros',
},
{
    'name': 'O preço',
    'artist': 'Engenheiros do Hawaii',
    'path': 'src/audio/06-O preço.mp3',
    'album': 'Acústico Engenheiros',
}
];

const listaMusicas = document.querySelector('.ListadeMusicasDaDescricao');
const tagAudio = document.getElementById('saidaAudio')
const primeiraMusica = baseDeMusicas[0];
tagAudio.src = primeiraMusica.path;
atualizaPlayer(baseDeMusicas[0].album, baseDeMusicas[0].name);
const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('pausarplayButton');

let musicaAtual = 0;


function construirPlaylist(musica, musicaId){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    musicaElemento.addEventListener('click', tocarMusica);

    listaMusicas.appendChild(musicaElemento)
}

for(let contador = 0; contador < baseDeMusicas.length; contador++){
    construirPlaylist(baseDeMusicas[contador], contador);
}

function tocarMusica(evento){
    const elementoClicado = evento.currentTarget;

    if(elementoClicado.tagName === 'LI'){
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseDeMusicas[musicaId];
    
        tagAudio.src = musicaSelecionada.path;
        musicaAtual = Number(musicaId)
        tagAudio.play();
        botaoPlay.classList.add("pause")
        atualizaPlayer(baseMusicas[musicaAtual].album,baseMusicas[musicaAtual].name)
       
    } else {
        if(tagAudio.paused){
            tagAudio.play();
            botaoPlay.classList.add("pause")
            
        } else {
            tagAudio.pause();
            botaoPlay.classList.remove("pause")
        }
    }
}
botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
    botaoPlay.classList.remove("pause")
}
botaoPausar.addEventListener('click', pausarMusica);


//NEXT
function tocarProximaMusica(){
    
    if(musicaAtual === baseMusicas.length - 1){
        musicaAtual = 0
    }else{
        musicaAtual++
    }
   
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()
    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    atualizaPlayer(nomeAlbum,nomeMusica)
    botaoPlay.classList.add("pause")
}

const btnControlNext = document.getElementById('avancarMusica');
btnControlNext.addEventListener("click", tocarProximaMusica)



//PREV
function tocarMusicaAnterior(){
    
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length - 1
    }else{
        musicaAtual--
    }
    
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()
    atualizaPlayer(nomeAlbum,nomeMusica)
    botaoPlay.classList.add("pause")
}

const btnControlPrev = document.getElementById('voltarButton');
btnControlPrev.addEventListener("click", tocarMusicaAnterior)

const areaPlayerVolume = document.querySelector(".volumeMusicas input")

console.log(areaPlayerVolume)
areaPlayerVolume.addEventListener("input", ()=>{
    
    tagAudio.volume = areaPlayerVolume.value
})

function atualizaPlayer(nome,musica){
   
    //const fotoAlbum = document.getElementById('fotoAlbum');
    const nomeMusica = document.getElementById('nomeDaMusica');
    const nomeAlbum = document.getElementById('nomeDoAlbum');
    
   // fotoAlbum.src = foto
    nomeMusica.innerText = musica
    nomeAlbum.innerText = nome

}