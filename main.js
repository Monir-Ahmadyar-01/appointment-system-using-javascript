let counter = 1;
const tbody = document.getElementById('appointmentList-tbody');
const checkedListTbody = document.getElementById('checkedList-tbody');
const checkboxes = document.querySelectorAll('.check-appointment');

function addDataTable() {
    const clientName = document.querySelector('#client-name').value;
    const appointmentDate = document.querySelector('#appointment-date').value;
    const appointmentList = document.querySelector('#appointmentList-tbody');
    const tBodyLength = appointmentList.rows.length;
    let newRow = `
  <td class="checkedRow">${counter}</td>
  <td class="checkedRow">${clientName}</td>
  <td class="checkedRow">${appointmentDate}</td>
  <td class="checkedRow">status</td>
  <td class="text text-center"><input onclick="dataTransfer()" class="form-check-input check-appointment" type="checkbox" id="checkStatus"></td>

`;
    const addedNewRow = tbody.insertRow(tbody.rows.length);
    addedNewRow.innerHTML = newRow;
    counter++;
}

function dataTransfer() {
    const checkbox = document.querySelector('#checkStatus');

    checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {

        } else {

        }
    });


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
    }
}
const submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', checkValidation);