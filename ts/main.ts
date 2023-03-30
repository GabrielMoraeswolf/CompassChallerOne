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


const commentsCard = ({ body, id, email }: Comments ) => 
`<div class='comments'id='${id}'>
    <div>
      <p>${email}: <strong>
      ${body}</strong></p>
    </div>
</div>`;

const header = `
  <header class="Header">
    <nav class="HeaderMenu">
        <a class="HeaderMenu_link" href="index.html"> Home</a>
    </nav>
  </header>
  <section class="presentation_content">
      <h1>
          <a class="presentation_Title"><strong>
              Super car<strong class="presentation_Title_sub">s</strong>.
          </strong></a>
      </h1>
      <p class="presentation_Text">
          Hello, in this blog i will 
          introduce some of the most iconic cars in history. 
      </p>
  </section>
`
const commentsHeader = `
  <header class="Header">
    <nav class="HeaderMenu">
        <a class="HeaderMenu_link" href="index.html"> Home</a>
    </nav>
  </header>
  <section class="presentation_content">
    <h1>
        <article class="presentation_Title"><strong>
            Super car<strong class="presentation_Title_sub">s</strong>.
        </strong></article>
    </h1>
  </section>
`
const container = document.getElementById('main')

let html = ''

if (container) {
  html += header

  for (const postData of posts) {  
    html += postCard(postData)
  }
  html += `
    <footer>rodapé</footer>
  `

  container.innerHTML = html

  const handleShowPost = (postId: number) => {

    html = ''
    html += commentsHeader
    for (const commentsData of comments) {
      if(commentsData.postld == postId){
        html += commentsCard(commentsData)
      }  
    }
 

    container.innerHTML = html

  }

  const postButtons = document.querySelectorAll('.post-btn');
  postButtons.forEach((button) => {
    button.addEventListener('click', function () {
      handleShowPost(this.id)
    
    });
  });
}
else{
    console.log("nao encontrado");
}