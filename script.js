function changeImageOver()
{
    document.getElementById("fotoinicial").src ="imgdoscript.png";
}

function changeImageLeave()
{
    document.getElementById("fotoinicial").src ="fotodotitulo.png";
}

function adicionar(){
    var sugestao = document.getElementById("mensagem").value;
    document.getElementById("resultado").innerHTML = "A sua sugestão foi: " +sugestao;
}