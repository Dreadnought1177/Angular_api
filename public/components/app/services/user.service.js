myApp.factory('user_factory', ['$resource',
    function ($resource) {
        return $resource("https://afternoon-plateau-31075.herokuapp.com:443//52.34.173.43//api/users/:pk/", {},{
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });

}]);

//"http://52.34.173.43//api/users/:pk/"
// retail.factory('user_factory', function($resource) {
//   return $resource("http://localhost:8000/api/users/"); // Note the full endpoint address
// });