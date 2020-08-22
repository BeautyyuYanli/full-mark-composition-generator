schemes['老八'] = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['屎学', '汉堡学', '奥利给学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['奥利给', '秘制小汉堡'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['老八', '虽然不是同一时间，但是还是同一个撤硕'],
        ['老八', '只有你们想不到的，没有我老八做不到的'],
        ['老八', '一日三餐没烦恼，今天就吃老八秘制小汉堡'],
        ['老八', '肥水不流外人田，自己的屎要自己吃'],
        ['老八', '病毒来了别烦恼，千万不要到处跑。待在家里没事搞，老八教你做汉堡'],
        ['老八', '凑豆腐，腐掳，老干妈'],
        ['老八', '呕~呕~呕'],
        ['老八', '简简单单的米饭，往里放点，豆腐，腐掳，配点蒜，放到盆里这么一拌'],
        ['老八', '白衣天使，加油！武汉，加油！中国，加油！奥利给，我们一起战胜它'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['吃粑粑', '用餐', '餐厅', '豪华'],
    //至少3个有关第一个学科的性质
    prop: ['屎', '尿', '汉堡'],
    //至少6个有关第一个学科的概念
    conc: ['屎蛋', '奥利给', '撤硕', '餐厅', '雅间', '小汉堡'],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}
