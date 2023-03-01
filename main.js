var schemes = {}, scheme_list = ['computer_science', 'buddhism', 'physics', 'biology', 'ha', 'linguistics', 'literature', 'mathematics', '入关', 'White_Album','Touhou_Project', 'music','liuxue', 'oi', '真物', 'Wonderful_Everyday', 'taichi', '成功学'];
for (let i = 0; i < scheme_list.length; ++i) {
    $.getScript('schemes/' + scheme_list[i] + '.js', function () {
        $(document).ready(function () {
            let tmp = '<button onclick="set_scheme(schemes.name_en)" style="margin: 5px 7px 5px 7px;" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-grey-300 mdui-col-md-2">name_cn</button>';
            tmp = tmp.replace('name_en', scheme_list[i]);
            tmp = tmp.replace('name_cn', schemes[scheme_list[i]].subj[0]);
            $('.buttons').append(tmp);
        });
    });
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const templates = [[
    '# 生活在${结构1}上',
    '现代${学科1}以${人名1}的“${名句1}”为嚆矢。滥觞于${学科2}与${学科3}的期望正失去它们的借鉴意义。但面对看似无垠的未来天空，我想循${人名2}“${名句2}”好过过早地振翮。',
    '我们怀揣热忱的灵魂天然被赋予对超越性的追求，不屑于古旧坐标的约束，钟情于在别处的芬芳。但当这种期望流于对${思想1}主义不假思索的批判，乃至走向${思想2}与${思想3}主义时，便值得警惕了。与秩序的落差、错位向来不能为越矩的行为张本。而纵然我们已有翔实的蓝图，仍不能自持已在浪潮之巅立下了自己的沉锚。',
    '“${名句3}”${人名3}之言可谓切中了肯綮。人的${性质1}性是不可祓除的，而我们欲上青云也无时无刻不在因风借力。${学科3}与${学科2}暂且被我们把握为一个薄脊的符号客体，一定程度上是因为我们尚缺乏体验与阅历去支撑自己的认知。而这种偏见的傲慢更远在知性的傲慢之上。',
    '在孜孜矻矻以求${学科1}意义的道路上，对自己的期望本就是在与${学科3}与${学科2}对接中塑型的动态过程。而我们的底料便是对不同${概念1}、不同${概念2}的觉感与体认。${人名4}为${人名5}送去${概念3}，又维系${概念4}。他的${学科1}观念是厚实的，也是实践的。倘若我们在对过往借${人名6}之言“祓魅”后，又对不断膨胀的自我进行“赋魅”，那么在丢失外界预期的同时，未尝也不是丢了自我。',
    '毫无疑问，从${学科2}与${学科3}角度一觇的自我有偏狭过时的成分。但我们所应摒弃的不是对此的批判，而是其批判的廉价，其对批判投诚中的反智倾向。在${人名7}的观念中，如果在成为狮子与孩子之前，略去了像骆驼一样背负前人遗产的过程，那其“永远重复”洵不能成立。',
    '蓝图上的落差终归只是理念上的区分，在实践场域的分野也未必明晰。譬如当我们追寻${概念5}时，在途中涉足${概念6}，这究竟是伴随着期望的泯灭还是期望的达成？在我们塑造${学科1}的同时，${学科1}也在浇铸我们。既不可否认原生的${性质2}性与${性质3}性，又承认自己的图景有轻狂的失真，不妨让体验走在言语之前。用不被禁锢的头脑去体味${人名8}的大海与风帆，并效${人名9}，对无法言说之事保持沉默。',
    '用在${结构1}上的生活方式体现个体的超越性，保持婞直却又不拘泥于所谓“遗世独立”的单向度形象。这便是${人名6}为我们提供的理想期望范式。生活在${结构1}上——始终热爱大地——升上天空。'],
    ['# 在${结构1}之感悟',
    '当下${学科1}以${人名1}的“${名句1}”为先行者。源起于${学科2}与${学科3}之期许，其意义正逐渐消亡于历史的长河中。然而面对尚未到来的无限可能，我想遵${人名2}“${名句2}”胜于摸着石头过河。',
    '人类的灵魂燃烧着热情，天生着迷于对美好的追寻，不愿固步自封于传统的枷锁，却执着对未知的期许。但当这种期许流于对${思想1}主义教条主义之反对，更甚至滑向${思想2}与${思想3}主义时，便值得注意了。与社会公正良俗的差别、从来不能为让偏颇的行为合理化。但是，即便我们有着良好的计划，仍然不能保证在不确定的世界中立于不败。',
    '“${名句3}”${人名3}之中的言论可谓十分精辟。人的${性质1}性是不可能消除的，而我们即便想着突破束缚，却无时不刻不站在旧人的肩膀上。${学科3}与${学科2}在我们的眼中，也许只是毫无意义的名词，但这在一定程度上，是由于我们的经验与阅历不足所致。而这种由无知导致的傲慢，却远在一切其它傲慢之上。',
    '当我们穷经皓首于追寻${学科1}意义的道路上时，我们对“认识你自己”的把我，原本就是在${学科3}与${学科2}交叉中不断变化的动态过程。我们理解这些的基础是对${概念1}、不同${概念2}的认识。${人名4}为${人名5}送去${概念3}，又定义${概念4}。他的${学科1}观念是辩证的，也是实践的。倘若我们的头脑在${人名6}的理论武装后，却又骄傲自满，甚至飞扬跋扈，那么在丢掉过去陈旧想法的同时，未尝也不是丢了自我。',
    '毋庸置疑的是，从${学科2}与${学科3}角度来看，未免有些偏颇。但我们所要坚持的并非“绝不批判”，而是“绝不轻易批判”，以及在无脑批判中反智倾向。在${人名7}的认识中，如果在成为展翅翱翔的雄鹰之前，省略了不断尝试，不断模仿的雏鹰过程，那么我们永远也不能自由的飞翔。',
    '思想上的区分都是理论上的，但实践上未必便有如此大的区别。例如当我们追求${概念5}时，却遇到了${概念6}，这究竟是我们所需要的，还是应该摒弃的呢？在我们理解${学科1}的同时，${学科1}也在改变着我们。我想，我们既不可以否定${性质2}性与${性质3}性，又需要承认自己的不足与局限，我们不妨先行尝试。而不是用我们不足的智慧去强解${人名8}的伟大，并效${人名9}，我们不应对不理解的事物擅加评论。',]
    ]

var tmp_scheme = {
    subj: ['计算机科学', '哲学', '数学'],
    stru: ['二叉树'],
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
    prin: ['构造', '直觉', '逻辑'],
    prop: ['有限', '离散', '无后效'],
    conc: ['N=NP猜想', 'AC自动机', '轮廓动态规划', '模拟退火', '哈密顿通路的证明', '最大流最小割定理'],
    init: function () {
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}

function print(chosen_scheme = tmp_scheme) {
    output = templates[Math.floor(Math.random()*templates.length)].join('<br/><br/>');

    chosen_scheme.stru[0] = $(".stru")[0].value;
    for (let i = 0; i < 3; ++i) {
        chosen_scheme.subj[i] = $(".subj")[i].value;
        chosen_scheme.prin[i] = $(".prin")[i].value;
        chosen_scheme.prop[i] = $(".prop")[i].value;
    }
    for (let i = 0; i < 9; ++i) {
        chosen_scheme.cele[i][0] = $(".cele_name")[i].value;
        chosen_scheme.cele[i][1] = $(".cele_words")[i].value;
    }
    for (let i = 0; i < 6; ++i)
        chosen_scheme.conc[i] = $(".conc")[i].value;
    chosen_scheme.init();

    for (let i = 1; i <= 9; ++i) {
        this['学科' + i] = chosen_scheme.subj[i - 1];
        this['结构' + i] = chosen_scheme.stru[i - 1];
        this['人名' + i] = chosen_scheme.cele[i - 1][0];
        this['名句' + i] = chosen_scheme.cele[i - 1][1];
        this['思想' + i] = chosen_scheme.prin[i - 1];
        this['性质' + i] = chosen_scheme.prop[i - 1];
        this['概念' + i] = chosen_scheme.conc[i - 1];
    }
    $('#output').html(eval('`' + output + '`'));
}

function set_scheme(scheme = schemes.computer_science) {
    scheme.init();
    $(".stru")[0].value = scheme.stru[0];
    for (let i = 0; i < 3; ++i) {
        $(".subj")[i].value = scheme.subj[i];
        $(".prin")[i].value = scheme.prin[i];
        $(".prop")[i].value = scheme.prop[i];
    }
    for (let i = 0; i < 9; ++i) {
        $(".cele_name")[i].value = scheme.cele[i][0];
        $(".cele_words")[i].value = scheme.cele[i][1];
    }
    for (let i = 0; i < 6; ++i)
        $(".conc")[i].value = scheme.conc[i];
    print();
}

$().ready(function () {
    new ClipboardJS('#copy');
})
