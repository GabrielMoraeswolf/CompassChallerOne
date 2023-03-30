"use strict";
const posts = [
    { id: 1, title: "Toyota Supra mk4", imageUrl: "./Assets/supra.jpg", body: "Toyota Supra mk4 image" },
    { id: 2, title: "Nissan Gtr", imageUrl: "./Assets/nissan-gtr-35.jpg", body: "Nissan Gtr-R35 image" }
];
const comments = [
    { id: 1, postld: 1, email: "joao@email.com", body: "Nice" },
    { id: 2, postld: 2, email: "Pedro@email.com", body: "the Godzilla car" }
];
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
const commentsCard = ({ body, id, email }) => `<div class='comments'id='${id}'>
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
`;
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
const container = document.getElementById('main');
let html = '';
if (container) {
    html += header;
    for (const postData of posts) {
        html += postCard(postData);
    }
    html += `
    <footer>rodapé</footer>
  `;
    container.innerHTML = html;
    const handleShowPost = (postId) => {
        html = '';
        html += commentsHeader;
        for (const commentsData of comments) {
            if (commentsData.postld == postId) {
                html += commentsCard(commentsData);
            }
        }
        container.innerHTML = html;
    };
    const postButtons = document.querySelectorAll('.post-btn');
    postButtons.forEach((button) => {
        button.addEventListener('click', function () {
            handleShowPost(this.id);
        });
    });
}
else {
    console.log("nao encontrado");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWFBLE1BQU0sS0FBSyxHQUFXO0lBQ3BCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxLQUFLLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLG9CQUFvQixFQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBQztJQUM3RixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFDO0NBQzlGLENBQUM7QUFDRixNQUFNLFFBQVEsR0FBZTtJQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztJQUNwRCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFDO0NBQ2xFLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFRLEVBQUUsRUFBRSxDQUFDOzsrQ0FFWCxFQUFFO2dCQUNqQyxRQUFRLFVBQVUsSUFBSTs7V0FFM0IsS0FBSzs7OztDQUlmLENBQUM7QUFHRixNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQVksRUFBRyxFQUFFLENBQ3hELDRCQUE0QixFQUFFOztXQUVuQixLQUFLO1FBQ1IsSUFBSTs7T0FFTCxDQUFDO0FBRVIsTUFBTSxNQUFNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUJkLENBQUE7QUFDRCxNQUFNLGNBQWMsR0FBRzs7Ozs7Ozs7Ozs7OztDQWF0QixDQUFBO0FBQ0QsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUVqRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7QUFFYixJQUFJLFNBQVMsRUFBRTtJQUNiLElBQUksSUFBSSxNQUFNLENBQUE7SUFFZCxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssRUFBRTtRQUM1QixJQUFJLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0tBQzNCO0lBQ0QsSUFBSSxJQUFJOztHQUVQLENBQUE7SUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQTtJQUUxQixNQUFNLGNBQWMsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO1FBRXhDLElBQUksR0FBRyxFQUFFLENBQUE7UUFDVCxJQUFJLElBQUksY0FBYyxDQUFBO1FBQ3RCLEtBQUssTUFBTSxZQUFZLElBQUksUUFBUSxFQUFFO1lBQ25DLElBQUcsWUFBWSxDQUFDLE1BQU0sSUFBSSxNQUFNLEVBQUM7Z0JBQy9CLElBQUksSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7YUFDbkM7U0FDRjtRQUdELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0lBRTVCLENBQUMsQ0FBQTtJQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDN0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtZQUMvQixjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRXpCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7Q0FDSjtLQUNHO0lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFBvc3R7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGltYWdlVXJsIDpzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbn1cbmludGVyZmFjZSBDb21tZW50c3tcbiAgaWQ6IG51bWJlcjtcbiAgcG9zdGxkOiBudW1iZXI7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIGJvZHk6IHN0cmluZztcbn1cblxuY29uc3QgcG9zdHM6IFBvc3RbXSA9IFtcbiAge2lkOiAxLHRpdGxlOlwiVG95b3RhIFN1cHJhIG1rNFwiLGltYWdlVXJsOlwiLi9Bc3NldHMvc3VwcmEuanBnXCIsYm9keTogXCJUb3lvdGEgU3VwcmEgbWs0IGltYWdlXCJ9LFxuICB7aWQ6IDIsdGl0bGU6XCJOaXNzYW4gR3RyXCIsaW1hZ2VVcmw6XCIuL0Fzc2V0cy9uaXNzYW4tZ3RyLTM1LmpwZ1wiLGJvZHk6IFwiTmlzc2FuIEd0ci1SMzUgaW1hZ2VcIn1cbl07XG5jb25zdCBjb21tZW50czogQ29tbWVudHNbXSA9IFtcbiAge2lkOiAxLHBvc3RsZDoxLGVtYWlsOlwiam9hb0BlbWFpbC5jb21cIixib2R5OiBcIk5pY2VcIn0sXG4gIHtpZDogMixwb3N0bGQ6MixlbWFpbDpcIlBlZHJvQGVtYWlsLmNvbVwiLGJvZHk6IFwidGhlIEdvZHppbGxhIGNhclwifVxuXTtcblxuY29uc3QgcG9zdENhcmQgPSAoeyBib2R5LCBpZCwgaW1hZ2VVcmwsIHRpdGxlIH06IFBvc3QpID0+IGBcbjxkaXYgY2xhc3M9J3Bvc3QnPlxuICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J3Bvc3QtYnRuJyBpZD0nJHtpZH0nPlxuICAgIDxpbWcgc3JjPScke2ltYWdlVXJsfScgYWx0PScke2JvZHl9JyAvPlxuICAgIDxkaXY+XG4gICAgICA8cD4ke3RpdGxlfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9idXR0b24+XG48L2Rpdj5cbmA7XG5cblxuY29uc3QgY29tbWVudHNDYXJkID0gKHsgYm9keSwgaWQsIGVtYWlsIH06IENvbW1lbnRzICkgPT4gXG5gPGRpdiBjbGFzcz0nY29tbWVudHMnaWQ9JyR7aWR9Jz5cbiAgICA8ZGl2PlxuICAgICAgPHA+JHtlbWFpbH06IDxzdHJvbmc+XG4gICAgICAke2JvZHl9PC9zdHJvbmc+PC9wPlxuICAgIDwvZGl2PlxuPC9kaXY+YDtcblxuY29uc3QgaGVhZGVyID0gYFxuICA8aGVhZGVyIGNsYXNzPVwiSGVhZGVyXCI+XG4gICAgPG5hdiBjbGFzcz1cIkhlYWRlck1lbnVcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJIZWFkZXJNZW51X2xpbmtcIiBocmVmPVwiaW5kZXguaHRtbFwiPiBIb21lPC9hPlxuICAgIDwvbmF2PlxuICA8L2hlYWRlcj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJwcmVzZW50YXRpb25fY29udGVudFwiPlxuICAgICAgPGgxPlxuICAgICAgICAgIDxhIGNsYXNzPVwicHJlc2VudGF0aW9uX1RpdGxlXCI+PHN0cm9uZz5cbiAgICAgICAgICAgICAgU3VwZXIgY2FyPHN0cm9uZyBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZV9zdWJcIj5zPC9zdHJvbmc+LlxuICAgICAgICAgIDwvc3Ryb25nPjwvYT5cbiAgICAgIDwvaDE+XG4gICAgICA8cCBjbGFzcz1cInByZXNlbnRhdGlvbl9UZXh0XCI+XG4gICAgICAgICAgSGVsbG8sIGluIHRoaXMgYmxvZyBpIHdpbGwgXG4gICAgICAgICAgaW50cm9kdWNlIHNvbWUgb2YgdGhlIG1vc3QgaWNvbmljIGNhcnMgaW4gaGlzdG9yeS4gXG4gICAgICA8L3A+XG4gIDwvc2VjdGlvbj5cbmBcbmNvbnN0IGNvbW1lbnRzSGVhZGVyID0gYFxuICA8aGVhZGVyIGNsYXNzPVwiSGVhZGVyXCI+XG4gICAgPG5hdiBjbGFzcz1cIkhlYWRlck1lbnVcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJIZWFkZXJNZW51X2xpbmtcIiBocmVmPVwiaW5kZXguaHRtbFwiPiBIb21lPC9hPlxuICAgIDwvbmF2PlxuICA8L2hlYWRlcj5cbiAgPHNlY3Rpb24gY2xhc3M9XCJwcmVzZW50YXRpb25fY29udGVudFwiPlxuICAgIDxoMT5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwcmVzZW50YXRpb25fVGl0bGVcIj48c3Ryb25nPlxuICAgICAgICAgICAgU3VwZXIgY2FyPHN0cm9uZyBjbGFzcz1cInByZXNlbnRhdGlvbl9UaXRsZV9zdWJcIj5zPC9zdHJvbmc+LlxuICAgICAgICA8L3N0cm9uZz48L2FydGljbGU+XG4gICAgPC9oMT5cbiAgPC9zZWN0aW9uPlxuYFxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuXG5sZXQgaHRtbCA9ICcnXG5cbmlmIChjb250YWluZXIpIHtcbiAgaHRtbCArPSBoZWFkZXJcblxuICBmb3IgKGNvbnN0IHBvc3REYXRhIG9mIHBvc3RzKSB7ICBcbiAgICBodG1sICs9IHBvc3RDYXJkKHBvc3REYXRhKVxuICB9XG4gIGh0bWwgKz0gYFxuICAgIDxmb290ZXI+cm9kYXDDqTwvZm9vdGVyPlxuICBgXG5cbiAgY29udGFpbmVyLmlubmVySFRNTCA9IGh0bWxcblxuICBjb25zdCBoYW5kbGVTaG93UG9zdCA9IChwb3N0SWQ6IG51bWJlcikgPT4ge1xuXG4gICAgaHRtbCA9ICcnXG4gICAgaHRtbCArPSBjb21tZW50c0hlYWRlclxuICAgIGZvciAoY29uc3QgY29tbWVudHNEYXRhIG9mIGNvbW1lbnRzKSB7XG4gICAgICBpZihjb21tZW50c0RhdGEucG9zdGxkID09IHBvc3RJZCl7XG4gICAgICAgIGh0bWwgKz0gY29tbWVudHNDYXJkKGNvbW1lbnRzRGF0YSlcbiAgICAgIH0gIFxuICAgIH1cbiBcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sXG5cbiAgfVxuXG4gIGNvbnN0IHBvc3RCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvc3QtYnRuJyk7XG4gIHBvc3RCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVNob3dQb3N0KHRoaXMuaWQpXG4gICAgXG4gICAgfSk7XG4gIH0pO1xufVxuZWxzZXtcbiAgICBjb25zb2xlLmxvZyhcIm5hbyBlbmNvbnRyYWRvXCIpO1xufSJdfQ==