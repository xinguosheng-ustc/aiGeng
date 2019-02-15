$(document).ready(function(){
    $("#imagefile").change(function (e) {
        var file = e.target.files||e.dataTransfer.files;
        if(file) {
            var reader = new FileReader();
            reader.onload = function () {
                $("#longimg img").attr("src", reader.result);

            }
            $("#longimg").css("display","block");
            $("#imgshow1").css("display","none");
            $("#imgshow2").css("display","none");
            reader.readAsDataURL(file[0]);
        }
    });

    $("#faceimage").change(function (e) {
        var file = e.target.files||e.dataTransfer.files;
        if(file) {
            var reader = new FileReader();
            reader.onload = function () {
                $("#longimg img").attr("src", reader.result);

            }
            $("#longimg").css("display","block");
            $("#imgshow1").css("display","none");
            $("#imgshow2").css("display","none");
            reader.readAsDataURL(file[0]);
        }
    });
    $("#face1").change(function (e) {
        var file = e.target.files||e.dataTransfer.files;
        if(file) {
            var reader = new FileReader();
            reader.onload = function () {
                $("#imgshow1 img").attr("src", reader.result);

            }
            $("#longimg").css("display","none");
            $("#imgshow1").css("display","block");
            $("#longimg img").attr("src","../img/leftbg.jpg");
            reader.readAsDataURL(file[0]);
        }
    });
    $("#face2").change(function (e) {
        var file = e.target.files||e.dataTransfer.files;
        if(file) {
            var reader = new FileReader();
            reader.onload = function () {
                $("#imgshow2 img").attr("src", reader.result);

            }
            $("#longimg").css("display","none");
            $("#imgshow2").css("display","block");
            $("#longimg img").attr("src","../img/leftbg.jpg");
            reader.readAsDataURL(file[0]);
        }
    });

});
function registerface(){
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#registerface").css("display","block");
    $("#deleteface").css("display","none");
    $("#searchface").css("display", "none");
    $("#compareface").css("display", "none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l2 button").css("background","yellow")
    $("#l4 button").css("background","#6fa5db")
    $("#l5 button").css("background","#6fa5db")
    $("#l6 button").css("background","#6fa5db")
}
function closeregisterface(){
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#registerface").css("display","none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l2 button").css("background","#6fa5db")
}
function deleteface(){
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#deleteface").css("display","block");
    $("#searchface").css("display", "none");
    $("#compareface").css("display", "none");
    $("#registerface").css("display","none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l5 button").css("background","yellow")
    $("#l2 button").css("background","#6fa5db")
    $("#l4 button").css("background","#6fa5db")
    $("#l6 button").css("background","#6fa5db")
}
function closedeleteface(){
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#deleteface").css("display","none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l5 button").css("background","#6fa5db")
}
function searchface(){
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#searchface").css("display","block");
    $("#deleteface").css("display","none");
    $("#compareface").css("display", "none");
    $("#registerface").css("display","none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l4 button").css("background","yellow")
    $("#l2 button").css("background","#6fa5db")
    $("#l5 button").css("background","#6fa5db")
    $("#l6 button").css("background","#6fa5db")
}
function closesearchface() {
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#searchface").css("display", "none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#searchtext").text("人脸检索结果");
    $("#l4 button").css("background","#6fa5db")
}
function compareface() {
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#compareface").css("display", "block");
    $("#searchface").css("display","none");
    $("#deleteface").css("display","none");
    $("#registerface").css("display","none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l4 button").css("background","#6fa5db")
    $("#l2 button").css("background","#6fa5db")
    $("#l5 button").css("background","#6fa5db")
    $("#l6 button").css("background","yellow")
}
function closecompareface() {
    $("#longimg img").attr("src","../img/leftbg.jpg");
    $("#compareface").css("display", "none");
    $("#longimg").css("display","block");
    $("#imgshow2").css("display","none");
    $("#imgshow1").css("display","none");
    $("#l6 button").css("background","#6fa5db")
}
function uploadregister(){
    $("#registerface").css("display","none");
    var formData = new FormData();
    var file=$("#imagefile")[0].files[0];
    formData.append("name",$("#name").val());
    formData.append("imagefile",file);
    formData.append("workunit",$("#workunit").val());
    formData.append("occupation",$("#occupation").val());
    formData.append(("sex"),$.trim($("#select").val()));

    $.ajax({
        url: '/image/registerface',
        type:'POST',
        processData: false,
        contentType: false,
        dataType:"text",
        data: formData,
        success: function(data){
               if(data == 1){
                   alert("图片中有多张人脸")
               }else if(data == 2){
                   alert("图片中无人脸")
               }else if(data == 3){
                   alert("数据存入数据库失败")
               }else if(data == 4){
                   alert("图片存入本地磁盘失败")
               }else if(data == 5){
                   alert("注册信息不完整")
               }else{
                   alert("注册成功")
               }
        },
        error:function(err){
            alert("注册失败");
        }
    })
}
function deletefacedb(){
    $("#deleteface").css("display","none");
    var formData = new FormData();
    var file = $("#deleteimage")[0].files[0];
    formData.append("imagefile",file);
    $.ajax({
        url: '/image/deletebyimage',
        type:'POST',
        processData: false,
        contentType: false,
        dataType:"text",
        data: formData,
        success: function(data){
            alert("删除成功");
        },
        error:function(err){
            alert("删除失败");
        }
    })
}
function searchfacedb(){
    var formData = new FormData();
    var file=$("#faceimage")[0].files[0];
    formData.append("imagefile",file);
    var str=""
    $.ajax({
        url: '/image/searchfaceimage',
        type:'POST',
        processData: false,
        contentType: false,
        dataType:"text",
        data: formData,
        success: function(data){
            if(data==1) {
                $("#searchtext").text("特征提取引擎故障 ");
            }else if(data == 2){
                $("#searchtext").text("特征提取引擎未找到人脸 ");
            }else if(data == 3){
                $("#searchtext").text("数据库无此人脸 ");
            }else{
                $("#searchtext").text(data);
                }


        },
        error:function(err){
            alert(err);
        }
    })
}
function facescore(){
    var formData = new FormData();
    var file1=$("#face1")[0].files[0];
    var file2=$("#face2")[0].files[0];
    formData.append("imagefile",file1);
    formData.append("imagefile",file2);
    $.ajax({
        url: '/image/facecomp',
        type:'POST',
        processData: false,
        contentType: false,
        dataType:"text",
        data: formData,
        success: function(data) {
            data = data.split("########");
            if (data == 1) {
                $("#comparetext").text("文件数量大于2");
            } else if (data == 2) {
                $("#comparetext").text("有文件有多于一个人脸");
            } else if (data == 3) {
                $("#comparetext").text("有文件未找到人脸");
            } else {
                $("#imgshow1 img").attr("src", "data:image/gif;base64," + data[0]);
                $("#imgshow2 img").attr("src", "data:image/gif;base64," + data[1]);
                if (data[2] > 0.54) {
                    $("#comparetext").text("人脸比对结果: " + "两幅图片中的人为同一个人");
                }else{
                    $("#comparetext").text("人脸比对结果: " + "两幅图片中的人不是同一个人");
                }
            }
        },
        error:function(err){
            alert("有文件未找到人脸");
        }
    })
}
