var row = 5
var result = ""

for (let i = 1; i < 5; i++) {
    result += '*' + '\n'
}
break
for (let i = 1; i < 5; i++) {
    result += '*'
}
//     for (let j = 1; j < 5; j++) {
//         result += ("*");
//     }
//     result += '\n';

// }

console.log(result)


////NO.2
let arrKegiatan = [{
    no: 1,
    tanggal: "09/20/2020",
    jam: "12:00 AM",
    kegiatan: "makan",
    lokasi: "https://d1bpj0tv6vfxyp.cloudfront.net/articles/e734c00c-600d-4896-b291-f389d3b286b1_article_image_url.webp"

}];
const arrTime = ["AM", "PM"];

function funData(index) {
    var listKegiatan = arrKegiatan.map((val) => {
        if (Val.no != index) {
            return `
<tr>
<td> ${val.no}</td>
<td> ${val.tanggal}</td>
<td> ${val.jam}</td>
<td> ${val.kegiatan}</td>
<td> ${val.lokasi}</td>

<td><input type='button' value='Edit' onclick="edit(${val.no})"/></td>
<td><input type='button' value='Hapus' onclick="deleteData(${val.no})"/></td>
</tr>
`;
        }
        // } else if (Val.no != 0) {
        //     alert("Harus diisi");
        // }
        return `
        <tr>
<td> ${val.No}</td>
<td><input value='${val.Tanggal}' type="date" id="dateEdit"></td>
<td><input value='${val.Jam}' type="time" id="timeEdit"> </td>
<td><input value='${val.Kegiatan}' type ="text" id="textEdit"></td>
<td><input value='${val.Lokasi}' type ="url" id="urlEdit"></td>

<td><input type='button' value='Save' onclick="save(${val.no})"/></td>
<td><input type='button' value='Cancel' onclick="cancel(${val.no})"/></td>
</tr>
        `;
    });

    var listTime = arrTime.map((el) => {
        return `<option value=${el}>${el}</option>`;
    });
    document.getElementById("render").innerHTML = listKegiatan.join("");
    document.getElementById("timeInput").innerHTML = listTime.join("");
}

function funInputData() {
    let tanggal = document.getElementById("dateInput").value;
    let jam = document.getElementById("timeInput").value;
    let kegiatan = document.getElementById("textInput").value;
    let lokasi = document.getElementById("urlInput").value;
    let no = arrKegiatan.length + 1
    arrKegiatan.push({
        no,
        tanggal,
        jam,
        kegiatan,
        lokasi,
    });
    document.getElementById("dateInput").value = "";
    document.getElementById("timeInput").value = "";
    document.getElementById("textInput").value = "";
    document.getElementById("urlInput").value = "";

    funData();
}

function deleteData(index) {
    arrKegiatan = arrKegiatan.filter((val) => {
        return val.no !== index;
    });

    funData();
}

function edit(index) {
    funData(index);
}

function save(index) {
    let tanggal = document.getElementById("dateEdit").value;
    let jam = parseInt(document.getElementById("timeEdit").value);
    let kegiatan = document.getElementById("textEdit").value;
    let lokasi = document.getElementById("urlEdit").value;

    let itemIndex = arrKegiatan.findIndex((val) => (val.no = index));

    arrTime[itemIndex] = {
        ...arrTime[itemIndex],
        tanggal,
        jam,
        kegiatan,
        lokasi,
    };

    funData();
}

function cancel() {
    funData();
}

funData();


/////no.3