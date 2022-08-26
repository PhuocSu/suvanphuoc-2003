                       /*Blue eye when click on*/
var state = false;
function toggle(){
    if(state)
    {
        document.getElementById("password").setAttribute("type","password"); /*????*/
        document.getElementById("eye").style.color='#7a797e';
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef'; /*con mắt chuyển xanh khi click vào*/
        state = true;
    }
}
                    /*Re-inspect whether username was too long or too short*/
    var username = document.getElementById("username");
    username.addEventListener('keyup',function(){  //Thêm sự kiện      //onkeyup: Xảy ra khi bạn gõ phím nhưng khi nhả phím ra thì sẽ kích hoạt
        if(username.value.length > 30 )
        {
            alert("Tên username quá dài hơn 30 ký tự");
        }
    })
                     /*Re-inspect whether password was wrong or not*/
function kiemTraPassword() //đặt trong phần button "Đăng Ký"
{
    var password = document.getElementById("password").value;
    var re_password = document.getElementById("re_password").value;

    if(password !== re_password){
        alert("Mật khẩu không khớp")
        return false;
    }
    return true;
}
                      

