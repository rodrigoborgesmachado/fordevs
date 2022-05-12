function topo(){
	parent.scroll(0,0);
}

function BuscaPessoasAleatorias(){
    if(document.getElementById("BuscaPessoasAleatorias").style.display == 'none')
        document.getElementById("BuscaPessoasAleatorias").style.display = "";
    else
        document.getElementById("BuscaPessoasAleatorias").style.display = "none";
}

function RequisitaBuscaPessoasAleatorias(){
    var url = `http://fordevs.sunsalesystem.com.br/PHP/BuscaPessoasAleatorias.php?quantidade=${document.getElementById('quantidadeBuscaPessoasAleatorias').value}`;

    document.getElementById('urlRequisicaoBuscaPessoasAleatorias').style.display = '';
    document.getElementById('urlRequisicaoBuscaPessoasAleatorias').innerHTML = '<h4>' + url + '</h4>';

    var dados = document.getElementById('jsonBodyBuscaPessoasAleatorias').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    document.getElementById('EnviarBuscaPessoasAleatorias').disabled = true;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          document.getElementById('EnviarBuscaPessoasAleatorias').disabled = false;
          MontaRespostaBuscaPessoasAleatorias(xhr.responseText);
       }};
   
    xhr.send(dados);
}

function MontaRespostaBuscaPessoasAleatorias(resposta){
    document.getElementById('respostaBuscaPessoasAleatorias').style.display = '';
    document.getElementById('textRespostaBuscaPessoasAleatorias').value = resposta;
}

function BuscarEmpresaAleatoria(){
    if(document.getElementById("BuscarEmpresaAleatoria").style.display == 'none')
        document.getElementById("BuscarEmpresaAleatoria").style.display = "";
    else
        document.getElementById("BuscarEmpresaAleatoria").style.display = "none";
}

function RequisitaBuscarEmpresaAleatoria(){
    var url = `http://fordevs.sunsalesystem.com.br/PHP/BuscaEmpresasAleatorias.php?quantidade=${document.getElementById('quantidadeBuscarEmpresaAleatoria').value}`;

    document.getElementById('urlRequisicaoBuscarEmpresaAleatoria').style.display = '';
    document.getElementById('urlRequisicaoBuscarEmpresaAleatoria').innerHTML = '<h4>' + url + '</h4>';

    var dados = document.getElementById('jsonBodyBuscarEmpresaAleatoria').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    document.getElementById('EnviarBuscarEmpresaAleatoria').disabled = true;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          document.getElementById('EnviarBuscarEmpresaAleatoria').disabled = false;
          MontaRespostaBuscarEmpresaAleatoria(xhr.responseText);
       }};
   
    xhr.send(dados);
}

function MontaRespostaBuscarEmpresaAleatoria(resposta){
    document.getElementById('respostaBuscarEmpresaAleatoria').style.display = '';
    document.getElementById('textRespostaBuscarEmpresaAleatoria').value = resposta;
}

function BuscarCPF(){
    if(document.getElementById("BuscarCPF").style.display == 'none')
        document.getElementById("BuscarCPF").style.display = "";
    else
        document.getElementById("BuscarCPF").style.display = "none";
}

function RequisitaBuscarCPF(){
    var url = `http://fordevs.sunsalesystem.com.br/PHP/BuscaCPFsAleatorias.php?quantidade=${document.getElementById('quantidadeBuscarCPF').value}`;

    document.getElementById('urlRequisicaoBuscarCPF').style.display = '';
    document.getElementById('urlRequisicaoBuscarCPF').innerHTML = '<h4>' + url + '</h4>';

    var dados = document.getElementById('jsonBodyBuscarCPF').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    document.getElementById('EnviarBuscarCPF').disabled = true;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          document.getElementById('EnviarBuscarCPF').disabled = false;
          MontaRespostaBuscarCPF(xhr.responseText);
       }};
   
    xhr.send(dados);
}

