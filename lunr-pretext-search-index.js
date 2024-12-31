var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "section_11",
  "level": "1",
  "url": "section_11.html",
  "type": "Section",
  "number": "1.1",
  "title": "矩阵的行空间与列空间",
  "body": " 矩阵的行空间与列空间   关于span的描述  向量组的 span 即向量组的生成空间，是指由该向量组中的所有向量的线性组合所构成的向量空间。 具体来说，给定一个向量组 ， 其 span 是所有形如 的向量所构成的集合, 其中 为任意实数。    矩阵行空间的定义    矩阵的 行空间(Row Space) 是由矩阵的所有行向量张成的向量空间    若给定一个矩阵A如下所示，行向量分别为 ， ， ，那么矩阵的行空间即为      矩阵列空间的定义    矩阵的 列空间(Column Space) 是由矩阵的所有列向量张成的向量空间    若给定一个矩阵A如上文所示，行向量分别为 ， ， ，那么矩阵的行空间即为    "
},
{
  "id": "def-111",
  "level": "2",
  "url": "section_11.html#def-111",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  矩阵的 行空间(Row Space) 是由矩阵的所有行向量张成的向量空间   "
},
{
  "id": "def-112",
  "level": "2",
  "url": "section_11.html#def-112",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  矩阵的 列空间(Column Space) 是由矩阵的所有列向量张成的向量空间   "
},
{
  "id": "section_12",
  "level": "1",
  "url": "section_12.html",
  "type": "Section",
  "number": "1.2",
  "title": "矩阵的零空间和左零空间",
  "body": " 矩阵的零空间和左零空间   矩阵的零空间的定义    矩阵的 零空间(Null Space) 是由矩阵 的解向量张成的空间     假设给定矩阵A如上，则方程的乘法如下式所示，解方程组可得三个解向量：   这三个基础解的所有线性组合 即为方程的通解， 即为矩阵A的零空间。    矩阵的左零空间的定义    矩阵的 左零空间(Left Null Space) 是由矩阵 的解向量张成的空间    在零空间的定义中，矩阵是左乘未知向量，而左零空间的定义中矩阵右乘未知向量， 即 ，方程两边同时取转置，即得 ，其余与零空间定义类似，不再赘述。   "
},
{
  "id": "def-121",
  "level": "2",
  "url": "section_12.html#def-121",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  矩阵的 零空间(Null Space) 是由矩阵 的解向量张成的空间   "
},
{
  "id": "def-122",
  "level": "2",
  "url": "section_12.html#def-122",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  矩阵的 左零空间(Left Null Space) 是由矩阵 的解向量张成的空间   "
},
{
  "id": "section_13",
  "level": "1",
  "url": "section_13.html",
  "type": "Section",
  "number": "1.3",
  "title": "矩阵的四个基本子空间的总结",
  "body": " 矩阵的四个基本子空间的总结   矩阵的四个子空间的联系   矩阵的四个基本子空间可以表示为行空间 ，零空间 ， 列空间 ，左零空间 。   四个子空间         四个子空间的性质  四个子空间有如下性质：    行空间与列空间的维数等于矩阵的秩r  零空间的维数等于空间维数减矩阵的秩n-r  左零空间的维数等于空间维数减矩阵的秩m-r      正交补空间    正交补空间(Orthogonal Complement)是指在一个内积空间中， 所有与给定子空间正交的向量所构成的子空间。具体来说，给定一个子空间 ， 其正交补空间 ，包含所有与 中的所有向量正交的向量。      行空间与零空间是一对正交补空间  列空间与左零空间是一对正交补空间      的解  在方程 中， 存在于n维空间中，矩阵A的行空间是n维空间的子空间： 存在于m维空间中，矩阵A的列空间也是m维空间的子空间，所以方程可以解读为 将 空间中 的一个向量通过矩阵A映射到 空间 ，所以方程组有解的前提是 存在于矩阵的列空间中。   存在于 空间中，该空间由两个互为正交补空间的row space和null space组成， 所以可以将 分别投影到这两个空间上，即 。由零空间的定义可知， 。 也就是说，经过映射后，零空间部分的向量全部被映射到 空间的零点。所以 的解由通解和 特解组成，通解即为 的解，特解即为 的一个解。解的情况如下表所示。   解的情况    r,m,n大小关系  矩阵描述  解的情况     矩阵是方阵且满秩  有唯一解     矩阵列满秩，左零空间是0维  有无穷多解     矩阵行满秩，零空间是0维  有唯一解或零解     矩阵不满秩  有零解或无穷多解      "
},
{
  "id": "subsec-131-2-2",
  "level": "2",
  "url": "section_13.html#subsec-131-2-2",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " 四个子空间     "
},
{
  "id": "def-131",
  "level": "2",
  "url": "section_13.html#def-131",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "  正交补空间(Orthogonal Complement)是指在一个内积空间中， 所有与给定子空间正交的向量所构成的子空间。具体来说，给定一个子空间 ， 其正交补空间 ，包含所有与 中的所有向量正交的向量。   "
},
{
  "id": "table_1",
  "level": "2",
  "url": "section_13.html#table_1",
  "type": "Table",
  "number": "1.3.3",
  "title": "<span class=\"process-math\">\\(Ax=b\\)<\/span>解的情况",
  "body": " 解的情况    r,m,n大小关系  矩阵描述  解的情况     矩阵是方阵且满秩  有唯一解     矩阵列满秩，左零空间是0维  有无穷多解     矩阵行满秩，零空间是0维  有唯一解或零解     矩阵不满秩  有零解或无穷多解    "
},
{
  "id": "section_21",
  "level": "1",
  "url": "section_21.html",
  "type": "Section",
  "number": "2.1",
  "title": "矩阵的相似对角化",
  "body": " 矩阵的相似对角化   矩阵的特征值和特征向量    给定一个方阵 ，若存在一个非零向量 ，和一个标量 ， 使得 ，则称 为矩阵 的特征向量， 为矩阵 的特征值。      特征值： 特征值满足 ，其中 是单位矩阵  特征向量： 每个特征值对应一个或者多个特征向量，特征向量可以通过 求出      相似对角化    矩阵的相似对角化(Diagonalization)是将矩阵 转化为对角阵 的过程， 其中对角矩阵 的主对角线元素为矩阵 的特征值。    如果存在一个可逆矩阵 ，使得 那么矩阵 就被称为可对角化的， 矩阵 是由矩阵 的n个特征向量构成的矩阵。也就是说，矩阵能够相似对角化的条件是， 存在n个线性无关的特征向量。   提示  这里的矩阵其实都是指方阵，只有方阵才能相似对角化。   矩阵的相似对角化存在一个特殊形式—— 正交对角化 ，即当矩阵 为实对称矩阵时，矩阵 一定可以相似对角化， 且存在正交矩阵 ，使得 ，又由于正交矩阵 ， 所以也可以表示为 。   正交矩阵性质    列向量或行向量两两垂直  列向量或行向量的模为1      "
},
{
  "id": "def-211",
  "level": "2",
  "url": "section_21.html#def-211",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  给定一个方阵 ，若存在一个非零向量 ，和一个标量 ， 使得 ，则称 为矩阵 的特征向量， 为矩阵 的特征值。   "
},
{
  "id": "def-212",
  "level": "2",
  "url": "section_21.html#def-212",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  矩阵的相似对角化(Diagonalization)是将矩阵 转化为对角阵 的过程， 其中对角矩阵 的主对角线元素为矩阵 的特征值。   "
},
{
  "id": "section_22",
  "level": "1",
  "url": "section_22.html",
  "type": "Section",
  "number": "2.2",
  "title": "矩阵的奇异值分解",
  "body": " 矩阵的奇异值分解   SVD   上文 提到过，只有方阵才能进行相似对角化， 若对一般矩阵进行类似于对角化的分解，可使用奇异值分解(SVD)方法。    SVD(Singular Value Decomposition)，将矩阵 分解为 的形式， 其中 和 是正交矩阵，而 为半正定矩阵。    接下来简单描述一下SVD的过程：   为任意矩阵，虽然 无法进行对角化，但对称方阵 可以进行正交对角化， 且 有如下的性质：    因此， 和矩阵 对 空间有相同的划分。 设 的特征向量为 ， 则 是 空间下的一组标准正交基。 此时，由 可知， 。 即为矩阵的奇异值。经行空间的基经 变换后的列空间的基可由 得到。  最终，矩阵被分解为 的形式。 也可以表示为：     是行空间标准正交基  是列空间标准正交基  是零空间标准正交基  是左零空间标准正交基      SVD的应用  在进行SVD分解后，可以选取前K个奇异值来代替原矩阵，所以可以利用SVD进行数据压缩或降维。 下面是一段演示：    "
},
{
  "id": "def-221",
  "level": "2",
  "url": "section_22.html#def-221",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  SVD(Singular Value Decomposition)，将矩阵 分解为 的形式， 其中 和 是正交矩阵，而 为半正定矩阵。   "
},
{
  "id": "section_31",
  "level": "1",
  "url": "section_31.html",
  "type": "Section",
  "number": "3.1",
  "title": "任务二视频",
  "body": " 任务二视频   任务二视频    "
},
{
  "id": "video",
  "level": "2",
  "url": "section_31.html#video",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " 任务二视频   "
},
{
  "id": "section_41",
  "level": "1",
  "url": "section_41.html",
  "type": "Section",
  "number": "4.1",
  "title": "小组分工",
  "body": " 小组分工   小组分工情况    小组成员  任务一  任务二    赵相帅  辅助制作Pretext，完成Tikz作图和sage功能嵌入  使用manim库进行动画制作    张亚文  制作Pretext笔记      "
},
{
  "id": "table_2",
  "level": "2",
  "url": "section_41.html#table_2",
  "type": "Table",
  "number": "4.1.1",
  "title": "小组分工情况",
  "body": " 小组分工情况    小组成员  任务一  任务二    赵相帅  辅助制作Pretext，完成Tikz作图和sage功能嵌入  使用manim库进行动画制作    张亚文  制作Pretext笔记     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
