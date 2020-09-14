
let content_project = document.querySelectorAll('.project-content')
let project = document.querySelectorAll('.encard-project')
let arrow = document.querySelectorAll('.encard-arrow')
let get_body = document.getElementById('bdy')


  for(i=0;i<project.length;i++){
    project[i].addEventListener('click', (function(arg1) {
            return function() {
                content_project[arg1].classList.toggle('project-fx')
                get_body.classList.toggle('fx-container')
            };
        } ) ( i ), false);
        arrow[i].addEventListener('click', (function(arg1) {
                return function() {
                    content_project[arg1].classList.toggle('project-fx')
                    get_body.classList.toggle('fx-container')
                };
            } ) ( i ), false);
    }
