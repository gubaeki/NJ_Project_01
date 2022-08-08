//다른 사이트 값 가져오는건 아래 참조, copy - js path로 복붙
//document.querySelector("#rso > div:nth-child(5) > div > div > div:nth-child(2) > div > span")

function pick() {

    var n = 1;
    var m = 1;
    var id = "game" + n + m;
    

    for (var i=0; i<5; i++){

        var lotto = [];
        while (lotto.length < 6) {
            var num = parseInt(Math.random() * 45 + 1);
            if (lotto.indexOf(num) == -1) {
                lotto.push(num);
            }
        }
        lotto.sort((a,b)=>a-b);

		for (var j=0; j<6; j++){
            id = "game" + n + m;
			if (lotto[j] < 11) {
				document.getElementById(id).innerHTML = lotto[j];
                document.getElementById(id).className = 'ball_6452 lrg ball01';
			}
			else if (lotto[j] < 21) {
                document.getElementById(id).innerHTML = lotto[j];
                document.getElementById(id).className = 'ball_6452 lrg ball11';
			}
			else if (lotto[j] < 31) {
                document.getElementById(id).innerHTML = lotto[j];
                document.getElementById(id).className = 'ball_6452 lrg ball21';
			}
            else if (lotto[j] < 41) {
                document.getElementById(id).innerHTML = lotto[j];
                document.getElementById(id).className = 'ball_6452 lrg ball31';
			}
            else {
                document.getElementById(id).innerHTML = lotto[j];
                document.getElementById(id).className = 'ball_6452 lrg ball41';
			}
            m = m + 1;
            console.log(id);
		}
        m = 1;
        n = n + 1;
	}
}

