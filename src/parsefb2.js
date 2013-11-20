module.exports = function(dom) {
    if (!dom) {
        return [];
    }
    var res = [];
    var nodes = dom.querySelectorAll('p,v');
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        var text = node.textContent;
        if (node.tagName === 'p') {
            if (node.parentNode && node.parentNode.tagName === 'title') {
                res.push(['h', text]);
                continue;
            }
            res.push(['p', text]);
            continue;
        }
        res.push(['p', text]);
    }
    return res;
};