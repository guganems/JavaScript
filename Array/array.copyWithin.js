Array.prototype.copyWithin = function (target, start, end) {
    if (end === undefined) end = this.length-1;
    let newSeq = [];
    let old = [...this];
    if (target < 0) {
        target = target * -1;
        for (let i = 0; i < target; i++) {
            newSeq.push(this[i]);
        }
        // console.log(newSeq);
        let newSeqLength = newSeq.length-1;
        for (let i = this.length-1; i >= this.length-newSeq.length; i--) {
            old[i] = newSeq[newSeqLength];
            newSeqLength--;
        }
    }
    else {
        for (let i = start+1; i <= end; i++) {
            newSeq.push(old[i]);
        }
    }
    return old;
}

let test = [1, 2, 3, 4, 5].copyWithin(-2);
console.log(test);