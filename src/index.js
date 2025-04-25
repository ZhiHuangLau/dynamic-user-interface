const choices=document.querySelectorAll(".choice");
const toggleSwitches=document.querySelectorAll("button#toggle");

choices.forEach(choice => {
  choice.classList.add("hidden");
});

toggleSwitches.forEach(toggleSwitch => {
  toggleSwitch.onclick= function(){
    console.log("mek")
    choices.forEach(choice => {
      let isInvisible=choice.classList.contains('hidden')
      if (isInvisible) {
        choice.classList.remove('hidden');
        choice.classList.add('visible');
      } else {
        choice.classList.remove('visible');
        choice.classList.add('hidden');
      }
    });
    
  };
  
});
