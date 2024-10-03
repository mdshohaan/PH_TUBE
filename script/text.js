
// console.log(`${isVerified=== true ? "user if verified":'user is not verified'}`);

function getTime(time){
    // get hour rest second
    const hour = parseInt(time/3600)
    let remainingSecond = time % 3600
    const minute = parseInt(remainingSecond / 60)
    remainingSecond = remainingSecond % 60
    return `${hour} hour ${minute} minute ago ${remainingSecond} second ago`
}
console.log(getTime(4320));