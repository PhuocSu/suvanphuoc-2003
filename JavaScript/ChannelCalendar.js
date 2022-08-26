const toTop = document.querySelector(".go-to-top") // Khai baos lên trên cùng bằng bộ truy vấn

window.addEventListener("scroll",() =>{ // => thêm bộ truy vấn sử lý(Querry Selector) vào đối tượng cửa sổ
    if(window.scrollY > 150)  //The scrollY property is equal to the pageYOffset property. So if the difference of ScrollY is very big (> 150px), go-to-top 'll come up  
    {   
        toTop.classList.add("active"); //Thêm
    }
    else
    {
        toTop.classList.remove("active"); //Ko thực thi
    }
})

                              /*Create more tabs - f8*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.channel')
const panes = $$('.container-programs') 

tabs.forEach((tab, index) => {
    const pane = panes[index]


    tab.onclick = function(){
        $('.channel.active').classList.remove('active')
        $('.container-programs.active').classList.remove('active')

        this.classList.add('active');
        pane.classList.add('active');
        }
});


var dateNow = setInterval(currentDate, 1000);
function currentDate(){
    var date = new Date();
    var days = date.getDate();
    var months = date.getMonth() + 1;

    document.querySelector("#ShowDate").innerHTML = `${days} / ${months}`;
}



