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

![设置头衔](use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B4%E8%A1%94.png)

如果图片没能正确加载请[点击此处](https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B4%E8%A1%94%E7%94%A8%E6%B3%95%E4%BE%8B.md)

然后是撤销头衔的例子

![撤销头衔](use_in_README.md/%E6%92%A4%E9%94%80%E5%A4%B4%E8%A1%94.png)

如果图片没能正确加载请[点击此处](https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/use_in_README.md/%E6%92%A4%E9%94%80%E5%A4%B4%E8%A1%94%E7%94%A8%E6%B3%95%E4%BE%8B.md)

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
7.  可能还有别的改了，忘了。忘了就是不重要，如果你很在意可以去啃代码~

#### 遇到问题？

<div align="center">
[![GitHub](https://img.shields.io/badge/GitHub-Yenai-black?style=flat-square&logo=github)](https://github.com/yeyang52/yenai-plugin) [![YunzaiBot](https://img.shields.io/badge/云崽-v3.0.0-black?style=flat-square&logo=dependabot)](https://gitee.com/Le-niao/Yunzai-Bot) [![tencent-qq](https://img.shields.io/badge/群号-638077675-red?style=flat-square&logo=tencent-qq)]() [![tencent-qq](https://img.shields.io/badge/QQ-746659424-success?style=flat-square&logo=tencent-qq)](https://qm.qq.com/cgi-bin/qm/qr?k=m6tyVb1v5y7a5_YK8CU7AoKyuR51aEaI&noverify=0&personal_qrcode_source=4)

<br>

</div>

