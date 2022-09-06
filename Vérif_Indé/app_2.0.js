let root = document.documentElement;

window.onload = resetNeedle();

function resetNeedle()
{
    //aiguille.setAttribute("transform","rotate(-138)")
    var aiguille = document.getElementById('aiguille');
    aiguille.style.animation = 'none';
    aiguille.offsetHeight;
    aiguille.style.animation = null;
}

function Btn_1Click()
{
    var aiguille = document.getElementById("aiguille");
    resetNeedle();
    var angle = 1;
    var score = Math.floor( Math.random() *100 ) ;
    console.log(score)
    angle = ( 178 * (score / 100) ) - 138 ;
    //root.style.setProperty('--angle',angle);
    
    root.style.setProperty('--angle4', ((score / 100) * 178 ) - 138 );
    aiguille.style.animationPlayState = "running";

    


    //aiguille.setAttribute("transform", `rotate(${angle})`);
}
