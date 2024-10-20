// index.js
Page({
  data: {
    activeIndex: 0,
    tabs: [
      '个人生活', '搜索', '分类'
    ],
    displayedContents: [],
    contents: [{
      title: '球场风云 | 篮球基础到进阶实战演练',
      article: '从篮球小白到球场MVP，这不仅仅是一段关于投篮和过人的故事。汗水、团队、永不言弃的精神，在这里一一展现。跟随我们的镜头，解锁你的篮球潜能，让每次上场都成为闪耀时刻！',
      poster: '/images/1.jpg',
      type: '生活',
      url: '/pages/life1/life1'
    }, {
      title: '弦动心声：吉他自学之旅',
      article: '六弦之间的旋律，是心灵与世界对话的方式。从最基础的和弦到指尖飞舞的独奏，每一次拨动都记录着成长的足迹。不论你是音乐初学者还是寻找灵感的乐手，这段吉他自学之旅，将带你走进音乐的美妙世界。',
      poster: '/images/2.jpg',
      type: '生活',
      url: '/pages/life2/life2'
    }, {
      title: '学霸笔记：高效学习法揭秘',
      article: '掌握这些高效学习技巧，让知识吸收事半功倍。从时间管理到记忆曲线，每一步都助你攀登学术巅峰。不论是应考冲刺还是终身学习，这套方法都能让你如虎添翼！',
      poster: '/images/3.jpg',
      type: '学习',
      url: '/pages/study1/study1'
    },{
      title: '从小白到高手：微信小程序开发全攻略',
      article: '想亲手打造属于自己的小程序应用吗？这个系列从零开始，逐步深入微信小程序的开发世界。从环境搭建、基础语法到项目实战，每一步都配有详细讲解和实例代码。加入我们，开启你的小程序开发者之旅，让创意触达亿万用户！',
      poster: '/images/4.jpg',
      type: '学习',
      url: '/pages/study2/study2'
    }
  ],
    inputShowed: false,
    inputVal: '',
    searchResult: [],
    grids: [
      { label: '生活', url: '/pages/lifelist/lifelist' },
      { label: '学习', url: '/pages/studylist/studylist' },
      { label: '运动', url: '/pages/index/index' },
      { label: '工作', url: '/pages/index/index' },
      { label: '绘画', url: '/pages/index/index' },
      { label: '心理', url: '/pages/index/index' },
      { label: '娱乐', url: '/pages/index/index' },
      { label: '影视', url: '/pages/index/index' },
      { label: '服务', url: '/pages/index/index' }
    ]
  },
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    }),
    
    //当用户输入时，调用搜索函数
    this.search(e.detail.value);
  },
// 搜索
  search: function(keywords) {
  // 当关键词为空字符串时，清空搜索结果
  if (!keywords.trim()) {
    this.setData({
      searchResult: [],
      inputShowed: false // 可选，根据需要决定是否隐藏搜索框的聚焦状态
    });
    return;
  }

  let filteredContents = this.data.contents.filter(item => {
    return item.title.includes(keywords);
  });

  this.setData({
    searchResult: filteredContents,
    inputShowed: true
  });
  },
  //搜索结果
  goToDetail: function(e){
    const {url} = e.currentTarget.dataset;
    //跳转对应的详情页
    wx.navigateTo({
      url: url,
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    })
  },
  hideInput: function () {
    this.setData({
      inputVal: '',
      inputShowed: false
    })
  },
  clearInput() {
    this.setData({
      inputVal: '',
      searchResult: []
    })
  },
  onShow() {
    this.setData({
      indexActive: true,
      meActive: false,
    });
  },
  onLoad: function() {
    this.setData({
      displayedContents: this.data.contents.slice(0, 3), // 取前三个元素
    });
  },
})