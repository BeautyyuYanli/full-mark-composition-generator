schemes['ha'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['🐸学', '🐻学', '🌾学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['益民食品一厂'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['🐸', '所有人，不论长幼都必须会说英语。'],
        ['🐸', '万崮云追动，群舟风逐移。渔歌听唱远，坐爱晚山枝。'],
        ['🐸', '如果说还有一点成绩，就是军队一律不得经商。'],
        ['🐸', '我回忆起我曾经在1945年、46年的大学年代，经常我们喜欢玩儿‘Hawaii guitar’。'],
        ['🐸', '一个城市的交响乐水平标志着这个城市的文明程度。'],
        ['🐸', 'One day when we were young. '],
        ['🐸', '你问我不支支持不支持，我说支持。'],
        ['🐸', 'I think this young man maybe not killed by the tank. '],
        ['🐸', '不需要翻译了，我知道你想说什么。'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['⬛ ⬛', '⬛ ⬛ ⬛ ⬛ ⬛ ⬛', '⬛ ⬛ ⬛ ⬛', '⬛ ⬛ ⬛'],
    //至少3个有关第一个学科的性质
    prop: ['先进', '一致', '坚定'],
    //至少6个有关第一个学科的概念
    conc: ['Young', 'Великий', 'Efficiency', 'Excited', 'Calculus', 'ありがとう'],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}