var merge = function(nums1, m, nums2, n) {
   nums1.splice(m, nums1.length - m,...nums2);
   nums1.sort((a, b) => a - b);
   
   console.log('nums11',nums1);
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3); // [1,2,2,3,5,6]
// merge([1], 1, [], 0); // [1,2,2,3,5,6]