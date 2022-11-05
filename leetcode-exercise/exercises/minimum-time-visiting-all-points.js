/**
 * @see https://leetcode.com/problems/minimum-time-visiting-all-points
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = points => {
  if (points.length === 1) return 0

  let currentIndex = 0
  let currentPosition = points[currentIndex]

  let result = 0

  let leftVizitPoint = points.length

  while (leftVizitPoint > 1) {
    const currentX = currentPosition[0]
    const currentY = currentPosition[1]

    const nextX = points[currentIndex + 1][0]
    const nextY = points[currentIndex + 1][1]

    const top = nextY > currentY
    const bottom = nextY < currentY

    const right = nextX > currentX
    const left = nextX < currentX

    if (top) {
      currentPosition[1] = currentY + 1
    }

    if (bottom) {
      currentPosition[1] = currentY - 1
    }

    if (left) {
      currentPosition[0] = currentX - 1
    }

    if (right) {
      currentPosition[0] = currentX + 1
    }

    result++

    if (currentPosition[0] === nextX && currentPosition[1] === nextY) {
      leftVizitPoint--
      currentIndex++
    }
  }

  return result
}

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ]),
)
console.log(
  minTimeToVisitAllPoints([
    [3, 2],
    [-2, 2],
  ]),
)
