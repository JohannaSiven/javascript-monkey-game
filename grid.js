class Grid {
    constructor() {
        this.obstacles = [
            {x:50, y:50, width:120, height:20},
            {x:1000-50-120 ,y:50, width:120, height:20},
            {x:200 ,y:150, width:60, height:20},
            {x:1000-200-60 ,y:150, width:60, height:20},
            {x:0 ,y:280, width:180, height:20},
            {x:1000-0-180 ,y:280, width:180, height:20},
            {x:50 ,y:380, width:100, height:20},
            {x:1000-50-100 ,y:380, width:100, height:20},
            {x:130 ,y:380, width:20, height:70},
            {x:1000-130-20 ,y:380, width:20, height:70},
            {x:130 ,y:450, width:20, height:70},
            {x:1000-130-20 ,y:450, width:20, height:70},
            {x:50 ,y:520, width:100, height:20},
            {x:1000-50-100 ,y:520, width:100, height:20},
            {x:0 ,y:650, width:300, height:20},
            {x:1000-0-300 ,y:650, width:300, height:20},
            {x:465 ,y:50, width:70, height:20},
            {x:340 ,y:50, width:70, height:20},
            {x:1000-340-70 ,y:50, width:70, height:20},
            {x:310 ,y:230, width:380, height:20},
            {x:420 ,y:330, width:160, height:50},
            {x:290 ,y:380, width:420, height:20},
            {x:320 ,y:500, width:30, height:80},
            {x:1000-320-30 ,y:500, width:30, height:80},
            {x:485 ,y:500, width:30, height:80},
            {x:200 ,y:850, width:20, height:40},
            {x:1000-200-20 ,y:850, width:20, height:40},
            {x:200 ,y:890, width:600, height:20},
            {x:420 ,y:730, width:160, height:20},
            {x:360 ,y:820, width:60, height:20},
            {x:1000-360-60 ,y:820, width:60, height:20},
            {x:0 ,y:800, width:70, height:20},
            {x:1000-0-70 ,y:800, width:70, height:20}
        ]
    }

    gridDraw() {
        this.obstacles.forEach((obs) => {
            fill("rgb(112, 158, 158)");
            rect(obs.x, obs.y, obs.width, obs.height);
        });
    }

    

}


