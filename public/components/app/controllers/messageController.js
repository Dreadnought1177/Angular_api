myApp.controller('messageController',['$scope','user_factory','post_factory','$state','user_info',messageController]);

function messageController($scope, user_factory,post_factory,$state, user_info){
    $scope.getDatetime = new Date();
    $scope.users = user_factory.query();
    $scope.messages = post_factory.query();
    $scope.user_level = user_info.current_user.user_level;
    $scope.messanger = user_info.editUser;
    $scope.current_user = user_info.current_user;


    $scope.users.$promise.then(function (data) {
        for(i = 0; i<data.length; i++){
          if( data[i].email == user_info.current_user.email){
              user_info.current_user = data[i];}}
    });
    $scope.add_message = function () {
        var data = {
                'author':user_info.current_user.username,
                'text': $scope.message.text,
                'messanger': $scope.messanger.username,
                'comments': [{
                    'author':'Chase',
                    'text':'Great message! Change your user level in the edit user page to see how the dashboard changes to reflect your user level. Create another user at the start page to change your user level back. You can also add a description by editing your profile by clicking on your name at the dashboard page.',
                    'created_at':$scope.getDatetime,
                    'updated_at':$scope.getDatetime
                }],
                'created_at':$scope.getDatetime,
                'updated_at':$scope.getDatetime
            };
        post_factory.save(data, function(){
            $scope.messages = post_factory.query();
            $scope.message = {}})
    };

    $scope.add_comment = function (_id) {
        $scope.comment  = {
            'author': user_info.current_user.username,
            'text' : $scope.comm.text,
            'created_at':$scope.getDatetime,
            'updated_at':$scope.getDatetime
        };
        $scope.get_it = post_factory.get({pk:String(_id)}, function () {
        });
         $scope.get_it.$promise.then(function(data){
             if(data.hasOwnProperty('errors')){
                 $scope.commentErrors = data.errors
                 console.log("data Errors:",data.errors)
             }else{
                $scope.add_to_message = data;
                $scope.add_to_message.comments.push($scope.comment);
                post_factory.update({pk:String(_id)},$scope.add_to_message, function () {
                     $scope.messages = post_factory.query();
                     $scope.comm = {};})}})
    };

    $scope.find_user = function (username) {
        console.log("username:",username);
        for(var i = 0; i<$scope.users.length; i++){
            console.log("data****:",$scope.users[i].username);
            console.log("username:",username);
            if($scope.users[i].username == username){
                $scope.message_user($scope.users[i].id)
            }}
    };

    $scope.remove_user = function(_id){
        user_factory.remove({pk:_id}, function (){
            $scope.users = user_factory.query();
        });
    };
    $scope.edit_profile = function (_id) {
        user_info.editUser = _id;
        $state.go("editProfile")
    };
    $scope.edit_user = function(_id) {
        user_info.editUser = _id;
        $state.go("editUser");
    };
    $scope.message_user = function(_id) {
        user = user_factory.get({pk:String(_id)}, function () {});
        user_info.editUser = user;
        $state.go("messageBoard");
    };
    $scope.message_user = function(_id) {
        user = user_factory.get({pk:String(_id)}, function () {});
        user_info.editUser = user;
        $state.go("messageBoard");
    };
    $scope.create_user = function () {
      $state.go("createUser")
    };

    return $scope
};

// snippet_factory.remove({pk:'5882fad8a9c81f1e3c978c84' }, function () {
       //          console.log("Deleted");
       //  });
 // $scope.tool_1 = new tool_factory();
        // $scope.tool_1 = {label: "not chase",description:"not a descript"}
        // tool_factory.save($scope.tool_1, function () {
        //     console.log($scope.tool_1)