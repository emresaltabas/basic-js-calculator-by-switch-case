let islem = function(a, b, calculator) {
    switch(calculator) {
        case 'toplama':
            return a + b;
        break;
        case 'cikarma':
            return a - b;
        break;
        case 'carpma':
            return a * b;
        break;
        case 'bolme':
            return a / b;
        break;
        case "ortalama":
        return (a+b)/2
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(335,55,'toplama'));
console.log(islem(12,43,'cikarma'));
console.log(islem(66,22,'carpma'));
console.log(islem(99,3,'bolme'));
console.log(islem(10,20,'ortalama'));