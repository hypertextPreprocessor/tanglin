Component({
  options:{
    styleIsolation:"apply-shared",    //"isolated",
    //virtualHost: true
  },
  properties: {
    gallery:{type:Array,value:[]},  //初始化图片数组
    delBtn:{type:Boolean,value:true}, //是否显示删除按钮
    maxLen:{type:Number,value:-1},   //可上传的图片的数量限制（0表示禁用，负数表示无限制）
    albums:{type:Boolean,value:true},  //是否开启相册浏览模式
    plHder:{type:Boolean,value:true} //是否显示默认UI控件
  },
  data: {

  },
  lifetimes:{
    attached:function(){}
  },
  pageLifetimes:{
    show:function(){}
  },
  methods: {
    chooseMedia:function(cb){
      var I = this;
      var {maxLen} = this.data;
      var {gallery} = this.data;
      if(maxLen==0){
        wx.showToast({
          title: '控件设置成不允许上传',
          icon: 'none',
          duration: 2000
        })
        return false;
      }else if(maxLen<0){
        wx.chooseMedia({
          count:9,
          mediaType:['image'],
          sourceType:['album','camera'],
          sizeType:['original','compressed'],
          success:function({tempFiles,type}){
            tempFiles.map((c,i)=>{
              gallery.push(c.tempFilePath);
            })
            I.setData({gallery});
            if(arguments.length){
              cb(gallery);
            }
          }
        });
      }else{
        wx.chooseMedia({
          count:9,
          mediaType:['image'],
          sourceType:['album','camera'],
          sizeType:['original','compressed'],
          success:function({tempFiles,type}){
            if(tempFiles.length>maxLen){
              wx.showToast({
                title: '最多上传'+maxLen+'张图片',
                icon: 'none',
                duration: 2000
              })
            }else{
              if(gallery.length>maxLen){
                wx.showToast({
                  title: '最多上传'+maxLen+'张图片',
                  icon: 'none',
                  duration: 2000
                })
              }else{
                tempFiles.map((c,i)=>{
                  gallery.push(c.tempFilePath);
                })
                I.setData({gallery});
                if(arguments.length){
                  cb(gallery);
                }
              }
            }
          }
        });
      }
    },
    delPic:function(event){
      var {delIndex} = event.currentTarget.dataset;
      var {gallery} = this.data;
      gallery.splice(delIndex,1);
      this.setData({gallery});
    },
    preview:function(event){
      var {delIndex} = event.currentTarget.dataset;
      var {gallery} = this.data;
      var {albums} = this.data;
      if(albums){
        wx.previewImage({
          urls:gallery,
          current:gallery[delIndex]
        })
      }
    }
  }
})
