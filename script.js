
console.log("Bottle Khole bro");

let hambtn = document.getElementById('ham')
let gem = document.getElementById('gem')
let hotb = document.getElementById('hotb')
let meme = document.getElementById('meme')
let spl = document.getElementById('spl')

let container = document.getElementById('container')
let uls = document.getElementById('uls');
let puzzle = document.getElementById('puzzle');

let comboo = hambtn.addEventListener("click", ()=> {
   let popo = document.createElement('div');
   container.append(popo);
   popo.className = 'popup';
   uls.style.filter = 'blur(4px)';
   next.style.filter = 'blur(4px)';
   // popo.style.filter = 'none';
   let ptext = document.createElement('h1');
   popo.append(ptext);
   ptext.innerText = 'Today,s combo';
   console.log("button click hua bg")
   
   let pspan = document.createElement('span');
   pspan.className = 'pspan';
   popo.append(pspan);
   let pspan1 = document.createElement('span');
   pspan1.className = 'pspan1';
   popo.append(pspan1);
   let pspan2 = document.createElement('span');
   popo.append(pspan2);
   pspan2.className = 'pspan2';
   
   
   pspan.addEventListener("click",()=> {
      pspan.style.scale = '1.4';
      pspan.style.zIndex = '2';
      pspan.style.transform = 'translateY(60px)';
      pspan1.style.filter = 'blur(4px)';
      pspan2.style.filter = 'blur(4px)';
      uls.style.filter = 'blur(4px)';
      next.style.filter = 'blur(4px)';
      
      uls.addEventListener("click",()=> {
         pspan.style.scale = 'none';
         pspan1.style.scale = 'none';
         pspan2.style.scale = 'none';
         pspan.style.zIndex = '2';
         pspan.style.transform = 'none';
         pspan1.style.filter = 'none';
         pspan2.style.filter = 'none';
         // uls.style.filter = 'none';
         
      })
   })
   
   pspan1.addEventListener("click",()=> {
      
      puzzle.style.display = 'inline';
      puzzle.style.scale = '2.4';
      puzzle.style.transform = 'translateY(-90px)';
      close.style.transform = 'translateY(-12px)'
      
      pspan1.style.scale = '2.4';
      pspan1.style.transform = 'translateY(-30px)'
      pspan1.style.zIndex = '2';
      pspan.style.filter = 'blur(4px)';
      pspan2.style.filter = 'blur(4px)';
      uls.style.filter = 'blur(4px)';
      next.style.filter = 'blur(4px)';
      
      if(window.matchMedia("(max-width: 500px)").matches){
         puzzle.style.transform = 'translateY(-631px)';
         puzzle.style.scale = '2';
      close.style.transform = 'translateY(200px)';
         //container.style.overflow = 'hidden';
   }else {
      puzzle.style.scale = '2.4';
      puzzle.style.transform = 'translateY(-90px)'
      close.style.transform = 'translateY(-12px)'
      //container.style.overflowY = 'scroll'
   }
})

pspan2.addEventListener("click",()=> {
   
   close.style.transform = 'translateY(52px)'
   pspan2.style.background = "url('https://res.cloudinary.com/ddbxn1la8/image/upload/v1725180471/IMG_20240901_065610_yi6kyn.jpg?v=9')";
   pspan2.style.backgroundRepeat = 'no-repeat';
   pspan2.style.transform = 'translate(100px,40px)'
   pspan2.style.minHeight = '500px';
   // pspan2.style.minWidth = '100px';
   pspan2.style.scale = '1.4';
   pspan2.style.zIndex = '2';
   pspan.style.filter = 'blur(4px)';
   pspan1.style.filter = 'blur(4px)';
   uls.style.filter = 'blur(4px)';
   next.style.filter = 'blur(4px)';
   
   if(window.matchMedia("(max-width: 500px)").matches){
      pspan2.style.scale = '1';
      pspan2.style.transform = 'translate(30px,-30px)';
   close.style.transform = 'translateY(152px)';

      }
   })
   
   //Close popup button
   let close = document.createElement('button');
   container.append(close);
   close.className = 'close';
   close.innerText = 'Close';
   

   close.addEventListener("click", ()=> {
      popo.remove()
      close.remove()
      puzzle.style.display = 'none';
      uls.style.filter = 'none';
      next.style.filter = 'none';
}) 

})

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let scroller = next.addEventListener("click", ()=> {
   gsap.to("#uls",{
      x:-250,
      y:0,
      duration: 3,
      delay:0.2,
      onComplete:()=> {
      next.style.display = 'none';
      prev.style.display = 'inline';
      prev.style.transform = 'translate(-700px,-240px)';
      }
   })
})

