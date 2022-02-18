function add(a, b) {

  var d = [a,b].sort((x,y)=> parseInt(x)-parseInt(y))
  a = d[0].split('').reverse().join(''), b = d[1].split('').reverse().join('')
  var f = '', r = 0
  for (i = 0; i<b.length; i++ ){
    f+=(parseInt(a.charAt(i) ? a.charAt(i):'0')+parseInt(b.charAt(i))+r)%10
    r = Math.floor((parseInt(a.charAt(i) ? a.charAt(i):'0')+parseInt(b.charAt(i))+r)/10)
  }
  return (f+(r ? r : '')).split('').reverse().join('')
}
