const projetos = [
    {
        nome: 'to_do_list_react',
        desc: 'Projeto de lista de tarefas que desenvolvi em React para aperfeiçoar meus conhecimentos em JavaScript e React.',
        techs: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        nome: 'curso_em_video_javascript',
        desc: 'Esse repositório contém todos os exercícios que eu fiz no curso de JavaScript do Curso Em Vídeo.',
        techs: ['HTML', 'CSS', 'JavaScript']
    },
    {
        nome: 'pokedex',
        desc: 'App que simula uma pokedex que construí com a ajuda da PokeAPI, que é uma API que fornece dados de todos os pokemons existentes, de início pesquisei no youtube um tutorial para fazer esse projeto onde aprendi como importar as informações da API para o meu projeto, a partir disso fiz tudo com conhecimentos que eu já tinha e a documentação da API',
        techs: ['HTML', 'CSS', 'JavaScript']
    },
]

function render_cards(i){
    document.getElementById('cards').innerHTML += `<div class="project-card">
    <img src="./src/assets/img/${projetos[i].nome}.png" alt="${projetos[i].nome}" >
    <div class="card-info">
      <div>
        <a href="https://victorclvtt.github.io/${projetos[i].nome}/">${projetos[i].nome}</a>
        <div class="techs" id="techs${i}">
        </div>
      </div>
      <p>${projetos[i].desc}</p>
    </div>
  </div>`
}

function insert_technologies(i, j){
    document.getElementById(`techs${i}`).innerHTML += `<img src="./src/assets/svg/${projetos[i].techs[j]}.svg" alt="Logo ${projetos[i].techs[j]}"></img>`
}

for(var a=0 ; a<projetos.length ; a++){
    render_cards(a)

    for(var b=0 ; b<projetos[a].techs.length; b++){
        insert_technologies(a, b)
    }
}

function hide_nav_collapse(){
    if (window.innerWidth < 990) {
        document.getElementsByClassName('navbar-toggler')[0].click();
    }
}