prev.addEventListener("click",()=> {
   gsap.to("#uls",{
      x:210,
      y:0,
      duration: 3,
      delay:0.2,
      onComplete:()=> {
      next.style.display = 'inline';
      prev.style.display = 'none';
      // prev.style.transform = 'translate(-700px,-240px)';
      }
   })
})

let gemc = gem.addEventListener("click", ()=> {
   let gemzpo = document.createElement("div");
   container.append(gemzpo);
   gemzpo.className = 'gemzpo';

   let gh1 = document.createElement("h1");
   gemzpo.append(gh1);
   gh1.innerText = 'Today,s Combo'

   let gspan = document.createElement("span");
   gemzpo.append(gspan);
   gspan.className = 'gspan';

   let gspan1 = document.createElement("span");
   gemzpo.append(gspan1);
   gspan1.className = 'gspan1';

   gspan.addEventListener("click",()=>{
      gspan.style.scale = '1.6'
      gspan.style.transform = 'translateY(50px)';
      gspan.style.zIndex = '2';
      next.style.filter = 'blur(4px)';
      gspan1.style.filter = 'blur(4px)';
      uls.style.filter = 'blur(4px)';

   })

   gspan1.addEventListener("click",()=>{
         gspan1.style.scale = '1.6'
         gspan1.style.transform = 'translateY(-80px)';
         gspan1.style.zIndex = '2';
         next.style.filter = 'blur(4px)';
         gspan.style.filter = 'blur(4px)';
         uls.style.filter = 'blur(4px)';

   })

   let close = document.createElement('button');
   container.append(close);
   close.className = 'close';
   close.innerText = 'Close';
   

   close.addEventListener("click", ()=> {
      gemzpo.remove()
      close.remove()
      uls.style.filter = 'none';
      next.style.filter = 'none';
}) 


})

meme.addEventListener("click",()=>{
   let mempo = document.createElement("div");
   container.append(mempo);
   mempo.className = 'mempo';

   let mp1 = document.createElement("h1");
   mempo.append(mp1);
   mp1.innerText = 'Today,s Combo';

   
   
   let mspan = document.createElement("span");
   mempo.append(mspan);
   mspan.className = 'mspan';

   let mp2 = document.createElement("h1");
   mempo.append(mp2);
   mp2.innerText = '2 2 2 2 (Neck/Chest x 4)';
   mp2.style.backgroundColor = '#1c21db';
   mp2.style.color = 'white';
   mp2.style.borderRadius = '8px';

   mspan.addEventListener("click",()=>{
      mspan.style.scale = '1.2';
      mspan.style.transform = 'translateY(30px)';
      mspan.style.zIndex = '2';
      next.style.filter = 'blur(4px)';
      uls.style.filter = 'blur(4px)';

   })

   let close = document.createElement('button');
   container.append(close);
   close.className = 'close';
   close.innerText = 'Close';
   

   close.addEventListener("click", ()=> {
      mempo.remove()
      close.remove()
      uls.style.filter = 'none';
      next.style.filter = 'none';
}) 

})


 spl.addEventListener("click",()=>{
   let splo = document.createElement("div");
   container.append(splo);
   splo.className = 'splo';

   let sp1 = document.createElement("h1");
   splo.append(sp1);
   sp1.innerText = 'Today,s Combo';

   
   
   let sspan = document.createElement("span");
   splo.append(sspan);
   sspan.className = 'sspan';

   sspan.addEventListener("click",()=>{
      sspan.style.scale = '1.2';
      sspan.style.transform = 'translateY(30px)';
      sspan.style.zIndex = '2';
      next.style.filter = 'blur(4px)';
      uls.style.filter = 'blur(4px)';

   })
    
   let close = document.createElement('button');
   container.append(close);
   close.className = 'close';
   close.innerText = 'Close';
   

   close.addEventListener("click", ()=> {
      splo.remove()
      close.remove()
      uls.style.filter = 'none';
      next.style.filter = 'none';
}) 

})


