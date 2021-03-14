let jerry = new blockLike.Sprite({
    width: 100,
    height: 100,
    color: 'transparent',
    image: 'https://i.pinimg.com/originals/85/58/29/85582987f7125e4868fdcb28661e934f.png' 
});

jerry.addTo(stage);
jerry.setRotationStyle('left-right');

jerry.whenFlag(function  () {
    answer = this.ask('');
    this.say(''  + answer)
    this.playSound("")
});    

jerry.whenKeyPressed('d', function () {
    jerry.setRotationStyle('left-right');
    jerry.pointInDirection(90)
    if(this.x < stage.width/2-100){
        this.changeX(100);
    }

});

jerry.whenKeyPressed('a', function() {
    jerry.setRotationStyle('left-right');
    jerry.pointInDirection(-90)    
    if(this.x > (stage.width/2 * -1) + 100){
        this.changeX(-100);
    }
});

jerry.whenKeyPressed('w', function() {
    if(this.y < stage.height/2-100){
        this.changeY(100);
    }

});

jerry.whenKeyPressed('s', function() {
    if(this.y > (stage.height/2 * -1) + 100){
        this.changeY(-100);
    }
    
});