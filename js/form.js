class Form{
    constructor(){

    }

    display(){
        var title = createElement('h3');
        title.html('Quiz Game');
        title.position(370,225);

        var input = createInput("name");
        input.position(390,390);

        var button = createButton("start");
        button.position(390,470);

        var question = createElement('h2');
        question.html('What is 1+1?');
        question .position(320,220);

        var answer1 = createButton('A: 1');
        answer1.position(200,300);

        var answer2 = createButton('B: 2');
        answer2.position(200,350);

        var answer3 = createButton('C: 3');
        answer3.position(200,400);

        var answer4 = createButton('D: 4');
        answer4.position(200,450);
        
        button.mousePressed(function(){
            var name = input.value();
            contestantCount = contestantCount+1;
            contestant.updateName(name);
            contestant.updateCount(contestantCount);
            title.hide();
            input.hide();
            button.hide();
            quiz.update(1);
        });
      }
    }