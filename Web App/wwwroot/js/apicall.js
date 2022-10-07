console.log("Code is executing")


function dataread() {
    $.get("https://localhost:7105/api/Employee/GetEmployee", function(data, status) {

        if (data) {
            let code = ""
            for (let x in data) {
                code += "<tr>"
                code += "<td>" + data[x].EmployeeId + "</td>"
                code += "<td>" + data[x].name + "</td>"
                code += "<td>" + data[x].Status + "</td>"
                code += "<td>" + data[x].Manager + "</td>"
                code += "<td>" + data[x].wfmmanager + "</td>"
                code += "<td>" + data[x].email + "</td>"
                code += "<td>" + data[x].lockStatus + "</td>"
                code += "<td>" + data[x].Experience + "</td>"
                code += "<td>" + data[x].ProfileId + "</td>"
                code += "<td>"
                for (let y in data[x].skills)
                    code += data[x].skills[y] + "  "
                code += "</td>"
                code += "</tr>"
            }
            $("#tdata").html(code)
        }

    });
}

dataread()

//$(document).ready(
//    function () {
//        $('#store').click(function () {


//            $.ajax({
//                url: '',
//                dataType: 'json',
//                type: 'post',
//                contentType: 'application/json',
//                data: JSON.stringify({
//                    sno: $('#').val(),
//                    name: $('#name').val(),
//                    city: $('#city').val()
//                }),
//                processData: false,
//                success: function (data, textStatus, jQxhr) {
//                    alert("data successfully stored")
//                    dataread()

//                },
//                error: function (jqXhr, textStatus, errorThrown) {
//                    alert("problem in storing the data")
//                }
//            });



//        })

//    }
//)