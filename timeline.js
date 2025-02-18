const timeline = document.querySelector('.timeline');
const timelineContent = document.querySelector('.timeline-content');

// 定义新的时间节点数据
const timelineData = [
    { era: "公元前40世纪", label: "史前时代" },
    { era: "公元前19世纪", label: "古代文明" },
    { era: "公元前16世纪", label: "青铜时代" },
    { era: "公元前5世纪", label: "古典时期" },
    { era: "12世纪", label: "中世纪" },
    { era: "14世纪", label: "文艺复兴早期" },
    { era: "16世纪", label: "文艺复兴盛期" },
    { era: "19世纪", label: "工业革命" },
    { era: "20世纪", label: "现代时期" }
];

let scale = 1;
let currentX = 0;

function createTimelineNodes() {
    const totalWidth = (timelineData.length * 230 + 400) * 2; // 增加总宽度
    timelineContent.style.width = `${totalWidth}px`;

    timelineData.forEach((data, index) => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.setAttribute('data-era', data.era);

        const label = document.createElement('div');
        label.className = 'timeline-label';
        label.textContent = data.era;

        const preview = document.createElement('div');
        preview.className = 'timeline-preview';
        preview.textContent = `${data.era}: ${data.label}`;

        node.appendChild(label);
        node.appendChild(preview);
        timelineContent.appendChild(node);

        // 添加点击事件处理
        node.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            toggleNodeActive(this);
        });
    });
}

createTimelineNodes();

// 添加新函数来切换节点的激活状态
function toggleNodeActive(node) {
    const nodes = document.querySelectorAll('.timeline-node');
    const index = Array.from(nodes).indexOf(node);
    
    const isActive = node.classList.contains('active');
    document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
    
    // 首先隐藏所有文本框和图像
    hideImage('corner-image');
    hideAllTextBoxes();

    if (!isActive) {
        node.classList.add('active');
        
        if (index === 0) {
            showImage('corner-image', 'images/heart.gif');
            showTextBoxes([
                { id: 'text-box-left', content: '古代苏美人 公元前3500年' },
                { id: 'text-box-right', content: '工具：祭祀动物（' },
                { id: 'text-box-left-bottom', content: '过程：剖开动物内脏，肝脏表面经过仔细划分，分别代表某位特定的神祗。祭司通过仔细观察绵羊的肝脏，可以了解神的启示。' },
                { id: 'text-box-right-bottom', content: '主题：了解神意，决定国家大事' }
            ]);
        } else if (index === 1) {
            showImage('corner-image', 'images/bird.gif');
            showTextBoxes([
                { id: 'text-box-left', content: '赫梯人 公元前19世纪' },
                { id: 'text-box-right', content: '过程：观察特定鸟类的行为姿态' },
                { id: 'text-box-left-bottom', content: '主题：得知神谕，判断事件吉凶' }
            ]);
        } else if (index === 2) {
            showImage('corner-image', 'images/star.gif');
            showTextBoxes([
                { id: 'text-box-left', content: '过程：观察日月运行速度，形状及行星位置' },
                { id: 'text-box-right', content: '主题：决定国家农业生产安排' }
            ]);
        } else if (index === 3) {
            showImage('corner-image', 'images/starsign.gif');
            showTextBoxes([
                { id: 'text-box-left', content: '时' },
                { id: 'text-box-right', content: '过程：神谕师过神灵降临状态，传达神谕，预' },
                { id: 'text-box-bottom', content: '主题：社会决策，个人决策，宗教祭祀' }
            ]);
        } else if (index === 4) {
            showImage('corner-image', 'images/bible.gif');
            showTextBoxes([
                { id: 'text-box-left', content: '时间：12-13世纪' },
                { id: 'text-box-right', content: '工具：带有符号的道具，占卜书或圣经' },
                { id: 'text-box-left-bottom', content: '过程：随机抽出占卜道具，根据符号翻阅占卜书查询占卜结果' },
                { id: 'text-box-right-bottom', content: '主题：日常启示' }
            ]);
        } else if (index === 5) {
            showImage('corner-image', 'images/rose.png', index);
            showTextBoxes([
                { id: 'text-box-left', content: '时间：14世纪' },
                { id: 'text-box-right', content: '主题：爱情主题' },
                { id: 'text-box-left-bottom', content: '工具：纸牌，整副牌有49张牌构成，分为四组，每组由10张数字牌和2张宫廷牌组成，以及一张皇帝牌' },
                { id: 'text-box-right-bottom', content: '过程：抽牌并查阅占卜' }
            ]);
        } else if (index === 6) {
            showImage('corner-image', 'images/sun.png', index);
            showTextBoxes([
                { id: 'text-box-left', content: '时间：15世纪-17世纪 文艺复兴' },
                { id: 'text-box-right', content: '主题：涵盖日常生活' },
                { id: 'text-box-left-bottom', content: '工具：纸牌，配套占卜书' },
                { id: 'text-box-right-bottom', content: '过程：书中有50个和当时人们日常生活各方面相关的问题，求问者需要分几次抽牌，然后根据牌的数字来对应到书本中不同页码的答案' }
            ]);
        } else if (index === 7) {
            showImage('corner-image', 'images/fool.png', index);
            showTextBoxes([
                { id: 'text-box-left', content: '时间：19世纪末，维多利亚时代神秘主义兴起' },
                { id: 'text-box-right', content: '工具：伟特塔罗牌卡，22张大牌，40张数字牌 16张宫廷牌' },
                { id: 'text-box-left-bottom', content: '过程：问卜，洗牌并抽牌，根据牌面意象及数字解读做出预测和建议' },
                { id: 'text-box-right-bottom', content: '主题：内容广泛' }
            ]);
        } else if (index === 8) {
            showImage('corner-image', 'images/thoth.png', index);
            showTextBoxes([
                { id: 'text-box-left', content: '时间：20世纪' },
                { id: 'text-box-right', content: '主题：现代占卜' },
                { id: 'text-box-left-bottom', content: '工具：多样化，包括塔罗牌、占星术、符号学等' },
                { id: 'text-box-right-bottom', content: '过程：结合传统方法和现代心理学，进行个人成长和自我探索' }
            ]);
        }
    }
}

