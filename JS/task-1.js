const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

item.forEach((element) => {
    const title = element.querySelector("h2").textContent;
    const list = element.querySelectorAll("li");
    console.log(`Category: ${title}`);
    console.log(`Elements: ${list.length}`);
});