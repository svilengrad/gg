let tom = new blockLike.Sprite({
        width: 200,
        height: 200,
        color: 'transparent',
        image: 'https://w7.pngwing.com/pngs/964/900/png-transparent-tom-tom-cat-jerry-mouse-tom-and-jerry-drawing-tom-and-jerry-mammal-heroes-cat-like-mammal-thumbnail.png' 
});

tom.addTo (stage);
tom.setRotationStyle('left-right');


let answer;
tom.whenFlag(function  () {
answer = this.ask('');
this.say(''  + answer)
});    

tom.whenKeyPressed(39, function () {
this.changeX(100);

});

tom.whenKeyPressed(37, function() {
this.changeX (-100)    

});

tom.whenKeyPressed(38, function() {
this.changeY (100)

});

tom.whenKeyPressed(40, function() {
this.changeY (-100)

});