
 var names = ["Bizerte", "Manouba","Tunis","Ariana", "BenArous", "Jendouba", "Beja", "Nabeul", "Zaghouan", "Siliana","Kef", "Sousse","Kairaouan","Monastir","Mahdia","Kasserine","SidiBouZid","Sfax","Gafsa","Tozeur","Kebili","Gabes","Medenine","Tataouine"]


$("#start").on("click", function(){
$("#startlink").attr('href',"http://127.0.0.1:5500/governate/1.html")
 })


function getName(){
    return names[Math.floor(Math.random() * names.length)]
}

var randomIndex = Math.floor(Math.random() * $(".button").length);


var names2 = [];

var count = 1;


$(".buttonAr").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Ariana');
        names2.push('Ariana');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonAr").on("click",function(){
    count++
    $(".button1").attr('href', "http://127.0.0.1:5500/governate/2.html")

    if ($buttonAr.text() === 'Ariana') {
        $(".button1").attr('href', "http://127.0.0.1:5500/governate/2.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonBe").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Beja');
        names2.push('Beja');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonBe").on("click",function(){
    count++
    $(".button2").attr('href', "http://127.0.0.1:5500/governate/3.html")

    if ($buttonBe.text() === 'Beja') {
        $(".button2").attr('href', "http://127.0.0.1:5500/governate/3.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonBen").each(function(index) {

    if (index === randomIndex) {
        $(this).text('BenArous');
        names2.push('BenArous');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonBen").on("click",function(){
    count++
    $(".button3").attr('href', "http://127.0.0.1:5500/governate/4.html")

    if ($buttonBen.text() === 'BenArous') {
        $(".button3").attr('href', "http://127.0.0.1:5500/governate/4.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonBiz").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Bizerte');
        names2.push('Bizerte');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonBiz").on("click",function(){
    count++
    $(".button4").attr('href', "http://127.0.0.1:5500/governate/5.html")

    if ($buttonBiz.text() === 'Bizerte') {
        $(".button4").attr('href', "http://127.0.0.1:5500/governate/5.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonGab").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Gabes');
        names2.push('Gabes');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonGab").on("click",function(){
    count++
    $(".button5").attr('href', "http://127.0.0.1:5500/governate/6.html")

    if ($buttonGaf.text() === 'Gabes') {
        $(".button5").attr('href', "http://127.0.0.1:5500/governate/6.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonGaf").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Gafsa');
        names2.push('Gafsa');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonGaf").on("click",function(){
    count++
    $(".button6").attr('href', "http://127.0.0.1:5500/governate/7.html")

    if ($buttonGaf.text() === 'Gafsa') {
        $(".button6").attr('href', "http://127.0.0.1:5500/governate/7.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonJen").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Jendouba');
        names2.push('Jendouba');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonJen").on("click",function(){
    count++
    $(".button7").attr('href', "http://127.0.0.1:5500/governate/8.html")

    if ($buttonJen.text() === 'Jendouba') {
        $(".button7").attr('href', "http://127.0.0.1:5500/governate/8.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonKai").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Kairaouan');
        names2.push('Kairaouan');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonKai").on("click",function(){
    count++
    $(".button8").attr('href', "http://127.0.0.1:5500/governate/9.html")

    if ($buttonKai.text() === 'Kairaouan') {
        $(".button8").attr('href', "http://127.0.0.1:5500/governate/9.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonKas").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Kasserine');
        names2.push('Kasserine');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonKas").on("click",function(){
    count++
    $(".button9").attr('href', "http://127.0.0.1:5500/governate/10.html")

    if ($buttonKas.text() === 'Kasserine') {
        $(".button9").attr('href', "http://127.0.0.1:5500/governate/10.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonKeb").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Kebili');
        names2.push('Kebili');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonKeb").on("click",function(){
    count++
    $(".button10").attr('href', "http://127.0.0.1:5500/governate/11.html")

    if ($buttonKeb.text() === 'Kebili') {
        $(".button10").attr('href', "http://127.0.0.1:5500/governate/11.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonKef").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Kef');
        names2.push('Kef');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonKef").on("click",function(){
    count++
    $(".button11").attr('href', "http://127.0.0.1:5500/governate/12.html")

    if ($buttonKef.text() === 'Kef') {
        $(".button11").attr('href', "http://127.0.0.1:5500/governate/12.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonMah").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Mahdia');
        names2.push('Mahdia');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonMah").on("click",function(){
    count++
    $(".button12").attr('href', "http://127.0.0.1:5500/governate/13.html")

    if ($buttonMah.text() === 'Mahdia') {
        $(".button12").attr('href', "http://127.0.0.1:5500/governate/13.html")
    }
})

randomIndex = Math.floor(Math.random() * $(".button").length);

$(".buttonMan").each(function(index) {

    if (index === randomIndex) {
        $(this).text('Manouba');
        names2.push('Manouba');
    } else {
       
        var newName = getName();
        while (names2.includes(newName)) {
            newName = getName(); 
        }
        $(this).text(newName);
        names2.push(newName);
    }
});




$(".buttonMan").on("click",function(){
    count++
    $(".button13").attr('href', "http://127.0.0.1:5500/governate/14.html")

    if ($buttonMan.text() === 'Manouba') {
        $(".button13").attr('href', "http://127.0.0.1:5500/governate/14.html")
    }
})


$("nav").prepend(count)