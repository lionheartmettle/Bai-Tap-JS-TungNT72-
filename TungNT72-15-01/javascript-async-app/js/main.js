(function() {
  var app = angular.module("myApp", []);

  app.controller("demoCtrl", ["$scope", DemoController]);

  const USER_API = "https://jsonplaceholder.typicode.com/users";
  const POST_API = "https://jsonplaceholder.typicode.com/posts";
  const COMMENT_API = "https://jsonplaceholder.typicode.com/comments";

  function getData(url) {
    return new Promise(function(resolve, reject) {
      $.get(url, function(data) {
        resolve(data);
      });
    });
  }
  // Dung fetch de get API thay vi dung $.get cua Jquery.
  function getData2(url) {
    return fetch(url).then(response => response.json());
  }

  function getPostById(id) {
    return getData(POST_API + "?userId=" + id);
  }

  function getCommentById(id) {
    return getData(COMMENT_API + "?postId=" + id);
  }

  function DemoController($scope) {
    // Your Code Here
    //Cach dung Async Await
    // let myUsers;
    // (async function() {
    //   await $.get(USER_API, function(users) {
    //     myUsers = users;
    //   });
    //   myUsers.map(async function(user, index1) {
    //     await $.get(POST_API + "?userId=" + user.id, function(posts) {
    //       myUsers[index1].posts = posts;
    //       user.posts.map(async function(post, index2) {
    //         await $.get(COMMENT_API + "?postId=" + post.id, function(comments) {
    //           myUsers[index1].posts[index2].comments = comments;
    //           $scope.$apply(function() {
    //             $scope.users = myUsers;
    //           });
    //         });
    //       });
    //     });
    //   });
    //   console.log(myUsers);
    // })();

    //Cach dung promiseAll :
    let myUser;
    getData(USER_API)
      .then(users => {
        myUser = users;
        return Promise.all(
          users.map(user => {
            return getPostById(user.id);
          })
        );
      })
      .then((listPosts) => {
        return Promise.all(listPosts.map((posts,index) => {
          myUser[index].posts = posts;
          return Promise.all(posts.map((post) => {
            return getCommentById(post.id);
          }));
        }));
      })
      //.then((data) => {console.log(data);return Promise.all(data)})
      .then((us) => {
        //console.log(us);
        us.map((u,index1) => {
          u.map((p,index2) => {
            myUser[index1].posts[index2].comments = p;
          });
        });
        $scope.$apply(function() {
          $scope.users = myUser;
        });
      });

    // Cach dung promise (bi hell)
    // let listComment;
    // getData(USER_API).then(function(users) {
    //   listComment = users;
    //   return users.map(function(user, indexU) {
    //     return getPostById(user.id).then(function(posts) {
    //       listComment[indexU].posts = posts;
    //       return posts.map(function(post, indexP) {
    //         return getCommentById(post.id).then(function(comments) {
    //           listComment[indexU].posts[indexP].comments = comments;
    //           //console.log(comments);
    //           return comments.map(function(comment, indexC) {
    //             // console.log(comment);
    //             listComment[indexU].posts[indexP].comments[
    //               indexC
    //             ].comment = comment;
    //             $scope.$apply(function() {
    //               $scope.users = listComment;
    //             });
    //           });
    //         });
    //       });
    //     });
    //   });
    // });

    // Dung CallBack :
    // var listComment = [];
    // $.get("https://jsonplaceholder.typicode.com/users", function(users) {
    //   users.map(function(i) {
    //     let temp = { id: i.id };
    //     temp.posts = [];
    //     let link = "https://jsonplaceholder.typicode.com/posts?userId=" + i.id;
    //     $.get(link, function(posts) {
    //       posts.map(function(j) {
    //         let tempPost = { userId: temp.id, id: j.id, title: j.title };
    //         tempPost.comments = [];
    //         let link =
    //           "https://jsonplaceholder.typicode.com/comments?postId=" + j.id;
    //         $.get(link, function(comments) {
    //           comments.map(function(z) {
    //             let tempComment = { postId: tempPost.id, id: z.id };
    //             tempComment.name = z.name;
    //             tempPost.comments.push(tempComment);
    //             $scope.$apply(function() {
    //               $scope.users = listComment;
    //             });
    //           });
    //         });
    //         temp.posts.push(tempPost);
    //       });
    //     });
    //     listComment.push(temp);
    //   });
    // });

    // Cach dung AJAX
    // $.ajax({
    //   url: "https://jsonplaceholder.typicode.com/users"
    // })
    // .done((data) => {
    //   console.log(data);
    // })

    // $.get("https://jsonplaceholder.typicode.com/posts?userId=2", function(post) {
    //   console.log(post);
    //   return post;
    // });
    // $.get("https://jsonplaceholder.typicode.com/comments?postId=1", function(post) {
    //   console.log(post);
    //   return post;
    // });
  }
})();
