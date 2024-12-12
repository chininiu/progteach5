
const body = $("body");
const sidebar = $(".sidebar");
const toggle =$(".toggle");
const modeSwitch = $(".toggle-switch");
const modeText = $(".mode-text");
const magnify = $(".magnify");
const searchBar = $(".input-search");
const but_java = $("#button_java");
const but_c = $("#button_c")
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

$("#C-sharp").on(
    {mouseenter: function() 
    {
        console.log("cs hovered!");
        $("#C-sharp").addClass("product-enlarge");
        $("#Java").addClass("product-shrink");
        $("#C-sharp").css('box-shadow', '0px 0px 40px rgba(0, 255, 156, 0.9)');
    }, 
    mouseout: function() 
    {
        $("#C-sharp").css('box-shadow', 'none');
        $("#C-sharp").removeClass("product-enlarge");
        $("#Java").removeClass("product-shrink");
    }
});

$("#Java").on(
    {mouseenter: function() {
        console.log("java hovered!");
        $("#Java").addClass("product-enlarge");
        $("#C-sharp").addClass("product-shrink");
        $("#Java").css('box-shadow', '0px 0px 40px rgba(0, 255, 156, 0.9)');
    }, mouseleave: function() {
        $("#Java").css('box-shadow', 'none');
        $("#Java").removeClass("product-enlarge");
        $("#C-sharp").removeClass("product-shrink");
    }
});

but_java.click(function(){
    var Bundle="JAVA COURSE BUNDLE";
    var Price = "100 PHP";
    localStorage.setItem("bundle",Bundle);
    localStorage.setItem("price",Price);
    window.location.href="../PAYMENT_PAGE/Payment_page.html"
});

but_c.click(function(){
    var Bundle="C# COURSE BUNDLE"
    var Price = "100 PHP"
    localStorage.setItem("bundle",Bundle);
    localStorage.setItem("price", Price);
    window.location.href="../PAYMENT_PAGE/Payment_page.html"
});

const scrollBtn = document.querySelector('.back-to-top') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 600) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})


const morec = $("#click-text-include");
const surface_1 = $("#surface-1")

morec.click(function(){
surface_1.toggleClass("show-lessons-C");
if(surface_1.hasClass("show-lessons-C"))
{
    morec.css("transform", "translateY(3vh)");
}
else
{
    morec.css("transform", "translateY(-12vh)");
}

})

const morejava = $("#include-text-2");
const surface_2 = $("#surface-2")

morejava.click(function(){
    surface_2.toggleClass("show-lesson-java");
    if(surface_2.hasClass("show-lesson-java"))
        {
            morejava.css("transform", "translateY(3vh)");
        }
        else
        {
            morejava.css("transform", "translateY(-19vh)");
        }
})
