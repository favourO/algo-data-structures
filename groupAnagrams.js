const groupAnagrams = strs => {
    const group = {}

    for (let i = 0; i < strs.length; i++) {
        let sort = strs[i].split('').sort().join('');
        if(!group[sort]) {
            group[sort] = [strs[i]]
        }
        else {
            group[sort].push(strs[i])
        }
    }

    return Object.values(group);
}

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));