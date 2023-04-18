//改写自旧版小雪插件https://gitee.com/XueWerY/xiaoxue-plugin
//2023年4月18日10:55:11
let reg = "^#?(我要|(给|赐|赠|赏|送)(我|咱|朕|俺|愚|私|吾|鄙|敝|卑|爹|娘|爸|妈|爷|奶|哥|姐|弟|妹))?头衔"
let regex = new RegExp(reg)
export class Givetitle extends plugin {
    constructor() {
        super({
            name: '给头衔',
            dsc: '给群成员一个头衔',
            event: 'message',
            priority: 233,
            rule: [
                {
                    reg: `${reg}.+$`,
                    fnc: 'giveTitle'
                },
                {
                    reg: '^#?(我不要|取消|撤销|删除)头衔了?$',
                    fnc: 'delTitle'
                }
            ]
        })
    }
    /** 
     * 获取头衔关键词 
     */
    async getTitleKeyMain(e) {
        /** 判断消息内容是否非法 */
        let message = e.message
        for (let i in message) {
            /** 判断消息中是否有除了文字以外的东西 */
            /** 如果有就返回假 */
            if (message[i].type !== 'text') {
                await this.reply('请不要发除文字以外的东西啦~', true)
                return false
            }
        }
        /** 没有再截取头衔关键词 */
        return true
    }
    /** 
     * 给头衔 
     */
    async giveTitleMain(e, title) {
        if (title == "") return
        if (e.group.is_owner) {
            let len = 0, p = 0
            if (title.length >= 6) {
                while (p < title.length) {
                    if (title[p].search(/[\u4e00-\u9fa5]/i) + 1)
                        len += 3
                    else
                        len++
                    if (len > 18) {
                        title = title.slice(0, p) + "…"
                        break
                    }
                    p++
                }
            }
            e.group.setTitle(e.sender.user_id, title)
            title = "你好呀！" + title + "！"
            if (len > 18) title += "\n你要的头衔太长了~专属头衔最多六个汉字或者18个字母哦"
            await this.reply(`${title}`, true, { at: false })
            return true
        }
        else {
            await this.reply(`抱歉啦~群主才可以设置专属头衔哦~`, false, { at: false })
            return true
        }
    }
    async giveTitle(e) {
        if (this.getTitleKeyMain(e) == false) return
        let title = e.msg.replace(regex, "")
        return this.giveTitleMain(e, title)
    }
    /** 
     * 撤销头衔 
     */
    async delTitle(e) {
        if (e.group.is_owner) {
            await e.group.setTitle(e.sender.user_id, '')
            await this.reply('头衔撤销成功啦~', true, { at: true })
        } else {
            await this.reply(`抱歉啦~群主才可以撤销专属头衔哦~`, false, { at: false })
        }
    }
}