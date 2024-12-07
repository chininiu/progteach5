
$(document).ready(function(){
    const body = $("body");
    const sidebar = $(".sidebar");
    const toggle =$(".toggle");
    const modeSwitch = $(".toggle-switch");
    const modeText = $(".mode-text");
    const elements = document.getElementsByClassName("scroll-element");
    const pan = document.getElementsByClassName("pan");

    alert
    //slidebar functions
    toggle.click(function() {
        sidebar.toggleClass("close");
    });

    modeSwitch.click(function() {
      body.toggleClass("dark");
      if(body.hasClass("dark"))
      {
          modeText.text("Light Mood");
          localStorage.setItem("check", "true");
      }
      else
      {
          modeText.text("Dark Mood");
          localStorage.setItem("check", "false");
  
      }
  });
  
  if (localStorage.getItem("check") == "true")
  {
      body.addClass("dark");
  }
  else 
  {
      body.removeClass("dark");
  }
    //slidebarfunctions end


    window.addEventListener("scroll", function() {
  
      
        for (const element of elements) 
        {
          const position = element.getBoundingClientRect();
          
          if (position.top < window.innerHeight) {
            element.classList.add("hidden");
          } else {
            element.classList.remove("hidden");
          }
        }

        for (const pans of pan)
        {
          const position = pans.getBoundingClientRect();
      
          if (position.top < window.innerHeight) 
          {
            pans.classList.add("active-pan");
          } 
          else 
          {
            pans.classList.remove("active-pan");
          }
        }
      
       
      });
})

