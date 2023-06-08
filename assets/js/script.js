//Scroll Show
// const animationElements = document.querySelectorAll(".show-on-scroll");

// //console.log(animationElements);

// function toggleAnimationElementInWindow(element) {
//     var rect = element.getClientRects()[0];
//     var heightScreen = window.innerHeight;
//     if (!(rect.bottom < 0 || rect.top > heightScreen)) {
//         element.classList.add("start");
//     } else {
//         element.classList.remove("start");
//     }
// }

// function checkAnimation() {
//     animationElements.forEach(function (callback) {
//         toggleAnimationElementInWindow(callback);
//     });
// }

// window.onscroll = checkAnimation;

// $('.smooth').on('mousewheel', function(e){
//     wheel(e.originalEvent, this)
//   })

//   function wheel(event, elm) {
//       var delta = 0;
//       if (event.wheelDelta) delta = event.wheelDelta / 120;
//       else if (event.detail) delta = -event.detail / 3;

//       handle(delta, elm);
//       if (event.preventDefault) event.preventDefault();
//       event.returnValue = false;
//   }

//   function handle(delta, elm) {
//       const time = 0;
//         const distance = 400;

//       $(elm).stop().animate({
//           scrollTop: $(elm).scrollTop() - (distance * delta)
//       }, time );
//   }

const $1 = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $1(".tab-item.active").classList.remove("active");
        $1(".tab-pane.show").classList.remove("show");
        tab.classList.add("active");
        pane.classList.add("show");
    };
});

//Dũng
const offLogin = document.querySelector(".close-login");
const offSignUp = document.querySelector(".close-signUp");
const onlLogin = document.querySelector(".login-btn");
const onSingUp = document.querySelector(".register-link");
const a = document.querySelector(".form-login");
const b = document.querySelector(".from-signUp");
onlLogin.addEventListener("click", () => {
    a.classList.toggle("active-btn");
});
offLogin.addEventListener("click", () => {
    a.classList.add("active-btn");
});
offSignUp.addEventListener("click", () => {
    b.classList.add("active-btn");
});
onSingUp.addEventListener("click", () => {
    b.classList.toggle("active-btn");
    a.classList.toggle("active-btn");
});
document.getElementById("signUpForm").addEventListener("submit", registerUser);
document.getElementById("loginForm").addEventListener("submit", loginUser);
function registerUser(event) {
    event.preventDefault();

    var username = document.getElementById("usernamee").value;
    var password = document.getElementById("passwordd").value;

    localStorage.setItem(username, password);
    alert("Đăng ký thành công!");
    b.classList.toggle("active-btn");
    a.classList.toggle("active-btn");
}

function loginUser(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var storedPassword = localStorage.getItem(username);

    if (
        password === storedPassword ||
        (username === "admin" && password === "admin123")
    ) {
        alert("Đăng nhập thành công");
        showSuccessToast("Đăng nhập thành công, cút vào game đi");
        a.classList.toggle("active-btn");
        $1(".main-play-game-btnn").classList.remove("show-btn");
        $1(".main-play-game-btn").classList.toggle("show-btn");
        // Thực hiện các hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng đến trang dashboard
    } else {
        showErrorToast("Tên đăng nhập hoặc mật khẩu không đúng");
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
        // Hiển thị thông báo lỗi, ví dụ: "Tên người dùng hoặc mật khẩu không đúng!"
    }
}

//show toast message

function showSuccessToast(messages) {
    toast({
        title: "Thành công!",
        message: messages,
        type: "success",
        duration: 3000,
    });
}
function showErrorToast(messages) {
    toast({
        title: "Thất bại!",
        message: messages,
        type: "error",
        duration: 3000,
    });
}

function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            error: "fas fa-exclamation-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `<div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title} </h3>
            ${message}
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>`;
        main.appendChild(toast);
    }
}
