// Bài 1. Sắp xếp 3 số nguyên theo thứ tự tăng dần
/* Đầu vào: Đặt 3 số nguyên lần lượt là a,b,c. Dom tới 3 giá trị số nguyên.
Đặt 1 biến phụ là temp để chuyển đổi vị trí giữa các số.
* Xử lý: 
Ban đầu, ba số nguyên lần lượt là a,b,c
So sánh a,b, nếu a>b thì chuyển đổi hai giá trị a,b cho nhau, khi này ta có dãy số b,a,c
Khi đó, ta tiếp tục so sánh a và c, nếu a>c thì chuyển đổi hai giá trị a,c cho nhau, lúc này ta có dãy số b,c,a
Ta tiếp tục so sánh b và c, nếu b>c thì ta chuyển đổi hai giá trị này cho nhau, khi đó ta có dãy c,b,a.
*Đầu ra: Xuất ra dãy số đã sắp xếp.*/
document.getElementById("arrange-numbers").onclick = function () {
  var a = document.getElementById("txtnumber_1").value * 1;
  var b = document.getElementById("txtnumber_2").value * 1;
  var c = document.getElementById("txtnumber_3").value * 1;
  var temp;
  var arrange_result;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;
  }
  if (a > c) {
    temp = a;
    a = c;
    c = temp;
  }
  if (b > c) {
    temp = b;
    b = c;
    c = temp;
  }
  arrange_result =
    "<div class='alert alert-success'> Dãy số đã sắp xếp là: " +
    a +
    "; " +
    b +
    "; " +
    c +
    "</div>";
  document.getElementById("footer_arrange-result").innerHTML = arrange_result;
};

// Bài 2
/* Đầu vào: dùng biến để truy xuất giá trị được chọn của thẻ option. Khai báo biến để lưu kết quả:
 *Xử lý: Nếu giá trị được chọn trùng với "Ba" thì lưu giá trị "Ba" vào user_result, sau đó ghép với biến hello_result để ra câu chào hoàn chỉnh. Tương tự đối với các trường hợp khác
 *Đầu ra: Xuất ra kết quả*/
document.getElementById("sayhello").onclick = function () {
  var option_selected = document.getElementById("option_selected").value;
  var user_result;
  var hello_result;
  if (option_selected == "Ba") {
    user_result = "Ba";
  } else if (option_selected == "Mẹ") {
    user_result = "Ba";
  } else if (option_selected == "Anh trai") {
    user_result = "Anh trai";
  } else if (option_selected == "Em gái") {
    user_result = "Em gái";
  }
  hello_result =
    "<div class='alert alert-success'> Chào " + user_result + "</div>";
  document.getElementById("footer_hello-result").innerHTML = hello_result;
};
// Bài 3. Số số chẵn, số số lẻ
/* Đầu vào: Đặt ba biến int_1,int_2,int_3 để dom tới giá trị 3 số nguyên
Đặt biến đếm số chẵn (even_count), biến đếm số lẻ (odd_count)
* Xử lý: Xét từng số nguyên, nếu số đó chia cho 2 lấy dư bằng 0, thì số đó là số chẵn, khi đó biến đếm số chẵn (even_count) sẽ cộng thêm 1, ngược lại, biến đếm số lẻ sẽ cộng 1. 
* Đầu ra: Xuất ra kết quả số các số chẵn, lẻ*/
document.getElementById("even-odd").onclick = function () {
  var int_1 = document.getElementById("txtint_1").value * 1;
  var int_2 = document.getElementById("txtint_2").value * 1;
  var int_3 = document.getElementById("txtint_3").value * 1;
  var even_count = 0;
  var odd_count = 0;
  var count_result;
  if (int_1 % 2 == 0) {
    even_count = even_count + 1;
  } else {
    odd_count = odd_count + 1;
  }
  if (int_2 % 2 == 0) {
    even_count = even_count + 1;
  } else {
    odd_count = odd_count + 1;
  }
  if (int_3 % 2 == 0) {
    even_count = even_count + 1;
  } else {
    odd_count = odd_count + 1;
  }
  count_result =
    "<div class='alert alert-success'> Số các số chẵn là: " +
    even_count +
    "<br/>Số các số lẻ là: " +
    odd_count +
    "</div>";
  document.getElementById("footer_even-odd-result").innerHTML = count_result;
};
// Bài 4: Xác định loại tam giác
/* Đầu vào: 3 cạnh của tam giác 
* Xử lý:
- Nếu tam giác có 3 cạnh bằng nhau => tam giác đều
- Nếu tam giác chỉ có 2 cạnh bằng nhau => tam giác cân
- Nếu tam giác có bình phương 1 cạnh bằng tổng bình phương 2 cạnh còn lại => tam giác vuông
- Không trường hợp nào ở trên: tam giác thường
*Đầu ra: Xuất ra kết quả loại tam giác */
document.getElementById("define_triangle").onclick = function () {
  var edge_1 = document.getElementById("txtedge_1").value * 1;
  var edge_2 = document.getElementById("txtedge_2").value * 1;
  var edge_3 = document.getElementById("txtedge_3").value * 1;
  var triangle_result;
  if (edge_1 == edge_2 && edge_2 == edge_3 && edge_1 == edge_3) {
    triangle_result = "<div>Đây là tam giác đều</div>";
  } else if (edge_1 == edge_2 || edge_2 == edge_3 || edge_1 == edge_3) {
    triangle_result = "<div>Đây là tam giác cân</div>";
  } else if (
    edge_3 == Math.sqrt(edge_1 * edge_1 + edge_2 * edge_2) ||
    edge_2 == Math.sqrt(edge_1 * edge_1 + edge_3 * edge_3) ||
    edge_1 == Math.sqrt(edge_3 * edge_3 + edge_2 * edge_2)
  ) {
    triangle_result = "<div>Đây là tam giác vuông</div>";
  } else {
    triangle_result = "<div> Đây là tam giác thường</div>";
  }
  document.getElementById("footer_triangle-result").innerHTML = triangle_result;
};
