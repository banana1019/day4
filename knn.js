const readlineSync = require('readline-sync');

const movies = [
    {action: 12, kiss: 2, category: 'A'},
    {action: 2, kiss: 14, category: 'M'},
    {action: 7, kiss: 2, category: 'A'},
    {action: 2, kiss: 10, category: 'M'},
    {action: 6, kiss: 15, category: 'M'},
]

const actionCut = parseInt(readlineSync.question("action : "))
const kissCut = parseInt(readlineSync.question("kiss : "))

const target = {action: actionCut, kiss: kissCut}

// const target = {action: 9, kiss: 3} // 반지의 제왕

movies.sort((a, b) => {
    const disA =  Math.sqrt(Math.pow(a.action - target.action, 2) + Math.pow(a.kiss - target.kiss, 2))
    const disB =  Math.sqrt(Math.pow(b.action - target.action, 2) + Math.pow(b.kiss - target.kiss, 2))
    return disA - disB > 0 ? 1 : -1
})

console.log(movies)

const knum = 3
const result = {actionConut: 0, kissConut: 0}

for (let i = 0; i < knum; i++) {
    const movie = movies[i]
    if (movie.category === 'A') {
        result.actionConut += 1
    } else if (movie.category === 'M') {
        result.kissConut += 1
    }
}

console.log(result)

const str = result.actionConut > result.kissConut ? '액션' : '멜로'

console.log(`이 영화는 ${str} 영화인 거 같습니다.`)

