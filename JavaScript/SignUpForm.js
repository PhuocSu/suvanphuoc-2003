var state = false;
function toggle() /*change*/
{
    if(state)
    {
        document.getElementById("password").setAttribute("type","password"); 
        document.getElementById("eye").style.color='#7a797e'; /*gray*/
        state = false;
    }
    else{
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("eye").style.color='#5887ef'; /*blue*/
        state = true;
    }
}

function validate(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'suvanphuoc' && password ==='nguyendinhnhat')
    {
        alert("Dang nhap thanh cong");
        window.location = "Home.html";
    }
    else
    {
        alert("Dang nhap khong thanh cong");
    }
}