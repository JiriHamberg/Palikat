
class BlockGrid {

	constructor() {
		this.blockModels = [];
		this.activeBlock = null;
	}

	addBlockModel(blockModel) {
		this.blockModels.push(blockModel);
	}

	setActive(blockModel) {
        const index = this.blockModels.indexOf(blockModel)
        
        if(index < 0) {
            throw "BlockGrid::setActive: blockModel must be added before activating. Call addBlockModel first"
        }

        this.activeBlock = this.blockModels[index]
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
			throw "BlockGrid::roteteActiveX: active blockModel is null. Call setActive first"
		}

		this.activeBlock.rotateX()
		resolveCollisions(this.activeBlock, this.blockModels)
	}

    rotateActiveY() {
		if(this.activeBlock === null) {
			throw "BlockGrid::roteteActiveY: active blockModel is null. Call setActive first"
		}

		this.activeBlock.rotateY()
		resolveCollisions(this.activeBlock, this.blockModels)
    }
    
    rotateActiveZ() {
		if(this.activeBlock === null) {
			throw "BlockGrid::roteteActiveZ: active blockModel is null. Call setActive first"
		}

		this.activeBlock.rotateZ()
		resolveCollisions(this.activeBlock, this.blockModels)
	}



	unactivateActive() {
		this.active = null
    }
    
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
    while(collidesAny(activeBlock, blockModels)) {
        activeBlock.move(0, 1, 0)
    }
}

export default BlockGrid