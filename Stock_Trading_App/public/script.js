document.addEventListener('DOMContentLoaded', () => {
    fetchStocks();
});

async function fetchStocks() {
    const apiUrl = 'https://api.example.com/stocks'; // Replace with actual stock market API URL
    try {
        const response = await axios.get(apiUrl);
        const stocks = response.data;
        displayStocks(stocks);
    } catch (error) {
        console.error('Error fetching stocks:', error);
    }
}

function displayStocks(stocks) {
    const stockList = document.getElementById('stock-list');
    stockList.innerHTML = '';

    stocks.forEach(stock => {
        const stockItem = document.createElement('div');
        stockItem.className = 'stock';
        stockItem.innerHTML = `
            <h3>${stock.symbol}</h3>
            <p>${stock.name}</p>
            <p>$${stock.price.toFixed(2)}</p>
        `;
        stockList.appendChild(stockItem);
    });
}