hotb.addEventListener("click",()=>{
    
   let hotop = document.createElement("div");
   container.append(hotop);
   hotop.className = 'hotop';

   let hp1 = document.createElement("h1");
   hotop.append(hp1);
   hp1.innerText = 'Today,s Combo';

   let hspan = document.createElement("span");
   hotop.append(hspan);
   hspan.className = 'hspan';
   let hs = document.createElement("h1")
   hotop.appendChild(hs);
   hs.innerText = 'Ans:Commissions';
   hs.className = 'hs'

   let hspan1 = document.createElement("span");
   hotop.append(hspan1);
   hspan1.className = 'hspan1';
   let hs1 = document.createElement("h1")
   hotop.appendChild(hs1);
   hs1.innerText = 'Ans:Discussion';
   hs1.className = 'hs1'

   let hspan2 = document.createElement("span");
   hotop.append(hspan2);
   hspan2.className = 'hspan2';
   let hs2 = document.createElement("h1")
   hotop.appendChild(hs2);
   hs2.innerText = 'Ans:COMMUNITY';
   hs2.className = 'hs2'

   let hspan3 = document.createElement("span");
   hotop.append(hspan3);
   hspan3.className = 'hspan3';
   let hs3 = document.createElement("h1")
   hotop.appendChild(hs3);
   hs3.innerText = 'Ans:Explore and Learn';
   hs3.className = 'hs'

   let hspan4 = document.createElement("span");
   hotop.append(hspan4);
   hspan4.className = 'hspan4';
   let hs4 = document.createElement("h1")
   hotop.appendChild(hs4);
   hs4.innerText = 'Ans:TRY ISLAND HOPPING';
   hs4.className = 'hs4'

   let hspan5 = document.createElement("span");
   hotop.append(hspan5);
   hspan5.className = 'hspan5';
   let hs5 = document.createElement("h1")
   hotop.appendChild(hs5);
   hs5.innerText = 'Ans:seed phrase';
   hs5.className = 'hs5'

   let hspan6 = document.createElement("span");
   hotop.append(hspan6);
   hspan6.className = 'hspan6';
   let hs6 = document.createElement("h1")
   hotop.appendChild(hs6);
   hs6.innerText = 'Ans:SMART CONTRACTS';
   hs6.className = 'hs6' 

   let hspan7 = document.createElement("span");
   hotop.append(hspan7);
   hspan7.className = 'hspan7';
   let hs7 = document.createElement("h1")
   hotop.appendChild(hs7);
   hs7.innerText = 'Ans:HOT Mining';
   hs7.className = 'hs7'


   let close = document.createElement('button');
   container.append(close);
   close.className = 'close';
   close.innerText = 'Close';
   

   close.addEventListener("click", ()=> {
      hotop.remove()
      close.remove()
      uls.style.filter = 'none';
      next.style.filter = 'none';
}) 
})

window.addEventListener("load",()=>{
      let notice = document.createElement("div");
      let n1 = document.createElement("h1");
      n1.innerText = 'Freedrops Daily Combo';
      notice.append(n1)
      container.append(notice);
      notice.className = "notice"

      let np = document.createElement("p");
      notice.append(np);
      np.innerText = '- Daily Combo Time Not Fixed Because Different Apps Have Different Time for Changing Daily Combo';

      let np1 = document.createElement("p");
      notice.append(np1);
      np1.innerText = '- Here is the Daily Schedule for some Apps \n 1. Hamster Combo: 5:30-7:30 PM IST \n 2. Memefi Combo:5:30-7:30 AM IST \n 3.Spell Wallet:Their Admin Posts combo anytime currently between 9:30 - 11:30 PM IST'

      let enter = document.createElement("button");
      enter.innerText = 'Enter';
      notice.append(enter);

      enter.addEventListener("click",()=>{
         notice.remove()
      })
   })
