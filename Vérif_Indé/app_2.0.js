var resultat = document.getElementById("resultat");

function Btn_1Click()
{
    var score = Math.floor( Math.random() *100 ) ;
    console.log(score)
    resultat.textContent = score.toString();
}