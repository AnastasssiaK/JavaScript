// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        // console.log(usersData);
        let usersBox = document.createElement('div');
        usersBox.classList.add('usersBox');
        document.body.appendChild(usersBox);
        for (const user of users) {
            let userBox = document.createElement('div');
            let content = document.createElement('div');
            content.classList.add('content');
            userBox.classList.add('userBox');
            userBox.innerHTML = `<h4>${user.id}. ${user.name}</h4><p>Username: ${user.username}<br>Email: ${user.email}<br>Address: ${user.address.city}</p><p>Phone: ${user.phone}<br>Website: ${user.website}<br>Company: ${user.company.name}</br>`;

            let postsBtn = document.createElement('button');
            postsBtn.classList.add('postsBtn');
            postsBtn.innerText = 'Posts';
            postsBtn.onclick = (e) => {
                e.preventDefault();
                postsBtn.disabled = true;
                let postsBox = document.createElement('div');
                postsBox.classList.add('postsBox');
                content.appendChild(postsBox);
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(posts => {
                        // console.log(posts);
                        for (const post of posts) {
                            if (post.userId === user.id) {
                                let postBox = document.createElement('div');
                                postBox.classList.add('postBox');
                                postBox.innerHTML = `
                                <h3>${post.id}. ${post.title}</h3>
                                <div>${post.body}</div>
                                `;
                                let commentsBtn = document.createElement('button');
                                commentsBtn.classList.add('commentsBtn');
                                commentsBtn.innerText = 'Comments';
                                postsBox.append(postBox, commentsBtn);
                                commentsBtn.onclick = (e) => {
                                    e.preventDefault();
                                    let commentsBox = document.createElement('div');
                                    commentsBox.classList.add('commentsBox');
                                    postBox.appendChild(commentsBox);
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(response => response.json())
                                        .then(comments => {
                                            // console.log(comments);
                                            for (const comment of comments) {
                                                if (comment.postId === post.userId) {
                                                    let commentBox = document.createElement('div');
                                                    commentBox.classList.add('commentBox');
                                                    commentBox.innerHTML = `
                                                       <h4>${comment.id}. ${comment.name}</h4>
                                                       <p><b>Email:</b> ${comment.email}</p>
                                                       <p><b>Body:</b>${comment.body}</p>
                                                       `;
                                                   commentsBox.appendChild(commentBox);
                                                }
                                            }
                                        });
                                    commentsBtn.disabled = true;
                                }
                            }
                        }
                    });
            }

            userBox.appendChild(postsBtn);
            content.append(userBox);
            usersBox.appendChild(content);
        }
    });
