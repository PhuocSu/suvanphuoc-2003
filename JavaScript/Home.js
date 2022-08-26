window.onload = function () {
    var index = 1;
    changeImage = function () {
        var imgs = ["https://scontent.xx.fbcdn.net/v/t1.15752-9/290632200_4560435014058931_95472414646559176_n.jpg?stp=dst-jpg_p403x403&_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=1Jd6eeP_dQAAX89-pV4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJpZTMXrJruwP5HzCQOuPpdiAD4jdmWqUwgKtCre2FHfQ&oe=630FA8DE", "https://scontent.xx.fbcdn.net/v/t1.15752-9/296052632_1238459453566412_1838791808768640049_n.jpg?stp=dst-jpg_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=u6rjaTUzp08AX-DywoF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIgEUHBOfjYJeNhzrKPQFO1wc3zN9TCyxsjPOV15Beotw&oe=630F3D31", "https://scontent.xx.fbcdn.net/v/t1.15752-9/296392700_2545995868864383_871098698986205561_n.jpg?stp=dst-jpg_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=l29GPyiTM-UAX9S5T-r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVL6gGiuxg-noqrBuuinEk3ZNoe6ZPok42D7sZF2bDdxyw&oe=630F6944"];
        document.getElementById('img').src = imgs[index];
        index++;
        if (index == 3) {
            index = 0;
        }
    }
    setInterval(changeImage, 3000);
    //lặp lại ảnh theo đơn vị milisecond <1000 ms = 1s>
    //Cứ 1s thì nó sẽ gọi lại hàm một lần và tự động nó tăng dần 
    const toTop = document.querySelector(".go-to-top") // => thêm bộ truy vấn sử lý(Querry Selector) vào đối tượng cửa sổ

    window.addEventListener("scroll", () => { 
        if (window.scrollY > 150)  //The scrollY property is equal to the pageYOffset property. So if the difference of ScrollY is very big (> 150px), go-to-top 'll come up  
        {
            toTop.classList.add("active"); //Thêm
        }
        else {
            toTop.classList.remove("active"); //Ko thực thi
        }
    })
    var content = document.getElementsByTagName('body')[0]; //Change the content of the first <body> element in the document
    var darkMode = document.getElementById('dark-change');
    darkMode.addEventListener('click', function () {
        darkMode.classList.toggle('active_display');
        content.classList.toggle('night');
    })
    //Menu_mobile
    let menuBot = document.getElementsByClassName("menu_bottom")[0];
    let btn = document.getElementsByClassName("menu_mobile")[0];
    btn.addEventListener("click", function () {
        let main = document.getElementsByClassName("main")[0];
        main.classList.toggle("active_btn");
        let items = document.querySelectorAll(".main>li");
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            item.addEventListener("click", function () {
                var i = item.children;
                if (i[1] == undefined)
                    main.classList.remove("active_btn");
                else {
                    i[1].classList.toggle("active_sub");
                    i[1].addEventListener("click", function () {
                        main.classList.remove("active_btn");
                    })
                }
            })
        }
    })
}

