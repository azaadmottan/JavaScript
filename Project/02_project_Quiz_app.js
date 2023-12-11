const question = [

    {
        "quest": "HTML stands for",
        "a": "HighText Machine Language",
        "b": "HyperText and links Markup Language",
        "c": "HyperText Markup Language",
        "d": "None of these",

        "correct": "c"
    },
    {
        "quest": "Which of the following tag is used for inserting the largest heading in HTML?",
        "a": "<h3>",
        "b": "<h1>",
        "c": "<h5>",
        "d": "<h6>",

        "correct": "d"
    },
    {
        "quest": "Which of the following tag is used to insert a line-break in HTML?",
        "a": "<br>",
        "b": "<a>",
        "c": "<pre>",
        "d": "<b>",

        "correct": "a"
    },
    {
        "quest": "How to create an unordered list (a list with the list items in bullets) in HTML?",
        "a": "<ul>",
        "b": "<ol>",
        "c": "<li>",
        "d": "<i>",

        "correct": "a"
    }
]

let Question = document.getElementById("question");
let Options = document.querySelectorAll(".options");
// console.log(quest)

let totalQuestion = question.length;
let right = 0, wrong = 0;
let index = 0;

const loadQuestion = () => {
    
    let data = question[index];

    if (index == totalQuestion)
    {
        endQuiz();
    }
    else 
    {
        
        reset();
    
        Question.innerText = `${index + 1}) ${data.quest}`;
        
        Options[0].nextElementSibling.innerText = data.a;
        Options[1].nextElementSibling.innerText = data.b;
        Options[2].nextElementSibling.innerText = data.c;
        Options[3].nextElementSibling.innerText = data.d;
    }

}

const quizSubmit = () => {

    let check = false;
    // let notCheck = false;

    Options.forEach (
        (input) => {
            // console.log(input.checked);
            if (input.checked == true) {

                check = true;
                console.log("Checked");
            }
            // else {
            //     notCheck = false;
            //     console.log("Not Checked");
            // }
        }
    )
    
    if (check == true)
    {
        
        let data = question[index];
        let ans = getAnswer();
        // console.log(ans)
    
        if (ans == data.correct)
        {
            // console.log("True");
            right++;
        }
        else 
        {
            // console.log("False");
            wrong++;
        }
    
        index++;
        loadQuestion();
    }
    else 
    {
        document.getElementById("mssg").innerText = "Please select an option !";
        document.getElementById("mssg").style.color = "red";
    }

    // return;
}

const getAnswer = () => {
    
    let answer;
    Options.forEach (
        (input) => {
            if (input.checked) {

                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    
    Options.forEach (
        (input) => {
            if (input.checked) {
                // console.log(input.value);
                input.checked = false;
            }
        }
    )

}

const endQuiz = () => {

    document.getElementById("box").innerHTML = `

        <h2 style="font-size: 24px; text-align: center; border-bottom: 2px solid black;">Thank You for Playing Quiz-game</h2>
        <h3 style="font-size: 20px; margin-top: 20px;">Your's Score : ${right * 10}</h3>
        <h3 style="font-size: 20px;">${right} / ${totalQuestion} are correct</h3> 
    `;

}

const checkValidate = () => {
    document.getElementById("mssg").innerText = "";
}

loadQuestion();