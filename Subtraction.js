function w(a, b) { 
  [a,b] = +a > +b ? [a.split('').reverse(),b.padStart(a.length,'0').split('').reverse()] : 
                                                  [a.padStart(b.length,'0').split('').reverse(),b.split('').reverse()]
  var rem = 0, r = ''
  for (e=0;e<b.length;e++){
      r+=(((+a[e])-(+b[e])+rem+10)%10).toString(),rem = Math.floor(((+a[e])-(+b[e])+rem)/10)
  }
  return /^0*$/.test(r.split('').reverse().join('')) ? '0' : r.split('').reverse().join('').replace(/^0+/,'')
}

function o(aa, bb) {
  [aa,bb] = +aa > +bb ? [aa.split('').reverse(),bb.padStart(aa.length,'0').split('').reverse()] : 
                                                  [aa.padStart(bb.length,'0').split('').reverse(),bb.split('').reverse()]
  let reminder = 0, result = ''
  for (i=0;i<bb.length;i++){
      result+=(((+aa[i])+(+bb[i])+remainder)%10).toString(),remainder = Math.floor(((+aa[i])+(+bb[i])+remainder)/10)
  }
  return (result+(remainder!='0'?remainder:'')).split('').reverse().join('')
}

function bigSub(n, m) {
  n = n.toString(),m = m.toString()
  var _=+n>=0&&+m>=0?(+n>=+m?w(n,m):'-'+w(m,n)):(+n<=0&&+m<=0?(+n>=+m?w(m.slice(1),n.slice(1)):'-'+w(n.slice(1),m.slice(1))):
                                                                                  (+n>=0&&+m<0?o(n,m.slice(1)):'-'+o(n.slice(1),m)))
  return _
}
