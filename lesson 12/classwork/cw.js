// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(postsData => {
        // console.log(postsData);
        let posts = document.createElement('div');
        posts.classList.add('posts');
        let h1 = document.createElement('h1');
        h1.innerText = 'Posts';
        for (const postItem of postsData) {
            let post = document.createElement('div');
            post.classList.add('post');
            let idPost = document.createElement('div');
            idPost.classList.add('idPost');
            idPost.innerHTML = `<h3>${postItem.id}</h3>`;
            let postBody = document.createElement('div');
            postBody.classList.add('postBody');
            postBody.innerHTML = `<h4>${postItem.title}</h4><div>${postItem.body}</div>`;

            let commentsBtn = document.createElement('button');
            commentsBtn.classList.add('commentsBtn');
            commentsBtn.innerText = 'Усі коментарі';
            commentsBtn.addEventListener('click', function (e) {
                e.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(commentsData => {
                        // console.log(commentsData);
                        for (const commentItem of commentsData) {
                            if (commentItem.postId === postItem.id) {
                                let commentsAll = document.createElement('div');
                                commentsAll.classList.add('commentsAll');
                                commentsAll.innerHTML = `
                                        <h3>Id: ${commentItem.id}</h3>
                                        <h4>Name: ${commentItem.name}</h4>
                                        <p>Email: ${commentItem.email}</p>
                                        <div>Body: ${commentItem.body}</div>
                                        `;
                                postBody.appendChild(commentsAll)
                            }
                        }
                    });
                // let close = document.createElement('button');
                // close.classList.add('closeBtn');
                // close.innerText = 'X';
                // close.onclick = (e) => {
                //     e.preventDefault();
                // let comments = document.getElementsByClassName('commentsAll');
                //     comments.classList.add('close')
                //     close.classList.add('close');
                // }
                // postBody.appendChild(close);
            });
            postBody.append(commentsBtn)
            post.append(idPost, postBody);
            posts.append(post);
        }
        document.body.append(h1, posts);
    });

