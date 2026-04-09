function filterSwaps() {
    let input = document.getElementById('swapSearch');
    let filter = input.value.toUpperCase();

    let grid = document.getElementById('swapGrid');
    let cards = grid.getElementsByClassName('swap-card');

    let foundCount = 0;
    for (let i = 0; i < cards.length; i++) {
        let h3 = cards[i].getElementsByTagName('h3')[0];

        let swapTo = cards[i].getElementsByTagName('p')[0];

        if (h3 || swapTo) {

            let textValue = (h3.textContent || h3.innerText) + " " + (swapTo.textContent || swapTo.innerText);

            if (textValue.toUpperCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
                foundCount++;
            } else {
                cards[i].style.display = "none";
            }
        }
    }

    document.getElementById('swapListTitle').textContent = `Showing ${foundCount} Healthy Swap Ideas`;
    if (foundCount === 0 && filter.length > 0) {
        document.getElementById('swapListTitle').textContent = `No swaps found for "${input.value}"`;
    } else if (filter.length === 0) {
        document.getElementById('swapListTitle').textContent = `50+ Healthy Swap Ideas`;
    }
}
