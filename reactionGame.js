    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var clikedTime;
    var createdTime;
    var reactionTime;
    var bestTime = 0;

    function makeBox() {

        var time = Math.random();

        time = time * 2000;

        setTimeout(function() {
            createdTime = Date.now();

            document.getElementById("box").style.backgroundColor = getRandomColor();

            document.getElementById("box").style.top = Math.random() * 350 + "px";

            document.getElementById("box").style.left = Math.random() * 800 + "px";

            document.getElementById("box").style.borderRadius = Math.random() * Math.random() * 100 + "px";

            document.getElementById("box").style.display = "block";

        }, time);
    }

    function makeZack() {

        var time = Math.random();

        time = time * 2000;

        setTimeout(function() {
            createdTime = Date.now();

            document.getElementById("zackImg").style.width = 50 + Math.random() * 250 + "px";

            document.getElementById("zack").style.top = Math.random() * 350 + "px";

            document.getElementById("zack").style.left = Math.random() * 800 + "px";

            document.getElementById("zack").style.borderRadius = Math.random() * Math.random() * 100 + "px";

            document.getElementById("zack").style.display = "block";

        }, time);
    }

    document.getElementById("start1").onclick = function() {

        var blockLeft = 10;

        document.getElementById("start1").style.display = "none";
        document.getElementById("start2").style.display = "none";
        document.getElementById("start3").style.display = "none";
        document.getElementById("goBack").style.display = "none";
        document.getElementById("board1").style.display = "block";

        makeBox();

        document.getElementById('box').onclick = function() {

            clikedTime = Date.now();

            reactionTime = (clikedTime - createdTime) / 1000;

            this.style.display = "none";

            makeBox();

            blockLeft--;

            document.getElementById("time").innerHTML = reactionTime;

            if (reactionTime < bestTime || bestTime == 0) {
                bestTime = reactionTime;
            };

            document.getElementById('bestTime').innerHTML = bestTime + "s";


            document.getElementById('blockLeft').innerHTML = blockLeft;

            if (blockLeft == 0) {
                document.getElementById("board1").style.display = "none";
                alert("Game Over! Your best time is " + bestTime + "s");
                window.location.reload();
            }

        }

    }

    document.getElementById("start2").onclick = function() {

        var timeLeft = 10;
        var blockNum = 0;

        document.getElementById("start1").style.display = "none";
        document.getElementById("start2").style.display = "none";
        document.getElementById("start3").style.display = "none";
        document.getElementById("goBack").style.display = "none";
        document.getElementById("board2").style.display = "block";

        makeBox();

        document.getElementById('box').onclick = function() {

            clikedTime = Date.now();

            blockNum++;

            reactionTime = (clikedTime - createdTime) / 1000;

            timeLeft = timeLeft - reactionTime;

            this.style.display = "none";

            makeBox();

            document.getElementById("timeLeft").innerHTML = timeLeft.toFixed(2);

            document.getElementById('blockNum').innerHTML = blockNum;

            if (timeLeft < 0) {
                document.getElementById("board2").style.display = "none";
                alert("Game Over! Your best number is " + blockNum);
                window.location.reload();
            }

        }

    }

    document.getElementById("start3").onclick = function() {

        var blockLeft = 10;

        document.getElementById("start1").style.display = "none";
        document.getElementById("start2").style.display = "none";
        document.getElementById("start3").style.display = "none";
        document.getElementById("goBack").style.display = "none";
        document.getElementById("board1").style.display = "block";

        makeZack();

        document.getElementById('zack').onclick = function() {

            clikedTime = Date.now();

            reactionTime = (clikedTime - createdTime) / 1000;

            this.style.display = "none";

            makeZack();

            blockLeft--;

            document.getElementById("time").innerHTML = reactionTime;

            if (reactionTime < bestTime || bestTime == 0) {
                bestTime = reactionTime;
            };

            document.getElementById('bestTime').innerHTML = bestTime + "s";


            document.getElementById('blockLeft').innerHTML = blockLeft;

            if (blockLeft == 0) {
                document.getElementById("board1").style.display = "none";
                alert("Game Over! Your best time is " + bestTime + "s");
                window.location.reload();
            }

        }

    }
