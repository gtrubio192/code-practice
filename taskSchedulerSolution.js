/**
 * 
Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

Return the least number of units of times that the CPU will take to finish all the given tasks
 */
var taskScheduler = function(tasks, n) {
  var count = {}
  var longest  = 0
  
  // count each task and find longest one
  for (let c of tasks) {
      if (count[c] == null) count[c] = 0
      count[c]++
      longest = Math.max(longest, count[c])
  }

  var longestCount = 0
  // count how many tasks which have longest.
  for (let c in count){
      if (count[c] == longest) longestCount++
  }

  return Math.max((n + 1) * (longest - 1) + longestCount, tasks.length)
};

taskScheduler(['A', 'B', 'A', 'A', 'D', 'E', 'B', 'B'], 3);

/**
 * 
 * Algorithm

The maximum number of tasks is 26. Let's allocate an array frequencies of 26 elements to keep the frequency of each task.

Iterate over the input array and store the frequency of task A at index 0, the frequency of task B at index 1, etc.

Find the maximum frequency: f_max = max(frequencies).

Find the number of tasks which have the max frequency: n_max = frequencies.count(f_max).

If the number of slots to use is defined by the most frequent task, it's equal to (f_max - 1) * (n + 1) + n_max.

Otherwise, the number of slots to use is defined by the overall number of tasks: len(tasks).

Return the maximum of these two: max(tasks.length, (f_max - 1) * (n + 1) + n_max).
 */

 // Solution2

 var leastInterval = function(tasks, n) {
  if (n === 0) return tasks.length
  // 统计各任务出现的次数
  let map = {}
  for (let key of tasks) {
    map[key] = map[key] ? map[key]+1 : 1
  }
  // 我们只需要考虑出现次数最多的任务
  // max 为出现的次数，count 为有多少种任务出现了最多次
  let max = 0, count = 0
  Object.keys(map).forEach(key => {
    if (map[key] > max) {
      max = map[key]
      count = 1
    } else if (map[key] === max) {
      count++
    }
  })
  return Math.max((max-1)*(n+1) + count, tasks.length)
};