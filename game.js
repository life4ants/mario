var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var bgImage = new Image();
var mImage = new Image();
var mReady = false;
var bgReady = false;
bgImage.onload = () =>{
	bgReady = true;
	
};
mImage.onload = () =>{
	mReady = true;
}

bgImage.src = '1-1.png';
mImage.src = 'mario.png';
var dxB = 0;
var dxM = 0;
var rate = 0;
var update = () =>{

		if( dxB >= 2900)
			dxB = 0;
		else
			dxB+=2;

		if( rate % 8 == 0){
		if( dxM >=17 * 3)
			dxM = 17;
		else
			dxM += 17;

	}
	rate++;
}

var render = () =>{
	if(bgReady){
		ctx.drawImage(bgImage,0 + dxB ,0,400,225,0,0,800,460);
	}
	if(mReady){
		ctx.drawImage(mImage,80 +dxM,1,16,32,400,345, 32, 64);
	}
}

var main = () =>{
	update();
	render();

	requestAnimationFrame(main);
}

main();