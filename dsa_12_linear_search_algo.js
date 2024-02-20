// Example: Search the value is exist or not using linear search mechanism 

const users = [
    { username: "harshprajapati", email: "hp@gmail.com" },
    { username: "jinalprajapati", email: "jp@gmail.com" },
    { username: "payalprajapati", email: "pp@gmail.com" },
]

function isUserExist(arr, val) {
    for (let el of arr) {
        if (el['username'] === val) {
            return true
        }
    }
    return false;
}


const result = isUserExist(users, "jinalprajapati");
console.log(result);

// Time Complexity: Linear O(n)