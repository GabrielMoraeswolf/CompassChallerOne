"use strict";
const posts = [
    { id: 1, title: "Toyota Supra mk4", imageUrl: "./Assets/supra.jpg", body: "Toyota Supra mk4 image" },
    { id: 2, title: "Nissan Gtr", imageUrl: "./Assets/nissan-gtr-35.jpg", body: "Nissan Gtr-R35 image" },
    { id: 3, title: "Lexus LFA", imageUrl: "./Assets/lexus-lfa.jpg", body: "Lexus LFA image" },
    { id: 4, title: "Honda NSX", imageUrl: "./Assets/honda-NSX.jpg", body: "Honda NSX image" },
    { id: 5, title: "Ford Mustang GT500", imageUrl: "./Assets/mustang-gt.jpg", body: "Ford Mustang GT500 image" },
    { id: 6, title: "Nissan 350z", imageUrl: "./Assets/350z.jpg", body: "Nissan 350z image" }
];
const comments = [
    { id: 1, postld: 1, email: "joao@email.com", body: "Nice" },
    { id: 2, postld: 2, email: "Pedro@email.com", body: "the Godzilla car" },
    { id: 3, postld: 2, email: "jacktc@email.com", body: "Whaat thas amazing" },
    { id: 4, postld: 1, email: "tec9@email.com", body: "Wait is that a Supraaaaa" },
    { id: 5, postld: 1, email: "rodner@email.com", body: "Amazing Car" },
    { id: 6, postld: 1, email: "jjCarlos@email.com", body: "<3" },
    { id: 7, postld: 3, email: "joaoTr@email.com", body: "Nice" },
    { id: 8, postld: 3, email: "pedrin@email.com", body: "this a F1 street car" },
    { id: 9, postld: 5, email: "jackJJ@email.com", body: "muscle american car" },
    { id: 10, postld: 4, email: "69x06@email.com", body: "Nice jdm" },
    { id: 11, postld: 4, email: "Alex@email.com", body: "Senna helped make this car" },
    { id: 12, postld: 6, email: "Carlos@email.com", body: "Tokyo Drift" },
    { id: 13, postld: 3, email: "Carlin@email.com", body: "Nice" },
    { id: 14, postld: 6, email: "Ana@email.com", body: "Fast and Furious jdm" },
    { id: 15, postld: 5, email: "MaryJack@email.com", body: "Whaat thas amazing" },
    { id: 16, postld: 5, email: "NightWolf@email.com", body: "this is Shelby?" },
    { id: 17, postld: 4, email: "wwts@email.com", body: "Amazing Car" },
    { id: 18, postld: 6, email: "jjxt@email.com", body: "Drift king" }
];
/*this function is passed the html parameters for the creation of each post*/
const postCard = ({ body, id, imageUrl, title }) => `
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
const commentsCard = ({ body, id, email }) => `<div class='comments'id='${id}'>
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
`;
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
`;
//element search in the DOM
const container = document.getElementById('main');
let html = '';
if (container) {
    html += header; //concatenation of Header
    for (const postData of posts) { //concatenation of blog posts
        html += postCard(postData);
    }
    //Footer of blog
    html += `
    <footer>By: Gabriel Moraes</footer>
  `;
    container.innerHTML = html;
    const handleShowPost = (postId) => {
        html = '';
        html += commentsHeader;
        for (const postData of posts) { //search for the corresponding image
            if (postData.id == postId) {
                //html corresponding of the image
                html += `
          <div>
            <img src='${postData.imageUrl}' alt='${postData.body}' />
          </div>
          `;
            }
        }
        for (const commentsData of comments) { //comparison if id matches
            if (commentsData.postld == postId) {
                html += commentsCard(commentsData);
            }
        }
        container.innerHTML = html;
    };
    const postButtons = document.querySelectorAll('.post-btn');
    postButtons.forEach((button) => {
        button.addEventListener('click', function () {
            //search for the corresponding id
            handleShowPost(this.id);
        });
    });
}
else {
    console.log("Erro! not found.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWFBLE1BQU0sS0FBSyxHQUFXO0lBQ3BCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLG9CQUFvQixFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQztJQUM3RixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFDO0lBQzdGLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyx3QkFBd0IsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7SUFDbkYsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztJQUNuRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyx5QkFBeUIsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUM7SUFDdEcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLG1CQUFtQixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQztDQUNuRixDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQWU7SUFDM0IsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDcEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBRSxr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QUFJLENBQUE7SUFFNUIsQ0FBQyxDQUFBO0lBRUQsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNELFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQy9CLGlDQUFpQztZQUNqQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXpCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7Q0FDSjtLQUNHO0lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFBvc3R7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlVXJsIDpzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbn1cbmludGVyZmFjZSBDb21tZW50c3tcbiAgaWQ6IG51bWJlcjtcbiAgcG9zdGxkOiBudW1iZXI7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbn1cblxuY29uc3QgcG9zdHM6IFBvc3RbXSA9IFtcbiAge2lkOiAxLHRpdGxlOlwiVG95b3RhIFN1cHJhIG1rNFwiLGltYWdlVXJsOlwiLi9Bc3NldHMvc3VwcmEuanBnXCIsYm9keTogXCJUb3lvdGEgU3VwcmEgbWs0IGltYWdlXCJ9LFxuICB7aWQ6IDIsdGl0bGU6XCJOaXNzYW4gR3RyXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9uaXNzYW4tZ3RyLTM1LmpwZ1wiLGJvZHk6IFwiTmlzc2FuIEd0ci1SMzUgaW1hZ2VcIn0sXG4gIHtpZDogMyx0aXRsZTpcIkxleHVzIExGQVwiLGltYWdlVXJsOlwiLi9Bc3NldHMvbGV4dXMtbGZhLmpwZ1wiLGJvZHk6IFwiTGV4dXMgTEZBIGltYWdlXCJ9LFxuICB7aWQ6IDQsdGl0bGU6XCJIb25kYSBOU1hcIixpbWFnZVVybDpcIi4vQXNzZXRzL2hvbmRhLU5TWC5qcGdcIixib2R5OiBcIkhvbmRhIE5TWCBpbWFnZVwifSxcbiAge2lkOiA1LHRpdGxlOlwiRm9yZCBNdXN0YW5nIEdUNTAwXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9tdXN0YW5nLWd0LmpwZ1wiLGJvZHk6IFwiRm9yZCBNdXN0YW5nIEdUNTAwIGltYWdlXCJ9LFxuICB7aWQ6IDYsdGl0bGU6XCJOaXNzYW4gMzUwelwiLGltYWdlVXJsOlwiLi9Bc3NldHMvMzUwei5qcGdcIixib2R5OiBcIk5pc3NhbiAzNTB6IGltYWdlXCJ9XG5dO1xuY29uc3QgY29tbWVudHM6IENvbW1lbnRzW10gPSBbXG4gIHtpZDogMSxwb3N0bGQ6MSxlbWFpbDpcImpvYW9AZW1haWwuY29tXCIsYm9keTogXCJOaWNlXCJ9LFxuICB7aWQ6IDIscG9zdGxkOjIsZW1haWw6XCJQZWRyb0BlbWFpbC5jb21cIixib2R5OiBcInRoZSBHb2R6aWxsYSBjYXJcIn0sXG4gIHtpZDogMyxwb3N0bGQ6MixlbWFpbDpcImphY2t0Y0BlbWFpbC5jb21cIixib2R5OiBcIldoYWF0IHRoYXMgYW1hemluZ1wifSxcbiAge2lkOiA0LHBvc3RsZDoxLGVtYWlsOlwidGVjOUBlbWFpbC5jb21cIixib2R5OiBcIldhaXQgaXMgdGhhdCBhIFN1cHJhYWFhYVwifSxcbiAge2lkOiA1LHBvc3RsZDoxLGVtYWlsOlwicm9kbmVyQGVtYWlsLmNvbVwiLGJvZHk6IFwiQW1hemluZyBDYXJcIn0sXG4gIHtpZDogNixwb3N0bGQ6MSxlbWFpbDpcImpqQ2FybG9zQGVtYWlsLmNvbVwiLGJvZHk6IFwiPDNcIn0sXG4gIHtpZDogNyxwb3N0bGQ6MyxlbWFpbDpcImpvYW9UckBlbWFpbC5jb21cIixib2R5OiBcIk5pY2VcIn0sXG4gIHtpZDogOCxwb3N0bGQ6MyxlbWFpbDpcInBlZHJpbkBlbWFpbC5jb21cIixib2R5OiBcInRoaXMgYSBGMSBzdHJlZXQgY2FyXCJ9LFxuICB7aWQ6IDkscG9zdGxkOjUsZW1haWw6XCJqYWNrSkpAZW1haWwuY29tXCIsYm9keTogXCJtdXNjbGUgYW1lcmljYW4gY2FyXCJ9LFxuICB7aWQ6IDEwLHBvc3RsZDo0LGVtYWlsOlwiNjl4MDZAZW1haWwuY29tXCIsYm9keTogXCJOaWNlIGpkbVwifSxcbiAge2lkOiAxMSxwb3N0bGQ6NCxlbWFpbDpcIkFsZXhAZW1haWwuY29tXCIsYm9keTogXCJTZW5uYSBoZWxwZWQgbWFrZSB0aGlzIGNhclwifSxcbiAge2lkOiAxMixwb3N0bGQ6NixlbWFpbDpcIkNhcmxvc0BlbWFpbC5jb21cIixib2R5OiBcIlRva3lvIERyaWZ0XCJ9LFxuICB7aWQ6IDEzLHBvc3RsZDozLGVtYWlsOlwiQ2FybGluQGVtYWlsLmNvbVwiLGJvZHk6IFwiTmljZVwifSxcbiAge2lkOiAxNCxwb3N0bGQ6NixlbWFpbDpcIkFuYUBlbWFpbC5jb21cIixib2R5OiBcIkZhc3QgYW5kIEZ1cmlvdXMgamRtXCJ9LFxuICB7aWQ6IDE1LHBvc3RsZDo1LGVtYWlsOlwiTWFyeUphY2tAZW1haWwuY29tXCIsYm9keTogXCJXaGFhdCB0aGFzIGFtYXppbmdcIn0sXG4gIHtpZDogMTYscG9zdGxkOjUsZW1haWw6XCJOaWdodFdvbGZAZW1haWwuY29tXCIsYm9keTogXCJ0aGlzIGlzIFNoZWxieT9cIn0sXG4gIHtpZDogMTcscG9zdGxkOjQsZW1haWw6XCJ3d3RzQGVtYWlsLmNvbVwiLGJvZHk6IFwiQW1hemluZyBDYXJcIn0sXG4gIHtpZDogMTgscG9zdGxkOjYsZW1haWw6XCJqanh0QGVtYWlsLmNvbVwiLGJvZHk6IFwiRHJpZnQga2luZ1wifVxuXTtcbi8qdGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIGh0bWwgcGFyYW1ldGVycyBmb3IgdGhlIGNyZWF0aW9uIG9mIGVhY2ggcG9zdCovXG5jb25zdCBwb3N0Q2FyZCA9ICh7IGJvZHksIGlkLCBpbWFnZVVybCwgdGl0bGUgfTogUG9zdCkgPT4gYFxuPGRpdiBjbGFzcz0ncG9zdCc+XG4gIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ncG9zdC1idG4nIGlkPScke2lkfSc+XG4gICAgPGltZyBzcmM9JyR7aW1hZ2VVcmx9JyBhbHQ9JyR7Ym9keX0nIC8+XG4gICAgPGRpdj5cbiAgICAgIDxwPiR7dGl0bGV9PC9wPlxuICAgIDwvZGl2PlxuICA8L2J1dHRvbj5cbjwvZGl2PlxuYDtcblxuLyp0aGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgaHRtbCBwYXJhbWV0ZXJzIGZvciB0aGUgY3JlYXRpb24gb2YgZWFjaFxuIGNvbW1lbnQgb24gaXRzIHJlc3BlY3RpdmUgcG9zdCovXG5jb25zdCBjb21tZW50c0NhcmQgPSAoeyBib2R5LCBpZCwgZW1haWwgfTogQ29tbWVudHMgKSA9PiBcbmA8ZGl2IGNsYXNzPSdjb21tZW50cydpZD0nJHtpZH0nPlxuICAgIDxkaXY+XG4gICAgICA8cD4ke2VtYWlsfTogPHN0cm9uZz5cbiAgICAgICR7Ym9keX08L3N0cm9uZz48L3A+XG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuLyppbiB0aGlzIGZ1bmN0aW9uIGFuZCBidWlsdCBmcm9tIHRoZSBoZWFkZXIgb2YgdGhlIGJsb2cgcGFnZSovXG5jb25zdCBoZWFkZXIgPSBgXG4gIDxoZWFkZXIgY2xhc3M9XCJIZWFkZXJcIj5cbiAgICA8bmF2IGNsYXNzPVwiSGVhZGVyTWVudVwiPlxuICAgICAgICA8YSBjbGFzcz1cIkhlYWRlck1lbnVfbGlua1wiIGhyZWY9XCJpbmRleC5odG1sXCI+SG9tZTwvYT5cbiAgICA8L25hdj5cbiAgPC9oZWFkZXI+XG4gIDxzZWN0aW9uIGNsYXNzPVwicHJlc2VudGF0aW9uX2NvbnRlbnRcIj5cbiAgICAgIDxoMT5cbiAgICAgICAgICA8YSBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZVwiPjxzdHJvbmc+XG4gICAgICAgICAgICAgIFN1cGVyIGNhcjxzdHJvbmcgY2xhc3M9XCJwcmVzZW50YXRpb25fVGl0bGVfc3ViXCI+czwvc3Ryb25nPi5cbiAgICAgICAgICA8L3N0cm9uZz48L2E+XG4gICAgICA8L2gxPlxuICAgICAgPHAgY2xhc3M9XCJwcmVzZW50YXRpb25fVGV4dFwiPlxuICAgICAgICAgIEhlbGxvLCBpbiB0aGlzIGJsb2cgaSB3aWxsIFxuICAgICAgICAgIGludHJvZHVjZSBzb21lIG9mIHRoZSBtb3N0IGljb25pYyBjYXJzIGluIGhpc3RvcnkuIFxuICAgICAgPC9wPlxuICA8L3NlY3Rpb24+XG5gXG4vKiB0aGlzIGZ1bmN0aW9uIGFuZCBidWlsdCBmcm9tIHRoZSBoZWFkZXIgb2YgdGhlIENvbW1lbnRzIHBhZ2UqL1xuY29uc3QgY29tbWVudHNIZWFkZXIgPSBgXG4gIDxoZWFkZXIgY2xhc3M9XCJIZWFkZXJcIj5cbiAgICA8bmF2IGNsYXNzPVwiSGVhZGVyTWVudVwiPlxuICAgICAgICA8YSBjbGFzcz1cIkhlYWRlck1lbnVfbGlua1wiIGhyZWY9XCJpbmRleC5odG1sXCI+IEhvbWU8L2E+XG4gICAgPC9uYXY+XG4gIDwvaGVhZGVyPlxuICA8c2VjdGlvbiBjbGFzcz1cInByZXNlbnRhdGlvbl9jb250ZW50XCI+XG4gICAgPGgxPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZVwiPjxzdHJvbmc+XG4gICAgICAgICAgICBTdXBlciBjYXI8c3Ryb25nIGNsYXNzPVwicHJlc2VudGF0aW9uX1RpdGxlX3N1YlwiPnM8L3N0cm9uZz4uXG4gICAgICAgIDwvc3Ryb25nPjwvYXJ0aWNsZT5cbiAgICA8L2gxPlxuICA8L3NlY3Rpb24+XG5gXG4vL2VsZW1lbnQgc2VhcmNoIGluIHRoZSBET01cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbmxldCBodG1sID0gJydcblxuaWYgKGNvbnRhaW5lcikge1xuICBodG1sICs9IGhlYWRlci8vY29uY2F0ZW5hdGlvbiBvZiBIZWFkZXJcblxuICBmb3IgKGNvbnN0IHBvc3REYXRhIG9mIHBvc3RzKSB7ICAvL2NvbmNhdGVuYXRpb24gb2YgYmxvZyBwb3N0c1xuICAgIGh0bWwgKz0gcG9zdENhcmQocG9zdERhdGEpXG4gIH1cbiAgLy9Gb290ZXIgb2YgYmxvZ1xuICBodG1sICs9IGBcbiAgICA8Zm9vdGVyPkJ5OiBHYWJyaWVsIE1vcmFlczwvZm9vdGVyPlxuICBgXG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxcblxuICBjb25zdCBoYW5kbGVTaG93UG9zdCA9IChwb3N0SWQ6IG51bWJlcikgPT4ge1xuXG4gICAgaHRtbCA9ICcnXG4gICAgaHRtbCArPSBjb21tZW50c0hlYWRlclxuXG4gICAgZm9yIChjb25zdCBwb3N0RGF0YSBvZiBwb3N0cykgeyAvL3NlYXJjaCBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2VcbiAgICAgIGlmKHBvc3REYXRhLmlkID09IHBvc3RJZCl7IFxuICAgICAgICAvL2h0bWwgY29ycmVzcG9uZGluZyBvZiB0aGUgaW1hZ2VcbiAgICAgICAgaHRtbCArPSBgXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgc3JjPScke3Bvc3REYXRhLmltYWdlVXJsfScgYWx0PScke3Bvc3REYXRhLmJvZHl9JyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBjb21tZW50c0RhdGEgb2YgY29tbWVudHMpIHsvL2NvbXBhcmlzb24gaWYgaWQgbWF0Y2hlc1xuICAgICAgaWYoY29tbWVudHNEYXRhLnBvc3RsZCA9PSBwb3N0SWQpe1xuICAgICAgICBodG1sICs9IGNvbW1lbnRzQ2FyZChjb21tZW50c0RhdGEpXG4gICAgICB9ICBcbiAgICB9XG4gXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxcblxuICB9XG5cbiAgY29uc3QgcG9zdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9zdC1idG4nKTtcbiAgcG9zdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgey8vY2xpY2sgZnVuY3Rpb25cbiAgICAgIC8vc2VhcmNoIGZvciB0aGUgY29ycmVzcG9uZGluZyBpZFxuICAgICAgaGFuZGxlU2hvd1Bvc3QodGhpcy5pZClcblxuICAgIH0pO1xuICB9KTtcbn1cbmVsc2V7XG4gICAgY29uc29sZS5sb2coXCJFcnJvISBub3QgZm91bmQuXCIpO1xufSJdfQ==