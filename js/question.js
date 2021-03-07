class Question{
    constructor(){

    }

    display(){
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

            answer1.mousePressed(function(){
              answer1.hide();
              answer2.hide();
              answer3.hide();
              answer4.hide();
              question.hide();
              var result1 = createElement('h2');
              result1.html('Incorrect. Try again');
            })
            answer2.mousePressed(function(){
                answer1.hide();
                answer2.hide();
                answer3.hide();
                answer4.hide();
                question.hide();
                var result2 = createElement('h2');
                result2.html("Correct! You did it!");
            })
            answer3.mousePressed(function(){
                answer1.hide();
              answer2.hide();
              answer3.hide();
              answer4.hide();
              question.hide();
              var result3 = createElement('h2');
              result3.html('Incorrect. Try again');
            })
            answer4.mousePressed(function(){
                answer1.hide();
                answer2.hide();
                answer3.hide();
                answer4.hide();
                question.hide();
                var result4 = createElement('h2');
                result4.html('Incorrect. Try again');
            })}
        }