function MontaRespostaBuscarCPF(resposta){
    document.getElementById('respostaBuscarCPF').style.display = '';
    document.getElementById('textRespostaBuscarCPF').value = resposta;
}

function BuscarCNPJ(){
    if(document.getElementById("BuscarCNPJ").style.display == 'none')
        document.getElementById("BuscarCNPJ").style.display = "";
    else
        document.getElementById("BuscarCNPJ").style.display = "none";
}

function RequisitaBuscarCNPJ(){
    var url = `http://fordevs.sunsalesystem.com.br/PHP/BuscaCNPJsAleatorias.php?quantidade=${document.getElementById('quantidadeBuscarCNPJ').value}`;

    document.getElementById('urlRequisicaoBuscarCNPJ').style.display = '';
    document.getElementById('urlRequisicaoBuscarCNPJ').innerHTML = '<h4>' + url + '</h4>';

    var dados = document.getElementById('jsonBodyBuscarCNPJ').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    document.getElementById('EnviarBuscarCNPJ').disabled = true;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          document.getElementById('EnviarBuscarCNPJ').disabled = false;
          MontaRespostaBuscarCNPJ(xhr.responseText);
       }};
   
    xhr.send(dados);
}

function MontaRespostaBuscarCNPJ(resposta){
    document.getElementById('respostaBuscarCNPJ').style.display = '';
    document.getElementById('textRespostaBuscarCNPJ').value = resposta;
}

function BuscarVeiculos(){
    if(document.getElementById("BuscarVeiculos").style.display == 'none')
        document.getElementById("BuscarVeiculos").style.display = "";
    else
        document.getElementById("BuscarVeiculos").style.display = "none";
}

function RequisitaBuscarVeiculos(){
    var url = `http://fordevs.sunsalesystem.com.br/PHP/BuscaVeiculosAleatorios.php?quantidade=${document.getElementById('quantidadeBuscarVeiculos').value}`;

    document.getElementById('urlRequisicaoBuscarVeiculos').style.display = '';
    document.getElementById('urlRequisicaoBuscarVeiculos').innerHTML = '<h4>' + url + '</h4>';

    var dados = document.getElementById('jsonBodyBuscarVeiculos').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    document.getElementById('EnviarBuscarVeiculos').disabled = true;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          document.getElementById('EnviarBuscarVeiculos').disabled = false;
          MontaRespostaBuscarVeiculos(xhr.responseText);
       }};
   
    xhr.send(dados);
}

function MontaRespostaBuscarVeiculos(resposta){
    document.getElementById('respostaBuscarVeiculos').style.display = '';
    document.getElementById('textRespostaBuscarVeiculos').value = resposta;
}

function BuscarRenavam(){
    if(document.getElementById("BuscarRenavam").style.display == 'none')
        document.getElementById("BuscarRenavam").style.display = "";
    else
        document.getElementById("BuscarRenavam").style.display = "none";
}

function RequisitaBuscarRenavam(){
    var url = `http://fordevs.sunsalesystem.com.br/PHP/BuscaRenavamAleatorios.php?quantidade=${document.getElementById('quantidadeBuscarRenavam').value}`;

    document.getElementById('urlRequisicaoBuscarRenavam').style.display = '';
    document.getElementById('urlRequisicaoBuscarRenavam').innerHTML = '<h4>' + url + '</h4>';

    var dados = document.getElementById('jsonBodyBuscarRenavam').value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    document.getElementById('EnviarBuscarRenavam').disabled = true;
    xhr.onreadystatechange = function () {
       if (xhr.readyState === 4) {
          console.log(xhr.status);
          console.log(xhr.responseText);
          document.getElementById('EnviarBuscarRenavam').disabled = false;
          MontaRespostaBuscarRenavam(xhr.responseText);
       }};
   
    xhr.send(dados);
}

function MontaRespostaBuscarRenavam(resposta){
    document.getElementById('respostaBuscarRenavam').style.display = '';
    document.getElementById('textRespostaBuscarRenavam').value = resposta;
}
