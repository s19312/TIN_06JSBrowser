function addRecord(tableName) {
    const table = document.getElementById(tableName).getElementsByTagName('tbody')[0];

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');

    const tr = document.createElement('tr');

    const tdFirstName = document.createElement('td');
    const tdLastName = document.createElement('td');


    tdFirstName.innerHTML = firstName.value;
    tdLastName.innerHTML = lastName.value;
    if (
        firstName.value.length >= 1 && lastName.value.length >= 1
    ) {
        tr.append(tdFirstName, tdLastName);
        table.append(tr);
        document.getElementById('addRecord').reset();
    }
}