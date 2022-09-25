function multiply1(a, b) {
  var rem = 0,result = ''
  b = b.split('').reverse().join('')
  for (i=0;i<b.length;i++){ 
    result+= ((parseInt(a)*parseInt(b.charAt(i))+rem)%10).toString()
    rem = Math.floor((parseInt(a)*parseInt(b.charAt(i))+rem)/10)}
  return (result+(rem!='0'?rem:'')).split('').reverse().join('')
}

function multiply2(x,y){
    d = [x,y].sort((v,m)=>parseInt(v)-parseInt(m))
    x = d[0].split('').reverse().join(''),y = d[1]
    final = []
    for (e=0; e<d[0].length; e++){ final.push(multiply1(x.charAt(e),y)+'0'.repeat(final.length))}
    return [...final].map(x=>x.padStart(final.slice(-1)[0].length,'0'))
}

function add_results(arr){
    r = []
    arr = arr.map(xx=>xx.split('').reverse().join(''))
    for (ii=0; ii<arr[0].length;ii++){
        r.push(arr.map(function(s){return s[ii]}))
    }
    return r
}

function final_add(array){
    finalResult = ''
    f = 0
    for (ind=0; ind<array.length; ind++){
        p = parseInt(array[ind].reduce((u,o)=>parseInt(u)+parseInt(o)))+f
        finalResult=(p%10).toString()+finalResult
        f=Math.floor(p/10)
    }
    return (f?f.toString():'')+finalResult
}

function multiply(aa,bb){
    count = 0
    minus = ''
    m = [aa,bb]
    m = m.map(function(s){ 
      /[.]/.test(s) ? [count,s] = [count+s.split(/[.]/)[1].length, s.replace('.','')]:[count,s]=[count,s];
      /[-]/.test(s) ? [minus,s] = [minus+'-',s.slice(1)] : [minus,s] = [minus,s];
    return s
    })
    z = final_add(add_results(multiply2(m[0],m[1])))
    if (/^0*$/.test(z)){return '0'}
    z = count!=0 ? (z.slice(0,-1*count)+'.'+z.slice(-1*count)).replace(/^0+/, '') : z.replace(/^0+/, '')
    z = z.includes('.') ? z.replace(/0+$/,'') : z
    z = /^[.]/.test(z) ? '0'+z : z
    z = /[.]$/.test(z) ? z.replace(/[.]$/,'') : z
    return minus == '--' || !minus ? z : '-'+z
}
