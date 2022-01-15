document.addEventListener("DOMContentLoaded", function () {

  let me = document.getElementById('about_me');
  let skills = document.getElementById('my_skills');
  let project = document.getElementById('my_projects');
  let bonus = document.getElementById('bonus');

  let circle_me = document.getElementById('me_circle');
  let circle_skills = document.getElementById('skills_circle');
  let circle_project = document.getElementById('projects_circle');
  let circle_bonus = document.getElementById('bonus_circle');

  let about_me_content = document.getElementById('about_me_content');
  console.log("DOM is loaded");

  let text = new Typed('#typed_text',{
    strings : ["about me", "you have to know is here", "about IT is good or ... almost"],
    typeSpeed : 40,
    backSpeed : 40,
    loop : true
  });


  me.onclick = function show_me() {
    circle_me.style.zIndex = 10;
    anime({
      targets: '#me_circle',
      scale:{
        value: 100,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay:250
    });
  }



skills.onclick = function show_skill(){
  circle_skills.style.zIndex = 10;
  anime({
    targets: '#skills_circle',
    scale:{
      value: 100,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay:250
  });
}

project.onclick = function show_skill(){
  circle_project.style.zIndex = 10;
  anime({
    targets: '#projects_circle',
    scale:{
      value: 100,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay:250
  });
}

bonus.onclick = function show_skill(){
  circle_bonus.style.zIndex = 10;
  anime({
    targets: '#bonus_circle',
    scale:{
      value: 100,
      duration: 1600,
      delay: 800,
      easing: 'easeInOutQuart'
    },
    delay:250
  });
}


});
