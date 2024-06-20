

const skill = document.getElementById('skills');
const project = document.getElementById('project');
const contact = document.getElementById('contact');


  function scrollSkill(e) {
    e.preventDefault()
    window.scroll(0, 590);
  }

  function scrollProject(e) {
    e.preventDefault()
    window.scroll(0, 1300);
  }
  function scrollContact(e) {
    e.preventDefault()
    window.scroll(0, 1800);
  }
  
  skill.addEventListener("click", scrollSkill);
  project.addEventListener("click", scrollProject);
  contact.addEventListener("click", scrollContact);


