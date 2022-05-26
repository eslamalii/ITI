let users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((u) => {
    return u.json();
  })
  .then((u) => {
    u.forEach((e) => {
      const btn = document.createElement("button");
      btn.setAttribute("onclick", `getPosts(${e.id})`);
      btn.innerHTML = e.name;
      tabs.appendChild(btn);
    });
  })
  .catch((e) => {
    console.log(e);
  });

async function getPosts(id) {
  let postsPrint = "";
  let s = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  let posts = await s.json();
  posts.forEach((post) => {
    const postT = `<ul>
    <li>
    ${post.title}
    </li>
    </ul>`;
    postsPrint += postT;
  });
  info.innerHTML = postsPrint;
}
