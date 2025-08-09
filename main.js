function myFunction() {
    const nav = document.getElementById("nav-container");
    const navlist = document.getElementById("nav-list");
    nav.style.display = "flex";
    nav.style.transform = "translateY(-30px)";
    navlist.style.fontFamily = "'Inter', 'Segoe UI', 'Arial', 'Helvetica Neue', Helvetica, sans-serif";
    nav.animate(
        [
            { opacity: 0, transform: "translateY(-30px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            duration: 500,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards"
        }
    );

    setTimeout(() => {
        nav.animate(
            [
                { opacity: 1, transform: "translateY(0)" },
                { opacity: 0, transform: "translateY(-30px)" }
            ],
            {
                duration: 500,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards"
            }
        ).onfinish = () => {
            nav.style.display = "none";
        };
    }, 8000);

}

function myFunction2() {
   const lifestyle = document.getElementById("lifestyle");
   lifestyle.style.display = "flex";
   lifestyle.style.flexDirection = "column";

    setTimeout(() => {
         lifestyle.style.display = "none";
    }, 5000);
}

function myFunction3() {
   const relationships = document.getElementById("relationships");
   relationships.style.display = "flex";
   relationships.style.flexDirection = "column";

   setTimeout(() => {
       relationships.style.display = "none";
   }, 5000);
}

function myFunction4() {
   const sexualIntimacy = document.getElementById("sexualIntimacy");
   sexualIntimacy.style.display = "flex";
   sexualIntimacy.style.flexDirection = "column";

   setTimeout(() => {
       sexualIntimacy.style.display = "none";
   }, 5000);
}

function myFunction5() {
   const finance = document.getElementById("finance");
   finance.style.display = "flex";
   finance.style.flexDirection = "column";

   setTimeout(() => {
       finance.style.display = "none";
   }, 5000);
}

