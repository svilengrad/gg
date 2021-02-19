let jerry = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'url'
});

jerry.addTo(stage);

let answer;
jerry.whenFlag(function() {
    answer = this.ask('');
    this.say('' + answer);
});

jerry.whenClicked( function() {
    costume.addTo(sprite);
});

jerry.whenKeyPressed('d', function() {
    this.changeX(100);
});
jerry.whenKeyPressed('a', function() {
    this.changeX(-100);
});

jerry.whenKeyPressed('w', function() {
    this.changeY(100);
});

jerry.whenKeyPressed('s', function() {
    this.changeY(-100);
});