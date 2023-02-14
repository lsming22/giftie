
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '情人节快乐吖',
  // 留言，数组的每一项代表一行
  messages: [
    {key: 'a', wording: 'Hi,亲爱的老婆',},
    {key: 's', wording: '这次的礼物，用抽奖的形式',},
    {key: 'd', wording: '把“选择权”交给你',},
  ],
  // 最终解释权归属人
  owner: 'Vector',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 0,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  {key: 'q', name: 'MAC小辣椒', alias: 'MAC', image: '/images/mac-316.jpg', description: '「经典迷人色彩，彰显奢华魅力」'},
  {key: 'w', name: '腾讯视频一年VIP', alias: 'VIP', image: '/images/2.png', description: '“为你承包一整年VIP”'},
  {key: 'e', name: '请客任选大餐一顿', alias: '大餐', image: '/images/大餐.jpg', description: '「快乐就是吃！吃！吃！」'},
  {key: 'r', name: '520红包', alias: '520', image: '/images/6.png', description: '“想给你唱一百首情歌”'},
  {key: 'u', name: '吉之岛购物券：¥1,000', alias: '购物券', image: '/images/永旺.jpg', description: '“买！买！买！”'},
  {key: 't', name: '999红包', alias: '999', image: '/images/6.png', description: '“爱你永远长长久久”'},
  {key: 'i', name: '私人定制旅游套餐', alias: '旅游', image: '/images/旅游.jpg', description: '「放松心情，尽享旅途的乐趣」'},
  {key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png', description: '“从今往后，我都会在你旁边”'},
];
