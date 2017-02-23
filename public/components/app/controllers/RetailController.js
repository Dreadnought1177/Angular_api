myApp.controller('RetailController', ['$scope','user_factory','$state','user_info',RetailController]);

function RetailController($scope,user_factory,$state,user_info){

        $scope.message = "Hello World";
        $scope.getDatetime = new Date();
        $scope.users = user_factory.query();

        $scope.add_user = function () {
            var data = {
                'username':$scope.user.username,
                'password':$scope.user.password,
                'description':"Add Description",
                'email':$scope.user.email,
                'friends':[],
                'extra':{'extras':"nothing"},
                'user_level':'Admin',
                'created_at':$scope.getDatetime,
                'updated_at':$scope.getDatetime
            };
            if($scope.user.password_confirm == $scope.user.password){
                user_factory.save(data, function(){
                    user_info.current_user = data;
                    $state.go('homePage');})}
        };

        $scope.login_user = function () {
            console.log("this is the user", $scope.user_login);
            var users = user_factory.query(function () {
                users_array = Object.values(users);
                users_array.forEach(function(obj){
                    if (obj.email == $scope.user_login.email && obj.password == $scope.user_login.password) {
                        user_info.current_user = obj;
                        $state.go('homePage');
                        return console.log("boom")
                    }else{
                        console.log("not boom")}})});
        };

        $scope.create_user = function () {
            var data = {
                'username':$scope.user.username,
                'password':$scope.user.password,
                'description':".",
                'email':$scope.user.email,
                'friends':[],
                'extra':{'extras':"nothing"},
                'user_level':'Admin',
                'created_at':$scope.getDatetime,
                'updated_at':$scope.getDatetime
            };
            if($scope.user.password_confirm == $scope.user.password){
                user_factory.save(data, function(){
                    $state.go('homePage');})}
        };
        $scope.change_page = function () {
          $state.go('homePage')
        };
        $scope.login_page = function (){
            $state.go('loginPage')
        };
        $scope.start_page = function (){
            $state.go('startPage')
        };
    return $scope
};
