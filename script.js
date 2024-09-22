document.getElementById('profit-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const sales = parseFloat(document.getElementById('sales').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const profit = sales - expenses;
    document.getElementById('result').innerText = `利益: ${profit}円`;
});
