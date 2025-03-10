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
