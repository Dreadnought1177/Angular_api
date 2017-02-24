myApp.factory('tool_factory', ['$resource',
    function ($resource) {
        return $resource("https://afternoon-plateau-31075.herokuapp.com:443/52.34.173.43//api/tools/:pk/", {},{
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });
}]);

