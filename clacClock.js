function calcTotal(hourValue, minValue) {
    function calcHour(hour) {
        // 시침의 각도 ---> 입력 시: 12, 출력: 각도
        const result = (360 / 12) * (hour % 12)
        return result
    }

    // 분침의 각도
    const calcMin = (min) => (360 / 60) * min

    // 분에 따른 시침의 추가적인 이동
    // 1분에 0.5도
    function getExtra (min) {
        return ((360 / 12) / 60) * min
    }

    const result = Math.abs((calcHour(hourValue) + getExtra(minValue)) - calcMin(minValue))

    return result > 180 ? 360 - result : result
}

// 12시 38분
console.log(calcTotal(12, 38))