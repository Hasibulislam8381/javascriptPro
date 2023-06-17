var bajar = {
	sim: 12,
	alu: 13,
	gajor: 11,
	lau: 9,
};
var keys = Object.keys(bajar);
for (var i = 0; i < keys.length; i++) {
	var keysName = keys[i];
	var values = bajar[keysName];
	console.log(keysName, values);
}
for(var propertyName in bajar){
    values = bajar[propertyName]
    console.log(propertyName,values);
}
