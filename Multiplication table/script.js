function generateTable() {
    // Get the input value
    const numberInput = document.getElementById('numberInput');
    const number = parseInt(numberInput.value);

    // Validate input
    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

    // Generate multiplication table
    let tableHtml = '<table border="1">';
    for (let i = 1; i <= 10; i++) {
        const result = number * i;
        tableHtml += `<tr><td>${number} x ${i}</td><td>${result}</td></tr>`;
    }
    tableHtml += '</table>';

    // Display the table
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = tableHtml;
}
