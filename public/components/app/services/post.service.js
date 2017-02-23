myApp.factory('post_factory', ['$resource',
    function ($resource) {
        return $resource("52.34.173.43//api/posts/:pk/", {},{
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });
}]);