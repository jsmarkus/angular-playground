var parseFb2 = require('./parsefb2');

module.exports = function() {
    var obj = {
        scope: {
            title: '=title',
            body: '=body'
        },
        compile: function() {
            var paragraphs;

            return function(scope, el, attrs) {
                scope.$watch('body', function(value) {
                    paragraphs = parseFb2(value);
                    console.log(paragraphs.length);
                    scope.total = paragraphs.length;
                    scope.len = 100;
                    scope.cur = 0;
                });
                scope.$watch('cur', function(value) {
                    scope.paragraphs = paragraphs.slice(scope.cur, scope.cur + scope.len);
                });
                scope.nextClick = function() {
                    scope.cur = scope.cur + scope.len;
                };
            };
        },
        template: [
            '<i>{{cur}} of {{total}}</i>',
            '<div>',
            '  <div ng-repeat="par in paragraphs track by $index">',
            '    <p ng-if="par[0] === \'p\'">{{par[1]}}</p>',
            '    <h2 ng-if="par[0] === \'h\'">{{par[1]}}</h2>',
            '  </div>',
            '  <button ng-click="nextClick()">Next</button>',
            '</div>'
        ].join('\n')
    };
    return obj;
};