class Backgruond{
    constructor({position, image}){
        this.position = position
        this.image = image
        this.image.onload = ()=>{
            this.loaded = true
        }
        this.loaded = false
        // 背景的寬高，根據畫布高度進行比例計算
        this.width = 17.5185 * canvas.height -150
        this.height = canvas.height
    }

    draw(){
        if(!this.loaded) return
        //背景圖
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class Interaction {
    constructor({x, y, w, h, name, image=null, multiple=1, isShow=true, isEnlarge=false, isScroll=true, frmaeNum=1,isRoom=true}){
        this.position = {
           x, y
        }
        this.oldWidth = w
        this.oldHeight = h
        this.bigWidth = w*multiple
        this.bigHeight = h*multiple
        this.width = w
        this.height = h
        this.name = name
        this.image = image
        this.loaded = false
        this.show = isShow
        this.enlarge = isEnlarge
        this.scroll = isScroll
        this.count = 0
        this.frmaeNum = frmaeNum
        this.frames = 0
        this.currentCropWidth = w/frmaeNum
        this.isRoom = isRoom
        if(this.image !== null){
            this.image.onload = ()=>{
                this.loaded = true
            }
        }
    }
    draw(){
        if(this.image === null){
            c.fillStyle = 'rgba(255,255,255,0)'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }else{
            if(!this.loaded) return
            if(this.frmaeNum > 1){
                c.drawImage(this.image, this.currentCropWidth*this.frames, 0, this.currentCropWidth, this.height, this.position.x, this.position.y, this.width/this.frmaeNum, this.height)
            }else{
                c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
            }
        }
    }
    updata(){
        this.draw();
        this.count++
        if(this.count%30 === 0){
            this.frames++;
        }
        if(this.frames >= this.frmaeNum ){
            this.frames = 0
        }
    }
}
class Room{
    constructor({w=canvas.height *0.8 * 1.844,h=canvas.height *0.8,image}){
        this.width = w
        this.height = h
        this.position = {
           x: (canvas.width -this.width) / 2 ,
           y: (canvas.height -this.height) / 2
        }
        this.image = image
        this.loaded = false
        this.image.onload = ()=>{
            this.loaded = true
        }
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}
class Dynamic{
    constructor({x, y, w, h, image}){
        this.width = w
        this.height = h
        this.position = {
           x,y
        }
        this.image = image
        this.loaded = false
        this.image.onload = ()=>{
            this.loaded = true
        }
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}
class Bus{
    constructor({x, y, w, h, image}){
        this.width = w
        this.height = h
        this.position = {
           x,y
        }
        this.image = image
        this.loaded = false
         // 當圖片加載完成時，設置 loaded 為 true
         this.image.onload = ()=>{
            this.loaded = true
        }
        this.frames = 0 // 當前幀數
        this.calc = 0 // 計數器
        this.run = true // 是否運行
        this.divisor = 5 // 幀切換間隔
        this.currentCropWidth = 10752 / 4 // 每幀寬度
        this.start = false // 是否開始運行
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.currentCropWidth*this.frames,0,this.currentCropWidth, 825, this.position.x, this.position.y, this.width, this.height)
    }
    update(){
        if(this.run){
            this.calc++
            if(this.calc%this.divisor === 0){
                this.frames ++ ;
            }
            if(this.frames>=4){
                this.frames = 0
            }
        }else{
            this.frames = 0
        }
        
        this.draw();
    }
}
class Shared{
    constructor({x, y, w, h, image, isPeople=false, isEnlarge=false, isShow=true, isTalk=false,multiple=1.1, name=null, text="", color="#000", isTypewriter=false,frmaeNum=1}){
         // 初始化共享物件的屬性
         this.oldPosition = { x, y } // 原始位置
         this.position = { x, y } // 當前位置
         this.multiple = multiple // 放大比例
         this.image = image // 圖片
         this.bigWidth = w * multiple // 放大後寬度
         this.oldWidth = w // 原始寬度
         this.bigHeight = h * multiple // 放大後高度
         this.oldHeight = h // 原始高度
         this.width = this.oldWidth // 當前寬度
         this.height = this.oldHeight // 當前高度
         this.text = text // 顯示的文字
         this.oldPosX = x // 原始X座標
         this.oldPosY = y // 原始Y座標
 
         this.loaded = false // 圖片是否已加載
         this.image.onload = ()=>{
             this.loaded = true
         }
         this.name = name // 名稱
         this.enlarge = isEnlarge // 是否放大
         this.show = isShow // 是否顯示
         this.dragging = false // 是否正在拖拽
         this.isPeople = isPeople // 是否為人物
         this.talk = isTalk // 是否正在對話
         this.isTypewriter = isTypewriter // 是否啟用打字機效果
         this.num = 0 // 計數器
         this.step = 0 // 文字進度
         this.twoStep = 25 // 第二行文字開始位置
         this.threeStep = 50 // 第三行文字開始位置
         this.color = color // 字體顏色
         this.frmaeNum = frmaeNum // 幀數
         this.frames = 0 // 當前幀
         this.currentCropWidth = w / frmaeNum // 每幀寬度
         this.calc = 0; // 計數器
 
         // 設置文字框的高度
         if(this.text.split('').length <= 24){
             this.addHeight = 45
         }else if(this.text.split('').length <= 48){
             this.addHeight = 40
         }else{
             this.addHeight = 36
         }

        
    }

    draw(){
        if(!this.loaded) return
        if(this.frmaeNum > 1){
            c.drawImage(this.image, this.currentCropWidth*this.frames, 0, this.currentCropWidth, this.height, this.position.x, this.position.y, this.width/2.6, this.height/0.9)
        }else{
            c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
        }
        
        if(!this.talk) return
        
        if(this.isTypewriter){
            if(this.step < this.text.split('').length){
                this.num++
            }else{
                this.isTypewriter = false
            }
            if(this.num%5===0){
                if(this.step <24){
                    this.step++
                }
                if(this.step >= 24 && this.twoStep <49){
                    this.twoStep++
                }
                if(this.twoStep >= 49 && this.threeStep <73){
                    this.threeStep++
                }
            }
        }
        c.fillStyle = this.color
        c.font = "bold 18px sans-serif"
        let text = this.text.split('').slice(0,this.step)
        let showText = text.join('')
        c.fillText( showText, this.position.x+30, this.position.y+this.addHeight)

        
        if(this.step >= 24){
            let two_text = this.text.split('').slice(24,this.twoStep)
            let two_showText = two_text.join('')
            c.fillText(two_showText, this.position.x+30, this.position.y+this.addHeight+23) 
        }
        if(this.twoStep >= 49){
            let three_text = this.text.split('').slice(49,this.threeStep)
            let three_showText = three_text.join('')
            c.fillText(three_showText, this.position.x+30, this.position.y+this.addHeight+46) 
        }
    }
    update(){
        this.calc++

        if(this.calc % 20 === 0){
            this.frames ++
        }
        if(this.frames >= 3 ){
            this.frames = 0
        }
        
        this.draw();
    }
}

class Button{
    constructor({image, w, h, x, y, name=null, multiple=1.05, isEnlarge=false}){
        this.width = w
        this.height = h
        this.oldWidth = w
        this.oldHeight = h
        this.bigWidth = w*multiple
        this.bigHeight = h*multiple
        this.position = {
            x,y
        }
        this.name = name
        this.multiple = multiple
        this.image = image
        this.loaded = false
        this.enlarge = isEnlarge
        this.image.onload = ()=>{
            this.loaded = true
        }
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}
class Talk{
    constructor({image, w, h, x, y, name=null, isShow=false, direction}){
        this.width = w
        this.height = h
        this.direction = direction
        this.position = {
            x,y
        }
        this.show = isShow
        this.name = name
        this.image = image
        this.loaded = false
        this.image.onload = ()=>{
            this.loaded = true
        }
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}