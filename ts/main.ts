interface Post{
  id: number;
  title: string;
  imageUrl :string;
  body: string;
}
interface Comments{
  id: number;
  postld: number;
  email: string;
  body: string;
}

const posts: Post[] = [
  {id: 1,title:"Toyota Supra mk4",imageUrl:"./Assets/supra.jpg",body: "Toyota Supra mk4 image"},
  {id: 2,title:"Nissan Gtr",imageUrl:"./Assets/nissan-gtr-35.jpg",body: "Nissan Gtr-R35 image"}
];
const comments: Comments[] = [
  {id: 1,postld:1,email:"joao@email.com",body: "Nice"},
  {id: 2,postld:2,email:"Pedro@email.com",body: "the Godzilla car"}
];

const postCard = ({ body, id, imageUrl, title }: Post) => `
<div class='post'>
  <button type='button' class='post-btn' id='${id}'>
    <img src='${imageUrl}' alt='${body}' />
    <div>
      <p>${title}</p>
    </div>
  </button>
</div>
`;

const commentsIndex = () => 
  `
    <a class="HeaderMenu_link" href="comments.html"> </a>
  `;

const commentsCard = ({ body, id, email,postld }: Comments ) => 
`<div class='comments'id='${id}'>
    <div>
      <p>${email}: ${postld} <strong>
      ${body}</strong></p>
    </div>
</div>`;


const postsList = document.getElementById('posts-list')

if (postsList) {
  let postsToHTML = ''

  console.log('postsList antes do for', postsList)

  for (const postData of posts) {  
    postsToHTML += postCard(postData)
  }

  console.log('postsList depois do for', postsList)

  //postsList.innerHTML = postsToHTML

  const postButtons = document.querySelectorAll('.post-btn');
  postButtons.forEach((button) => {
    button.addEventListener('click', function () {
      //let pList.innerHTML = commentsIndex();
    });
  });
}
else{
    console.log("nao encontrado");
}