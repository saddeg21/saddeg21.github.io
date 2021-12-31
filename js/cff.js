let previewContainer = document.querySelector(".mbox-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".mbox-mission .mission").forEach(mission =>{
    mission.onclick = () =>{
        previewContainer.style.display = "flex";
        let name = mission.getAttribute("data-name");
        previewBox.forEach(preview =>{
            let target = preview.getAttribute("data-target");
            if(name == target){
                preview.classList.add("active");
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector(".fa-times").onclick = () => {
        close.classList.remove("active");
        previewContainer.style.display = "none";
    }
})


