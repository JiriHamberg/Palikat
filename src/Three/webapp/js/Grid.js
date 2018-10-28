var Grid = (function() {

	function Grid() {
		this.blocks = [];
		this.active = null;
	}

	// lisätään listaan block
	// blockia ei aseteta aktiiviseksi
	// tämän metodin käyttötarkoitus ei ole vielä aivan selvä
	Grid.prototype.addBlock = function(block) {
		this.blocks.push(block);
	};


/*
	  -------------------------------- 
	  ~ AKTIIVISEN BLOCKIN KÄSITTELY ~ 
	  -------------------------------- 
*/

	Grid.prototype.setActive = function(block) {
		// etsi block listatsta
		// jos löytyy, ota pois
		// joka tapauksessa, aseta tämä block aktiiviseksi
		if(this.active !== null) {
			this.unactivateActive();
		}
		var index = this.blocks.indexOf(block);
		if(index >= 0) {
			// poistaa yhden alkion indeksistä "index" alkaen
			this.blocks.splice(index, 1); 
		}
		this.active = block; 
	};

	// liikuttaa aktiivista blockia
	Grid.prototype.moveActive = function(dx, dy, dz) {
		if(this.active === null) {
			console.log("moveActive: active on null");
			return;
		}

		this.active.move(dx, dy, dz);
		resolveCollisions(this.active, this.blocks);
	};

	// pyörittää aktiivista blockia
	Grid.prototype.rotateActive = function() {
		if(this.active === null) {
			console.log("rotateActive: active on null");
			return;
		}

		this.active.rotate();
		resolveCollisions(this.active, this.blocks);
	};

	// siirtää aktiivisen blockin listaan
	// asettaa aktiiviseksi blockiksi nullin
	Grid.prototype.unactivateActive = function() {
		this.blocks.push(this.active);
		this.active = null;
	};

	// jos aktiivinen block törmää listan blockeihin, blockia liikutetaan ylöspäin,
	// kunnes se ei törmää siihen blockiin tai mihinkään muuhun blockiin, joka
	// vaika sattuu lepäämään kyseisen blockin päällä
	function resolveCollisions(active, blocks) {
		while(collidesAny(active, blocks)) {
			active.move(0, 1, 0);
		}
	}

	// palauta true, jos aktiivinen törmää yhteenkään palikoista
	function collidesAny(active, blocks) {
		for(var i=0; i<blocks.length; i++) {
			if(active.sprite.intersection(blocks[i].sprite) !== null) {
				return true;
			}
		}
		return false;
	}
	
	return {
		Grid: Grid
	};

})();