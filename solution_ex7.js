let data = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302"

let information = data.split("-");

let doctor = information[0];
let specialty = information[1];
let time = information[2];
let clinic = information[3];

// Bỏ BS.
doctor = doctor.replace("BS.", "");

// Đổi "_" thành dấu cách
doctor = doctor.replaceAll("_", " ");

// viết thường toàn bộ
doctor = doctor.toLowerCase();

// Viết hoa chữ cái đầu
let viTri1 = doctor.indexOf(" ");
let viTri2 = doctor.indexOf(" ", viTri1 + 1);

let ho = doctor.slice(0, viTri1);
let tenDem = doctor.slice(viTri1 + 1, viTri2);
let ten = doctor.slice(viTri2 + 1);

ho = ho.slice(0, 1).toUpperCase() + ho.slice(1);
tenDem = tenDem.slice(0, 1).toUpperCase() + tenDem.slice(1);
ten = ten.slice(0, 1).toUpperCase() + ten.slice(1);

doctor = ho + " " + tenDem + " " + ten;

// chuyển hóa chuyên khoa
specialty = specialty.replaceAll("_", " ");
specialty = specialty.toLowerCase();

// Viết hoa chữ cái đầu của từng từ
let viTriKhoa = specialty.indexOf(" ");

let tu1 = specialty.slice(0, viTriKhoa);
let phanConLai = specialty.slice(viTriKhoa + 1);

let viTriKhoa2 = phanConLai.indexOf(" ");

let tu2 = phanConLai.slice(0, viTriKhoa2);
let tu3 = phanConLai.slice(viTriKhoa2 + 1);

tu1 = tu1.slice(0, 1).toUpperCase() + tu1.slice(1);
tu2 = tu2.slice(0, 1).toUpperCase() + tu2.slice(1);
tu3 = tu3.slice(0, 1).toUpperCase() + tu3.slice(1);

specialty = tu1 + " " + tu2 + " " + tu3;

// Chuẩn hóa phòng khám
clinic = clinic.replace("PHONG_", "Phòng ");

// bảng phân công
console.log(`
========================================
        PHÂN CÔNG CA KHÁM
========================================
Bác sĩ      : ${doctor}
Chuyên khoa : ${specialty}
Giờ khám    : ${time}
Phòng khám  : ${clinic}
========================================
`);