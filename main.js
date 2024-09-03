const questions = document.querySelectorAll(".question");


questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")
    const text = question.querySelector('.text')
    btn.addEventListener('click', () =>{
        question.classList.toggle('show-text')
    })
    text.addEventListener('click', () =>{
        question.classList.toggle('show-text')
    })
});
