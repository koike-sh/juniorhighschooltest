let text1 = document.getElementById('text1');
let button1 = document.getElementById('submit1');
button1.addEventListener('click', (e) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();

    if(text1.value != 'x=1,y=6') {
        alert('残念！！\n解答が間違っています！');
    } else {
        clearTimeout();
        alert('正解です！！👍\n次の問題に進んで下さい！');
        location = 'questionMath7.html';
    }
});

setInterval(timer, 1000); //タイマー

var timePass = 60;   // カウントダウン用変数

function timer() {
    timePass--;   // カウントダウン
    let msg = "制限時間：残り " + timePass + " 秒です。";   // 表示文作成
    let element = document.getElementById("PassageArea");
    let showTime = element.innerHTML =msg   // 表示更新
    if (timePass == -1) {
        alert('1分経過しました！\n時間切れです！');
        location = '../../../resultTest/resultTestHtml/resultMath.html';
    } 
}