module.exports = ['$scope', '$http',
    function($scope, $http) {
        $scope.book = {
            title : 'untitled'
        };

        $http
            .get('/downloads/1.u.fb2', {
                transformResponse: function(data) {
                    var parser = new DOMParser();
                    var domBook = parser.parseFromString(data, 'text/xml');
                    return domBook;
                }
            })
            .success(function(domBook) {
                // console.log(domBook);
                $scope.book.body = domBook;
                $scope.book.title = 'test title';
            });
    }
];