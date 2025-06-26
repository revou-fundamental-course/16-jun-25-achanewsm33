function detailsegitiga() {
    document.getElementById("detail-segitiga").style.display = "block";
}

function hitungLuas(event) {
    event.preventDefault();
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    if (alas <= 0 || tinggi <= 0 || isNaN(alas) || isNaN(tinggi)) {
        alert("Masukkan nilai valid untuk alas dan tinggi.");
        return false;
    }
    const luas = 0.5 * alas * tinggi;
    document.getElementById("hasil-luas").innerHTML = `
        L = ½ × ${alas} × ${tinggi} <br>
        L = ${luas}
    `;
    return false;
}

function hitungKeliling(event) {
    event.preventDefault();
    const s1 = parseFloat(document.getElementById("s1").value);
    const s2 = parseFloat(document.getElementById("s2").value);
    const s3 = parseFloat(document.getElementById("s3").value);
    if (s1 <= 0 || s2 <= 0 || s3 <= 0 || isNaN(s1) || isNaN(s2) || isNaN(s3)) {
        alert("Masukkan nilai valid untuk semua sisi.");
        return false;
    }
    const keliling = s1 + s2 + s3;
    document.getElementById("hasil-keliling").innerHTML = `
        K = ${s1} + ${s2} + ${s3} <br>
        K = ${keliling}
    `;
    return false;
}

function resetLuas() {
    document.getElementById("hasil-luas").innerHTML = "";
}

function resetKeliling() {
    document.getElementById("hasil-keliling").innerHTML = "";
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
