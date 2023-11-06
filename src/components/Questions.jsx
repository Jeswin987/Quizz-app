import React, { useState ,useEffect} from 'react';

function Questions() {
  const [question, setQuestion] = useState(0);
  const [showScore, setShowscore] = useState(false);
  const [score, setScore] = useState(0);
  const [time,setTime] = useState(10);
  const [color,setColor] = useState(false)

  const data = [
    {
      id: "1",
      questionText: 'Who was the founder of the Mongol Empire?',
      answerOptions: [
        { answerText: 'Genghis Khan', isCorrect: true },
        { answerText: 'Kublai Khan', isCorrect: false },
        { answerText: 'Attila the Hun', isCorrect: false },
        { answerText: 'Tamerlane', isCorrect: false },
      ],
    },
    
    {
      id: "2",
      questionText: 'Which planet is known as the "Red Planet"?',
      answerOptions: [
        { answerText: 'Venus', isCorrect: false },
        { answerText: 'Jupiter', isCorrect: false },
        { answerText: 'Mars', isCorrect: true },
        { answerText: 'Saturn', isCorrect: false },
      ],
    },
    {
      id: "3",
      questionText: 'Who wrote the play "Hamlet"?',
      answerOptions: [
        { answerText: 'Charles Dickens', isCorrect: false },
        { answerText: 'William Shakespeare', isCorrect: true },
        { answerText: 'Jane Austen', isCorrect: false },
        { answerText: 'Mark Twain', isCorrect: false },
      ],
    },
    {
      id: "4",
      questionText: 'What is the largest mammal in the world?',
      answerOptions: [
        { answerText: 'Elephant', isCorrect: false },
        { answerText: 'Blue Whale', isCorrect: true },
        { answerText: 'Giraffe', isCorrect: false },
        { answerText: 'Hippopotamus', isCorrect: false },
      ],
    },
    {
      id: "5",
      questionText: 'Which gas is essential for respiration?',
      answerOptions: [
        { answerText: 'Oxygen', isCorrect: true },
        { answerText: 'Nitrogen', isCorrect: false },
        { answerText: 'Carbon Dioxide', isCorrect: false },
        { answerText: 'Hydrogen', isCorrect: false },
      ],
    },
    {
      id: "6",
      questionText: 'In which country is the Taj Mahal located?',
      answerOptions: [
        { answerText: 'India', isCorrect: true },
        { answerText: 'Pakistan', isCorrect: false },
        { answerText: 'Bangladesh', isCorrect: false },
        { answerText: 'Nepal', isCorrect: false },
      ],
    },
    {
      id: "7",
      questionText: 'What is the chemical symbol for silver?',
      answerOptions: [
        { answerText: 'Go', isCorrect: false },
        { answerText: 'Gl', isCorrect: false },
        { answerText: 'Au', isCorrect: false },
        { answerText: 'Ag', isCorrect: true },
      ],
    },
    {
      id: "8",
      questionText: 'Who painted the "Starry Night"?',
      answerOptions: [
        { answerText: 'Pablo Picasso', isCorrect: false },
        { answerText: 'Vincent van Gogh', isCorrect: true },
        { answerText: 'Leonardo da Vinci', isCorrect: false },
        { answerText: 'Rembrandt', isCorrect: false },
      ],
    },
    {
      id: "9",
      questionText: 'Which river is the longest in Africa?',
      answerOptions: [
        { answerText: 'Nile', isCorrect: true },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Mississippi', isCorrect: false },
        { answerText: 'Yangtze', isCorrect: false },
      ],
    },
    {
      id: "10",
      questionText: 'What is the largest organ in the human body?',
      answerOptions: [
        { answerText: 'Brain', isCorrect: false },
        { answerText: 'Heart', isCorrect: false },
        { answerText: 'Skin', isCorrect: true },
        { answerText: 'Liver', isCorrect: false },
      ],
    },
  ];

 
  useEffect(() => {
    let timer;

    if (!showScore) {
      timer = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          // Time's up, handle it as needed (e.g., move to the next question)
          handleAnswerClick();
        }
      }, 1000);
    } 
  
    return () => clearInterval(timer); // Clear the timer on component unmount
  }, [time, showScore]);
  

  const handleAnswerClick = (isCorrect) => {
    setColor(true)
   
    if (isCorrect) {
      setScore(score + 1);
      setTime("-")
      
    }
    

  };
    const handleNext=()=>{
      if (question + 1 < data.length) {
        setQuestion(question + 1);
        setTime(10)
        setColor(false)
      } else  {
        setShowscore(true);
        
      }
      
    }
  

   
  const handleRestart = ()=>{
    setQuestion(0)
    setScore(0)
    setShowscore(false)
    setColor(false)
    setTime(10)

  }

  return (
    <>
      <div className='main d-flex justify-content-center align-items-center flex-column  '>
      
        <div className='shadow card d-flex justify-content-center align-items-center '>
          <h3 className='heading'>Quizz App</h3>
          
{!showScore  &&
          <div className='timer shadow text-danger mt-3'>{time} seconds left</div>
          }
          <div className=' d-flex  justify-content-center align-items-center mt-5 '>
            {showScore ? (
              <div className='score-section '>
                <p>You scored {score} out of {data.length}</p>
                <button className='restart mt-5 text-center btn bg-success ' onClick={handleRestart}>Restart</button>
              </div>
            ) : (
              <>
                
                  <div className='question-section '>
                    <div className='question-count'>
                      <span>Question {question + 1}</span>/{data.length}                
                    </div>  
                    <div className='question-text mt-4'>{data[question].questionText}</div>
                  </div>
                  <div  className='answer-section'>
  					 {data[question].answerOptions.map((answerOption) => (
  							<button className={color && answerOption.isCorrect?"bg-success":""}  onClick={() => handleAnswerClick(answerOption.isCorrect)}>
                  <span className='text-center w-100'>{answerOption.answerText}</span>
                </button>
  						))}
  					</div>
                
          <button className='btn bg-primary next me-5' onClick={handleNext}>Next</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Questions;
