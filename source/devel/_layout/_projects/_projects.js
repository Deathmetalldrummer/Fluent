function g(obj) {
	console.log(true);
	var n = obj.columns;
	var elem = obj.columnElem;
	var list = obj.contentList;
	var out = obj.wrapper;

	var arr = [];
	var origin = list;

	for (var i = 0; i < n; i++) {
		arr.push($('<div class="'+elem+'"></div>'));
	}
	for (var i = 0, a = 0; i < origin.length; i++, a++) {
		if (a === n) a = 0;
		$(arr[a]).append($(origin[i]))
	}
	console.log(arr[0]);
	for (var i = 0; i < arr.length; i++) {
		out.append(arr[i]);
	}

}
var x = {
	columns: 4,
	columnElem: 'projects__gridsCol',
	contentList: $('.projects__grid'),
	wrapper: $('.projects__grids'),
}
g(x)
