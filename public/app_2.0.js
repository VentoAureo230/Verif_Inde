let root = document.documentElement;

var score = 1;

function Btn_1Click()
{
    let needle = document.querySelector(".define_origin");
        needle.style.animationName ="none";
        requestAnimationFrame(() =>{
            setTimeout(() => {
                needle.style.animationName = ""
            }, 0);
        })

    var reqScore = new XMLHttpRequest();     
    reqScore.open("POST", "/api/score", true);    
    reqScore.setRequestHeader("Content-Type", "application/json");
    reqScore.onload = function () {               
    if (reqScore.status === 200)  {             
        const score = reqScore.response;

        var aiguille = document.getElementById("aiguille");
        var angle = 1;
        // score = Math.floor( Math.random() *100 ) ;
        angle = ( 178 * (score / 100) ) - 138 ;
        //root.style.setProperty('--angle',angle);
        
        root.style.setProperty('--angle4', ((score / 100) * 178 ) - 138 );
        aiguille.style.animationPlayState = "running";
        if (score < 25) {
            const pNode = document.getElementById("p");
            pNode.innerText = "Cet article est fake, fuyez.";
            pNode.style.color = "#ff5555";
        } else if (score < 50) {
            const pNode = document.getElementById("p");
            pNode.innerText = "Cet article est douteux, faites attention.";
            pNode.style.color = "orange";
        } else if (score < 75) {
            const pNode = document.getElementById("p");
            pNode.innerText = "Cet article est plutôt honnête.";
            pNode.style.color = "yellow";
        } else if (score < 100) {
            const pNode = document.getElementById("p");
            pNode.innerText = "Cet article est honnête.";
            pNode.style.color = "green";
        }
    }}
    var test = document.getElementById('url').value;    
    reqScore.send(JSON.stringify({"url": test }));
    
}