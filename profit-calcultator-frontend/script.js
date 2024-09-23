document.getElementById('calculateButton').addEventListener('click', async () => {
    const revenue = parseFloat(document.getElementById('revenueInput').value);
    const expenses = parseFloat(document.getElementById('expensesInput').value);

    const response = await fetch('https://your-app-name.herokuapp.com/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ revenue, expenses })
    });

    const data = await response.json();
    document.getElementById('profitOutput').innerText = `利益: ${data.profit}`;
});

