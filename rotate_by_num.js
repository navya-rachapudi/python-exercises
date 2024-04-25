function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    
    const rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }
    
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}

rotate([1, 2, 3, 4, 5, 6, 7], 3)