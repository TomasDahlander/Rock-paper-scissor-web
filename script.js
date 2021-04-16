$(document).ready(function(){
        // rock = 0
        // paper = 1
        // scissor = 2

        const $leftSign = $("#leftSign");
        const $rightSign = $("#rightSign");
        const $playerScore = $("#playerScore");
        const $npcScore = $("#npcScore");

        // Difficulties = Normal, Hardcore, Impossible
        let difficulty = "Normal";

        // Skapa lista för vad som ska kontrolleras vid Hardcore mode och skriv funktionen som läser igenom denna

    $(".adjust-button").click(function(){
        $(".adjust-button").attr("disabled",true);
        $leftSign.attr("src", ('./images/rock-from-left.png'));
        $rightSign.attr("src", ('./images/rock-from-right.png'));
        const player = $(this).val();
        let npc;
        if(difficulty === 'Normal') npc = getNpcChoiceNormal();
        else if(difficulty === 'Hardcore') npc = getNpcChoiceNormal();
        else npc = getNpcChoiceImpossible(player);
        animateShake().promise().done(function () {
            checkResults(player, npc);
        });
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

    function checkResults(player, npc){
        $leftSign.attr("src", (`./images/${player}-from-left.png`));
    $rightSign.attr("src", (`./images/${npc}-from-right.png`));

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
        $(".adjust-button").attr("disabled",false);
    }

    function getNpcChoiceNormal(){
        const nr = Math.floor(Math.random() * Math.floor(3));
        switch(nr){
            case 0: return "rock";
            case 1: return "paper";
            case 2: return "scissor";
        }
    }

    function getNpcChoiceHardcore(){
        
    }

    function getNpcChoiceImpossible(player){
        switch(player){
            case "rock": return "paper";
            case "paper": return "scissor";
            case "scissor": return "rock";
        }
    
    }
    
    $(".radio-input").click(function(){
        difficulty = $(this).val();
    })
});