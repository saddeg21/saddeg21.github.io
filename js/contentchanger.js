content = document.getElementById('contents2')
article1 = document.getElementById('art1')
article2 = document.getElementById('art2')
article3 = document.getElementById('art3')

function scrolltop(){
    window.scrollTo(0,0);
}

function change(){
    
    content.style.display="none"
    article1.style.display = "flex"
}

function change2(){
    content.style.display="none"
    article2.style.display="flex"
}

function change3(){
    
    content.style.display="none"
    article3.style.display = "flex"
}


function back(){
    content.style.display="grid"
    article1.style.display = "none"
}

function back2(){
    content.style.display = "grid"
    article2.style.display = "none"
}

function back3(){
    content.style.display = "grid"
    article3.style.display = "none"
}
