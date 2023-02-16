const counter = 1;
function addDataTable() {
  const clientName = document.querySelector('#client-name').value;
  const appointmentDate = document.querySelector('#appointment-date').value;
  const appointmentList = document.querySelector('#appointmentList-tbody');
  const tBodyLength = appointmentList.rows.length;
  let newRow = '';
  newRow += '<td> ++</td>';
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
    addDataTable();
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