function checkOrder(available, ordered) {
    if (available < ordered) {
        return 'Your order is too large, we don’t have enough goods.';
    } else if (ordered == 0) { 
        return 'Your order is empty';
    } else if (ordered <= available) {
        return 'Your order is accepted';
    }
}

console.log(checkOrder(10, 40));
console.log(checkOrder(10, 0));  
console.log(checkOrder(80, 20)); 