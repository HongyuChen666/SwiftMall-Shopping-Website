(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-product-list"],{"032c":function(t,a,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d3b7"),e("159b"),e("14d9"),e("99af"),e("4de4");var n=i(e("168d")),o={components:{uniLoadMore:n.default},data:function(){return{cateMaskState:0,headerPosition:"fixed",headerTop:"0upx",loadingType:"more",filterIndex:0,cateId:0,sortType:0,cateList:[],goodsList:[],searchParam:{category1Id:null,category2Id:null,category3Id:null,keyword:"",brandId:"",order:"1",pageNo:0,pageSize:10,pages:1}}},onLoad:function(t){this.headerTop=document.getElementsByTagName("uni-page-head")[0].offsetHeight+"px",this.cateId=t.category3Id,this.searchParam.category1Id=t.category1Id,this.searchParam.category2Id=t.category2Id,this.searchParam.category3Id=t.category3Id,this.searchParam.keyword=t.keyword,this.loadData("first")},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){this.loadData("refresh")},onReachBottom:function(){this.loadData()},onNavigationBarSearchInputChanged:function(t){""===t.text&&(this.searchParam.keyword=t.text,this.loadData("first"))},onNavigationBarSearchInputConfirmed:function(t){this.searchParam.pageNo=0,this.searchParam.keyword=t.text,this.searchParam.category1Id=null,this.searchParam.category2Id=null,this.searchParam.category3Id=null,this.searchParam.brandId=null,this.searchParam.order="1",this.loadData("first")},methods:{loadData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",e=arguments.length>1?arguments[1]:void 0,i=this;this.searchParam.pageNo++,console.log("----------------------"),console.log(this.searchParam),this.$request({url:"/api/product/"+this.searchParam.pageNo+"/"+this.searchParam.pageSize,method:"get",data:this.searchParam}).then((function(n){console.log(n.data),t.searchParam.pages=n.data.total,"first"===a&&t.initProp(n,i);var o=[];n.data.list.forEach((function(t){o.push({id:t.id,image:t.thumbImg,image2:t.thumbImg,image3:t.thumbImg,title:t.skuName,price:t.salePrice,sales:t.saleNum})})),"refresh"!==a&&"first"!==a||(t.goodsList=[]),t.goodsList=t.goodsList.concat(o),t.searchParam.pageNo>=t.searchParam.pages?t.loadingType="nomore":(t.loadingType="more","refresh"===a&&(1==e?uni.hideLoading():uni.stopPullDownRefresh()))}))},initProp:function(t,a){a.cateList=[];var e=[];this.$request({url:"/api/product/brand/findAll",method:"get"}).then((function(t){t.data.forEach((function(t){e.push({id:t.id,pid:0,name:t.name,isActive:!1,value:t.id})}))})),a.cateList.push({id:0,name:"品牌",child:e})},tabClick:function(t){this.filterIndex===t&&2!==t||(this.filterIndex=t,this.sortType=2===t?1===this.sortType?2:1:0,0==t&&(this.searchParam.order="1"),2==t&&(1===this.sortType&&(this.searchParam.order="2"),2===this.sortType&&(this.searchParam.order="3")),this.searchParam.pageNo=0,uni.pageScrollTo({duration:300,scrollTop:0}),this.loadData("refresh",1),uni.showLoading({title:"正在加载"}))},toggleCateMask:function(t){var a=this,e="show"===t?10:300,i="show"===t?1:0;this.cateMaskState=2,setTimeout((function(){a.cateMaskState=i}),e)},changeCate:function(t){var a=this;this.toggleCateMask(),uni.pageScrollTo({duration:300,scrollTop:0}),t.isActive=!t.isActive;var e=this.cateList.filter((function(a){return a.id===t.pid})),i=e[0].child.filter((function(a){return a.id!==t.id&&a.isActive}));i.length>0&&i.forEach((function(t){t.isActive=!1})),this.searchParam.pageNo=0,this.searchParam.brandId="",this.cateList.forEach((function(t){t.child.forEach((function(t){t.isActive&&(a.searchParam.brandId=t.value)}))})),this.loadData("refresh",1),uni.showLoading({title:"正在加载"})},navToDetailPage:function(t){var a=t.id;uni.navigateTo({url:"/pages/product/product?id="+a})},stopPrevent:function(){}}};a.default=o},"168d":function(t,a,e){"use strict";e.r(a);var i=e("bd4b"),n=e("3cef");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c25f");var s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"76b7c960",null,!1,i["a"],void 0);a["default"]=r.exports},3308:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-08527ef0], .content[data-v-08527ef0]{background:#f8f8f8}body.?%PAGE?%[data-v-08527ef0]{background:#f8f8f8}.content[data-v-08527ef0]{padding-top:%?96?%}.navbar[data-v-08527ef0]{position:fixed;left:0;top:var(--window-top);display:flex;width:100%;height:%?80?%;background:#fff;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.06);z-index:10}.navbar .nav-item[data-v-08527ef0]{flex:1;display:flex;justify-content:center;align-items:center;height:100%;font-size:%?30?%;color:#303133;position:relative}.navbar .nav-item.current[data-v-08527ef0]{color:#fa436a}.navbar .nav-item.current[data-v-08527ef0]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:%?120?%;height:0;border-bottom:%?4?% solid #fa436a}.navbar .p-box[data-v-08527ef0]{display:flex;flex-direction:column}.navbar .p-box .yticon[data-v-08527ef0]{display:flex;align-items:center;justify-content:center;width:%?30?%;height:%?14?%;line-height:1;margin-left:%?4?%;font-size:%?26?%;color:#888}.navbar .p-box .yticon.active[data-v-08527ef0]{color:#fa436a}.navbar .p-box .xia[data-v-08527ef0]{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.navbar .cate-item[data-v-08527ef0]{display:flex;justify-content:center;align-items:center;height:100%;width:%?80?%;position:relative;font-size:%?44?%}.navbar .cate-item[data-v-08527ef0]:after{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-left:1px solid #ddd;width:0;height:%?36?%}\n/* 分类 */.cate-mask[data-v-08527ef0]{position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:95;transition:.3s}.cate-mask .cate-content[data-v-08527ef0]{width:%?630?%;height:100%;background:#fff;float:right;-webkit-transform:translateX(100%);transform:translateX(100%);transition:.3s}.cate-mask.none[data-v-08527ef0]{display:none}.cate-mask.show[data-v-08527ef0]{background:rgba(0,0,0,.4)}.cate-mask.show .cate-content[data-v-08527ef0]{-webkit-transform:translateX(0);transform:translateX(0)}.cate-list[data-v-08527ef0]{display:flex;flex-direction:column;height:100%}.cate-list .cate-item[data-v-08527ef0]{display:flex;align-items:center;height:%?90?%;padding-left:%?30?%;font-size:%?28?%;color:#555;position:relative}.cate-list .two[data-v-08527ef0]{height:%?64?%;color:#303133;font-size:%?30?%;background:#f8f8f8}.cate-list .active[data-v-08527ef0]{color:#fa436a}\n/* 商品列表 */.goods-list[data-v-08527ef0]{display:flex;flex-wrap:wrap;padding:0 %?20?%}.goods-list .goods-item[data-v-08527ef0]{cursor:pointer;margin-bottom:%?20?%;background:#fff;padding:%?10?%;display:flex;flex-direction:column;width:49%}.goods-list .goods-item[data-v-08527ef0]:nth-child(2n+1){margin-right:2%}.goods-list .image-wrapper[data-v-08527ef0]{width:100%;height:%?330?%;border-radius:3px;overflow:hidden}.goods-list .image-wrapper uni-image[data-v-08527ef0]{width:100%;height:100%;opacity:1}.goods-list .title[data-v-08527ef0]{font-size:%?32?%;color:#303133;line-height:%?80?%}.goods-list .price-box[data-v-08527ef0]{display:flex;align-items:center;justify-content:space-between;padding-right:%?10?%;font-size:%?24?%;color:#909399}.goods-list .price[data-v-08527ef0]{font-size:%?32?%;color:#fa436a;line-height:1}.goods-list .price[data-v-08527ef0]:before{content:"￥";font-size:%?26?%}',""]),t.exports=a},"3cef":function(t,a,e){"use strict";e.r(a);var i=e("b830"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},6752:function(t,a,e){"use strict";e.r(a);var i=e("032c"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},a899:function(t,a,e){var i=e("3308");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("79dedac0",i,!0,{sourceMap:!1,shadowMode:!1})},b830:function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};a.default=i},bd4b:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"uni-load-more"},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[e("v-uni-view",{staticClass:"load1"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load2"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1),e("v-uni-view",{staticClass:"load3"},[e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}}),e("v-uni-view",{style:{background:t.color}})],1)],1),e("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[]},c25f:function(t,a,e){"use strict";var i=e("e2d8"),n=e.n(i);n.a},c4aa:function(t,a,e){"use strict";var i=e("a899"),n=e.n(i);n.a},ca8a:function(t,a,e){"use strict";e.r(a);var i=e("d624"),n=e("6752");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("c4aa");var s=e("f0c5"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"08527ef0",null,!1,i["a"],void 0);a["default"]=r.exports},d624:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uniLoadMore:e("168d").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"navbar",style:{position:t.headerPosition,top:t.headerTop}},[e("v-uni-view",{staticClass:"nav-item",class:{current:0===t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(0)}}},[t._v("Sales")]),e("v-uni-view",{staticClass:"nav-item",class:{current:2===t.filterIndex},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabClick(2)}}},[e("v-uni-text",[t._v("Price")]),e("v-uni-view",{staticClass:"p-box"},[e("v-uni-text",{staticClass:"yticon icon-shang",class:{active:1===t.sortType&&2===t.filterIndex}}),e("v-uni-text",{staticClass:"yticon icon-shang xia",class:{active:2===t.sortType&&2===t.filterIndex}})],1)],1),e("v-uni-text",{staticClass:"cate-item yticon icon-fenlei1",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleCateMask("show")}}})],1),e("v-uni-view",{staticClass:"goods-list"},t._l(t.goodsList,(function(a,i){return e("v-uni-view",{key:i,staticClass:"goods-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(a)}}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{attrs:{src:a.image,mode:"aspectFill"}})],1),e("v-uni-text",{staticClass:"title clamp"},[e("v-uni-rich-text",{attrs:{nodes:a.title}})],1),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-text",{staticClass:"price"},[t._v(t._s(a.price))]),e("v-uni-text",[t._v("Sold "+t._s(a.sales))])],1)],1)})),1),e("uni-load-more",{attrs:{status:t.loadingType}}),e("v-uni-view",{staticClass:"cate-mask",class:0===t.cateMaskState?"none":1===t.cateMaskState?"show":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toggleCateMask.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"cate-content",on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopPrevent.apply(void 0,arguments)},touchmove:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.stopPrevent.apply(void 0,arguments)}}},[e("v-uni-scroll-view",{staticClass:"cate-list",attrs:{"scroll-y":!0}},t._l(t.cateList,(function(a){return e("v-uni-view",{key:a.id},[e("v-uni-view",{staticClass:"cate-item b-b two"},[t._v(t._s(a.name))]),t._l(a.child,(function(a){return e("v-uni-view",{key:a.id,staticClass:"cate-item b-b",class:{active:a.isActive},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeCate(a)}}},[t._v(t._s(a.name))])}))],2)})),1)],1)],1)],1)},o=[]},e2d8:function(t,a,e){var i=e("f4d9");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("2307c82c",i,!0,{sourceMap:!1,shadowMode:!1})},f4d9:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".uni-load-more[data-v-76b7c960]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-76b7c960]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-76b7c960]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-76b7c960]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-76b7c960 1.56s ease infinite;animation:load-data-v-76b7c960 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-76b7c960]:nth-child(4){top:11px;left:0}.load1[data-v-76b7c960],\n.load2[data-v-76b7c960],\n.load3[data-v-76b7c960]{height:24px;width:24px}.load2[data-v-76b7c960]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-76b7c960]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-76b7c960]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-76b7c960]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-76b7c960]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-76b7c960]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-76b7c960{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=a}}]);