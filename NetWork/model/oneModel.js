let NewsFindFrontInfoTempList = (params, getdata)=>{
  // 传参
  // page	int	 当前页   ：1
  // num	int	当前页显示条数: 5
  // orgid	string	机构id
  // searchField	string	channel, title, orgid
  // searchValue	string	频道id, 新闻标题的模糊查询, 机构id
  // userid	string	人员id
let newarr=["haha","heiheihei"];
getdata(newarr);
  // params.classid = sysJson.sysClassid.NewsColumn;
  // findFrontInfoTempList(params, (res) => {
  //   if (res.result.flag != 1) {
  //     getdata("获取数据失败");
  //   };
  //   let Jsondata = res.infos;
  //   let titleArr = [];
  //   for(var i =0;i<Jsondata.length;i++){
  //       titleArr[i] = Jsondata[i].title
  //   }
  //   getdata(titleArr);
  // }, (err) => {
  //   getdata("获取数据失败");
  // },
  // )
}
