function createQueue() {
    const queue = []
    return{
       enque(item){
           queue.unshift(item)
       },
       deque(x){
           return queue.pop(x)
       },
       peek(){
           return queue
       },
       get length (){
            return queue.length
       },
       isEmpty (){
        return queue.length == 0
        
       } 
    }
}
const q= createQueue()
q.enque('toy')
q.enque('run')
q.enque('wed')

q.deque(1)
console.log(q.peek())
