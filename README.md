# 云崽Bot头衔插件(js文件)

#### 介绍
根据[xiaoxue-plugin](https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js)的给头衔功能改写，适用于[Yunzai-Bot v3](https://gitee.com/Le-niao/Yunzai-Bot)


#### 安装教程

1.  将`giveTitle.js`文件放入`Yunzai-Bot/plugins/example`文件夹下
2.  重启Yunzai-Bot

#### 使用说明

索要专属头衔：`#?((我要|(给|赐|赠|赏|送)(我|咱|朕|俺|愚|私|吾|鄙|敝|卑|爹|娘|爸|妈|爷|奶|哥|姐|弟|妹)))?头衔(.)*$`

取消专属头衔：`#?(我不要|取消|撤销|删除)头衔了?$`

考虑到正则不是人看的，这里列举几个命令使用方式：


#### 我到底改了啥？

首先再强调一下原地址[小雪插件](https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js)

1.  让命令匹配更人性化了
2.  删去了原插件的小雪等级判定`getXiaoxuePermissionLevel`、重复头衔判定`isHisTitle`、保存全员头衔`getGroupMemberTitleList`、判断索取头衔是否已经给过`isGaveTitle`
3.  改写了头衔设置流程
- 用户索要的头衔过长时先裁切文本，并在设置成功的提示中告知QQ专属头衔的限制
- 设置成功的提示中删去了
- 
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
