var leastInterval = function(tasks, n) {
    
    let len = tasks.length;
    if(n === 0) return len;
    
    let left = 0;
    let right = len - 1;
    
/*
orig:[A, A, B, C, B, A, B]

    0   1  2  3. 4. 5. 6
    [A, B, A, B, B, B]
     l              r
    
*/  
    while(left < right && left < len) {
        // check if adjacent elements are same
        // if so, swap out with right most elem
        if(tasks[left] === tasks[left+1] && tasks[left] !== tasks[right]) {
            let temp = tasks[left+1];
            tasks[left+1] = tasks[right]
            tasks[right] = temp;
            left++;
        }
        else if(tasks[left] !== tasks[left+1]) {
            left++
        }
        else {
            right--;
        }
    }
    let count = 0;
    
    for(let i = 0; i < len; i++) {
        let task = tasks[i];
        for(let j = i + 1; j < len && j <= j+n; j++) {
            if(tasks[j] === task) {
                count++;
                break;
            }
        }
    }
    console.log('tasks: ', tasks)
    console.log('count: ', count)
    console.log('left: ', left)
    return count*n;
    
};