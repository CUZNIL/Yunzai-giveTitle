# Yunzai-Bot giveTitle plugin (by .js)
I'm sorry to tell you that , due to my laziness , all texts below are translated by [Baidu Translate](https://fanyi.baidu.com/) .
If you can not read Chinese , I suggest that you should just install `giveTitle.js` into `Yunzai-Bot/plugins/example` .
But if you can read Chinese , opening the [README.md](https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/README.md) is recommended .
Of course , if you 闲得慌 , I won't stop you keep reading .


#### Introduction

According to [xiaoxue-plugin](https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js)
The title function of is rewritten, which does not depend on the original plug-in, and is applicable to [Yunzai-Bot v3](https://gitee.com/Le-niao/Yunzai-Bot)


#### Installation Tutorial

1.  Put `giveTitle.js` into `Yunzai-Bot/plugins/example`
2.  Restart Yunzai-Bot

#### instructions

Ask for exclusive title：`#?((我要|(给|赐|赠|赏|送)(我|咱|朕|俺|愚|私|吾|鄙|敝|卑|爹|娘|爸|妈|爷|奶|哥|姐|弟|妹)))?头衔(.)*$`

Cancel exclusive title：`#?(我不要|取消|撤销|删除)头衔了?$`

Considering that regularity is not viewed by people, here are some examples of **command usage**:

First, an example of setting a title

![设置头衔](use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B4%E8%A1%94.png)

If the picture does not load correctly, please [click here](https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B4%E8%A1%94%E7%94%A8%E6%B3%95%E4%BE%8B.md)

Then there is the example of removing the title

![撤销头衔](use_in_README.md/%E6%92%A4%E9%94%80%E5%A4%B4%E8%A1%94.png)

If the picture does not load correctly, please [click here](https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/use_in_README.md/%E6%92%A4%E9%94%80%E5%A4%B4%E8%A1%94%E7%94%A8%E6%B3%95%E4%BE%8B.md)

#### What have I changed?

First of all, emphasize the original address [Xiaoxue plug-in](https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js)

1. Make command matching more user-friendly, and add a bunch of regular and several functions
2. Delete the "getXiaoxuePermissionLevel" of the original plug-in _Reason for deletion: This restriction is not required for individuals_
3. Deleted the duplicate title judgment 'isHisTitle'_Reason for deletion: The same group can have the same exclusive title, and individuals do not need this restriction_
4. Deleted the 'getGroupMemberTitleList' for saving all member titles _Reason for deletion: This function is originally used to judge duplicate titles, so it is unnecessary_
5. Delete to judge whether the title the user asks for is his current title 'isGaveTitle'_Reason for deletion: Not needed by individuals_
6. Rewrote the title setting process:
-If the title requested by the user is too long, cut the text first, and inform the limit of the exclusive title in the prompt of successful setting

![当你索要了过长的头衔](use_in_README.md/%E7%B4%A2%E8%A6%81%E8%BF%87%E9%95%BF%E7%9A%84%E5%A4%B4%E8%A1%94%E6%97%B6.png)
- The robot nickname is deleted from the prompt of setting failure`${tools.botName}`。 _Reason for deletion: not required by individuals. In addition, if you want to maintain this function, it is more difficult to use it as a js plug-in alone. If necessary, you should download [original plug-in](http://gitee.com/XueWerY/xiaoxue-plugin)！_
![原插件设置失败时](use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B1%E8%B4%A5%E6%97%B6%E4%BC%9A%E8%B0%83%E7%94%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%90%8D%E7%A7%B0.png)
![改写后](use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B1%E8%B4%A5%E7%9A%84%E6%96%87%E6%9C%AC%E5%8F%98%E6%9B%B4.png)
- The title content requested by the user is added to the prompt of successful setting to facilitate debugging and let the user know how their commands are recognized in time.

![设置成功增加提示](use_in_README.md/%E8%AE%BE%E7%BD%AE%E6%88%90%E5%8A%9F%E5%A2%9E%E5%8A%A0%E6%8F%90%E7%A4%BA.png)
- Deleted the prompt when using the corresponding command for private chat _Reason for deletion: My bot disabled private chat long ago to avoid unprovoked blocking. I suggest you do the same_
7. There may be other changes, I forgot. But if you forget, it means it's not important. If you care, you can go to the code~

#### Encounter problems/need to contact me/need to use Bot

QQ group **638077675** 

answer  **火花骑士** 

![群](use_in_README.md/group.png)