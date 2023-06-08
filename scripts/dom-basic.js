const bodyElement = document.body;

//append
bodyElement.append("Hello Universe");

//append a child
const divElement = document.createElement("div");

const strongElement = document.createElement("strong");
strongElement.textContent = "Tesitng Testing";
//strongElement.innerHTML = "testing, testing";
//dont use inner html
divElement.append(strongElement);


bodyElement.append(divElement);

divElement.remove();
divElement.append(strongElement);