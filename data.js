const problems = [
  // ===== Arrays =====
  {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    pattern: "Arrays",
    leetcode: "https://leetcode.com/problems/majority-element/"
  },
  {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    pattern: "Arrays",
    leetcode: "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    id: "first-missing-positive",
    title: "First Missing Positive",
    difficulty: "Hard",
    pattern: "Arrays",
    leetcode: "https://leetcode.com/problems/first-missing-positive/"
  },

  // ===== Strings =====
  {
    id: "is-subsequence",
    title: "Is Subsequence",
    difficulty: "Easy",
    pattern: "Strings",
    leetcode: "https://leetcode.com/problems/is-subsequence/"
  },
  {
    id: "reverse-words-in-a-string",
    title: "Reverse Words in a String",
    difficulty: "Medium",
    pattern: "Strings",
    leetcode: "https://leetcode.com/problems/reverse-words-in-a-string/"
  },

  // ===== Bit Manipulation =====
  {
    id: "counting-bits",
    title: "Counting Bits",
    difficulty: "Easy",
    pattern: "Bit Manipulation",
    leetcode: "https://leetcode.com/problems/counting-bits/"
  },
  {
    id: "single-number-iii",
    title: "Single Number III",
    difficulty: "Medium",
    pattern: "Bit Manipulation",
    leetcode: "https://leetcode.com/problems/single-number-iii/"
  },

  // ===== Hash Tables =====
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    pattern: "Hash Tables",
    leetcode: "https://leetcode.com/problems/group-anagrams/"
  },
  {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    pattern: "Hash Tables",
    leetcode: "https://leetcode.com/problems/longest-consecutive-sequence/"
  },

  // ===== Two Pointers =====
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    pattern: "Two Pointers",
    leetcode: "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    pattern: "Two Pointers",
    leetcode: "https://leetcode.com/problems/3sum/"
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    pattern: "Two Pointers",
    leetcode: "https://leetcode.com/problems/trapping-rain-water/"
  },

  // ===== Prefix Sum =====
  {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    pattern: "Prefix Sum",
    leetcode: "https://leetcode.com/problems/subarray-sum-equals-k/"
  },

  // ===== Sliding Window - Fixed =====
  {
    id: "find-all-anagrams-in-a-string",
    title: "Find All Anagrams in a String",
    difficulty: "Medium",
    pattern: "Sliding Window - Fixed Size",
    leetcode: "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
  },
  {
    id: "permutation-in-string",
    title: "Permutation in String",
    difficulty: "Medium",
    pattern: "Sliding Window - Fixed Size",
    leetcode: "https://leetcode.com/problems/permutation-in-string/"
  },

  // ===== Sliding Window - Dynamic =====
  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    pattern: "Sliding Window - Dynamic Size",
    leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    pattern: "Sliding Window - Dynamic Size",
    leetcode: "https://leetcode.com/problems/minimum-window-substring/"
  },

  // ===== Kadane’s Algorithm =====
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    pattern: "Kadane’s Algorithm",
    leetcode: "https://leetcode.com/problems/maximum-subarray/"
  },

  // ===== Matrix =====
  {
    id: "spiral-matrix",
    title: "Spiral Matrix",
    difficulty: "Medium",
    pattern: "Matrix",
    leetcode: "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    id: "rotate-image",
    title: "Rotate Image",
    difficulty: "Medium",
    pattern: "Matrix",
    leetcode: "https://leetcode.com/problems/rotate-image/"
  },

  // ===== Linked List =====
  {
    id: "remove-nth-node-from-end-of-list",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    pattern: "Linked List",
    leetcode: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    id: "swap-nodes-in-pairs",
    title: "Swap Nodes in Pairs",
    difficulty: "Medium",
    pattern: "Linked List",
    leetcode: "https://leetcode.com/problems/swap-nodes-in-pairs/"
  },
  {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    pattern: "Linked List",
    leetcode: "https://leetcode.com/problems/add-two-numbers/"
  },

  // ===== Linked List In-place Reversal =====
  {
    id: "reverse-nodes-in-k-group",
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    pattern: "Linked List – In-place Reversal",
    leetcode: "https://leetcode.com/problems/reverse-nodes-in-k-group/"
  },

  // ===== Fast and Slow Pointers =====
  {
    id: "linked-list-cycle-ii",
    title: "Linked List Cycle II",
    difficulty: "Medium",
    pattern: "Fast and Slow Pointers",
    leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/"
  },

  // ===== Stacks =====
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    pattern: "Stacks",
    leetcode: "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    id: "min-stack",
    title: "Min Stack",
    difficulty: "Medium",
    pattern: "Stacks",
    leetcode: "https://leetcode.com/problems/min-stack/"
  },

  // ===== Monotonic Stack =====
  {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    pattern: "Monotonic Stack",
    leetcode: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },

  // ===== Monotonic Queue =====
  {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    pattern: "Monotonic Queue",
    leetcode: "https://leetcode.com/problems/sliding-window-maximum/"
  },

  // ===== QuickSort / QuickSelect =====
  {
    id: "sort-colors",
    title: "Sort Colors",
    difficulty: "Medium",
    pattern: "QuickSort / QuickSelect",
    leetcode: "https://leetcode.com/problems/sort-colors/"
  },

  // ===== Binary Search =====
  {
    id: "find-first-and-last-position-of-element-in-sorted-array",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    pattern: "Binary Search",
    leetcode: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
  },
  {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    pattern: "Binary Search",
    leetcode: "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    pattern: "Binary Search",
    leetcode: "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },

  // ===== Backtracking =====
  {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    pattern: "Backtracking",
    leetcode: "https://leetcode.com/problems/permutations/"
  },
  {
    id: "subsets",
    title: "Subsets",
    difficulty: "Medium",
    pattern: "Backtracking",
    leetcode: "https://leetcode.com/problems/subsets/"
  },

  // ===== Tree Traversal - Level Order =====
  {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    pattern: "Tree - Level Order",
    leetcode: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    id: "binary-tree-right-side-view",
    title: "Binary Tree Right Side View",
    difficulty: "Medium",
    pattern: "Tree - Level Order",
    leetcode: "https://leetcode.com/problems/binary-tree-right-side-view/"
  },

  // ===== Tree Traversal - Pre Order =====
  {
    id: "binary-tree-preorder-traversal",
    title: "Binary Tree Preorder Traversal",
    difficulty: "Easy",
    pattern: "Tree - Pre Order",
    leetcode: "https://leetcode.com/problems/binary-tree-preorder-traversal/"
  },
  {
    id: "path-sum-iii",
    title: "Path Sum III",
    difficulty: "Medium",
    pattern: "Tree - Pre Order",
    leetcode: "https://leetcode.com/problems/path-sum-iii/"
  },
  {
    id: "serialize-and-deserialize-binary-tree",
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    pattern: "Tree - Pre Order",
    leetcode: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
  },

  // ===== Tree Traversal - In Order =====
  {
    id: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    difficulty: "Easy",
    pattern: "Tree - In Order",
    leetcode: "https://leetcode.com/problems/binary-tree-inorder-traversal/"
  },
  {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    pattern: "Tree - In Order",
    leetcode: "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    id: "kth-smallest-element-in-a-bst",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    pattern: "Tree - In Order",
    leetcode: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
  },

  // ===== Tree Traversal - Post Order =====
  {
    id: "binary-tree-postorder-traversal",
    title: "Binary Tree Postorder Traversal",
    difficulty: "Easy",
    pattern: "Tree - Post Order",
    leetcode: "https://leetcode.com/problems/binary-tree-postorder-traversal/"
  },
  {
    id: "lowest-common-ancestor-of-a-binary-tree",
    title: "Lowest Common Ancestor of a Binary Tree",
    difficulty: "Medium",
    pattern: "Tree - Post Order",
    leetcode: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
  },
  {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    pattern: "Tree - Post Order",
    leetcode: "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },

  // ===== BST / Ordered Set =====
  {
    id: "my-calendar-i",
    title: "My Calendar I",
    difficulty: "Medium",
    pattern: "BST / Ordered Set",
    leetcode: "https://leetcode.com/problems/my-calendar-i/"
  },

  // ===== Tries =====
  {
    id: "implement-trie-prefix-tree",
    title: "Implement Trie (Prefix Tree)",
    difficulty: "Medium",
    pattern: "Tries",
    leetcode: "https://leetcode.com/problems/implement-trie-prefix-tree/"
  },
  {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    pattern: "Tries",
    leetcode: "https://leetcode.com/problems/word-search-ii/"
  },

  // ===== Two Heaps =====
  {
    id: "find-median-from-data-stream",
    title: "Find Median from Data Stream",
    difficulty: "Hard",
    pattern: "Two Heaps",
    leetcode: "https://leetcode.com/problems/find-median-from-data-stream/"
  },

  // ===== Top K Elements =====
  {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    pattern: "Top K Elements",
    leetcode: "https://leetcode.com/problems/top-k-frequent-elements/"
  },

  // ===== Intervals =====
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    pattern: "Intervals",
    leetcode: "https://leetcode.com/problems/merge-intervals/"
  },
  {
    id: "non-overlapping-intervals",
    title: "Non-overlapping Intervals",
    difficulty: "Medium",
    pattern: "Intervals",
    leetcode: "https://leetcode.com/problems/non-overlapping-intervals/"
  },

  // ===== K-Way Merge =====
  {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    pattern: "K-Way Merge",
    leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/"
  },

  // ===== Data Structure Design =====
  {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Medium",
    pattern: "Data Structure Design",
    leetcode: "https://leetcode.com/problems/lru-cache/"
  },

  // ===== Greedy =====
  {
    id: "jump-game-ii",
    title: "Jump Game II",
    difficulty: "Medium",
    pattern: "Greedy",
    leetcode: "https://leetcode.com/problems/jump-game-ii/"
  },

  // ===== DFS =====
  {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    pattern: "DFS",
    leetcode: "https://leetcode.com/problems/number-of-islands/"
  },
  {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    pattern: "DFS",
    leetcode: "https://leetcode.com/problems/clone-graph/"
  },
  {
    id: "is-graph-bipartite",
    title: "Is Graph Bipartite?",
    difficulty: "Medium",
    pattern: "DFS",
    leetcode: "https://leetcode.com/problems/is-graph-bipartite/"
  },

  // ===== BFS =====
  {
    id: "rotting-oranges",
    title: "Rotting Oranges",
    difficulty: "Medium",
    pattern: "BFS",
    leetcode: "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    id: "word-ladder",
    title: "Word Ladder",
    difficulty: "Hard",
    pattern: "BFS",
    leetcode: "https://leetcode.com/problems/word-ladder/"
  },

  // ===== Topological Sort =====
  {
    id: "course-schedule-ii",
    title: "Course Schedule II",
    difficulty: "Medium",
    pattern: "Topological Sort",
    leetcode: "https://leetcode.com/problems/course-schedule-ii/"
  },

  // ===== Union Find =====
  {
    id: "number-of-provinces",
    title: "Number of Provinces",
    difficulty: "Medium",
    pattern: "Union Find",
    leetcode: "https://leetcode.com/problems/number-of-provinces/"
  },

  // ===== Minimum Spanning Tree =====
  {
    id: "min-cost-to-connect-all-points",
    title: "Min Cost to Connect All Points",
    difficulty: "Medium",
    pattern: "Minimum Spanning Tree",
    leetcode: "https://leetcode.com/problems/min-cost-to-connect-all-points/"
  },

  // ===== Shortest Path =====
  {
    id: "cheapest-flights-within-k-stops",
    title: "Cheapest Flights Within K Stops",
    difficulty: "Medium",
    pattern: "Shortest Path",
    leetcode: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
  },

  // ===== 1-D DP =====
  {
    id: "house-robber-ii",
    title: "House Robber II",
    difficulty: "Medium",
    pattern: "1-D DP",
    leetcode: "https://leetcode.com/problems/house-robber-ii/"
  },

  // ===== Knapsack DP =====
  {
    id: "partition-equal-subset-sum",
    title: "Partition Equal Subset Sum",
    difficulty: "Medium",
    pattern: "Knapsack DP",
    leetcode: "https://leetcode.com/problems/partition-equal-subset-sum/"
  },

  // ===== Unbounded Knapsack DP =====
  {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    pattern: "Unbounded Knapsack DP",
    leetcode: "https://leetcode.com/problems/coin-change/"
  },

  // ===== LIS DP =====
  {
    id: "longest-increasing-subsequence",
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    pattern: "LIS DP",
    leetcode: "https://leetcode.com/problems/longest-increasing-subsequence/"
  },

  // ===== 2D DP =====
  {
    id: "minimum-path-sum",
    title: "Minimum Path Sum",
    difficulty: "Medium",
    pattern: "2D DP",
    leetcode: "https://leetcode.com/problems/minimum-path-sum/"
  },
  {
    id: "longest-increasing-path-in-a-matrix",
    title: "Longest Increasing Path in a Matrix",
    difficulty: "Hard",
    pattern: "2D DP",
    leetcode: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
  },

  // ===== String DP =====
  {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    pattern: "String DP",
    leetcode: "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    pattern: "String DP",
    leetcode: "https://leetcode.com/problems/word-break/"
  },

  // ===== Maths / Geometry =====
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Medium",
    pattern: "Maths / Geometry",
    leetcode: "https://leetcode.com/problems/reverse-integer/"
  },
  {
    id: "max-points-on-a-line",
    title: "Max Points on a Line",
    difficulty: "Hard",
    pattern: "Maths / Geometry",
    leetcode: "https://leetcode.com/problems/max-points-on-a-line/"
  }
];
