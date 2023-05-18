
const imgarr = [
    './images/bg.png'
    ,'./images/beginning/Loading.png'
    , './images/beginning/model1.png'
    , './images/beginning/model2.png'
    , './images/beginning/people1.png'
    , './images/beginning/people2.png'
    , './images/bus3.png'
    , './images/cool.png'
    , './images/delay.png'
    , './images/delay2.png'
    , './images/delay3.png'
    , './images/delay4.png'
    , './images/hoard.png'
    , './images/hoard-.png'
    , './images/network.png'
    , './images/noisy.png'
    , './images/occupy.png'
    , './images/res.png'
    , './images/buttons/cancel.png'
    , './images/buttons/chk.png'
    , './images/buttons/close.png'
    , './images/buttons/in2f.png'
    , './images/buttons/ok.png'
    , './images/buttons/phone.png'
    , './images/buttons/top.png'
    , './images/buttons/left.png'
    , './images/buttons/right.png'
    , './images/buttons/wow.png'
    , './images/buttons/Skip.png'
    , './images/cool/people1.png'
    , './images/cool/people2.png'
    , './images/cool/people3.png'
    , './images/cool/talk/001.png'
    , './images/cool/talk/01.png'
    , './images/cool/talk/1.png'
    , './images/cool/talk/1_.png'
    , './images/cool/talk/002.png'
    , './images/cool/talk/02.png'
    , './images/cool/talk/003.png'
    , './images/cool/talk/03.png'
    , './images/cool/talk/3.png'
    , './images/cool/talk/3_.png'
    , './images/cool/talk/004.png'
    , './images/cool/talk/04.png'
    , './images/cool/talk/4A.png'
    , './images/cool/talk/4A_.png'
    , './images/cool/talk/4B.png'
    , './images/cool/talk/4B_.png'
    , './images/cool/talk/005.png'
    , './images/cool/talk/05.png'
    , './images/cool/talk/5A.png'
    , './images/cool/talk/5B.png'
    , './images/cool/talk/006.png'
    , './images/cool/talk/06.png'
    , './images/cool/talk/6.png'
    , './images/cool/talk/6_.png'
    , './images/cool/talk/7.png'
    , './images/cool/talk/8.png'
    , './images/cool/talk/8_.png'
    , './images/cool/talk/9.png'
    , './images/cool/talk/10A.png'
    , './images/cool/talk/10A_.png'
    , './images/cool/talk/10B.png'
    , './images/cool/talk/10B_.png'
    , './images/cool/talk/11A.png'
    , './images/cool/talk/11B.png'
    , './images/cool/talk/1001.png'
    , './images/cool/talk/res.png'
    , './images/cool/goodend.png'
    , './images/cool/badend.png'
    , './images/delays/a1.png'
    , './images/delays/a2.png'
    , './images/delays/b1.png'
    , './images/delays/b2.png'
    , './images/delays/battery1.png'
    , './images/delays/battery2.png'
    , './images/delays/battery3.png'
    , './images/delays/battery4.png'
    , './images/delays/c1.png'
    , './images/delays/c2.png'
    , './images/delays/CG1.png'
    , './images/delays/CG2.png'
    , './images/delays/d1.png'
    , './images/delays/d2.png'
    , './images/delays/people1.png'
    , './images/delays/talk/0-4.png'
    , './images/delays/talk/1-4.png'
    , './images/delays/talk/2-4.png'
    , './images/delays/talk/3-4.png'
    , './images/delays/talk/4-4.png'
    , './images/delays/talk/1.png'
    , './images/delays/talk/1_.png'
    , './images/delays/talk/2.png'
    , './images/delays/talk/3.png'
    , './images/delays/talk/4.png'
    , './images/delays/talk/4_.png'
    , './images/delays/talk/5.png'
    , './images/delays/talk/6.png'
    , './images/delays/talk/6_.png'
    , './images/delays/talk/7.png'
    , './images/delays/talk/8A.png'
    , './images/delays/talk/8A_.png'
    , './images/delays/talk/8B.png'
    , './images/delays/talk/8B_.png'
    , './images/delays/talk/8C.png'
    , './images/delays/talk/8C_.png'
    , './images/delays/talk/9.png'
    , './images/delays/talk/10.png'
    , './images/delays/talk/11.png'
    , './images/delays/talk/11_.png'
    , './images/delays/talk/12.png'
    , './images/delays/talk/13A.png'
    , './images/delays/talk/13A_.png'
    , './images/delays/talk/13B.png'
    , './images/delays/talk/13B_.png'
    , './images/delays/talk/14A.png'
    , './images/delays/talk/14B.png'
    , './images/delays/talk/15.png'
    , './images/delays/talk/16A.png'
    , './images/delays/talk/16A_.png'
    , './images/delays/talk/16B.png'
    , './images/delays/talk/16B_.png'
    , './images/delays/talk/17A.png'
    , './images/delays/talk/17B.png'
    , './images/delays/goodend.png'
    , './images/delays/badend.png'
    , './images/hoards/a1.png'
    , './images/hoards/b1.png'
    , './images/hoards/c1.png'
    , './images/hoards/d1.png'
    , './images/hoards/e1.png'
    , './images/hoards/f1.png'
    , './images/hoards/g1.png'
    , './images/hoards/h1.png'
    , './images/hoards/hold.png'
    , './images/hoards/people1.png'
    , './images/hoards/people2.png'
    , './images/hoards/people3.png'
    , './images/hoards/s1.png'
    , './images/hoards/inter/1.png'
    , './images/hoards/inter/2.png'
    , './images/hoards/inter/3.png'
    , './images/hoards/inter/4.png'
    , './images/hoards/inter/5.png'
    , './images/hoards/inter/6.png'
    , './images/hoards/inter/7.png'
    , './images/hoards/inter/8.png'
    , './images/hoards/talk/1.png'
    , './images/hoards/talk/2.png'
    , './images/hoards/talk/3.png'
    , './images/hoards/talk/4.png'
    , './images/hoards/talk/4_.png'
    , './images/hoards/talk/5.png'
    , './images/hoards/talk/6A.png'
    , './images/hoards/talk/6A_.png'
    , './images/hoards/talk/6B.png'
    , './images/hoards/talk/6B_.png'
    , './images/hoards/talk/7.png'
    , './images/hoards/talk/8.png'
    , './images/hoards/talk/8_.png'
    , './images/hoards/talk/9.png'
    , './images/hoards/talk/10A.png'
    , './images/hoards/talk/10A_.png'
    , './images/hoards/talk/10B.png'
    , './images/hoards/talk/10B_.png'
    , './images/hoards/talk/11.png'
    , './images/hoards/talk/12.png'
    , './images/hoards/talk/12_.png'
    , './images/hoards/talk/13.png'
    , './images/hoards/talk/14.png'
    , './images/hoards/talk/15.png'
    , './images/hoards/talk/16A.png'
    , './images/hoards/talk/16A_.png'
    , './images/hoards/talk/16B.png'
    , './images/hoards/talk/16B_.png'
    , './images/hoards/talk/16C.png'
    , './images/hoards/talk/16C_.png'
    , './images/hoards/talk/finish.png'
    , './images/hoards/talk/res.png'
    , './images/hoards/goodend.png'
    , './images/hoards/badend.png'
    , './images/network/computer.png'
    , './images/network/goback.png'
    , './images/network/goback_.png'
    , './images/network/left.png'
    , './images/network/right.png'
    , './images/network/people1.png'
    , './images/network/web2btn1.png'
    , './images/network/web2btn1_.png'
    , './images/network/web2btn2.png'
    , './images/network/web2btn2_.png'
    , './images/network/web2btn3.png'
    , './images/network/web2btn3_.png'
    , './images/network/web3btn.png'
    , './images/network/web3btn_.png'
    , './images/network/web4btn.png'
    , './images/network/web4btn_.png'
    , './images/network/web5btn.png'
    , './images/network/web5btn_.png'
    , './images/network/web6btn.png'
    , './images/network/web6btn_.png'
    , './images/network/web/404.png'
    , './images/network/web/web1.png'
    , './images/network/web/web2.png'
    , './images/network/web/web3.png'
    , './images/network/web/web4.png'
    , './images/network/web/web5.png'
    , './images/network/web/web6.png'
    , './images/network/talk/1.png'
    , './images/network/talk/2.png'
    , './images/network/talk/2_.png'
    , './images/network/talk/3.png'
    , './images/network/talk/4.png'
    , './images/network/talk/4_.png'
    , './images/network/talk/5.png'
    , './images/network/talk/6.png'
    , './images/network/talk/6_.png'
    , './images/network/talk/7.png'
    , './images/network/talk/8A.png'
    , './images/network/talk/8A_.png'
    , './images/network/talk/8B.png'
    , './images/network/talk/8B_.png'
    , './images/network/talk/9A.png'
    , './images/network/talk/9B.png'
    , './images/network/talk/10.png'
    , './images/network/talk/10_.png'
    , './images/network/talk/11A.png'
    , './images/network/talk/11A_.png'
    , './images/network/talk/11A_.png'
    , './images/network/talk/11B_.png'
    , './images/network/talk/12.png'
    , './images/network/talk/13A.png'
    , './images/network/talk/13A_.png'
    , './images/network/talk/13B.png'
    , './images/network/talk/13B_.png'
    , './images/network/talk/14.png'
    , './images/network/talk/15.png'
    , './images/network/talk/res.png'
    , './images/network/goodend.png'
    , './images/network/badend.png'
    , './images/noisy/people1.png'
    , './images/noisy/smallPeople.png'
    , './images/noisy/wall1.png'
    , './images/noisy/wall2.png'
    , './images/noisy/wall3.png'
    , './images/noisy/wall4.png'
    , './images/noisy/wall5.png'
    , './images/noisy/wall6.png'
    , './images/noisy/wall7.png'
    , './images/noisy/talk/1A.png'
    , './images/noisy/talk/1A_.png'
    , './images/noisy/talk/1B.png'
    , './images/noisy/talk/1B_.png'
    , './images/noisy/talk/2A.png'
    , './images/noisy/talk/2B.png'
    , './images/noisy/talk/3.png'
    , './images/noisy/talk/3_.png'
    , './images/noisy/talk/4A.png'
    , './images/noisy/talk/4A_.png'
    , './images/noisy/talk/4B.png'
    , './images/noisy/talk/4B_.png'
    , './images/noisy/talk/5A.png'
    , './images/noisy/talk/5B.png'
    , './images/noisy/talk/6.png'
    , './images/noisy/talk/7A.png'
    , './images/noisy/talk/7B.png'
    , './images/noisy/talk/A.png'
    , './images/noisy/talk/B.png'
    , './images/noisy/talk/wall1.png'
    , './images/noisy/talk/wall2.png'
    , './images/noisy/goodend.png'
    , './images/noisy/badend.png'
    , './images/occupys/a1.png'
    , './images/occupys/b1.png'
    , './images/occupys/c1.png'
    , './images/occupys/d1.png'
    , './images/occupys/e1.png'
    , './images/occupys/f1.png'
    , './images/occupys/g1.png'
    , './images/occupys/h1.png'
    , './images/occupys/i1.png'
    , './images/occupys/j1.png'
    , './images/occupys/a1-1.png'
    , './images/occupys/b1-1.png'
    , './images/occupys/c1-1.png'
    , './images/occupys/d1-1.png'
    , './images/occupys/e1-1.png'
    , './images/occupys/f1-1.png'
    , './images/occupys/g1-1.png'
    , './images/occupys/h1-1.png'
    , './images/occupys/i1-1.png'
    , './images/occupys/j1-1.png'
    , './images/occupys/people1.png'
    , './images/occupys/people2.png'
    , './images/occupys/sitdown.png'
    , './images/occupys/trash.png'
    , './images/occupys/talk/1.png'
    , './images/occupys/talk/1_.png'
    , './images/occupys/talk/2.png'
    , './images/occupys/talk/3A.png'
    , './images/occupys/talk/3A_.png'
    , './images/occupys/talk/3B.png'
    , './images/occupys/talk/3B_.png'
    , './images/occupys/talk/4.png'
    , './images/occupys/talk/5A.png'
    , './images/occupys/talk/5A_.png'
    , './images/occupys/talk/5B.png'
    , './images/occupys/talk/5B_.png'
    , './images/occupys/talk/6A.png'
    , './images/occupys/talk/6B.png'
    , './images/occupys/talk/7.png'
    , './images/occupys/talk/7_.png'
    , './images/occupys/talk/8.png'
    , './images/occupys/talk/9.png'
    , './images/occupys/talk/10A.png'
    , './images/occupys/talk/10A_.png'
    , './images/occupys/talk/10B.png'
    , './images/occupys/talk/10B_.png'
    , './images/occupys/talk/10C.png'
    , './images/occupys/talk/10C_.png'
    , './images/occupys/talk/res.png'
    , './images/occupys/goodend.png'
    , './images/occupys/badend.png'
    , './images/starts/talk/001.png'
    , './images/starts/talk/01.png'
    , './images/starts/talk/1.png'
    , './images/starts/talk/1_.png'
    , './images/starts/talk/002.png'
    , './images/starts/talk/02.png'
    , './images/starts/talk/2.png'
    , './images/starts/talk/003.png'
    , './images/starts/talk/03.png'
    , './images/starts/talk/3.png'
    , './images/starts/talk/3_.png'
    , './images/starts/talk/004.png'
    , './images/starts/talk/004.png'
    , './images/starts/talk/4A.png'
    , './images/starts/talk/4A_.png'
    , './images/starts/talk/4B.png'
    , './images/starts/talk/4B_.png'
    , './images/starts/talk/005.png'
    , './images/starts/talk/05.png'
    , './images/starts/talk/5A.png'
    , './images/starts/talk/5B.png'
    , './images/starts/talk/006.png'
    , './images/starts/talk/07.png'
    , './images/starts/talk/08.png'
    , './images/starts/talk/09.png'
    , './images/starts/talk/010.png'
    , './images/talks/enter2f.png'
    , './images/talks/enter2f_.png'
    , './images/talks/entercool_.png'
    , './images/talks/entercool.png'
    , './images/talks/enterdelay.png'
    , './images/talks/enterdelay_.png'
    , './images/talks/enterhoard.png'
    , './images/talks/enterhoard_.png'
    , './images/talks/enternetwork.png'
    , './images/talks/enternetwork_.png'
    , './images/talks/enternoisy.png'
    , './images/talks/enternoisy_.png'
    , './images/talks/enterroad.png'
    , './images/talks/enterroad_.png'
    , './images/phone/badgeBtn.png'
    , './images/player/spriteRunLeft.png'
    , './images/player/spriteRunRight.png'
    , './images/player/spriteStandRight.png'
    , './images/player/spriteStandLeft.png'
]
let imgDownloadNum = 0
let isLoaded = false


imgarr.forEach(img=>{
    const image = new Image()
    image.src = img
    image.onload = ()=>{
        imgDownloadNum = imgDownloadNum+1
        if(imgDownloadNum >= imgarr.length){
            loaded()
        }
    }
})
