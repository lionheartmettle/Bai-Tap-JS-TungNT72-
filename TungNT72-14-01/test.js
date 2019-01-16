var b;
setTimeout(() => {b = 10}, 0);
console.log(b - 5);

function conTho(fn) {
    setTimeout(function () {
        console.log('con tho an co, uong nuoc');
        fn();
    })
}
conTho(function () {
    console.log('chui vao hang');
});