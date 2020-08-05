scheme_computer_science = {
    //三个学科 其中第一个是主学科 后两个是相关学科
    subj: ['计算机科学', '哲学', '数学'],
    //至少1个有关第一个学科的 字面上可以解释为物理结构的词
    stru: ['二叉树', '红黑树', 'Fibonacci堆'],
    //至少9个有关第一个学科的名人名言
    cele: [
        ['Martin Fowler', 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'],
        ['Sean Parent', 'Good code is short, simple, and symmetrical—the challenge is figuring out how to get there.'],
        ['Steve McConnell', 'Good code is its own best documentation. As you’re about to add a comment, ask yourself, “How can I improve the code so that this comment isn’t needed?”'],
        ['Linus Torvalds', 'Bad programmers worry about the code. Good programmers worry about data structures and their relationships.'],
        ['Phil Karlton', 'There are only two hard problems in Computer Science: cache invalidation and naming things.'],
        ['Alan J. Perlis', 'There are two ways to write error-free programs; only the third works.'],
        ['David Wheeler', 'Any problem in computer science can be solved with another layer of indirection. But that usually will create another problem.'],
        ['Neal Ford', 'Life is too short for malloc.'],
        ['Harold Abelson', 'Programs must be written for people to read, and only incidentally for machines to execute.'],
    ],
    //至少3个有关第一个学科的思想（主义）
    prin: ['构造', '直觉', '逻辑'],
    //至少3个有关第一个学科的性质
    prop: ['有限', '离散', '无后效'],
    //至少6个有关第一个学科的概念
    conc: ['P=NP猜想', 'AC自动机', '轮廓动态规划', '模拟退火', '哈密顿通路的证明', '最大流最小割定理'],
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}