// Bài 1. Xác định ngày sau, ngày trước
/** 
** Đầu vào: Ngày, tháng, năm (giả sử nhập đúng)
**Xử lý: 
*Kiểm tra năm nhuận: năm nhuận phải thoả mãn 1 trong 2 điều kiện sau:
+ Năm chia hết cho 400.
+ Năm chia hết cho 4 nhưng không chia hết cho 100.
Khai báo biến leapyear để nhận giá trị true, false.
* Đếm số ngày trong tháng: Khai báo biến case_month để nhận trường hợp
-Trường hợp 1 - các tháng có 31 ngày: tháng 1,3,5,7,8,10,12
-Trường hợp 2 - các tháng có 30 ngày: tháng 4,6,9,11.
-Trường hợp 3 - tháng 2 năm nhuận:  có 29 ngày.
-Trường hợp 4 - tháng 2 năm thường: có 28 ngày.
* Xác định ngày tiếp theo:
Khai báo các biến nday, nmonth,nyear,next_date để nhận giá trị mới.
-Nếu tháng nhập vào tương ứng với trường hợp 1, trừ ngày 31/12:
+Ngày <31 => ngày +1, giữ nguyên tháng và năm
+Ngày =31 => ngày = 1, tháng +1, giữ nguyên năm
-Nếu ngày=31, tháng=12 => ngày=1, tháng=1, năm+1
-Nếu tháng nhập vào tương ứng với trường hợp 2:
+Ngày <30 => ngày +1, giữ nguyên tháng và năm
+Ngày =30 => ngày = 1, tháng +1, giữ nguyên năm
-Nếu tháng nhập vào tương ứng với trường hợp 3:
+ Ngày <29 =>  ngày +1, giữ nguyên tháng và năm
+ Ngày =29 => ngày = 1, tháng +1, giữ nguyên năm
+ Nếu tháng nhập vào tương ứng với trường hợp 4: 
++ Ngày <28 =>  ngày +1, giữ nguyên tháng và năm
++ Ngày =28 => ngày = 1, tháng +1, giữ nguyên năm
*Xác định ngày trước đó:
Khai báo các biến pday, pmonth, pyear, prev_date để nhận giá trị mới.
-Nếu tháng nhập vào tương ứng với trường hợp 1, trừ ngày 1/1, 1/8,1/3:
+Ngày >1 => ngày -1, giữ nguyên tháng và năm
+Ngày =1 => ngày = 30, tháng -1, giữ nguyên năm
-Nếu đó là ngày 1/1 => ngày=31, tháng=12, năm -1;
-Nếu đó là ngày 1/8 => ngày=31, tháng =7, năm giữ nguyên
-Nếu đó là ngày 1/3 => năm nhuận (ngày: 29/2, năm giữ nguyên); năm thường (28/2, năm giữ nguyên)
-Nếu tháng nhập vào tương ứng với trường hợp 2:
+Ngày >1 => ngày -1, giữ nguyên tháng và năm
+Ngày =1 => ngày = 31, tháng +1, giữ nguyên năm
-Nếu tháng nhập vào tương ứng với trường hợp 3:
+Ngày >1 => ngày -1, giữ nguyên tháng và năm
+Ngày =1 => ngày = 31, tháng +1, giữ nguyên năm
-Nếu tháng nhập vào tương ứng với trường hợp 4:
+Ngày >1 => ngày -1, giữ nguyên tháng và năm
+Ngày =1 => ngày = 31, tháng +1, giữ nguyên năm
**Đầu ra: Xuất ra kết quả ngày tiếp theo. */
document.getElementById("prev-next-date").onclick = function () {
  var day_1 = document.getElementById("txtday_1").value * 1;
  var month_1 = document.getElementById("txtmonth_1").value * 1;
  var year_1 = document.getElementById("txtyear_1").value * 1;
  var leapyear;
  var case_month;
  var nday;
  var nmonth;
  var nyear;
  var next_date;
  var pday;
  var pmonth;
  var pyear;
  var prev_date;
  var date_result;
  // Kiểm tra năm nhuận
  if (year_1 % 400 == 0) {
    leapyear = true;
  } else if (year_1 % 4 == 0 && year_1 % 100 != 0) {
    leapyear = true;
  } else {
    leapyear = false;
  }
  // Đếm ngày trong tháng:
  if (
    month_1 == 1 ||
    month_1 == 3 ||
    month_1 == 5 ||
    month_1 == 7 ||
    month_1 == 8 ||
    month_1 == 10 ||
    month_1 == 12
  ) {
    case_month = 1;
  } else if (month_1 == 4 || month_1 == 6 || month_1 == 9 || month_1 == 11) {
    case_month = 2;
  } else if (month_1 == 2 && leapyear == true) {
    case_month = 3;
  } else if (month_1 == 2 && leapyear == false) {
    case_month = 4;
  }
  // Xác định ngày tiếp theo:
  if (case_month == 1 && day_1 < 31) {
    nday = day_1 + 1;
    nmonth = month_1;
    nyear = year_1;
  } else if (case_month == 1 && month_1 != 12 && day_1 == 31) {
    nday = 1;
    nmonth = month_1 + 1;
    nyear = year_1;
  } else if (month_1 == 12 && day_1 == 31) {
    nday = 1;
    nmonth = 1;
    nyear = year_1 + 1;
  }
  if (case_month == 2 && day_1 < 30) {
    nday = day_1 + 1;
    nmonth = month_1;
    nyear = year_1;
  } else if (case_month == 2 && day_1 == 30) {
    nday = 1;
    nmonth = month_1 + 1;
    nyear = year_1;
  }
  if (case_month == 3 && day_1 < 29) {
    nday = day_1 + 1;
    nmonth = month_1;
    nyear = year_1;
  } else if (case_month == 3 && day_1 == 29) {
    nday = 1;
    nmonth = month_1 + 1;
    nyear = year_1;
  }
  if (case_month == 4 && day_1 < 28) {
    nday = day_1 + 1;
    nmonth = month_1;
    nyear = year_1;
  } else if (case_month == 4 && day_1 == 28) {
    nday = 1;
    nmonth = month_1 + 1;
    nyear = year_1;
  }
  next_date =
    "<div>Ngày tiếp theo là: " + nday + "/" + nmonth + "/" + nyear + "</div>";
  // Xác định ngày trước đó:
  if (case_month == 1 && day_1 > 1) {
    pday = day_1 - 1;
    pmonth = month_1;
    pyear = year_1;
  } else if (
    case_month == 1 &&
    month_1 != 1 &&
    month_1 != 8 &&
    month_1 != 3 &&
    day_1 == 1
  ) {
    pday = 30;
    pmonth = month_1 - 1;
    pyear = year_1;
  } else if (month_1 == 1 && day_1 == 1) {
    pday = 31;
    pmonth = 12;
    pyear = year_1 - 1;
  } else if (month_1 == 8 && day_1 == 1) {
    pday = 31;
    pmonth = 7;
    pyear = year_1;
  } else if (month_1 == 3 && day_1 == 1 && leapyear == true) {
    pday = 29;
    pmonth = 2;
    pyear = year_1;
  } else if (month_1 == 3 && day_1 == 1 && leapyear == false) {
    pday = 28;
    pmonth = 2;
    pyear = year_1;
  }
  if (case_month == 2 && day_1 > 1) {
    pday = day_1 - 1;
    pmonth = month_1;
    pyear = year_1;
  } else if (case_month == 2 && day_1 == 1) {
    pday = 31;
    pmonth = month_1 - 1;
    pyear = year_1;
  }
  if (case_month == 3 && day_1 > 1) {
    pday = day_1 - 1;
    pmonth = month_1;
    pyear = year_1;
  } else if (case_month == 3 && day_1 == 1) {
    pday = 31;
    pmonth = month_1 - 1;
    pyear = year_1;
  }
  if (case_month == 4 && day_1 > 1) {
    pday = day_1 - 1;
    pmonth = month_1;
    pyear = year_1;
  } else if (case_month == 4 && day_1 == 1) {
    pday = 31;
    pmonth = month_1 - 1;
    pyear = year_1;
  }
  prev_date =
    "<div>Ngày trước đó là: " + pday + "/" + pmonth + "/" + pyear + "</div>";
  date_result = next_date + prev_date;
  document.getElementById("footer_date-result").innerHTML = date_result;
};
// Bài 2. Đếm số ngày của tháng
/* 
**Đầu vào: tháng và năm
**Xử lý: 
*Kiểm tra năm nhuận: năm nhuận phải thoả mãn 1 trong 2 điều kiện sau:
+ Năm chia hết cho 400.
+ Năm chia hết cho 4 nhưng không chia hết cho 100.
Khai báo biến leapyear_2 để nhận giá trị true, false.
* Đếm số ngày trong tháng: 
-Trường hợp 1 - các tháng có 31 ngày: tháng 1,3,5,7,8,10,12
-Trường hợp 2 - các tháng có 30 ngày: tháng 4,6,9,11.
-Trường hợp 3 - tháng 2 năm nhuận:  có 29 ngày.
-Trường hợp 4 - tháng 2 năm thường: có 28 ngày.
**Đầu ra: Xuất ra kết quả số ngày của tháng */
document.getElementById("count_date").onclick = function () {
  var month_2 = document.getElementById("txtmonth_2").value * 1;
  var year_2 = document.getElementById("txtyear_2").value * 1;
  var leapyear;
  var date_count_result;
  // Kiểm tra năm nhuận
  if (year_2 % 400 == 0) {
    leapyear = true;
  } else if (year_2 % 4 == 0 && year_2 % 100 != 0) {
    leapyear = true;
  } else {
    leapyear = false;
  }
  // Đếm ngày trong tháng:
  if (
    month_2 == 1 ||
    month_2 == 3 ||
    month_2 == 5 ||
    month_2 == 7 ||
    month_2 == 8 ||
    month_2 == 10 ||
    month_2 == 12
  ) {
    date_count_result = "Tháng này có 31 ngày";
  } else if (month_2 == 4 || month_2 == 6 || month_2 == 9 || month_2 == 11) {
    date_count_result = "Tháng này có 30 ngày";
  } else if (month_2 == 2 && leapyear == true) {
    date_count_result = "Tháng này có 29 ngày";
  } else if (month_2 == 2 && leapyear == false) {
    date_count_result = "Tháng này có 28 ngày";
  }
  document.getElementById("footer_date-count-result").innerHTML =
    date_count_result;
};
// Bài 3. Cách đọc số có ba chữ số
/*
**Đầu vào: Số có ba chữ số.
**Xử lý: 
B1: Tách chữ số hàng trăm, hàng chục, hàng đơn vị.
Biến hàng trăm: n1 
Biến hàng chục: n2
Biến hàng đơn vị: n3
B2: Đọc hàng trăm, khai báo biến nameN1
B3: Đọc hàng chục, khai báo biến nameN2
Chú ý trường hợp n2==0 => đọc là lẻ
Trường hợp n2==0 và n3 ==0 =>để trống
B4: Đọc hàng đơn vị, khai báo biến nameN3
Chú ý trường hợp n3==0 =>để trống;
Trường hợp n3==0, n2 !=1 => đọc là tư;
Trường hợp n3==0, n2==1 => đọc là bốn
Trường hợp n3==5, n2!=0=> đọc là lăm;
Trường hợp n3==1, n2==0 => đọc là năm;
Trường hợp n3==1, n2==0 => đọc là một;
B5: Ghép lại
**Đầu ra: Xuất ra cách đọc */
document.getElementById("name_number").onclick = function () {
  var n = document.getElementById("txtnumber").value * 1;
  // Hàng trăm
  var n1 = Math.floor(n / 100);
  // Hàng chục
  var n2 = Math.floor(n / 10) % 10;
  // Hàng đơn vị
  var n3 = Math.floor(n % 10);
  var nameN1;
  var nameN2;
  var nameN3;
  var nameNumber;
  // Đọc hàng trăm
  if (n1 == 1) {
    nameN1 = "Một trăm";
  } else if (n1 == 2) {
    nameN1 = "Hai trăm";
  } else if (n1 == 3) {
    nameN1 = "Ba trăm";
  } else if (n1 == 4) {
    nameN1 = "Bốn trăm";
  } else if (n1 == 5) {
    nameN1 = "Năm trăm";
  } else if (n1 == 6) {
    nameN1 = "Sáu trăm";
  } else if (n1 == 7) {
    nameN1 = "Bảy trăm";
  } else if (n1 == 8) {
    nameN1 = "Tám trăm";
  } else if (n1 == 9) {
    nameN1 = "Chín trăm";
  }
  // Đọc hàng chục:
  if (n2 == 0 && n3 != 0) {
    nameN2 = "lẻ";
  } else if (n2 == 1) {
    nameN2 = "mười";
  } else if (n2 == 2) {
    nameN2 = "hai mươi";
  } else if (n2 == 3) {
    nameN2 = "ba mươi";
  } else if (n2 == 4) {
    nameN2 = "bốn mươi";
  } else if (n2 == 5) {
    nameN2 = "năm mươi";
  } else if (n2 == 6) {
    nameN2 = "sáu mươi";
  } else if (n2 == 7) {
    nameN2 = "bảy mươi";
  } else if (n2 == 8) {
    nameN2 = "tám mươi";
  } else if (n2 == 9) {
    nameN2 = "chín mươi";
  } else if (n2 == 0 && n3 == 0) {
    nameN2 = "";
  }
  // Đọc hàng đơn vị:
  if (n3 == 0) {
    nameN3 = "";
  } else if (n3 == 1 && n2 != 0) {
    nameN3 = "mốt";
  } else if (n3 == 1 && n2 == 0) {
    nameN3 = "một";
  } else if (n3 == 2) {
    nameN3 = "hai";
  } else if (n3 == 3) {
    nameN3 = "ba";
  } else if (n3 == 4 && n2 != 1) {
    nameN3 = "tư";
  } else if (n3 == 4 && n2 == 1) {
    nameN3 = "bốn";
  } else if (n3 == 5 && n2 != 0) {
    nameN3 = "lăm";
  } else if (n3 == 5 && n2 == 0) {
    nameN3 = "năm";
  } else if (n3 == 6) {
    nameN3 = "sáu";
  } else if (n3 == 7) {
    nameN3 = "bảy";
  } else if (n3 == 8) {
    nameN3 = "tám";
  } else if (n3 == 9) {
    nameN3 = "chín";
  }
  nameNumber = "Cách đọc: " + nameN1 + " " + nameN2 + " " + nameN3;
  document.getElementById("footer_name-result").innerHTML = nameNumber;
};
// Bài 4: Tìm SV xa trường:
/*Đầu vào: Tên và toạ độ theo Oxy của 3 sinh viên và trường
*Xử lý: Tính khoảng cách của sinh viên 1:
-distance_1: math.sqrt((x1-x_school)*(x1-x_school)+(y1-y_school)*(y1-y_school))
Và tương tự đối với các khoảng cách của các sinh viên khác
So sánh các khoảng cách với nhau bằng biến phụ max (gán max=distance_1 và từ từ so sánh max với distance_2, distance3)
Lưu ý các trường hợp có 2 hoặc 3 sinh viên cùng khoảng cách.
*Đầu ra: Xuất ra tên sinh viên xa trường nhất*/
document.getElementById("furthest_student").onclick = function () {
  var x1 = document.getElementById("txtx1").value * 1;
  var x2 = document.getElementById("txtx2").value * 1;
  var x3 = document.getElementById("txtx3").value * 1;
  var y1 = document.getElementById("txty1").value * 1;
  var y2 = document.getElementById("txty2").value * 1;
  var y3 = document.getElementById("txty3").value * 1;
  var student_1 = document.getElementById("txtstudent_1").value;
  var student_2 = document.getElementById("txtstudent_2").value;
  var student_3 = document.getElementById("txtstudent_3").value;
  var x_school = document.getElementById("txtx_school").value * 1;
  var y_school = document.getElementById("txty_school").value * 1;
  var distance_1;
  var distance_2;
  var distance_3;
  var max;
  var student_result;
  distance_1 = Math.sqrt(
    (x1 - x_school) * (x1 - x_school) + (y1 - y_school) * (y1 - y_school)
  );
  distance_2 = Math.sqrt(
    (x2 - x_school) * (x2 - x_school) + (y2 - y_school) * (y2 - y_school)
  );
  distance_3 = Math.sqrt(
    (x3 - x_school) * (x3 - x_school) + (y3 - y_school) * (y3 - y_school)
  );
  console.log(distance_1);
  console.log(distance_2);
  console.log(distance_3);
  max = distance_1;
  if (max < distance_2) {
    max = distance_2;
  }
  if (max < distance_3) {
    max = distance_3;
  }
  if (max == distance_1) {
    student_result = "Sinh viên xa trường nhất là: " + student_1;
  }
  if (max == distance_2) {
    student_result = "Sinh viên xa trường nhất là: " + student_2;
  }
  if (max == distance_3) {
    student_result = "Sinh viên xa trường nhất là: " + student_3;
  }
  if (max == distance_1 && max == distance_2) {
    student_result =
      "Sinh viên xa trường nhất là: " + student_1 + " và " + student_2;
  }
  if (max == distance_1 && max == distance_3) {
    student_result =
      "Sinh viên xa trường nhất là: " + student_1 + " và " + student_3;
  }
  if (max == distance_2 && max == distance_3) {
    student_result =
      "Sinh viên xa trường nhất là: " + student_2 + " và " + student_3;
  }
  if (max == distance_2 && max == distance_3 && max == distance_1) {
    student_result =
      "Sinh viên xa trường nhất là: " +
      student_1 +
      " , " +
      student_2 +
      " và " +
      student_3;
  }
  document.getElementById("footer_student-result").innerHTML = student_result;
};
