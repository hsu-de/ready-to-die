document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector('.overlay');
    const maskText = document.querySelector('.mask-text');
    const scratchAnimationContainer = document.getElementById('scratch-animation');
    const fireworkAnimationContainer = document.getElementById('firework-animation');
    const xButton = document.querySelector('.x-button');

    let scratchAnimation; // 用来保存刮刮乐动画实例

    // 點擊灰色背景層後觸發刮刮樂動畫
    overlay.addEventListener('click', function () {
        // 隐藏 "點我！" 文字和灰色背景
        maskText.style.display = 'none';
        overlay.style.cursor = 'default';

        // 顯示刮刮樂動畫容器
        scratchAnimationContainer.style.display = 'block';

        // 加載刮刮樂的粉色筆刷動畫
        scratchAnimation = lottie.loadAnimation({
            container: scratchAnimationContainer, // 容器 DOM 元素
            renderer: 'svg',
            loop: false, // 不循環
            autoplay: true, // 自動播放
            path: 'assets/scratch-animation.json' // Lottie 動畫的 JSON 文件路徑
        });

        // 當刮刮樂動畫完成時，將灰色背景層隱藏，筆刷動畫隱藏，顯示底部內容
        scratchAnimation.addEventListener('complete', function () {
            overlay.style.display = 'none'; // 隱藏灰色背景層
            scratchAnimationContainer.style.display = 'none'; // 隱藏筆刷動畫

            // 觸發煙火動畫
            showFireworks();
        });
    });

    // 加載煙火動畫
    function showFireworks() {
        var fireworkAnimation = lottie.loadAnimation({
            container: fireworkAnimationContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'assets/firework-animation.json' // 煙火動畫的 JSON 文件路徑
        });
    }

    // 这里移除 xButton 事件监听器或不添加任何处理
});
