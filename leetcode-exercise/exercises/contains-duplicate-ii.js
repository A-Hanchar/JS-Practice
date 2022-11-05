/**
 * @see https://leetcode.com/problems/contains-duplicate-ii
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = (nums, k) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const idxs = map.get(nums[i])

      map.set(nums[i], [...idxs, i])

      continue
    }

    map.set(nums[i], [i])
  }

  for (const idxs of map.values()) {
    if (idxs.length === 1) {
      continue
    }

    for (let i = 0; i < idxs.length - 1; i++) {
      for (let j = i + 1; j < idxs.length; j++) {
        if (idxs[j] - idxs[i] <= k) {
          return true
        }
      }
    }
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
