const angleClock = (hour, minutes) => {
    const minuteAngle = minutes * 6;

    const hourAngle = hour === 12 ? 0 : hour * 30 + minutes / 60 * 30

    const angleDiff = Math.abs(hourAngle - minuteAngle);

    return (angleDiff < 180) ? angleDiff : 360 - angleDiff
}

const hr = 12, min = 30;

console.log(angleClock(hr, min))