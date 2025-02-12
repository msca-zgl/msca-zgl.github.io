pass=0
pl1=[]
pl2=[]
pll=205743
console.log('PassWoord Tool')
/*
    索引    内容
pl1 明文    密文
pl2 密文    明文
*/
function value1(){
    return document.getElementById("1").value;
}
function value2(){
    return document.getElementById("2").value;
}
function ans(x){
    document.getElementById("ans").innerHTML=x;
}
function ToInt(x){
    a=[]
    for(i=0;i<x.length;i++){
        a.push(x.charAt(i).charCodeAt())
    }
    return a
}
function ToStr(x){
    a=''
    for(i=0;i<x.length;i++){
        a+=String.fromCharCode(x[i])
    }
    return a
}
function mpl(){
    pl1=[]
    pl2=[]
    for(i=0;i<pll;i++){
        pl1.push(i)
        pl2.push(i)
    }
    num=Math.round(pass*pass*pass*0.567+pass*pass*0.314+pass*1.428+5.234)
    for(i=0;i<pll;i++){
        x=Math.round(pass*pass*pass*0.234+pass*pass*0.926+pass*5.714+5.345)
        x=Math.round(x*x*i*0.6+x*i*0.5+x+5.114);
        [pl1[x%pll],pl1[i]]=[pl1[i],pl1[x%pll]]
    }
    for(i=0;i<pll;i++){
        pl2[pl1[i]]=i
    }
}

function p0(){
    pass=Number(value2())
    mpl()
    a=ToInt(value1())
    for(i=0;i<a.length;i++){
        a[i]=pl1[a[i]]
    }
    ans(a)
}
function p1(){
    pass=Number(value2())
    mpl()
    a=eval('['+value1()+']')
    for(i=0;i<a.length;i++){
        a[i]=pl2[a[i]]
    }
    ans(ToStr(a))
}
function copy(){
    document.body.addEventListener(
        'click',
        async (e) => {
          await navigator.clipboard.writeText(document.getElementById("ans").innerHTML)
        }
    )
}
