let tom = new blockLike.Sprite({
    width: 300,
    height: 250,
    color: 'transparent',
    image: 'https://i.pinimg.com/originals/0b/fa/fd/0bfafd3fb5009441ba36fb649bb74fb7.png'
});

tom.addTo (stage);

let answer;
tom.whenFlag(function  () {
    answer = this.ask('');
    this.say(''  + answer)
});    

tom.whenKeyPressed(39, function () { // D
    if(this.x < stage.width/2-100){
        this.changeX(100);
    tom.setRotationStyle('left-right');
    tom.pointInDirection(-90)
    }
});

tom.whenKeyPressed(37, function() { // A
    if(this.x > (stage.width /2 * -1) + 100){
        this.changeX (-100);
    tom.setRotationStyle('left-right');
    tom.pointInDirection(90)    
    }
});

tom.whenKeyPressed(38, function() { // W
if(this.y < stage.height/ 2-100){
        this.changeY (100)
    }
});

tom.whenKeyPressed(40, function() { // S
if(this.y > (stage.height / 2 * -1) +100){
        this.changeY (-100)
    }
});