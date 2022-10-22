# Yunzai-Bot giveTitle plugin (by .js)
I'm sorry to tell you that , due to my laziness , all texts below are translated by [Baidu Translate](https://fanyi.baidu.com/) .
If you can not read Chinese , I suggest that you should just install `giveTitle.js` into `Yunzai-Bot/plugins/example` .
But if you can read Chinese , opening the [README.md](https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/README.md) is recommended .
Of course , if you 闲得慌 , I won't stop you keep reading .



#Yunzai Bot title plug-in (js plug-in)
####Introduction
According to [xiaoxue plugin]（ https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js ）The title function of is rewritten, which does not depend on the original plug-in, and is applicable to [Yunzai Bot v3]（ https://gitee.com/Le-niao/Yunzai-Bot )
####Installation Tutorial
1. Put the 'giveTitle. js' file in the' Yunzai Bot/plugins/example 'folder
2. Restart Yunzai Bot
####Instructions
Request exclusive title: ` #? (I want | (give | give | give | give | reward | send) (I | we | I | I | stupid | private | I | disdain | I | humble | father | mother | father | mother | father | milk | elder brother | elder sister | younger brother | younger sister))? Title (.)*$`
Cancel exclusive title: ` #? (I don't want to | cancel | cancel | delete) the title$`
Considering that regularity is not viewed by people, here are some examples of * * command usage * *:
First, an example of setting a title
! [Set Title] (use_in_README. md/% E8% AE% BE% E7% BD% AE% E5% A4% B4% E8% A1% 94. png)
If the picture does not load correctly, please [click here]（ https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/use_in_README.md/%E8%AE%BE%E7%BD%AE%E5%A4%B4%E8%A1%94%E7%94%A8%E6%B3%95%E4%BE%8B.md )
Then there is the example of removing the title
! [Cancel Title] (use_in_README. md/% E6% 92% A4% E9% 94% 80% E5% A4% B4% E8% A1% 94. png)
If the picture does not load correctly, please [click here]（ https://gitee.com/CUZNIL/Yunzai-giveTitle/blob/master/use_in_README.md/%E6%92%A4%E9%94%80%E5%A4%B4%E8%A1%94%E7%94%A8%E6%B3%95%E4%BE%8B.md )
####What have I changed?
First of all, emphasize the original address [Xiaoxue plug-in]（ https://gitee.com/XueWerY/xiaoxue-plugin/blob/master/apps/givetitle.js )
1. Make * * command matching * * more user-friendly, and add a bunch of regular and several functions
2. Delete the "getXiaoxuePermissionLevel" of the * * Xiaoxue Level * * judgment of the original plug-in_ Reason for deletion: This restriction is not required for individuals_
3. Deleted * * duplicate title * * judgment 'isHisTitle'_ Reason for deletion: The same group can have the same exclusive title, and individuals do not need this restriction_
4. Deleted * * Save all member titles * * 'getGroupMemberTitleList'_ Reason for deletion: This function is originally used to judge duplicate titles, so it is unnecessary_
5. Deleted * * Judge whether * * the title requested by the user is his current title 'isGaveTitle'_ Reason for deletion: Not needed by individuals_
6. Rewritten * * Title Setting Process * *:
-If the title requested by the user is too long, * * cut the text * * first, and * * inform * * of the limitation of the exclusive title in the prompt of successful setting
! [When you ask for too long a title] (use_in_README. md/% E7% B4% A2% E8% A6% 81% E8% BF% 87% E9% 95% BF% E7% 9A% 84% E5% A4% B4% E8% A1% 94% E6% 97% B6. png)
-The robot nickname '${tools. botName}' was deleted from the prompt of setting failure_ Reason for deletion: not required by individuals. In addition, if you want to maintain this function, it is more difficult to use it as a js plug-in alone. If necessary, you should download [original plug-in]（ http://gitee.com/XueWerY/xiaoxue-plugin ）Come on_
! [When the original plug-in setting fails] (use_in_README. md/% E8% AE% BE% E7% BD% AE% E5% A4% B1% E8% B4% A5% E6% 97% B6% E4% BC% 9A% E8% B0% 83% E7% 94% A8% E6% 9C% BA% E5% 99% A8% E4% BA% E5% 90% 8D% E7% A7% B0. png)
! [After overwriting] (use_in_README. md/% E8% AE% BE% E7% BD% AE% E5% A4% B1% E8% B4% A5% E7% 9A% 84% E6% 96% 87% E6% 9C% AC% E5% 8F% 98% E6% 9B% B4. png)
-The successful setting prompt adds the * * title content * * requested by the user to facilitate debugging and let the user know how their commands are recognized in time.
! [Prompt for successful setting] (use_in_README. md/% E8% AE% BE% E7% BD% AE% E6% 88% 90% E5% 8A% 9F% E5% A2% 9E% E5% 8A% A0% E6% 8F% 90% E7% A4% BA. png)
-Deleted the prompt when using the corresponding command for private chat_ Reason for deletion: My bot * * disabled private chat * * long ago to avoid unprovoked blocking. I suggest you do the same_
7. There may be other changes, I forgot. But if you forget, it means it's not important. If you care, you can go to the code~
####Encounter problems/need to contact me/need to use Bot
Group No. * * 638077675**
Answer * * Spark Knight**
! [Group] (use_in_README. md/group. png)