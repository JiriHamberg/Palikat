
class BlockGrid {

	constructor() {
		this.blockModels = [];
		this.activeBlock = null;
	}

	addBlockModel(blockModel) {
		this.blockModels.push(blockModel);
	}

	setActive(blockModel) {
        const index = this.blocks.indexOf(blockModel)
        
        if(index < 0) {
            throw "BlockGrid::setActive: blockModel must be added before activating. Call addBlockModel first"
        }

        this.activeBlock = blockModels[index]
	}

	moveActive(dx, dy, dz) {
		if(this.activeBlock === null) {
			throw "BlockGrid::moveActive: active blockModel is null. Call setActive first"
		}

		this.activeBlock.move(dx, dy, dz)
		resolveCollisions(this.activeBlock, this.blockModels)
	}

	rotateActiveX() {
		if(this.activeBlock === null) {
			throw "BlockGrid::moveActive: active blockModel is null. Call setActive first"
		}

		this.activeBlock.rotateX()
		resolveCollisions(this.activeBlock, this.blockModels)
	}

	unactivateActive() {
		this.active = null
	}

	// jos aktiivinen block törmää listan blockeihin, blockia liikutetaan ylöspäin,
	// kunnes se ei törmää siihen blockiin tai mihinkään muuhun blockiin, joka
	// vaika sattuu lepäämään kyseisen blockin päällä
	/*resolveCollisions() {
		while(collidesAny(active, blocks)) {
			active.move(0, 1, 0);
		}
	}

	// palauta true, jos aktiivinen törmää yhteenkään palikoista
	collidesAny(active, blocks) {
		for(var i=0; i<blocks.length; i++) {
			if(active.sprite.intersection(blocks[i].sprite) !== null) {
				return true;
			}
		}
		return false;
	}
	
	return {
		Grid: Grid
	};*/

}


const collidesAny = (activeBlock, blockModels) => {
    for(let i=0; i<blockModels.length; i++) {
        const currentBlockModel = blockModels[i]

        if(currentBlockModel === activeBlock) {
            continue
        }

        if(activeBlock.sprite.intersection(currentBlockModel.sprite) !== null) {
            return true
        }
    }

    return false
}

const resolveCollisions = (activeBlock, blockModels) => {
    while(collidesAny(active, blocks)) {
        active.move(0, 1, 0)
    }
}

export default BlockGrid