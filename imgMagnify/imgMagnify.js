//自动识别图片img标签，点击放大显示，再次点击消失;
//created by tanglin ---移动事业创新部;
function delImg(self){
       //self.parentNode('div').removeChild();
	    document.body.removeChild(self);
};
window.onload=function(){
   var imgs = document.querySelectorAll('img');
    function mangify(self){
       var cDiv = document.createElement('div');
       cDiv.setAttribute('style','position:fixed;width:100%;height:100%;top:0;z-index:999;background:rgba(0,0,0,0.8);display: flex;flex-flow: row nowrap;align-items: center;');
       cDiv.setAttribute('onclick','delImg(this)');
       var cImg = new Image();
       cImg.src = self.getAttribute('src');
       cImg.setAttribute('style','width:100%;vertical-align:middle;');
       document.body.appendChild(cDiv);
        cDiv.appendChild(cImg);
    };
    
    imgs.forEach(function(v,i,a){
       v.onclick=function(){
		   mangify(this);
	   };
    });
}();