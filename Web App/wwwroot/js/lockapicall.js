function lockdataread() {
    $.get("https://localhost:7105/api/Employee/GetEmployee", function (data, status) {

        if (data) {
            let code = ""
            for (let x in data) {  
                code += "<tr>"
                code += "<td>" + data[x].employeeId + "</td>"
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
                code += "<td> <button id=lockstatus> RequestLock </button> </td>"
                code += "</tr>"
            }
            $("#tdata").html(code)
        }

    });
}

lockdataread()
var currow;
var EmployeeId;
var name;
var Status;
var Manager;
var wfmmanager;
var email;
var lockStatus;
var Experience;
var ProfileId;

    $(document).on('click', '#lockstatus',function () {
         currow = $(this).closest('tr');
        EmployeeId = currow.find("td:eq(0)").text();
        name = currow.find("td:eq(1)").text();
        Status = currow.find("td:eq(2)").text();
        Manager = currow.find("td:eq(3)").text();
        wfmmanager = currow.find("td:eq(4)").text();
        email = currow.find("td:eq(5)").text();
        lockStatus = currow.find("td:eq(6)").text();
        Experience = currow.find("td:eq(7)").text();
        ProfileId = currow.find("td:eq(8)").text();
        window.location.href = "TextArea";
    });

$(document).on('click', '#lockstatus', function () {

});




//var textarea = $('#area');
//$("#popup").click(function () {

//    // To show it
//    textarea.show();

//});

//// To get the value
//var value = textarea.val();
