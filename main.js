function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var tmp = '# 生活在结构1上\n\n现代学科1以人名1的一句“名句1”为嚆矢。滥觞于学科2与学科3的期望正失去它们的借鉴意义。但面对看似无垠的未来天空，我想循人名2“名句2”好过过早地振翮。\n\n我们怀揣热忱的灵魂天然被赋予对超越性的追求，不屑于古旧坐标的约束，钟情于在别处的芬芳。但当这种期望流于对思想1主义不假思索的批判，乃至走向思想2与思想3主义时，便值得警惕了。与秩序的落差、错位向来不能为越矩的行为张本。而纵然我们已有翔实的蓝图，仍不能自持已在浪潮之巅立下了自己的沉锚。\n\n“名句3”人名3之言可谓切中了肯綮。人的性质1性是不可祓除的，而我们欲上青云也无时无刻不在因风借力。学科3与学科2暂且被我们把握为一个薄脊的符号客体，一定程度上是因为我们尚缺乏体验与阅历去支撑自己的认知。而这种偏见的傲慢更远在知性的傲慢之上。\n\n在孜孜矻矻以求学科1意义的道路上，对自己的期望本就是在与学科3与学科2对接中塑型的动态过程。而我们的底料便是对不同概念1、不同概念2的觉感与体认。人名4为人名5送去概念3，又维系概念4。他的学科1观念是厚实的，也是实践的。倘若我们在对过往借人名6之言“祓魅”后，又对不断膨胀的自我进行“赋魅”，那么在丢失外界预期的同时，未尝也不是丢了自我。\n\n毫无疑问，从学科2与学科3角度一觇的自我有偏狭过时的成分。但我们所应摒弃的不是对此的批判，而是其批判的廉价，其对批判投诚中的反智倾向。在人名7的观念中，如果在成为狮子与孩子之前，略去了像骆驼一样背负前人遗产的过程，那其“永远重复”洵不能成立。\n\n蓝图上的落差终归只是理念上的区分，在实践场域的分野也未必明晰。譬如当我们追寻概念5时，在途中涉足概念6，这究竟是伴随着期望的泯灭还是期望的达成？在我们塑造学科1的同时，学科1也在浇铸我们。既不可否认原生的性质2性与性质3性，又承认自己的图景有轻狂的失真，不妨让体验走在言语之前。用不被禁锢的头脑去体味人名8的大海与风帆，并效人名9，对无法言说之事保持沉默。\n\n用在结构1上的生活方式体现个体的超越性，保持婞直却又不拘泥于所谓“遗世独立”的单向度形象。这便是人名6为我们提供的理想期望范式。生活在结构1上——始终热爱大地——升上天空。';
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
    init: function (){
        shuffle(this.stru);
        shuffle(this.cele);
        shuffle(this.prin);
        shuffle(this.prop);
        shuffle(this.conc);
    }
}

function print(chosen_scheme = tmp_scheme){
    output = tmp;

    chosen_scheme.stru[0] = $(".stru")[0].value;
    for (let i = 0; i < 3;++ i){
        chosen_scheme.subj[i] = $(".subj")[i].value;
        chosen_scheme.prin[i] = $(".prin")[i].value;
        chosen_scheme.prop[i] = $(".prop")[i].value;
    }
    for (let i = 0; i < 9;++ i){
        chosen_scheme.cele[i][0] = $(".cele_name")[i].value;
        chosen_scheme.cele[i][1] = $(".cele_words")[i].value;
    }
    for (let i = 0; i < 6;++ i)
        chosen_scheme.conc[i] = $(".conc")[i].value;
    chosen_scheme.init();

    for (let i = 1; i <= 9; ++ i){
        output = output.split('学科' + i).join(chosen_scheme.subj[i - 1]);
        output = output.split('结构' + i).join(chosen_scheme.stru[i - 1]);
        output = output.split('人名' + i).join(chosen_scheme.cele[i - 1][0]);
        output = output.split('名句' + i).join(chosen_scheme.cele[i - 1][1]);
        output = output.split('思想' + i).join(chosen_scheme.prin[i - 1]);
        output = output.split('性质' + i).join(chosen_scheme.prop[i - 1]);
        output = output.split('概念' + i).join(chosen_scheme.conc[i - 1]);
    }
    $('#output').html(output.replace(/\n/g, "<br />"));
}

function set_scheme(scheme = scheme_computer_science){
    scheme.init();
    $(".stru")[0].value = scheme.stru[0];
    for (let i = 0; i < 3;++ i){
        $(".subj")[i].value = scheme.subj[i];
        $(".prin")[i].value = scheme.prin[i];
        $(".prop")[i].value = scheme.prop[i];
    }
    for (let i = 0; i < 9;++ i){
        $(".cele_name")[i].value = scheme.cele[i][0];
        $(".cele_words")[i].value = scheme.cele[i][1];
    }
    for (let i = 0; i < 6;++ i)
        $(".conc")[i].value = scheme.conc[i];
}

function copy_paste() {
    copyToClipboard($("#output").html().split("<br>").join("\n"));
    alert("满分作文已复制到剪贴板!");
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        }
        finally {
            document.body.removeChild(textarea);
        }
    }
}