function showImage(id, src, index) {
    let img = document.getElementById(id);
    if (!img) {
        img = document.createElement('img');
        img.id = id;
        document.body.appendChild(img);
    }
    img.src = src;
    img.alt = src.split('/').pop().split('.')[0];
    img.style.display = 'block';

    // 添加淡入效果
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        img.style.opacity = '1';
        // 为第六到第九个图像（索引为5、6、7和8）添加浮动效果
        if (index >= 5 && index <= 8) {
            img.classList.add('floating');
        } else {
            img.classList.remove('floating');
        }
    }, 50);
}

function hideImage(id) {
    const img = document.getElementById(id);
    if (img) {
        img.style.display = 'none';
    }
}

function showTextBoxes(textBoxes) {
    textBoxes.forEach(box => showTextBox(box.id, box.content));
    setTimeout(adjustTextBoxPositions, 100); // 等待文本框显示后调整位置
}

function hideAllTextBoxes() {
    ['text-box-top', 'text-box-right', 'text-box-bottom', 'text-box-left', 'text-box-left-bottom', 'text-box-right-bottom'].forEach(id => {
        const textBox = document.getElementById(id);
        if (textBox) {
            textBox.style.display = 'none';
        }
    });
}

function showTextBox(id, content) {
    let textBox = document.getElementById(id);
    if (!textBox) {
        textBox = document.createElement('div');
        textBox.id = id;
        textBox.className = 'text-box';
        document.body.appendChild(textBox);
    }
    textBox.innerHTML = content;
    textBox.style.display = 'block';

    // 添加淡入效果
    textBox.style.opacity = '0';
    textBox.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        textBox.style.opacity = '1';
    }, 50);
}

function hideTextBox(id) {
    const textBox = document.getElementById(id);
    if (textBox) {
        textBox.style.display = 'none';
    }
}

