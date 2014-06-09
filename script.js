document.body.onload = addElement;
// document.body.onload = addClick;
function addElement () {
  // create a new div element 
  // and give it some content 
  var newArticle = document.createElement("article"); 
  var newh1 = document.createElement("h1");
  var newp1 = document.createElement("p");
  var title = document.createElement('title');

  var newFirsth1 = document.createElement("h1");
  var newh1Content = document.createTextNode("My Second Blog Post");
  var newP1Content = document.createTextNode("This is a blog post about really awesome stuff I've done in JavaScript.");
  var newFirsth1Content = document.createTextNode("My First Blog Post");
  var newTitleContent = document.createTextNode("My JavaScript Blog");
 //add the text node to the newly created div. 
  // add the newly created element and its content into the DOM 


  newFirsth1.appendChild(newFirsth1Content);
  newh1.appendChild(newh1Content);
  newp1.appendChild(newP1Content);
  newArticle.appendChild(newh1);
  newArticle.appendChild(newp1);
  title.appendChild(newTitleContent);

  myHead = document.getElementsByTagName("head");
  myArticles = document.getElementsByTagName("article"); 
  myP = document.getElementsByTagName("p");
  document.body.insertBefore(newArticle, myArticles[0]);
  myArticles[1].insertBefore(newFirsth1, myP[1]);
  myHead[0].insertBefore(title);


  Array.prototype.slice.call(myArticles).forEach(function(article) {
    // console.log(article);
    console.log(document.getElementsByTagName("h1"));
    Array.prototype.slice.call(article).forEach(function(articleContents) {
      console.log(articleContents);
      articleContents.addEventListener("click", function(event) {
        event.target.innerHTML = "";
      }, false);
    });

  });



}

function addClick() {

}

