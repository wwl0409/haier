$(function(){
    $(".banner02").mouseenter(function(){
        $(".swiper2_left").css("left","60px");
        $(".swiper2_right").css("right", "60px");
    }).mouseleave(function(){
        $(".swiper2_left").css("left", "-60px");
        $(".swiper2_right").css("right", "-60px");
    })

    class Swiper {
        constructor() {
            this.w = 1519.2;
            this.num = 0;
            this.len =4;
            this.timer = null;
        }
        init() {
            //设置定时器
            this.setTime();
            //滑上停止定时器
            this.hover();
            //点击左右箭头
            this.lrClick();
        }
        setTime() {
            this.timer = setInterval(() => {
                this.num++;	
                if (this.num > this.len) {
                    this.num = 0;
                }
                let cssTrx = -this.num * this.w;
                $('.swiper2').css({transform: `translateX(${cssTrx}px)`})
            }, 3000)
        }
        hover() {
            $('.banner02').hover(() => {
                clearInterval(this.timer)
            }, () => {
                this.setTime();
            });
        }
        lrClick() {
            $('.swiper2_left img').click(() => {
                this.num--;
                if (this.num < 0) {
                    this.num = this.len;
                };
                console.log(this.num)
                let cssTrx = -this.num * this.w;
                $('.swiper2').css({
                    transform: `translateX(${cssTrx}px)`
                })
            });
            
            $('.swiper2_right img').click(() => {
                this.num++;
                if (this.num > this.len) {
                    this.num = 0;
                }
                let cssTrx = -this.num * this.w;
                $('.swiper2').css({
                    transform: `translateX(${cssTrx}px)`
                })
            })
        }
    }
    let sw = new Swiper();
    sw.init();
})
