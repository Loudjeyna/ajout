const form = document.querySelector("form"),
        nextBtn1 = form.querySelector(".nextBtn1"),
        backBtn1 = form.querySelector(".backBtn1"),
        nextBtn2 = form.querySelector(".nextBtn2"),
        backBtn2 = form.querySelector(".backBtn2"),
        allInput  = form.querySelectorAll(".first input");
        allInput2  = form.querySelectorAll(".second input");
nextBtn1.addEventListener("click",function () {
        allInput.forEach(input => {
            if (input.value != "") {
                form.classList.add('secActive');
            } else {
                form.classList.remove('secActive');
                // alert("La formulaire est vide");
            }
        });
    })

backBtn2.addEventListener("click" ,()=> form.classList.remove('secActive'));