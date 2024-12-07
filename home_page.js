const body = $("body");
const sidebar = $(".sidebar");
const toggle =$(".toggle");
const modeSwitch = $(".toggle-switch");
const modeText = $(".mode-text");
const magnify = $(".magnify");
const searchBar = $(".input-search");
const login = $("#login");


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


login.click(function(){
    window.location.href = "../LOGIN_PAGE/Login_page.html"
});
