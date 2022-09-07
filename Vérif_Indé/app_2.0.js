let root = document.documentElement;

function Btn_1Click()
{
    var aiguille = document.getElementById("aiguille");
    var angle = 1;
    var score = Math.floor( Math.random() *100 ) ;
    angle = ( 178 * (score / 100) ) - 138 ;
    //root.style.setProperty('--angle',angle);
    
    root.style.setProperty('--angle4', ((score / 100) * 178 ) - 138 );
    aiguille.style.animationPlayState = "running";

    /*if (0 < score < 25) {
        const pNode = document.getElementById("p");
        pNode.textContent = "Cet article est fake, fuyez.";
    } else if (25 < score < 50) {
        const pNode = document.getElementById("p");
        pNode.textContent = "Cet article est douteux, faites attention.";
    } else if (50 < score < 75) {
        const pNode = document.getElementById("p");
        pNode.textContent = "Cet article est plutôt honnête.";
    } else if (75 < score < 100) {
        const pNode = document.getElementById("p");
        pNode.textContent = "Cet article est honnête.";
    }*/
}