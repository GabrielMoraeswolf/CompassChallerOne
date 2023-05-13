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
    { id: 7, postld: 3, email: "joaoTr@email.com", body: "Nice, very nice" },
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
export {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sS0FBSyxHQUFXO0lBQ3BCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLG9CQUFvQixFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQztJQUM3RixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFDO0lBQzdGLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyx3QkFBd0IsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUM7SUFDbkYsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLHdCQUF3QixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztJQUNuRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFDLG9CQUFvQixFQUFDLFFBQVEsRUFBQyx5QkFBeUIsRUFBQyxJQUFJLEVBQUUsMEJBQTBCLEVBQUM7SUFDdEcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsUUFBUSxFQUFDLG1CQUFtQixFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQztDQUNuRixDQUFDO0FBQ0YsTUFBTSxRQUFRLEdBQWU7SUFDM0IsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUM7SUFDcEQsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBRSxr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LElBQUksQ0FBQTtJQUU1QixDQUFDLENBQUE7SUFFRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7WUFDL0IsaUNBQWlDO1lBQ2pDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFFekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztDQUNKO0tBQ0c7SUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Q0FDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudHMgZnJvbSAnLi9Db21tZW50cy9pbnRlcmZhY2UnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3RzL2ludGV0ZmFjZSc7XHJcblxyXG5jb25zdCBwb3N0czogUG9zdFtdID0gW1xyXG4gIHtpZDogMSx0aXRsZTpcIlRveW90YSBTdXByYSBtazRcIixpbWFnZVVybDpcIi4vQXNzZXRzL3N1cHJhLmpwZ1wiLGJvZHk6IFwiVG95b3RhIFN1cHJhIG1rNCBpbWFnZVwifSxcclxuICB7aWQ6IDIsdGl0bGU6XCJOaXNzYW4gR3RyXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9uaXNzYW4tZ3RyLTM1LmpwZ1wiLGJvZHk6IFwiTmlzc2FuIEd0ci1SMzUgaW1hZ2VcIn0sXHJcbiAge2lkOiAzLHRpdGxlOlwiTGV4dXMgTEZBXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9sZXh1cy1sZmEuanBnXCIsYm9keTogXCJMZXh1cyBMRkEgaW1hZ2VcIn0sXHJcbiAge2lkOiA0LHRpdGxlOlwiSG9uZGEgTlNYXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9ob25kYS1OU1guanBnXCIsYm9keTogXCJIb25kYSBOU1ggaW1hZ2VcIn0sXHJcbiAge2lkOiA1LHRpdGxlOlwiRm9yZCBNdXN0YW5nIEdUNTAwXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9tdXN0YW5nLWd0LmpwZ1wiLGJvZHk6IFwiRm9yZCBNdXN0YW5nIEdUNTAwIGltYWdlXCJ9LFxyXG4gIHtpZDogNix0aXRsZTpcIk5pc3NhbiAzNTB6XCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy8zNTB6LmpwZ1wiLGJvZHk6IFwiTmlzc2FuIDM1MHogaW1hZ2VcIn1cclxuXTtcclxuY29uc3QgY29tbWVudHM6IENvbW1lbnRzW10gPSBbXHJcbiAge2lkOiAxLHBvc3RsZDoxLGVtYWlsOlwiam9hb0BlbWFpbC5jb21cIixib2R5OiBcIk5pY2VcIn0sXHJcbiAge2lkOiAyLHBvc3RsZDoyLGVtYWlsOlwiUGVkcm9AZW1haWwuY29tXCIsYm9keTogXCJ0aGUgR29kemlsbGEgY2FyXCJ9LFxyXG4gIHtpZDogMyxwb3N0bGQ6MixlbWFpbDpcImphY2t0Y0BlbWFpbC5jb21cIixib2R5OiBcIldoYWF0IHRoYXMgYW1hemluZ1wifSxcclxuICB7aWQ6IDQscG9zdGxkOjEsZW1haWw6XCJ0ZWM5QGVtYWlsLmNvbVwiLGJvZHk6IFwiV2FpdCBpcyB0aGF0IGEgU3VwcmFhYWFhXCJ9LFxyXG4gIHtpZDogNSxwb3N0bGQ6MSxlbWFpbDpcInJvZG5lckBlbWFpbC5jb21cIixib2R5OiBcIkFtYXppbmcgQ2FyXCJ9LFxyXG4gIHtpZDogNixwb3N0bGQ6MSxlbWFpbDpcImpqQ2FybG9zQGVtYWlsLmNvbVwiLGJvZHk6IFwiPDNcIn0sXHJcbiAge2lkOiA3LHBvc3RsZDozLGVtYWlsOlwiam9hb1RyQGVtYWlsLmNvbVwiLGJvZHk6IFwiTmljZSwgdmVyeSBuaWNlXCJ9LFxyXG4gIHtpZDogOCxwb3N0bGQ6MyxlbWFpbDpcInBlZHJpbkBlbWFpbC5jb21cIixib2R5OiBcInRoaXMgYSBGMSBzdHJlZXQgY2FyXCJ9LFxyXG4gIHtpZDogOSxwb3N0bGQ6NSxlbWFpbDpcImphY2tKSkBlbWFpbC5jb21cIixib2R5OiBcIm11c2NsZSBhbWVyaWNhbiBjYXJcIn0sXHJcbiAge2lkOiAxMCxwb3N0bGQ6NCxlbWFpbDpcIjY5eDA2QGVtYWlsLmNvbVwiLGJvZHk6IFwiTmljZSBqZG1cIn0sXHJcbiAge2lkOiAxMSxwb3N0bGQ6NCxlbWFpbDpcIkFsZXhAZW1haWwuY29tXCIsYm9keTogXCJTZW5uYSBoZWxwZWQgbWFrZSB0aGlzIGNhclwifSxcclxuICB7aWQ6IDEyLHBvc3RsZDo2LGVtYWlsOlwiQ2FybG9zQGVtYWlsLmNvbVwiLGJvZHk6IFwiVG9reW8gRHJpZnRcIn0sXHJcbiAge2lkOiAxMyxwb3N0bGQ6MyxlbWFpbDpcIkNhcmxpbkBlbWFpbC5jb21cIixib2R5OiBcIk5pY2VcIn0sXHJcbiAge2lkOiAxNCxwb3N0bGQ6NixlbWFpbDpcIkFuYUBlbWFpbC5jb21cIixib2R5OiBcIkZhc3QgYW5kIEZ1cmlvdXMgamRtXCJ9LFxyXG4gIHtpZDogMTUscG9zdGxkOjUsZW1haWw6XCJNYXJ5SmFja0BlbWFpbC5jb21cIixib2R5OiBcIldoYWF0IHRoYXMgYW1hemluZ1wifSxcclxuICB7aWQ6IDE2LHBvc3RsZDo1LGVtYWlsOlwiTmlnaHRXb2xmQGVtYWlsLmNvbVwiLGJvZHk6IFwidGhpcyBpcyBTaGVsYnk/XCJ9LFxyXG4gIHtpZDogMTcscG9zdGxkOjQsZW1haWw6XCJ3d3RzQGVtYWlsLmNvbVwiLGJvZHk6IFwiQW1hemluZyBDYXJcIn0sXHJcbiAge2lkOiAxOCxwb3N0bGQ6NixlbWFpbDpcImpqeHRAZW1haWwuY29tXCIsYm9keTogXCJEcmlmdCBraW5nXCJ9XHJcbl07XHJcbi8qdGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIGh0bWwgcGFyYW1ldGVycyBmb3IgdGhlIGNyZWF0aW9uIG9mIGVhY2ggcG9zdCovXHJcbmNvbnN0IHBvc3RDYXJkID0gKHsgYm9keSwgaWQsIGltYWdlVXJsLCB0aXRsZSB9OiBQb3N0KSA9PiBgXHJcbjxkaXYgY2xhc3M9J3Bvc3QnPlxyXG4gIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0ncG9zdC1idG4nIGlkPScke2lkfSc+XHJcbiAgICA8aW1nIHNyYz0nJHtpbWFnZVVybH0nIGFsdD0nJHtib2R5fScgLz5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPiR7dGl0bGV9PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9idXR0b24+XHJcbjwvZGl2PlxyXG5gO1xyXG5cclxuLyp0aGlzIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgaHRtbCBwYXJhbWV0ZXJzIGZvciB0aGUgY3JlYXRpb24gb2YgZWFjaFxyXG4gY29tbWVudCBvbiBpdHMgcmVzcGVjdGl2ZSBwb3N0Ki9cclxuY29uc3QgY29tbWVudHNDYXJkID0gKHsgYm9keSwgaWQsIGVtYWlsIH06IENvbW1lbnRzICkgPT4gXHJcbmA8ZGl2IGNsYXNzPSdjb21tZW50cydpZD0nJHtpZH0nPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+JHtlbWFpbH06IDxzdHJvbmc+XHJcbiAgICAgICR7Ym9keX08L3N0cm9uZz48L3A+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuLyppbiB0aGlzIGZ1bmN0aW9uIGFuZCBidWlsdCBmcm9tIHRoZSBoZWFkZXIgb2YgdGhlIGJsb2cgcGFnZSovXHJcbmNvbnN0IGhlYWRlciA9IGBcclxuICA8aGVhZGVyIGNsYXNzPVwiSGVhZGVyXCI+XHJcbiAgICA8bmF2IGNsYXNzPVwiSGVhZGVyTWVudVwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwiSGVhZGVyTWVudV9saW5rXCIgaHJlZj1cImluZGV4Lmh0bWxcIj5Ib21lPC9hPlxyXG4gICAgPC9uYXY+XHJcbiAgPC9oZWFkZXI+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJwcmVzZW50YXRpb25fY29udGVudFwiPlxyXG4gICAgICA8aDE+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZVwiPjxzdHJvbmc+XHJcbiAgICAgICAgICAgICAgU3VwZXIgY2FyPHN0cm9uZyBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZV9zdWJcIj5zPC9zdHJvbmc+LlxyXG4gICAgICAgICAgPC9zdHJvbmc+PC9hPlxyXG4gICAgICA8L2gxPlxyXG4gICAgICA8cCBjbGFzcz1cInByZXNlbnRhdGlvbl9UZXh0XCI+XHJcbiAgICAgICAgICBIZWxsbywgaW4gdGhpcyBibG9nIGkgd2lsbCBcclxuICAgICAgICAgIGludHJvZHVjZSBzb21lIG9mIHRoZSBtb3N0IGljb25pYyBjYXJzIGluIGhpc3RvcnkuIFxyXG4gICAgICA8L3A+XHJcbiAgPC9zZWN0aW9uPlxyXG5gXHJcbi8qIHRoaXMgZnVuY3Rpb24gYW5kIGJ1aWx0IGZyb20gdGhlIGhlYWRlciBvZiB0aGUgQ29tbWVudHMgcGFnZSovXHJcbmNvbnN0IGNvbW1lbnRzSGVhZGVyID0gYFxyXG4gIDxoZWFkZXIgY2xhc3M9XCJIZWFkZXJcIj5cclxuICAgIDxuYXYgY2xhc3M9XCJIZWFkZXJNZW51XCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJIZWFkZXJNZW51X2xpbmtcIiBocmVmPVwiaW5kZXguaHRtbFwiPiBIb21lPC9hPlxyXG4gICAgPC9uYXY+XHJcbiAgPC9oZWFkZXI+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJwcmVzZW50YXRpb25fY29udGVudFwiPlxyXG4gICAgPGgxPlxyXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicHJlc2VudGF0aW9uX1RpdGxlXCI+PHN0cm9uZz5cclxuICAgICAgICAgICAgU3VwZXIgY2FyPHN0cm9uZyBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZV9zdWJcIj5zPC9zdHJvbmc+LlxyXG4gICAgICAgIDwvc3Ryb25nPjwvYXJ0aWNsZT5cclxuICAgIDwvaDE+XHJcbiAgPC9zZWN0aW9uPlxyXG5gXHJcbi8vZWxlbWVudCBzZWFyY2ggaW4gdGhlIERPTVxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxubGV0IGh0bWwgPSAnJ1xyXG5cclxuaWYgKGNvbnRhaW5lcikge1xyXG4gIGh0bWwgKz0gaGVhZGVyLy9jb25jYXRlbmF0aW9uIG9mIEhlYWRlclxyXG5cclxuICBmb3IgKGNvbnN0IHBvc3REYXRhIG9mIHBvc3RzKSB7ICAvL2NvbmNhdGVuYXRpb24gb2YgYmxvZyBwb3N0c1xyXG4gICAgaHRtbCArPSBwb3N0Q2FyZChwb3N0RGF0YSlcclxuICB9XHJcbiAgLy9Gb290ZXIgb2YgYmxvZ1xyXG4gIGh0bWwgKz0gYFxyXG4gICAgPGZvb3Rlcj5CeTogR2FicmllbCBNb3JhZXM8L2Zvb3Rlcj5cclxuICBgXHJcblxyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dQb3N0ID0gKHBvc3RJZDogbnVtYmVyKSA9PiB7XHJcblxyXG4gICAgaHRtbCA9ICcnXHJcbiAgICBodG1sICs9IGNvbW1lbnRzSGVhZGVyXHJcblxyXG4gICAgZm9yIChjb25zdCBwb3N0RGF0YSBvZiBwb3N0cykgeyAvL3NlYXJjaCBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgaW1hZ2VcclxuICAgICAgaWYocG9zdERhdGEuaWQgPT0gcG9zdElkKXsgXHJcbiAgICAgICAgLy9odG1sIGNvcnJlc3BvbmRpbmcgb2YgdGhlIGltYWdlXHJcbiAgICAgICAgaHRtbCArPSBgXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz0nJHtwb3N0RGF0YS5pbWFnZVVybH0nIGFsdD0nJHtwb3N0RGF0YS5ib2R5fScgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGNvbW1lbnRzRGF0YSBvZiBjb21tZW50cykgey8vY29tcGFyaXNvbiBpZiBpZCBtYXRjaGVzXHJcbiAgICAgIGlmKGNvbW1lbnRzRGF0YS5wb3N0bGQgPT0gcG9zdElkKXtcclxuICAgICAgICBodG1sICs9IGNvbW1lbnRzQ2FyZChjb21tZW50c0RhdGEpXHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbFxyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHBvc3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3QtYnRuJyk7XHJcbiAgcG9zdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7Ly9jbGljayBmdW5jdGlvblxyXG4gICAgICAvL3NlYXJjaCBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgaWRcclxuICAgICAgaGFuZGxlU2hvd1Bvc3QodGhpcy5pZClcclxuXHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5lbHNle1xyXG4gICAgY29uc29sZS5sb2coXCJFcnJvISBub3QgZm91bmQuXCIpO1xyXG59Il19