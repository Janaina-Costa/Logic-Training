
window.addEventListener('load', sort, false)

const resposta = document.getElementById('res')
const result = document.getElementById('result')
const enunciado = document.querySelector('label')

const modal = document.querySelector('#back-modal')
const decida = document.querySelector('#decida')
const inpputchoice = document.querySelector('#choice')


const btn = document.querySelector('button')
const number =document.querySelector('input')
let tentativa = 0

const confets = document.querySelector('#my-canvas')


let numAleatorio = 0

function sort(){
    numAleatorio = Math.floor(Math.random()*10)
    console.log(numAleatorio);
    return numAleatorio
}

function reload(){
    tentativa = 0
    result.innerHTML =''
    resposta.innerHTML = ''
    number.value = ''
    modal.classList.remove('show')
    confets.classList.remove('active')
    inpputchoice.value = ''
    sort()
}


function showModal(){
    inpputchoice.addEventListener('keydown', ()=>{
        if(inpputchoice.value == 1){
            reload()
            
        }else if(inpputchoice.value == 2){
            decida.innerHTML = `Obrigada por jogar com a gente`
            document.querySelector('h4').innerHTML = ''
            reload()
        }
    })
                 
         
     
 }
 




function aposte(){
    btn.addEventListener('click',(e)=>{
        resposta.innerHTML = number.value
        if(Number(number.value) === numAleatorio){
            
            result.innerHTML = `O número sorteado foi ${numAleatorio}.. Voce acertou!!!`
            confets.classList.add('active')
            modal.classList.add('show')
            showModal()

        }else{
            tentativa++
            result.innerHTML =`Voce errou`
            enunciado.innerHTML = 'Continua que vai dar'

            setTimeout(()=>{
                result.innerHTML =`Tente outra vez`
            }, 1000)
            
            if(tentativa >= 3){
                result.innerHTML ='Limite de tentativas excedidos.'
               reload()
            }

        }
    })
}
aposte()

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();