//Ex1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)

// let str_input = prompt('Nhập vào chuỗi cần đảo');
// let newstr_input ="";
// for (let i = str_input.length - 1; i >= 0;i-- ){
//     newstr_input += str_input[i];  
// }
// console.log(`${newstr_input}`);
//------------------------------------------------------------------------------------------------
//Ex2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự 
// và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. (2đ)

    // let str = prompt('Mời bạn nhập vào một chuỗi');
	// let strArr=str.split(' ');
	// for(let i=0;i<strArr.length;i++){
    //   let charArr=strArr[i].split('');
	//     charArr[0]=charArr[0].toUpperCase();
    //   strArr[i]=charArr.join('');  
	// }
    // console.log(strArr.join(' '));
	

//------------------------------------------------------------------------------------------------
//Ex3:Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)

// let input = prompt ("Enter array");
// let inputArray = input.split(',');
// console.log(`Array ban đầu:`);
// console.log(inputArray);
// let newArray = [...new Set(inputArray)]
// console.log(`New Array:`);
// console.log(newArray);
//------------------------------------------------------------------------------------------------
//Ex4:Tạo dữ liệu của 3 nhân viên Future Academy(gồm tên, tuổi, mức lương, chức vụ). 
// Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete). (2đ)

// let staffs = [
//     {
//         name: "Nguyễn Minh Quang",
//         age: 21,
//         salary: 500,
//         position: "Boss"
//     },
//     {
//         name: "Nguyễn Minh A",
//         age: 18,
//         salary: 100,
//         position: "staff"
//     },
//     {
//         name: "Nguyễn Minh B",
//         age: 15,
//         salary: 50,
//         position: "trainer"
//     },
// ];

// let input = prompt("Enter your command (Read, Create, Update, Delete)");
// if (input === 'Read') {
//     for (let i = 0; i < staffs.length; i++) {
//         console.log("---------------------------------------");
//         console.log("Name: " + staffs[i].name);
//         console.log("Age: " + staffs[i].age);
//         console.log("Salary: " + staffs[i].salary);
//         console.log("Position: " + staffs[i].position);
//     }
// } else if (input === 'Create') {
//     alert('Đây là chức năng thêm')
//     let name = prompt("Enter new name:");
//     let age = Number(prompt("Enter age:"));
//     let salary = Number(prompt("Enter salary:"));
//     let position = prompt("Enter position:");
//     let newStaff = {
//         name: name,
//         age: age,
//         salary: salary,
//         position: position
//     };
//     staffs.push(newStaff);
// } else if (input === "Update") {
//     let id = prompt("Enter position update:");
//     let newName = prompt("Enter new Name:");
//     let newAge = Number(prompt("Enter age:"));
//     let newSalary = Number(prompt("Enter salary:"));
//     let newPosition = prompt("Enter position:");
//     staffs[id - 1].name = newName;
//     staffs[id - 1].age = newAge;
//     staffs[id - 1].salary = newSalary;
//     staffs[id - 1].position = newPosition;
//     console.log(staffs);

// } else if (input === "Delete") {
//     let id = prompt("Enter position delete:");
//     staffs.splice(id - 1, 1);
//     console.log(staffs);

// } else {
//     alert("Sai r");
// }
//------------------------------------------------------------------------------------------------
// Ex5:Viết chương trình cho phép người dùng nhập vào ngày tháng năm. (2đ)

