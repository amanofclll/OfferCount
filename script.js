function calculateFinalAmount() {
    let initialSaleAmount = parseFloat(document.getElementById('initialSaleAmount').value);
    let websiteDiscount = parseFloat(document.getElementById('websiteDiscount').value);
    let goldCardDiscount = parseFloat(document.getElementById('goldCardDiscount').value);
    let prepaidDiscount = parseFloat(document.getElementById('prepaidDiscount').value);
    let goldCardToggle = document.getElementById('goldCardToggle').checked;

    if (isNaN(initialSaleAmount) || initialSaleAmount <= 0) {
        alert("Please enter a valid initial sale amount.");
        return;
    }

    // Apply Website Discount
    let amountAfterWebsiteDiscount = initialSaleAmount - (initialSaleAmount * (websiteDiscount / 100));

    // Apply Gold Card Discount if enabled
    let amountAfterGoldCardDiscount = amountAfterWebsiteDiscount;
    if (goldCardToggle) {
        amountAfterGoldCardDiscount -= (amountAfterWebsiteDiscount * (goldCardDiscount / 100));
    }

    // Apply Prepaid Discount
    let finalAmount = amountAfterGoldCardDiscount - (amountAfterGoldCardDiscount * (prepaidDiscount / 100));

    document.getElementById('result').innerHTML = `Final Amount Payable: ₹${finalAmount.toFixed(2)}`;
}
