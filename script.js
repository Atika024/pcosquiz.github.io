const quizDB = [
    {
      question: "Q1: What is the full form of PCOS?",
      a: "Polycystic Ovary Syndrome",
      b: "Postcyclic Ovary Syndrome",
      c: "Polycyclic Ovarian System",
      d: "Precyclic Ovarian System",
      ans: "ans1"
    },
    {
      question: "Q2: PCOS was described by ____________.",
      a: "Louis Pastuer",
      b: "Pavlov",
      c: "Charles Darwin",
      d: "Stein and Levinthal",
      ans: "ans4"
    },
    {
      question: "Q3: Age at which PCOS is commonly diagnosed is ___________.",
      a: "18 to 44 years",
      b: "less than 13 years",
      c: "More than 50 years",
      d: "None of the above",
      ans: "ans1"
    },
      {
      question: "Q4: What are the symptoms of PCOS?",
      a: "Irregular periods",
      b: "Excess androgen",
      c: "Polycystic ovaries",
      d: "Atleast two of the above symptoms",
      ans: "ans4"
    },
    {
      question: "Q5: Diagnostic imaging tests done in suspected PCOS include(s) _____________.",
      a: "MRI",
      b: "Transvaginal ultrasound",
      c: "Pelvic ultrasound",
      d: "All of the above",
      ans: "ans4"
    },
    {
      question: "Q6: Women suffering from PCOS are at an increased risk of developing _____________.",
      a: "Enomentrial (uterine) cancer",
      b: "Diabetes",
      c: "Dyslipidemias (elevated cholestrol and lipid abnormalities)",
      d: "All of the above",
      ans: "ans4"
    },
    {
      question: "Q7: What is the major reason for women with PCOS to suffer from infertility?",
      a: "Obesity", 
      b: "Anovulatory menstrual cycles",
      c: "Excess insulin levels",
      d: "All of tne above",
      ans: "ans2"
    },
    {
      question: "Q8 How many types of PCOS a there?",
      a: "2",
      b: "5",
      c: "4",
      d: "There are no further categories of PCOS.",
      ans: "ans3"
    },
    {
      question: "Q9: Which of the following is not a type of PCOS?",
      a: "Insulin resistance PCOS",
      b: "Estrogenal PCOS",
      c: "Adrenal PCOS",
      d: "Post-pill PCOS",
      ans: "ans3"
    },
    {
      question: "Q10: Which of the follong is not a myth about PCOS?",
      a: "PCOS is an endocrine and metabolic disorder that affects the body well beyond ovaries.",
      b: "If your menstrual cycle is irregular, you have PCOS.",
      c: "You can't get pregnant if you have PCOS.",
      d: "You have to have polycystic ovaries to have PCOS",
      ans: "ans1"
    }, 
  ];
  
  const question = document.querySelector('.question');
  const option1 = document.querySelector('#option1');
  const option2 = document.querySelector('#option2');
  const option3 = document.querySelector('#option3');
  const option4 = document.querySelector('#option4');
  const submit = document.querySelector('#submit');
  const answers = document.querySelectorAll('.answer');
  const quizScore = document.querySelector('#quizScore');
  
  let qNum = 0;
  let score = 0;

  const loadQueston = () => 
  {
    const qList = quizDB[qNum];

    question.innerText = qList.question;
    option1.innerText = qList.a;
    option2.innerText = qList.b;
    option3.innerText = qList.c;
    option4.innerText = qList.d;

  }
  
  loadQueston();

  const getCheckAns = () => 
  {
    let answer;
    answers.forEach((curAnsElem) => {
      if(curAnsElem.checked) {
        answer = curAnsElem.id;
      }
    });
    return answer;
  };

  const deselect = () => 
  {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
  }

  submit.addEventListener('click', () => 
  {
    const selectedAns = getCheckAns();
    console.log(selectedAns);
    
    if (selectedAns == quizDB[qNum].ans) 
    {
        score++;
    };

    qNum++;

    deselect();

    if (qNum < quizDB.length) {
      loadQueston();
    }
    else {
      quizScore.innerHTML = `
        <h3> Score obtained: ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Replay </button>
        `;
     
      quizScore.classList.remove('result')                        
    }
  });

  