// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((postsData) => {
//         // console.log(postsData);
//         let posts = document.createElement('div');
//         posts.classList.add('posts');
//         for (const postItem of postsData) {
//             let post = document.createElement('div');
//             post.classList.add('post');
//             post.innerHTML = `<p>User id: ${postItem.userId}</p>
// <p>Id: ${postItem.id}</p>
// <h4>${postItem.title}</h4>
// <div>${postItem.body}</div>`
//
//         posts.append(post);
//         }
//         document.body.appendChild(posts);
//     })

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((commentsData) => {
        console.log(commentsData);
        let comments = document.createElement('div');
        comments.classList.add('comments');
        for (const commentItem of commentsData) {
            let comment = document.createElement('div');
            comment.classList.add('comment');
            // <p>Post id: ${commentItem.postId}</p>
            comment.innerHTML = `
            <p>Id: ${commentItem.id}</p>
            <p>Name: ${commentItem.name}</p>
            <p>Email: ${commentItem.email}</p>
            <div>Body: ${commentItem.body}</div>
            `;
            comments.append(comment);
        }
        document.body.appendChild(comments)
    })