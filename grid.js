class Grid {
    constructor() {
        this.obstacles = [
            {x:50, y:50, width:120, height:20},
            {x:1000-50-120 ,y:50, width:120, height:20},
            {x:200 ,y:120, width:60, height:20},
            {x:1000-200-60 ,y:120, width:60, height:20},
            {x:0 ,y:250, width:180, height:20},
            {x:1000-0-180 ,y:250, width:180, height:20},
            {x:50 ,y:340, width:100, height:20},
            {x:1000-50-100 ,y:340, width:100, height:20},
            {x:50 ,y:490, width:100, height:20},
            {x:1000-50-100 ,y:490, width:100, height:20},
            {x:0 ,y:620, width:300, height:20},
            {x:1000-0-300 ,y:620, width:300, height:20},
            {x:465 ,y:40, width:70, height:20},
            {x:340 ,y:40, width:70, height:20},
            {x:1000-340-70 ,y:40, width:70, height:20},
            {x:310 ,y:160, width:380, height:20},
            {x:420 ,y:240, width:160, height:20},
            {x:290 ,y:330, width:420, height:20},
            {x:320 ,y:450, width:30, height:80},
            {x:1000-320-30 ,y:450, width:30, height:80},
            {x:485 ,y:450, width:30, height:80},
            {x:200 ,y:720, width:600, height:20},
            {x:420 ,y:640, width:160, height:20},
            {x:0 ,y:720, width:70, height:20},
            {x:1000-0-70 ,y:720, width:70, height:20},
            {x:0 ,y:-35, width:1000, height:20}
        ]
    }

    gridDraw() {
        this.obstacles.forEach((obs) => {
            fill("rgb(112, 158, 158)");
            rect(obs.x, obs.y, obs.width, obs.height);
        });
    }
}