function adjustTextBoxPositions() {
    const cornerImage = document.getElementById('corner-image');
    if (cornerImage && cornerImage.style.display !== 'none') {
        const rect = cornerImage.getBoundingClientRect();
        const margin = 40; // 增加边距

        document.getElementById('text-box-top').style.top = `${rect.top - margin - 100}px`; // 向上移动更多
        document.getElementById('text-box-right').style.left = `${rect.right + margin}px`;
        document.getElementById('text-box-bottom').style.top = `${rect.bottom + margin + 20}px`; // 向下移动更多
        document.getElementById('text-box-left').style.left = `${rect.left - margin - 220}px`; // 220px 是文本框的宽度加上一些额外空间
    }
}

// 拖动功能
let isDragging = false;
let startX;
let startScrollLeft;

timeline.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - timeline.offsetLeft;
    startScrollLeft = timeline.scrollLeft;
    timeline.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - timeline.offsetLeft;
    const walk = (x - startX);
    timeline.scrollLeft = startScrollLeft - walk;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    timeline.style.cursor = 'grab';
});

// 缩放功能
timeline.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    const oldScale = scale;
    scale *= delta;
    scale = Math.min(Math.max(0.5, scale), 2); // 限制缩放范围
    
    const mouseX = e.pageX - timeline.offsetLeft;
    const distanceFromCenter = mouseX - timeline.offsetWidth / 2;
    const scaleDiff = scale - oldScale;
    currentX -= distanceFromCenter * scaleDiff / oldScale;

    updateTimelinePosition();
});

// 初始化时间轴位置
function initializeTimelinePosition() {
    const timelineWidth = timeline.offsetWidth;
    const contentWidth = timelineContent.scrollWidth;
    timeline.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
    updateTimelinePosition();
}

// 更新时间轴位置
function updateTimelinePosition() {
    const totalWidth = (timelineData.length * 230 + 400) * 2;
    timelineContent.style.width = `${totalWidth * scale}px`;
    timelineContent.style.transform = `scale(${scale})`;
    timelineContent.style.transformOrigin = 'left center';
    
    // 调时间轴线的宽度
    const timelineLine = document.querySelector('.timeline-line');
    timelineLine.style.right = `-${(totalWidth * scale) - timeline.offsetWidth}px`;

    // 调整预览框的位置
    const previews = document.querySelectorAll('.timeline-preview');
    previews.forEach(preview => {
        preview.style.bottom = `${100 / scale}%`;
        preview.style.transform = `translateX(-50%) scale(${1 / scale})`;
    });

    // 确保在缩放后保持当前中的节点居中
    const selectedEra = document.getElementById('era-select').value;
    if (selectedEra !== 'all') {
        centerNodeByEra(selectedEra);
    }
}

// 修改 centerNodeByEra 函数
function centerNodeByEra(era) {
    const node = document.querySelector(`.timeline-node[data-era="${era}"]`);
    if (node) {
        const nodeRect = node.getBoundingClientRect();
        const timelineRect = timeline.getBoundingClientRect();
        const scrollAmount = nodeRect.left - timelineRect.left - (timelineRect.width / 2) + (nodeRect.width / 2);
        
        // 使用平滑滚动动画
        timeline.scrollTo({
            left: timeline.scrollLeft + scrollAmount / scale,
            behavior: 'smooth'
        });
    }
}

// 修改年代选择事件监听器
document.getElementById('era-select').addEventListener('change', function() {
    const selectedEra = this.value;
    if (selectedEra === 'all') {
        timeline.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
        hideImage('corner-image');
        hideAllTextBoxes();
    } else {
        centerNodeByEra(selectedEra);
        const node = document.querySelector(`.timeline-node[data-era="${selectedEra}"]`);
        if (node) {
            toggleNodeActive(node);
        }
    }
});

// 修改点击事件监听器
timelineContent.addEventListener('click', function(e) {
    if (!e.target.closest('.timeline-node')) {
        // 如果点击的不是节点，移除所有节点的激活状
        document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
    }
});

// 添加点击事件监听器到整个文档
document.addEventListener('click', function(e) {
    if (!e.target.closest('.timeline-node') && !e.target.closest('#corner-image') && !e.target.closest('.text-box')) {
        hideImage('corner-image');
        hideAllTextBoxes();
        document.querySelectorAll('.timeline-node').forEach(n => n.classList.remove('active'));
    }
});

window.addEventListener('load', initializeTimelinePosition);
window.addEventListener('resize', initializeTimelinePosition);
