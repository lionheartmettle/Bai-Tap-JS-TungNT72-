(function() {
  var app = angular.module("myApp", []);

  app.controller("demoCtrl", ["$scope", DemoController]);

  function DemoController($scope) {
    // Your Code Here
    var listComment = [];
    $.get("https://jsonplaceholder.typicode.com/users", function(users) {
      users.map(function(i) {
        let temp = { id: i.id };
        temp.posts = [];
        let link = "https://jsonplaceholder.typicode.com/posts?userId=" + i.id;
        $.get(link, function(posts) {
          posts.map(function(j) {
            let tempPost = { userId: temp.id, id: j.id, title: j.title };
            tempPost.comments = [];
            let link =
              "https://jsonplaceholder.typicode.com/comments?postId=" + j.id;
            $.get(link, function(comments) {
              comments.map(function(z) {
                let tempComment = { postId: tempPost.id, id: z.id };
                tempComment.name = z.name;
                tempPost.comments.push(tempComment);
                $scope.$apply(function() {
                  $scope.users = listComment;
                });
              });
            });
            temp.posts.push(tempPost);
          });
        });
        listComment.push(temp);
      });
    });
    console.log(listComment);
    // $.get("https://jsonplaceholder.typicode.com/posts?userId=2", function(post) {
    //   console.log(post);
    //   return post;
    // });
    // $.get("https://jsonplaceholder.typicode.com/comments?postId=1", function(post) {
    //   console.log(post);
    //   return post;
    // });

    //}

    //function DemoController($scope) {
    // Your Code Here
    // Callback
    // $.get("https://jsonplaceholder.typicode.com/users", function(users) {
    //   users.forEach((user) => {
    //     $.get(, (posts) => {
    //       user.posts = posts;
    //       posts.forEach((post) => {
    //         $.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, (comments) => {
    //           post.comments = comments;
    //           $scope.$apply(() => {
    //             $scope.users = users;
    //           })
    //         })
    //       });
    //     })
    //   })
    //   console.log(users)
    // });
  }
})();
