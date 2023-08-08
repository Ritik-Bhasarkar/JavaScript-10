const quizData = [
  {
    question: "The International Literacy Day is observed on ?",
    a: "Sep 8",
    b: "Nov 28",
    c: "May 2",
    d: "Sep 22",
    answer: 1,
  },
  {
    question: "The language of Lakshadweep. a Union Territory of India, is ?",
    a: "Hindi",
    b: "Tamil",
    c: "Telugu",
    d: "Malayalam",
    answer: 4,
  },
  {
    question:
      "In which group of places the Kumbha Mela is held every twelve years ?",
    a: "Ujjain. Purl; Prayag. Haridwar",
    b: "Prayag. Haridwar, Ujjain,. Nasik",
    c: "Rameshwaram. Purl, Badrinath. Dwarika",
    d: "Chittakoot, Ujjain, Prayag,'Haridwar",
    answer: 2,
  },
  {
    question: "Bahubali festival is related to ?",
    a: "Islam",
    b: "Hinduism",
    c: "Buddhism",
    d: "Jainism",
    answer: 4,
  },
  {
    question: "Which day is observed as the World Standards  Day ?",
    a: "Jun 26",
    b: "Oct 14",
    c: "Nov 15",
    d: "Dec 2",
    answer: 2,
  },
  {
    question: "Who is the current Prime Minister Of India ?",
    a: "Shri.Naremdra Modi",
    b: "Rahul Gandhi",
    c: "Dr. Manmohan Singh",
    d: "Jawahar Lal Nehru",
    answer: 1,
  },
  {
    question: "Who is the current President Of India ?",
    a: "Pranab Mukharjee",
    b: "Narendra Modi",
    c: "Druapadi Murmur",
    d: "Rahul Gandhi",
    answer: 3,
  },
  {
    question: " Where is Taj Mahal located ?",
    a: "Agra",
    b: "Delhi",
    c: "Mumbai",
    d: "Mathura",
    answer: 1,
  },
  {
    question: "On Which Day Independence Day is Celebrated ?",
    a: "14 Nov",
    b: "15 Aug",
    c: "26 jan",
    d: "2 Oct",
    answer: 2,
  },
  {
    question: "Who was the First President of India ?",
    a: "A.P.J Abdul Kalam",
    b: "Dr. Rajendra Prasad",
    c: "Sarvepalli Radhakrishnan",
    d: "Zakir Hussain",
    answer: 2,
  },
  {
    question: "On Which Day Childrens Day is Celebrated ?",
    a: "2 Oct",
    b: "14 Nov",
    c: "06 Jun",
    d: "11 Mar",
    answer: 2,
  },
  {
    question: "Who was the First Prime Minister Of India ?",
    a: "Swami Vivekanda",
    b: "Pandit Jawaharlal Nehru",
    c: "Lal Bahadur Shastri",
    d: "Indira Gandhi",
    answer: 2,
  },
  {
    question: "Who is the Chief Of Defence Staff ?",
    a: "Lt General Anil Chauhan",
    b: "General Manoj Pandey",
    c: "General Manoj Mukund",
    d: "General Bipin Rawat",
    answer: 1,
  },
  {
    question: "Which one is a Union Territory of the following ?",
    a: "Daman & Diu",
    b: "New Delhi",
    c: "Mumbai",
    d: "Hyderabad",
    answer: 1,
  },
  {
    question: "Who is the Parent Company Of Google ?",
    a: "Alphabet",
    b: "Microsoft",
    c: "Apple",
    d: "Amazon",
    answer: 1,
  },
];

const questionEl = document.querySelector(".que-header");
//const answers = document.querySelector(".quiz-answers");

const Atext = document.getElementById("a-text");
const Btext = document.getElementById("b-text");
const Ctext = document.getElementById("c-text");
const Dtext = document.getElementById("d-text");

const submitBtn = document.querySelector(".quiz-submit");

const optionA = document.querySelector("#option-a");
const optionB = document.querySelector("#option-b");
const optionC = document.querySelector("#option-c");
const optionD = document.querySelector("#option-d");

var currentQuiz = 0;

function loadQuiz() {

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;

  Atext.innerText = currentQuizData.a;
  Btext.innerText = currentQuizData.b;
  Ctext.innerText = currentQuizData.c;
  Dtext.innerText = currentQuizData.d;

}


submitBtn.addEventListener('click', () => {

    currentQuiz++;
    
    if(currentQuiz < quizData.length){
        
        loadQuiz();
    }else{
        alert('quiz finished')
    }

})