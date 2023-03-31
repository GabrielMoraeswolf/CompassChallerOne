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
  {id: 2,title:"Nissan Gtr",imageUrl:"./Assets/nissan-gtr-35.jpg",body: "Nissan Gtr-R35 image"},
  {id: 3,title:"Lexus LFA",imageUrl:"./Assets/lexus-lfa.jpg",body: "Lexus LFA image"},
  {id: 4,title:"Honda NSX",imageUrl:"./Assets/honda-NSX.jpg",body: "Honda NSX image"},
  {id: 5,title:"Ford Mustang GT500",imageUrl:"./Assets/mustang-gt.jpg",body: "Ford Mustang GT500 image"},
  {id: 6,title:"Nissan 350z",imageUrl:"./Assets/350z.jpg",body: "Nissan 350z image"}
];
const comments: Comments[] = [
  {id: 1,postld:1,email:"joao@email.com",body: "Nice"},
  {id: 2,postld:2,email:"Pedro@email.com",body: "the Godzilla car"},
  {id: 3,postld:2,email:"jacktc@email.com",body: "Whaat thas amazing"},
  {id: 4,postld:1,email:"tec9@email.com",body: "Wait is that a Supraaaaa"},
  {id: 5,postld:1,email:"rodner@email.com",body: "Amazing Car"},
  {id: 6,postld:1,email:"jjCarlos@email.com",body: "<3"},
  {id: 7,postld:3,email:"joaoTr@email.com",body: "Nice"},
  {id: 8,postld:3,email:"pedrin@email.com",body: "this a F1 street car"},
  {id: 9,postld:5,email:"jackJJ@email.com",body: "muscle american car"},
  {id: 10,postld:4,email:"69x06@email.com",body: "Nice jdm"},
  {id: 11,postld:4,email:"Alex@email.com",body: "Senna helped make this car"},
  {id: 12,postld:6,email:"Carlos@email.com",body: "Tokyo Drift"},
  {id: 13,postld:3,email:"Carlin@email.com",body: "Nice"},
  {id: 14,postld:6,email:"Ana@email.com",body: "Fast and Furious jdm"},
  {id: 15,postld:5,email:"MaryJack@email.com",body: "Whaat thas amazing"},
  {id: 16,postld:5,email:"NightWolf@email.com",body: "this is Shelby?"},
  {id: 17,postld:4,email:"wwts@email.com",body: "Amazing Car"},
  {id: 18,postld:6,email:"jjxt@email.com",body: "Drift king"}
];
/*this function is passed the html parameters for the creation of each post*/
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

/*this function is passed the html parameters for the creation of each
 comment on its respective post*/
const commentsCard = ({ body, id, email }: Comments ) => 
`<div class='comments'id='${id}'>
    <div>
      <p>${email}: <strong>
      ${body}</strong></p>
    </div>
</div>`;
/*in this function and built from the header of the blog page*/
const header = `
  <header class="Header">
    <nav class="HeaderMenu">
        <a class="HeaderMenu_link" href="index.html">Home</a>
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
/* this function and built from the header of the Comments page*/
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
//element search in the DOM
const container = document.getElementById('main')! as HTMLInputElement;

let html = ''

if (container) {
  html += header//concatenation of Header

  for (const postData of posts) {  //concatenation of blog posts
    html += postCard(postData)
  }
  //Footer of blog
  html += `
    <footer>By: Gabriel Moraes</footer>
  `

  container.innerHTML = html

  const handleShowPost = (postId: number) => {

    html = ''
    html += commentsHeader

    for (const postData of posts) { //search for the corresponding image
      if(postData.id == postId){ 
        //html corresponding of the image
        html += `
          <div>
            <img src='${postData.imageUrl}' alt='${postData.body}' />
          </div>
          `
      }
    }
    for (const commentsData of comments) {//comparison if id matches
      if(commentsData.postld == postId){
        html += commentsCard(commentsData)
      }  
    }
 
    container.innerHTML = html

  }

  const postButtons = document.querySelectorAll('.post-btn');
  postButtons.forEach((button) => {
    button.addEventListener('click', function () {//click function
      //search for the corresponding id
      handleShowPost(this.id)

    });
  });
}
else{
    console.log("Erro! not found.");
}