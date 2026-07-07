let show = document.querySelector(".show");

/* console.log(now.toLocaleTimeString()); */
let refresh = () => {
    const now = new Date();
    show.innerHTML = now.toLocaleTimeString();
};

setInterval(refresh, 1000);
