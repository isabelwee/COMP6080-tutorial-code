const ul = document.createElement('ul');
document.body.appendChild(ul);

// const li = document.createElement('li');
// ul.appendChild(li);
// li.innerText = 'hayden';

fetch('http://localhost:3000/users')
  .then((res) => res.json())
  .then((userIds) => {
    Promise.all(userIds.map((id) => fetch(`http://localhost:3000/user/${id}`).then((res) => res.json())))
      .then((users) => {
        users.forEach(user => {

          const li = document.createElement('li');
          ul.appendChild(li);
          li.innerText = user.name;
        })
      })
    // userIds.forEach((id) => {
      
    //   fetch(`http://localhost:3000/user/${id}`)
    //     .then((res) => res.json())
    //     .then((user) => {
    //       console.log(user)
    //       const li = document.createElement('li');
    //       ul.appendChild(li);
    //       li.innerText = user.name;
    //     })
    // })
  })


// fetch('http://localhost:3000/user/0');