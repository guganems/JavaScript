Array.prototype.copyWithin = function (target, start, end) {
    console.log(this);
    if (end === undefined) end = this.length;
    else if (end < 0) end  = this.length + end;
    if (start < 0) start = this.length + start;
    let newSeq = [];
    let old = [...this];
    if (target < 0) {
        if (start === undefined) {
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
        // TODO: THIS
        else {
            target = this.length + target;
            // console.log(end);
            for (let i = start; i < end-1; i++) {
                newSeq.push(old[i]);
            }
            // console.log(newSeq);
            console.log(target+newSeq.length);
            let index = 0;
            for (let i = target; i < target + newSeq.length; i++) {
                old[i] = newSeq[index];
                index++;
            }
        }
    }
    else {
        for (let i = start; i < end; i++) {
            newSeq.push(old[i]);
        }
        // console.log(newSeq);
        for (let i = 0; i < newSeq.length; i++) {
            old[i] = newSeq[i];
        }
    }
    return old;
}

// let test = [1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
let test = [].copyWithin.call({length: 5, 3: 1}, 0, 3);
console.log(test);