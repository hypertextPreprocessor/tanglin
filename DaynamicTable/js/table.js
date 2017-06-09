function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
};
function spn(str,n){
	if(typeof(str)!=="string") throw "type Error";
	for(i=0;;i++){
		n=n.parentNode;
		if(n.nodeName==str)break;
	}
	return n;
};
var x = 1;
function tableClick(a,b,c,d){//参数：a->子级项目个数，b->子集列表标题（数组），c->可否点击,d->当前对象,e->;
	if(arguments.length==4&&c){
	var s = d;
	var t = s.parentNode;
	var m = spn("TABLE",s);
	var r0 = m.rows[0].cells.length;//展开前的单元列数目;
	var cuc = t.cellIndex;//当前单元格列位置;
	var cur = t.parentNode.rowIndex;//当前单元格所在行位置;
	
	var tb = spn("TBODY",s);
	if(x){
	x =0;
	t.colSpan = a;
	m.insertRow(cur+1);//插入空白行（子菜单行）到第1行;
	//跨列子菜单数据填充;
	//console.log("a:"+a+",r0:"+r0+",cuc:"+cuc);
	for(var i=0;i<a+r0-1;i++){	
		m.rows[cur+1].innerHTML+="<td>----</td>";
	}
	for(var i=0,j=cuc;j<a+cuc;i++,j++){
		m.rows[cur+1].cells[j].innerHTML ="<button>"+ b[i]+"</button>";
	}
	//剩下所有列数据处理;
	var p = new Array();
	for(var j=0;j<b.length;j++){
		p.push(document.createElement("td"));
		p[j].innerHTML = "3.23";
		m.rows[2].insertBefore(p[j],m.rows[2].cells[3].nextSibling);	
	}
		m.rows[2].removeChild(m.rows[2].cells[3]);
	}else{
		x=1;
		t.colSpan = 0;
		tb.removeChild(m.rows[cur+1]);
		for(var i=3;i<13;i++){
		tb.rows[1].removeChild(tb.rows[1].cells[3]);
		}
	}
	}else{	//不可点击;
		for(var i=0;i<arguments.length;i++){
		if(arguments[i]== false){
			alert('没有更多数据源~');
			break;
		};
		}
	}
}
