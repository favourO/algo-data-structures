const duplicateNames = names => {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        }
    }
    return unique;
}

let checknames = ["twitter", "linkedIn", "devto", "twitter", "instagram", "devto", "al", "siam", "alsiam", "alsiamworld"];

console.log(duplicateNames(checknames));