(function() {
	'use strict';

	// constants
	var TOTAL_FIELDS 	= 15,
		STEP_SIZE		= 68,
		STEPS_NEUTRAL 	= 0,
		STEPS_FORWARD  	= 1,
		STEPS_BACK	 	= 2,	

	// globals
		$,$$;

	// game object literal (controller)
	var game = {
		// properties
		// session object here?
		pawns: [],
		activePawn: 0,
		
		tasks:[],
		taskDone: false, 

		// methods
		init: function() {
			utils.init();
			board.init();

			this.getPawns();
			this.handleEvents();
		},

		getPawns: function() {
			var ulPawns = $$('.pawns li'),
				i;

			for(i = 0; i < ulPawns.length; i++) {
				this.pawns[i] = new Pawn(ulPawns[i]);
			}
		},

		handleEvents: function() {
			var element = $('.dice');
			
			element.addEventListener('click', dice.init.bind(dice));
		}
	};

	// board object literal
  	var board = {
  		// methods
  		init: function() {
  			var fields = this.getFields(), // 
  				container = $('.fields'),
  				element, width, i;

  			for (i = 0; i < fields.length; i++) {
           		element = document.createElement('li');

	            if (fields[i] === 'N'){
	                element.className = 'neutral';
	            } else if (fields[i] === 'F') {
	                element.className = 'forward';
	            } else {
	            	element.className = 'back';
	            }

            	width = Math.floor((window.innerWidth-30) / fields.length);
            	element.width = width;

	            container.appendChild(element);
	        }
  		},

  		getFields: function() {
  			var fields = [],
  				number, i;

  			for (i = 0; i < TOTAL_FIELDS; i++) {
	            number = Math.random();

	            if (number < 0.65 ){
	                fields[i] = 'N';
	            }
	            else if ((number < 0.85 )&&(i != TOTAL_FIELDS - 1)){
	                fields[i] = 'F';
	            }
	            else if ((number >= 0.85)&&(i<=1)){
	                fields[i] = 'N';
	            }
	            else {
	                fields[i] = 'B';
	            }
	        }

	        game.tasks = fields; // store field tasks in array
	        return fields;
  		}
  	};

  	// dice object literal
  	var dice = {
  		// properties
  		eyes: 1,
  		sound: new Audio('./static/sfx/shake_dice.mp3'),
  		
  		// methods
  		init: function(event) {
  			var element = event.target;

  			this.eyes = Math.floor(6 * Math.random()) + 1;
  			this.setImg(element);
  			this.roll(element);
  		},

  		setImg: function(element) {
	        switch (this.eyes) {
		        case 1:
		            element.src = "./static/images/one.png";
		            break;
		        case 2:
		            element.src = "./static/images/two.png";
		            break;
		        case 3:
		            element.src = "./static/images/three.png";
		            break;
		        case 4:
		            element.src = "./static/images/four.png";
		            break;
		        case 5:
		            element.src = "./static/images/five.png";
		            break;
		        case 6:
		        	element.src = "./static/images/six.png";
		            break;
	        }  
	    },

	    roll: function(element) {
	        element.classList.remove('rotatein');
	        element.parentElement.classList.remove('slidein');

	        setTimeout(function (){
	            element.classList.add('rotatein');
		        element.parentElement.classList.add('slidein');
		    }, 1);

	        this.sound.pause();
	        this.sound.currentTime = 0;
	        this.sound.play();

	        game.pawns[game.activePawn].move(dice.eyes);
	    }
  	};

  	// pawn constructor object 
  	function Pawn(element) {
  		// properties
  		this.element = element;
  		this.currentField = 0;
  	};

  	Pawn.prototype = {
  		// methods
  		move: function(steps) {
	  		var pawn = game.pawns[game.activePawn].element, // active pawn element (li)
	  			self = this;

	  		if(steps + this.currentField < TOTAL_FIELDS) {
	  			pawn.style.left = (steps + this.currentField - 1) * STEP_SIZE + 'px'; // move element
	  			this.currentField = this.currentField + steps; // store current field
	  		} else {
	  			pawn.style.left = TOTAL_FIELDS * STEP_SIZE + 'px';
	  			
	  			setTimeout(function() {
	  				this.currentField = 0;
	  				self.teleport(pawn);
	  			}, 1000);
	  		}	 

	  		setTimeout(function (){
  				if(game.taskDone) {
  					self.setActive();
  					game.taskDone = false;
  				} else {
  					self.doTask(self.currentField);
  				}
		    }, 1000);
	  	},

	  	doTask: function(i) {
	  		var task = game.tasks[i-1]; // get task corresponding to field

	  		if (task === 'N') {
	            this.setActive();
	        }
	        else if (task === 'B') {
	        	game.taskDone = true;
	            this.move(-STEPS_BACK);
	        }
	        else {
	        	game.taskDone = true;   
	            this.move(STEPS_FORWARD);
	        }
	  	},

	  	setActive: function() {
	  		game.activePawn < (game.pawns.length - 1) ? game.activePawn++ : game.activePawn = 0; // change active pawn
	  	},

	  	teleport: function(element) {
	  		console.log('teleporter seriously out of order!');
	  		element.style.left = -STEP_SIZE + 'px';
	  	}
  	};
  	
  	// utils object literal
	var utils = {
		// methods
		init: function() {
			$  = this.selectElement, 
			$$ = this.selectElements
		},
		selectElement: function(el) {
			return document.querySelector(el);
		},
		selectElements: function(el) {
			return document.querySelectorAll(el);
		}
	};

	// start application
	game.init();

})();
