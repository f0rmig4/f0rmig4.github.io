;(function(){
    "use strict";
    var interval, img, audio;   
    
    var easteregg = function() {
        if (window.addEventListener) {
            var keys = [],
            konami = "38,38,40,40,37,39,37,39,66,65,13".split(',');

            window.addEventListener("keydown", function(e){
                keys.push(e.keyCode);

                var position = keys.length -1;

                if (konami[position] == keys[position])
                {
                    if(konami.length === keys.length){
                        generate();
                    }
                }
                else if(e.keyCode == 15)
                {
                    keys = [];
                }
                else{
                    keys = [];
                }

            }, true);
        }
    }

    img = document.getElementById('invader');

    var generate = function() {
        
        audio = document.createElement('audio');
        audio.src = '/assets/img/ufo_lowpitch.wav';
        audio.play();

        img.style.display = 'block';
        document.body.appendChild(audio);

        setTimeout(function(){ destroy() },3000);
    };

    var destroy = function() {
        img.style.display = 'none';
        document.body.removeChild(audio);
    }

    easteregg();

})();
