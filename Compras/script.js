var form  = document.querySelector('#form');
var cesta  = document.querySelector('#cesta');
var msgErro  = document.querySelector('#msg-erro');
var index = 1;

function verificarForm() {
    if(form.preco.value == ""){
        msgErro.classList.replace('invisivel', 'visivel');
    }else{
        salvar();
    }

}

function salvar() {
    event.preventDefault();
    let item = new Array(
        form.produto.value,
        form.preco.value,
        form.quantidade.value,
        (form.quantidade.value * form.preco.value)
    );
  
    let tr = document.createElement("tr");
    let td = [];
    td.push(document.createElement("td"));
    td[0].textContent = index;
    tr.appendChild(td[0]);
    index++;
   
    for(let i = 1 ; i< 5; i++){
        td.push(document.createElement("td"));
        td[i].textContent = item[i-1];
        tr.appendChild(td[i]);
    }

    tr.classList.add('item-cesta');
    cesta.appendChild(tr);
}

cesta.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add('fadeOut');
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});

