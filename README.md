# 云崽Bot头衔插件(js文件)

#### 介绍
根据[xiaoxue-plugin](https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js)的给头衔功能改写，适用于[Yunzai-Bot v3](https://gitee.com/Le-niao/Yunzai-Bot)


#### 安装教程

1.  将`giveTitle.js`文件放入`Yunzai-Bot/plugins/example`文件夹下
2.  重启Yunzai-Bot

#### 使用说明

索要专属头衔：`#?((我要|(给|赐|赠|赏|送)(我|咱|朕|俺|愚|私|吾|鄙|敝|卑|爹|娘|爸|妈|爷|奶|哥|姐|弟|妹)))?头衔(.)*$`

取消专属头衔：`#?(我不要|取消|撤销|删除)头衔了?$`

考虑到正则不是人看的，这里列举说明一下命令使用方式：
首先是设置头衔的例子

![设置头衔]()

然后是撤销头衔的例子

![撤销头衔]()

#### 我到底改了啥？

首先再强调一下原地址[小雪插件](https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js)

1.  让命令匹配更人性化了，加了一堆正则和几个函数
2.  删去了原插件的小雪等级判定`getXiaoxuePermissionLevel` _删除原因：个人不需要这层限制_ 
3.  删去了重复头衔判定`isHisTitle` _删除原因：同一个群可以有相同的专属头衔，个人不需要这层限制_ 
4.  删去了保存全员头衔`getGroupMemberTitleList` _删除原因：这功能原本用于判断重复头衔，故也不需要了_ 
5.  删去了判断用户索取头衔是否恰为他的当前头衔`isGaveTitle` _删除原因：个人不需要_
6.  改写了头衔设置流程：
- 用户索要的头衔过长时先裁切文本，并在设置成功的提示中告知QQ专属头衔的限制
![当你索要了过长的头衔](use_in_README.md/%E7%B4%A2%E8%A6%81%E8%BF%87%E9%95%BF%E7%9A%84%E5%A4%B4%E8%A1%94%E6%97%B6.png)
- 设置失败的提示中删去了机器人昵称`${tools.botName}`。 _删除原因：个人不需要。并且如果想维护该功能较为麻烦，难以单独作为js插件使用，如有需要还是下[原插件](http://gitee.com/XueWerY/xiaoxue-plugin)吧！_
![原插件设置失败时](use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B1%E8%B4%A5%E6%97%B6%E4%BC%9A%E8%B0%83%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%90%8D%E7%A7%B0.png)
![改写后](use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B1%E8%B4%A5%E7%9A%84%E6%96%87%E6%9C%AC%E5%8F%98%E6%9B%B4.png)
- 设置成功的提示中增加了用户索取的头衔内容，以便于debug以及让用户及时了解自己的命令被如何识别。
![设置成功增加提示](use_in_README.md/%E8%AE%BE%E7%BD%AE%E6%88%90%E5%8A%9F%E5%A2%9E%E5%8A%A0%E6%8F%90%E7%A4%BA.png)
- 删除了私聊使用对应命令时的提示 _删除原因：我的bot为了避免无端封号很早就禁用了私聊，我建议你们也这么做。_


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
