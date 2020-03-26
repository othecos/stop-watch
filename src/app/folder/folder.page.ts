import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchService } from '../services/watch/watch.service';
import { MenuController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  timer
  stayOpen = true;
  slideOpts = slideOpts

  previousButton = {
    disabled: false
  }
  nextButton = {
    disabled: false
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private watchService:WatchService,
    private menu: MenuController,
    ) {
    // this.initTimer(60)
   }
   @ViewChild('slides',{static: false}) slides:IonSlides;
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response)=>{
      this.folder = response.get('id')
      console.log(response);
    })
  }
  async ngAfterViewInit(){
    console.log(this.slides);
    if(this.slides){
      this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd()
    }
  }
  initTimer(seconds){
    this.watchService.setTimer(seconds)
    this.watchService.enableCounter()
    console.log(this.watchService.initCountDown())
  }
  playTimer(){
    this.watchService.enableCounter()
  }
  refreshTimer(){
    this.initTimer(60)
    console.log(this.slides);

  }
  pauseTimer(){
    this.watchService.disableCounter()
  }
  openSideMenu(){
    console.log(this.menu);
    this.menu.enable(true,'menu')
    this.menu.open('menu');
  }
  async goPrevious(){
    if(this.slides){
      await this.slides.lockSwipes(false)
      await this.slides.slidePrev()
      await this.slides.lockSwipes(true)
      this.previousButton.disabled = await this.slides.isBeginning()
      this.nextButton.disabled = await this.slides.isEnd() 
    }
  }
  async goNext(){
    if(this.slides){
      await this.slides.lockSwipes(false)
      await this.slides.slideNext()
      await this.slides.lockSwipes(true)
      this.nextButton.disabled = await this.slides.isEnd() 
      this.previousButton.disabled = await this.slides.isBeginning()
    }
  }
}

export const  slideOpts = {
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  on: {
    beforeInit() {
      const swiper = this;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform$$1 = swiper.translate;
      const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

         let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);

         let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

         // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;

         const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

         $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
        if (params.slideShadows) {
          // Set shadows
          let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append($shadowBeforeEl);
          }
          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append($shadowAfterEl);
          }
          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
        }
      }

       // Set correct perspective for IE10
      if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    }
  }
}
