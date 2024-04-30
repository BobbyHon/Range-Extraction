function solution(list){
    let answer = []
    for (let i = 0; list.length > i; i++){
      if (containsThree(list, i))
        {
          let str = `${list[i]}-`
          while(list[i + 1] - 1 == list[i]){
            i++
          }
          str += list[i]
          answer.push(str)
        }
        else{
          answer.push(list[i])
        }
    }
    return answer.join(',')
  }
  function containsThree(list, i){
    let num = list[i]
    if (list[i + 1] - 1 == num && list[i + 2] - 2 == num)
      {
        return true
      }else{
        return false
      }