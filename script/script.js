document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".left-panel i");
    const contentBoxes = document.querySelectorAll(".content-box, .content-box-home");

    icons.forEach(icon => {
        icon.addEventListener("click", function () {
            const targetId = icon.getAttribute("data-target");
            const targetBox = document.getElementById(targetId);

            // Nếu div đang hiển thị thì ẩn đi, nếu không thì ẩn tất cả và hiển thị div tương ứng
            if (targetBox.style.display === "block") {
                targetBox.style.display = "none";
            } else {
                contentBoxes.forEach(box => box.style.display = "none");
                targetBox.style.display = "block";
            }
        });
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     const icons = document.querySelectorAll(".left-panel i");
//     const contentBoxes = document.querySelectorAll(".content-box, .content-box-home");

//     icons.forEach(icon => {
//         icon.addEventListener("click", function (event) {
//             const targetId = icon.getAttribute("data-target");
//             const targetBox = document.getElementById(targetId);

//             if (!targetBox) return; // Nếu không có div tương ứng, thoát

//             // Nếu div đang hiển thị thì ẩn đi
//             if (targetBox.style.display === "block") {
//                 targetBox.style.display = "none";
//             } else {
//                 // Ẩn tất cả content-box trước khi hiển thị div mới
//                 contentBoxes.forEach(box => box.style.display = "none");

//                 // Hiển thị div được click
//                 targetBox.style.display = "block";

//                 // Nếu là favorites thì hiển thị ngay cạnh icon
//                 if (targetId === "favorites") {
//                     const iconRect = icon.getBoundingClientRect(); // Lấy vị trí của icon

//                     targetBox.style.width = "200px";
//                     targetBox.style.height = "50px";
//                     targetBox.style.position = "absolute";
//                     targetBox.style.top = `${iconRect.top -10}px`; // Căn theo vị trí icon
//                     targetBox.style.left = `${iconRect.right}px`; // Bên phải icon + 10px margin
//                 }
//             }
//         });
//     });
// });


// khi click shutdown 
document.addEventListener("DOMContentLoaded", function () {
    const logoutIcon = document.querySelector('.fa-power-off');
    const leftPanel = document.querySelector('.left-panel');
    const icons = document.querySelectorAll('.left-panel i:not(.fa-power-off)');

    logoutIcon.addEventListener("click", function () {
        leftPanel.classList.toggle("collapsed");

        // Ẩn tất cả icon trừ logout nếu panel bị thu nhỏ
        if (leftPanel.classList.contains("collapsed")) {
            icons.forEach(icon => icon.style.display = "none");
        } else {
            icons.forEach(icon => icon.style.display = "block");
        }
    });
});

