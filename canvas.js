window.onload=function()
	{
		var canvas = document.getElementById("canvas");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		var ctx = canvas.getContext("2d");
		
		var colorArry=
		[	
			"#393e46",
			"#00adb5",
			"#fff4e0",
			"#f8b500",
			"#fc3c3c"
		];

		addEventListener("resize",function(){
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		})


		function Circle(x,y,dx,dy,r,color)
		{
			this.x=x;
			this.y=y;
			this.dx=dx;
			this.dy=dy;
			this.r=r;
			// this.a=a;
			// this.b=b;
			// this.c=c;
			// this.bg=bg;
			this.color=color;
			this.draw=function()
			{
				ctx.beginPath();
		    	ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		    	ctx.fillStyle=color;
		    	ctx.fill();
		    	
		    	// ctx.lineTo(this.dx,this.dy)
		    	// ctx.strokeStyle="white";
		    	// ctx.stroke();
			}

			this.update=function()
			{
				if (this.x+this.r>window.innerWidth || this.x-this.r<0) 
		    	{
		    		this.dx=-this.dx;
		    	}
		    	if (this.y+this.r>window.innerHeight || this.y-this.r<0) 
		    	{
		    		this.dy=-this.dy;
		    	}
		    		this.x+=this.dx;
		    		this.y+=this.dy;
		    		this.draw();
			}
		}

		

		var circleArry=[];
		for(var i=0;i<=800;i++)
		{
			var x=Math.random()*(window.innerWidth-r*2)+r;
			var y=Math.random()*(window.innerHeight-r*2)+r;
			var dx=(Math.random()-0.5)*3;
			var dy=(Math.random()-0.5)*3;
			var r=Math.random()*10;
			// var a=Math.floor(Math.random()*255);
			// var b=Math.floor(Math.random()*255);
			// var c=Math.floor(Math.random()*255);
			// var bg="rgb(" + a + "," + b + "," + c +")";
			var color =colorArry[Math.floor(Math.random()*colorArry.length)];
			circleArry.push(new Circle(x,y,dx,dy,r,color));
           
		}
		
		function animate() {
			requestAnimationFrame(animate);
			ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
			for (var i = 0; i < circleArry.length; i++)
		    {
				circleArry[i].update();
		    }
		}
		animate();
}