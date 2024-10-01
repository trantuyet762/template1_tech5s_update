const topMenu= document.getElementById('top-menu')
const toggleTopMenu= document.getElementById('toggle-top-menu-icon')

document.addEventListener('click', (e)=>{
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('top-menu-expanded')
        topMenu.classList.toggle('hidden')
        

    }
    else{
        if(topMenu.classList.contains('top-menu-expanded')){
            topMenu.classList.remove('top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll("#items-container > div"); // Lấy tất cả các phần tử bên trong items-container
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0; // Khởi tạo chỉ số hiện tại
    const totalItems = items.length;
    const visibleItems = 1; // Chỉ hiển thị 1 phần tử tại một thời điểm

    // Hàm hiển thị các phần tử dựa trên currentIndex
    function showItems() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.remove("hidden"); // Hiển thị phần tử hiện tại
            } else {
                item.classList.add("hidden"); // Ẩn tất cả các phần tử khác
            }
        });
    }

    // Xử lý sự kiện khi bấm nút "prev"
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--; // Giảm chỉ số để chuyển về phần tử trước đó
        } else {
            currentIndex = totalItems - 1; // Quay lại phần tử cuối cùng nếu đang ở phần tử đầu tiên
        }
        showItems(); // Cập nhật giao diện
    });

    // Xử lý sự kiện khi bấm nút "next"
    nextBtn.addEventListener("click", function () {
        if (currentIndex < totalItems - 1) {
            currentIndex++; // Tăng chỉ số để chuyển tới phần tử tiếp theo
        } else {
            currentIndex = 0; // Quay lại phần tử đầu tiên nếu đang ở phần tử cuối cùng
        }
        showItems(); // Cập nhật giao diện
    });

    // Gọi hàm showItems để hiển thị phần tử ban đầu khi trang được load
    showItems();
});


    