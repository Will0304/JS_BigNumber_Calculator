function add(aa, bb) {
  [aa,bb] = +aa > +bb ? [aa.split('').reverse(),bb.padStart(aa.length,'0').split('').reverse()]:
                                                  [aa.padStart(bb.length,'0').split('').reverse(),bb.split('').reverse()]
  var remainder = 0
  var result = ''
  for (i=0;i<bb.length;i++){
      result+=(((+aa[i])+(+bb[i])+remainder)%10).toString()
      remainder = Math.floor(((+aa[i])+(+bb[i])+remainder)/10)
  }
  return (result+(remainder!='0'?remainder:'')).split('').reverse().join('')
}

function sub(a, b) { //a always > b
  [a,b] = +a > +b ? [a.split('').reverse(),b.padStart(a.length,'0').split('').reverse()]:
                                          [a.padStart(b.length,'0').split('').reverse(),b.split('').reverse()]
  var rem = 0
  var result1 = ''
  for (e=0;e<b.length;e++){
      result1+=Math.abs(((+a[e])-(+b[e])+rem+10)%10).toString()
      rem = Math.floor(((+a[e])-(+b[e])+rem)/10)
  }
  f = result1.split('').reverse().join('')
  return /^0*$/.test(f) ? '0' : f.replace(/^0+/,'')
}

function divideStrings(numerator,denom){
    var rem = ''
    var new_numerator = ''
    var new_fin = '0'
    var counter = 0
    var fin = ''
    while (numerator || +numerator>=+denom){
        for (u=0; u<=numerator.length; u++){
            if (+numerator.slice(0,u) >= +denom){
                new_numerator = numerator.slice(0,u)
                break
            }else{
                continue
            }
        }
        if (new_numerator==''){
            break
        }
        while (+add(new_fin,denom)<=+new_numerator){
            new_fin=add(new_fin,denom)
            counter++
        }
        fin+=new_numerator.length>rem.length ? '0'.repeat(new_numerator.length-rem.length-1) : ''
        fin+=counter
        rem = sub(new_numerator,new_fin)
        numerator=rem+numerator.replace(new_numerator,'')
        new_numerator=new_fin=''
        counter=0
    }
    rem = /^0*$/.test(rem) ? '0' : rem
    fin = fin.replace(/^0+/,'')
    return [fin ? fin+'0'.repeat(numerator.length-rem.length) : '0',/^0*$/.test(numerator) ? '0':numerator.replace(/^0+/,'')]
}
