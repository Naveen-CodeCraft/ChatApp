let filter = document.getElementById("input");
let result = document.getElementById("result");
let chatHistory = document.querySelector(".rightside");
const listItem = [];
chatlist();

async function chatlist() {
  const request = await fetch("https://randomuser.me/api?results=50");
  const { results } = await request.json();

  results.forEach((item) => {
    let li = document.createElement("li");

    listItem.push(li);

    li.innerHTML = `<img src="${item.picture.large}" alt="">
        <div class="user-info">
            <h4>${item.name.first} ${item.name.last}</h4>
            <p>${item.location.city}, ${item.location.country}</p>
        </div>`;

    result.appendChild(li);
  });
}

filter.addEventListener("input", (e) => filterData(e.target.value));
function filterData(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
// setTimeout(() => {
//     listItem.forEach(item => console.log(item))
// }, 5000);

setTimeout(() => {
  listItem.forEach((chat) => {
    chat.addEventListener("click", () => {
      let cchat = `
              <div class="head">
                       <li> ${chat.innerHTML}</li>
                      </div>
                      <div class="user-chatbox">
                          <div class="left-func">
                              <div class="medias">
                                  <i class="fa-regular fa-face-smile" style="color: #9e9e9e;"></i>
      
                                  <i class="fa-regular fa-folder-open" style="color: #9e9e9e;"></i>
                              </div>
                              <input type="text" placeholder="Type a message..." autofocus>
                              <i class="fa-solid fa-play fa-rotate-by" style="color: #858585; --fa-rotate-angle: 9e99deg;""></i>
                          </div>
                      </div>`;
      chatHistory.innerHTML = cchat;
    });
  });
}, 1000);
