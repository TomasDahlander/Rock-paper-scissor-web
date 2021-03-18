$(document).ready(function(){
        // rock = 0
        // paper = 1
        // scissor = 2
        const $leftSign = $("#leftSign");
        const $rightSign = $("#rightSign");
        const $playerScore = $("#playerScore");
        const $npcScore = $("#npcScore");
        let player;
        let npc;

    $(".adjust-button").click(function(){
        $leftSign.attr("src", (`images/rock-from-left.png`));
        $rightSign.attr("src", (`images/rock-from-right.png`));
        npc = getNpcChoice(3);
        player = $(this).val();
        animateShake().promise().done(checkResults);
    });

    function animateShake(){
        return $("img")
        .animate({paddingTop: "0px", paddingBottom: "70px"},200)
        .animate({paddingTop: "50px", paddingBottom: "20px"},200)
        .animate({paddingTop: "0px", paddingBottom: "70px"},200)
        .animate({paddingTop: "50px", paddingBottom: "20px"},200)
        .animate({paddingTop: "0px", paddingBottom: "70px"},200)
        .animate({paddingTop: "50px", paddingBottom: "20px"},200);
    }

    function checkResults(){
        $leftSign.attr("src", (`images/${player}-from-left.png`));
    $rightSign.attr("src", (`images/${npc}-from-right.png`));

        if(player === npc){

        }
        else if(player === "rock" && npc === "scissor"){
            let nr = Number($playerScore.text());
            $playerScore.text(++nr);
        }
        else if(player === "rock" && npc === "paper"){
            let nr = Number($npcScore.text());
            $npcScore.text(++nr);
        }
        else if(player === "paper" && npc === "rock"){
            let nr = Number($playerScore.text());
            $playerScore.text(++nr);
        }
        else if(player === "paper" && npc === "scissor"){
            let nr = Number($npcScore.text());
            $npcScore.text(++nr);
        }
        else if(player === "scissor" && npc === "paper"){
            let nr = Number($playerScore.text());
            $playerScore.text(++nr);
        }
        else if(player === "scissor" && npc === "rock"){
            let nr = Number($npcScore.text());
            $npcScore.text(++nr);
        }
    }

    function getNpcChoice(max){
        const nr = Math.floor(Math.random() * Math.floor(max));
        switch(nr){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissor";
        }
    }  
});