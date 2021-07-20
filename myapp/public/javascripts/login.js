let f1 = 0;
let f2 = 0;

//user email check
document.getElementById("userEmail").addEventListener('blur', function () {
    let email = document.getElementById("userEmail").value;
    let regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([s][j][u]).([a][c]).([k][r])$/;

    if (!regExp.test(email)) {
        f1 = 0;
        document.getElementById("emailHelp1").textContent = "올바른 이메일을 입력해주세요.";
        document.getElementById("emailHelp1").style.color = "red";
    }
    else {
        f1 = 1;
        document.getElementById("emailHelp1").textContent = "";
    }
});

//admin email check
document.getElementById("adminEmail").addEventListener('blur', function () {
    let email = document.getElementById("adminEmail").value;
    let regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([s][j][u]).([a][c]).([k][r])$/;

    if (!regExp.test(email)) {
        f2 = 0;
        document.getElementById("emailHelp2").textContent = "올바른 이메일을 입력해주세요.";
        document.getElementById("emailHelp2").style.color = "red";
    }
    else {
        f2 = 1;
        document.getElementById("emailHelp2").textContent = "";
    }
});

document.getElementById("user-login").addEventListener('click', function(){
    if (f1 == 1) {
        location.href = "/index_user";
    }
    else if (f2 == 1) {
        location.href = "/index_admin";
    }
    else {
        alert("이메일을 다시 입력해주세요.");
    }
});

document.getElementById("admin-login").addEventListener('click', function(){
    if (f1 == 1) {
        location.href = "/index_user";
    }
    else if (f2 == 1) {
        location.href = "/index_admin";
    }
    else {
        alert("이메일을 다시 입력해주세요.");
    }
});