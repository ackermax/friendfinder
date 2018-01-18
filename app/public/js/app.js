$(document).ready(function () {
    $('select').material_select();
    $('.modal').modal();
    $("#submit-button").click(function (e) {
        e.preventDefault();
        var answers = [];
        var name = $("#name").val().trim();
        var photo = $("#photo").val().trim();
        for (var i = 1; i <= 10; i++) {
            var ans = $("#q" + i).val();
            answers.push(ans);
        }
        var newFriend = {
            "name": name,
            "photo": photo,
            "scores": answers
        };
        console.log(newFriend.scores[0]);
        $.get("/api/friends", function (data) {
            var bestFriend;
            var highScore = 100;
            for (var i = 0; i < data.length; i++) {
                var score = 0;
                for (var j = 0; j < data[i]["scores[]"].length; j++) {
                    score += Math.abs(answers[j] - data[i]["scores[]"][j]);
                }
                console.log(score);
                if (highScore > score) {
                    highScore = score;
                    bestFriend = data[i];
                }
            }
            console.log(bestFriend);
            $("#modal-name").text(bestFriend.name);
            $("#modal-img").attr("src", bestFriend.photo);
            $('#modal1').modal('open');
        });
        console.log(newFriend);
        $.post("/api/friends", newFriend);
    });
});
