const API_URL = 'https://jsonplaceholder.typicode.com'

// function getPostAndUser(postId) {
//   return fetch(`${API_URL}/posts/${postId}`)
//     .then((res) => res.json())
//     .then((post) =>  {
//       return fetch(`${API_URL}/users/${post.userId}`)
//         .then((res) => res.json())
//         .then((user) => {
//           return {
//             post,
//             user
//           }
//         });
//     })
// }

// getPostAndUser(1).then(result => {
//   console.log(result)
// })

const getPostsPage = (pageNum) => {
  return fetch(`${API_URL}/posts?_page=${pageNum}`)
    .then(res => res.json());
}

function getAllPosts() {
  const posts = [];
  let pageNum = 1;

  const handleThen = (page) => {
    if (page.length <= 0) {
      return posts;
    }
    posts.push(page);
    pageNum += 1
    return getPostsPage(pageNum).then(handleThen);
  }

  return getPostsPage(pageNum).then(handleThen);
}

getAllPosts().then(posts => {
  console.log(posts)
})
