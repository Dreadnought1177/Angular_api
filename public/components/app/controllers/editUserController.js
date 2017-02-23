myApp.controller('editUserController',['$scope','user_factory','$state','user_info',editUserController]);

function editUserController($scope, user_factory,$state,user_info){
    $scope.users = user_factory.query();
    $scope.current_user = user_info.current_user.username;
    $scope.edit_user = user_info.editUser;
    $scope.getDatetime = new Date();
    $scope.edit = {};
    console.log("this is the edit user that I want++++++++++++++++++++++",$scope.edit_user);


    $scope.edited_user = user_factory.get({pk:String($scope.edit_user)},function(){
        console.log("got the user to edit and the info is", $scope.edited_user)
    });

    $scope.change_info = function () {
        console.log("this is the data",$scope.edited_user);
        user_factory.update({pk:String($scope.edit_user)},$scope.edited_user)
    };
    $scope.description = function () {
        console.log("this is the data", $scope.edit);
        console.log($scope.edit_user);
        data = user_factory.get({pk: String($scope.edit_user)},function () {
            data.description = $scope.edit.descript
            user_factory.update({pk:String($scope.edit_user)},data)
            $scope.edit = {};
        });
    };
    $scope.pass_word = function () {
        data = user_factory.get({pk:String($scope.edit_user)},function () {
            console.log(data.password);
            if($scope.edit.password == $scope.edit.pass_conf){
                data.password = $scope.edit.password;
                user_factory.update({pk:String($scope.edit_user)},data)
            }else{
                console.log("passwords do not match")}});
                $scope.passError = "Passwords Do Not Match"
    };

    $scope.change_page = function () {
        $state.go("homePage")
    };

    return $scope
};
