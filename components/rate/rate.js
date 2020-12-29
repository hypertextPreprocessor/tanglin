/**
 * @auther 汤蔺
 * @ 评价组件
 * @params
 *  - rateIcon Object 点赞图标(size为图片的大小) {rate:"xx.png",rated:"xxx.png",size:5}
 *  - steps 点赞的级数或步数
 *  - defaultValue 初始化的步数(不能大于setps的步数 ,0表示默认不选中任何步数);
 */
Component({
  properties: {
    rateIcon:{
      type:Object,
      value:{}
    },
    steps:{
      type:Number,
      value:5
    },
    defaultValue:{
      type:Number,
      value:0
    }
  },
  data: {
    setpList:[],
    finalVal:0
  },
  lifetimes: {
    attached: function () {
      //console.log(this.data.rateIcon)
      var {setpList} = this.data;
      var {rateIcon} = this.data;
      var {defaultValue} = this.data;
      var {steps} = this.data;
      var selectdStep = [];
      for(var i=0;i<this.data.steps;i++){
        setpList.push(rateIcon.rate)
      }
      
      if(defaultValue > steps){
        throw new Error("参数配置错误");       
      }else{
        if(defaultValue==0){
          selectdStep=setpList;
        }else{
          for(var i=0;i<this.data.steps;i++){
            if(i<=defaultValue-1){
              selectdStep.splice(i,1,rateIcon.rated);
            }else{
              selectdStep.splice(i,1,rateIcon.rate);
            }
            
          }
        }
      }
      
      this.setData({setpList:selectdStep,finalVal:defaultValue});
    }
  },
  methods: {
    stepTap(e){
      var {setpList} = this.data;
      var {rateIcon} = this.data;
      var tappedStep=setpList;
      var {tapIdx} = e.currentTarget.dataset;
      setpList.map((v,i)=>{
        if(i<=tapIdx){
          tappedStep.splice(i,1,rateIcon.rated);
        }else{
          tappedStep.splice(i,1,rateIcon.rate);
        }
      })
      this.setData({setpList:tappedStep,finalVal:tapIdx+1});
    }
  }
})
