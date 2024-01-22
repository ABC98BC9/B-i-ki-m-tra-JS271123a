 // tạo id ngẫu nhiên
 function uuid() {
    return Math.floor(Math.random() * 9999999) + new Date().getMilliseconds()
}
// tạo mảng chứa Students
let students = JSON.parse(localStorage.getItem('user')) || [];
function save() {
    let fullname = document.getElementById("userName").value;
    let Email = document.getElementById("email").value;
    let hotline = document.getElementById("phone").value;
    let addrees = document.getElementById("address").value;
    let gender = document.getElementsByName("gender");
    genderValue = "";
    for (let i = 0; i < gender.length; i++) {
        if (gender.item(i).checked) {
            genderValue = gender.item(i)
        }
    }
   
    let infor = {
        name: fullname,
        email: Email,
        hotline: hotline,
        addrees: addrees,
        gender: genderValue.value,
        id: uuid(),
    }
    students.push(infor);
    localStorage.setItem("user", JSON.stringify(students));
    renderUser();

}

renderUser();
function renderUser() {
    let elm = "";
    for (let i = 0; i < students.length; i++) {
        elm +=
            `<tr>
        <td> ${i + 1} </td>
        <td> ${students[i].name} </td>
        <td> ${students[i].email} </td>
        <td> ${students[i].hotline} </td>
        <td> ${students[i].addrees} </td>
        <td> ${students[i].gender} </td>
        <td> <span onclick="edit(${students[i].id})"> edit </span> ||  <span onclick="del(${students[i].id})"> delete </span> </td>
        <td></td>
    </tr>`
    }
    
    document.getElementById("tbody").innerHTML = elm;
}
  function del(id) {
    let index = students.findIndex((item) => {
        return item.id == id
    })
    let xacNhan = confirm(`Bạn có muốn xóa thông tin học viên này hay không`);
    if (xacNhan == false) {
        return
    }
    else {
        students.splice(index, 1);
        renderUser(students);
    }
}
function edit(id) {
    let index1 = students.findIndex((item) => {
        return item.id == id
    })
    document.getElementById("fullName").value=students[index1].name
    document.getElementById("email").value=students[index1].email
    document.getElementById("phone").value=students[index1].hotline
    document.getElementById("address").value=students[index1].addrees
    if (students[index1].gender ==="Nam") {
        document.getElementByName("Nam").checked==true;     
    } else if (students[index1].gender==Nữ) {
        document.getElementByName("Nữ").checked ==true;
    }
    check = id;
}
arrange();
// 