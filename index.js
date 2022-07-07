
var dssp = JSON.parse(localStorage.getItem('danhsachsp')); // tao ds mới
// duyệt các phần tử trong mảng

if(dssp==null)
    dssp = new Array();

function taodoituongtuinput(){
    var elemenTen = document.getElementById('ten');
    var elemenTuoi = document.getElementById('tuoi');
    var elemenAnh = document.getElementById('anh');

    var nameobj = elemenTen.value;
    var tuoiobj = elemenTuoi.value;
    var anhojb = elemenAnh.value;


    console.log(nameobj);
    if(nameobj != '' && tuoiobj != '' ){
        var sp = taodoituongcon(nameobj,tuoiobj,anhojb);
        // đưa sp vào ds
        dssp.push(sp);
        // tiếp theo lưu trữ dssv vào local
        var json_dssp = JSON.stringify(dssp);
        localStorage.setItem('danhsachsp',json_dssp);
    }

}

function taodoituongcon(ten,tuoi,anh){
    var sp = new Object();
    sp.ten = ten;
    sp.tuoi = tuoi;
    sp.anh = anh;
    return sp;
}


function chuyenDanhsachdoituongsanphamthanhHTML(dssp){
    var html = '<div class="items" id = "root">';
    for(var i=0; i < dssp.length ; i++){
        if(dssp[i] != null){
            var sanpham = dssp[i];
            var htmlsp = jsTohtml(sanpham);
            html += htmlsp;
        }
    }
    html +='</div>';
    return html;
}


function jsTohtml(obj){
    var html = '';
        
        html += '<div class="card" style="width: 18rem">';
        html +=         '<img src="'+obj.anh+'" class="card-img-top" alt="..." />';
        html +=        '<div class="card-body">';
        html +=         '<h5 class="card-title">'+obj.ten+','+obj.tuoi+'</h5>';
        html +=         '<p class="card-text">';
        html +=           'Chiến thần của sự tự do, never die.';
        html +=          '</p>';
        html +=          '<a href="index.html" class="btn btn-primary">Go somewhere</a>';
        html +=        '</div>';
        html +=     '</div>';
    return html;
}



function hienthongtin(){
    document.getElementById('nutdk').style.display = 'none';
    document.getElementById('dangky').style.display = 'block';
}