process.nextTick(function () {
    console.log('nextTick callback 1!');
});
process.nextTick(function () {
    console.log('nextTick callback 2!');
});
process.on('exit', function(){
    console.log('processed on exit')
})
console.log('nextTick was set!');
