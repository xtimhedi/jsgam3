export class AABB {
    constructor(minX, minY, maxX, maxY) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }
    /**
     * 
     * @param {AABB} other 
     * @returns {Boolean} result
     */
    intersects(other) {
        return (this.minX <= other.maxX && this.maxX >= other.minX) && 
            (this.minY <= other.maxY && this.maxY >= other.minY);
    
    }
}