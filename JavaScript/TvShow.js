
window.onload = () => {
    var content = document.getElementsByTagName('body') [0]; //Change the content of the first <body> element in the document
    var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click',function(){
        darkMode.classList.toggle('active');
        content.classList.toggle('night');
    })
    
                        //Tạo thẻ nav-bar
    var navigation = document.getElementById('Navigation');
    var mobileMenu = document.getElementById('mobile-menu-btn');
     /*clientHeight: Trả về chiều cao của vùng hiển thị cho một đối tượng, tính bằng pixel. Giá trị chứa chiều cao với phần đệm, nhưng nó không bao gồm scrollBar, viền và lề.*/
    mobileMenu.onclick = function(){
        var isClosed = navigation.clientHeight <= 62;/* ~ 62px*/
        if(isClosed){
            navigation.style.height = 'auto';/*height bị bỏ đi => thành auto*/
        }
        else{
            navigation.style.height = null; /*= '62px'*/  /*bật dev-tool lên mới hiểu -> ăn cái height ở Element, còn box code thì không có*/
        }
    }
    
}