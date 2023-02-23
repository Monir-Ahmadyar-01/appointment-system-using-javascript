let counter = 1;
const tbody = document.getElementById('appointmentList-tbody');
const checkedListTbody = document.getElementById('checkedList-tbody');
const checkboxes = document.querySelectorAll('.check-appointment');

function set_counter() {
    const tbody = document.getElementById('appointmentList-tbody');
    const tbody_length = tbody.rows.length;

    for (let index = 0; index < tbody_length; index++) {
        const ID = tbody.rows[index].id;
        const id_to_arr = ID.split('_');

        document.getElementById(`clientID_${id_to_arr[1]}`).innerHTML = index + 1;
    }
}
function addDataTable() {
    const clientName = document.querySelector('#client-name').value;
    const appointmentDate = document.querySelector('#appointment-date').value;
    if (!(clientName === '' || appointmentDate === '')) {
        const clientName = document.querySelector('#client-name').value;
        const appointmentDate = document.querySelector('#appointment-date').value;
        const appointmentList = document.querySelector('#appointmentList-tbody');
        const tBodyLength = appointmentList.rows.length;
        let newRow = `
  <td class="checkedRow" id="clientID_${counter}">${counter}</td>
  <td class="checkedRow" id="clientName_${counter}">${clientName}</td>
  <td class="checkedRow" id="appointmentDate_${counter}">${appointmentDate}</td>
  <td class="checkedRow">status</td>
  <td class="text text-center"><input onclick="dataTransfer(this)" class="form-check-input check-appointment" type="checkbox" id="checkStatus_${counter}"></td>

`;
        const addedNewRow = tbody.insertRow(tbody.rows.length);
        addedNewRow.innerHTML = newRow;
        addedNewRow.id = `rowID_${counter}`;
        counter++;

    }
    else {

    }
}
let counterVisited = 1;
function dataTransfer(object) {
    // alert(object.id);
    var yesNO = window.confirm("Are you sure to transfer this patient to visited list?");
    if (yesNO === true) {
        var idToArray = object.id.split('_');
        var clientName = document.getElementById(`clientName_${idToArray[1]}`).innerHTML;
        var appointmentDate = document.getElementById(`appointmentDate_${idToArray[1]}`).innerHTML;
        const visitedList = document.querySelector('#visitedTBody');
        const tBodyLength = visitedList.rows.length;
        let newRow = `
  <td class="checkedRow">${counterVisited}</td>
  <td class="checkedRow" id="clientNameVisited_${counterVisited}">${clientName}</td>
  <td class="checkedRow" id="appointmentDateVisited_${counterVisited}">${appointmentDate}</td>
  <td class="checkedRow">Visited</td>`;
        const addedNewRow = visitedList.insertRow(tBodyLength);
        addedNewRow.innerHTML = newRow;
        counterVisited++;
        document.getElementById(`rowID_${idToArray[1]}`).remove();
        set_counter();
    } else {
        document.getElementById(object.id).checked = false;
    }

}


function checkValidation() {
    const clientName = document.querySelector('#client-name').value;
    const appointmentDate = document.querySelector('#appointment-date').value;
    const alertDivider = document.querySelector('#alert-div');
    if (clientName === '' || appointmentDate === '') {
        alertDivider.innerHTML = 'All required fields must filled!';
        alertDivider.classList.add('alert-danger');
        setTimeout(() => {
            alertDivider.innerHTML = '';
            alertDivider.classList.remove('alert-danger');
        }, 3000);

    } else {
        // addDataTable();
        alertDivider.innerHTML = 'Your appointment scheduled!';
        alertDivider.classList.add('alert-success');
        setTimeout(() => {
            alertDivider.innerHTML = '';
            alertDivider.classList.remove('alert-success');
        }, 3000);
        NameChecker(clientName);
    }
}
const submitBtn = document.querySelector('#submit-btn');
// submitBtn.addEventListener('click', checkValidation);

function NameChecker(clientName_value) {

    var tBody = document.getElementById("#appointmentList-tbody");
    var tBodyLength = tbody.rows.length;
    if (tBodyLength > 0) {
        const check = Array();
        for (let i = 1; i <= tBodyLength; i++) {
            var clientName_checker = document.getElementById(`clientName_${i}`).innerHTML;
            if (clientName_value === clientName_checker) {
                check.push('true');
            } else {
                check.push('false');
            }
        }
        if (check.includes('true') == true) {
            var yesNO = window.confirm("this client already existed. do you still want to add it?");
            if (yesNO === true) {
                addDataTable();
            } else {

            }

        }

    }

    else {
        addDataTable();
    }
}