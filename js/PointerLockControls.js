/**
 * @author mrdoob / http://mrdoob.com/
 */

THREE.PointerLockControls = function ( camera ) {

	var scope = this;

	var pitchObject = new THREE.Object3D();
	pitchObject.position.y = 30;
	pitchObject.add( camera );

	var yawObject = new THREE.Object3D();
	yawObject.position.y = 10;
	yawObject.add( pitchObject );

	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;
	var turnLeft = false;
	var turnRight = false;
	var moveUp=false;
	var moveDown=false

	var isOnObject = false;
	var canJump = false;

	var velocity = new THREE.Vector3();

	var PI_2 = Math.PI / 2;

	var onMouseMove = function ( event ) {

		if ( scope.enabled === false ) return;

		var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
		var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

		yawObject.rotation.y -= movementX * 0.002;
		pitchObject.rotation.x -= movementY * 0.002;

		pitchObject.rotation.x = Math.max( - PI_2, Math.min( PI_2, pitchObject.rotation.x ) );

	};

	var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 81: //q
				turnLeft = true;
				break;

			case 69: //e
				turnRight = true;
				break;

			case 38: // up
			    moveUp=true;
			   break;
			case 87: // w
				moveForward = true;
				break;

			case 37: // left
			case 65: // a
				moveLeft = true; break;

			case 40: // down
			   moveDown=true;			
			break;
			case 83: // s
				moveBackward = true;
				break;

			case 39: // right
			case 68: // d
				moveRight = true;
				break;

			case 32: // space
				if ( canJump === true ) velocity.y += 10.5;
				canJump = false;
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch( event.keyCode ) {

			case 81: //q
				turnLeft = false;
				break;

			case 69: //e
				turnRight = false;
				break;

			case 38: // up
			moveUp=false;
			break;
			case 87: // w
				moveForward = false;
				break;

			case 37: // left
			case 65: // a
				moveLeft = false;
				break;

			case 40: // down
				moveDown=false;
			break;
			case 83: // a
				moveBackward = false;
				break;

			case 39: // right
			case 68: // d
				moveRight = false;
				break;

		}

	};

	document.addEventListener( 'mousemove', onMouseMove, false );
	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup', onKeyUp, false );

	this.enabled = false;

	this.getObject = function () {

		return yawObject;

	};

	this.isOnObject = function ( boolean ) {

		isOnObject = boolean;
		canJump = boolean;

	};

	this.update = function ( delta ) {

		if ( scope.enabled === false ) return;

		delta *= 0.1;

		velocity.x += ( - velocity.x ) * 0.08 * delta;
		velocity.z += ( - velocity.z ) * 0.08 * delta;

		velocity.y = 0;

		if ( moveForward ) velocity.z -= 0.8 * delta;
		if ( moveBackward ) velocity.z += 0.8 * delta;

		if ( moveLeft ) velocity.x -= 0.5 * delta;
		if ( moveRight ) velocity.x += 0.5 * delta;


		if ( turnLeft ) yawObject.rotation.y += 0.08;
		if ( turnRight ) yawObject.rotation.y -= 0.08;

		
		if ( moveUp ) velocity.y+= 10.0 ;
		if ( moveDown ) velocity.y -= 10.0 ;

		if ( isOnObject === true ) {

			velocity.y = Math.max( 0, velocity.y );

		}

		yawObject.translateX( velocity.x );
		yawObject.translateY( velocity.y ); 
		yawObject.translateZ( velocity.z );

		if ( yawObject.position.y < 10 ) {

			velocity.y = 0;
			yawObject.position.y = 10;

			canJump = true;

		}
		
		if ( yawObject.position.y > 800 ) {

			velocity.y = 0;
			yawObject.position.y = 700;

			canJump = true;

		}

	};

};


window.onkeydown = function(evt) {


 if (evt.keyCode == 38) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("up").style[prop] = css[prop];
			}
		}

		if (evt.keyCode == 40) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("down").style[prop] = css[prop];
			}
		}
		
	  if (evt.keyCode == 87) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("w").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 81) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("q").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 69) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("e").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 65) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("a").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 83) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("s").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 68) {
	  	var css = { "color": "orange", "font-size": "1.4em", "opacity": "1" };
			for(var prop in css) {
			  document.getElementById("d").style[prop] = css[prop];
			}
		}


};

window.onkeyup = function(evt) {
	
	
	  if (evt.keyCode == 38) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("up").style[prop] = css[prop];
			}
		}
  if (evt.keyCode == 40) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("down").style[prop] = css[prop];
			}
		}
		
		  if (evt.keyCode == 87) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("w").style[prop] = css[prop];
			}
		}


	  if (evt.keyCode == 81) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("q").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 69) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("e").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 65) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("a").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 83) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("s").style[prop] = css[prop];
			}
		}

	  if (evt.keyCode == 68) {
	  	var css = { "color": "black", "font-size": "1em", "opacity": ".2" };
			for(var prop in css) {
			  document.getElementById("d").style[prop] = css[prop];
			}
		}

};
