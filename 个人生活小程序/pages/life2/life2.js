Page({
  data: {
    video: {
      coverImage: '/images/2.jpg',
      source: 'https://hulocallife.oss-cn-guangzhou.aliyuncs.com/guitar.mp4',
      title: '弦动心声',
      description: '让人忍不住要点开观看...',
      likes: 123, // 初始点赞数
      showPlayer: false, // 控制视频播放器的显示
      showComments: false, // 控制评论区的显示
    },
    comments: [
      {
        id: 1,
        username: '汪志诚',
        avatarUrl: '/images/1.jpg', // 请替换为实际可用的头像URL
        content: '： 那么有趣，真羡慕啊~~！！',
        timestamp: '2024-06-29T10:30:00', // 格式化的日期时间
      },
      {
        id: 2,
        username: '陈加鑫',
        avatarUrl: '/images/2.jpg',
        content: '： 赞一个！期待下一个作品！',
        timestamp: '2024-06-29T11:45:00',
      },
      {
        id: 3,
        username: '宁兼德',
        avatarUrl: '/images/3.jpg',
        content: '： 看着还不错！给你点赞！！',
        timestamp: '2024-06-29T13:20:00',
      }
    ], // 评论列表
    showCommentInput: false, // 是否显示评论输入框
    commentText: '', // 当前输入的评论文本
  },
  
  playVideo: function() {
    this.setData({
      showPlayer: true,
    });
  },

  onVideoPause: function() {
    // 当视频暂停时，可以选择隐藏播放器，回到封面
    this.setData({
      showPlayer: false,
    });
  },

  onVideoP: function(){
    this.setData({
      showPlayer: true,
    })
  },

  likeVideo: function() {
    let likes = this.data.video.likes + 1;
    this.setData({
      'video.likes': likes,
    });
  },

  toggleCommentSection: function() {
    this.setData({
      showComments: !this.data.showComments,
    });
  },
  

  
});