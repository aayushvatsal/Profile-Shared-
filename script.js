const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

//Modal Open Function
const openModal = () =>{
    console.log("Modal is Open")
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Modal close Function
const closeModal = () =>{
    // console.log("Modal is close")
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};