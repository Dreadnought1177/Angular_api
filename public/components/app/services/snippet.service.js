myApp.factory('snippet_factory', ['$resource',
    function ($resource) {
        return $resource("http://52.34.173.43//api/snippets/:pk/", {},{
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });
}]);