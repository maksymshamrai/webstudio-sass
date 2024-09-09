<picture>

    
      <source
        media="(min-width:1200px)"
        srcset="./img/1x-desk.webp 1x, ./img/2x-desk.webp 2x"
        type="image/webp"
      />

 
      <source
      
        media="(min-width:1200px)"
        srcset="./img/1x-desk.jpg 1x, ./img/2x-desk.jpg 2x"
        type="image/jpeg"
      />


      <source
        media="(min-width:768px)"
        srcset="./img/1x-tb.webp 1x, ./img/2x-tb.webp 2x"
        type="image/webp"
      />

      <source
        media="(min-width:768px)"
        srcset="./img/1x-tb.jpg 1x, ./img/2x-tb.jpg 2x"
        type="image/jpeg"
      />

      <source
        media="(max-width:767px)"
        srcset="./img/1x-mob.webp 1x, ./img/2x-mob.webp 2x"
        type="image/webp"
      />


      <source
        media="(max-width:767px)"
        srcset="./img/1x-mob.jpg 1x, ./img/2x-mob.jpg 2x"
        type="image/jpeg"
      />


      <img src="./base.png" alt="" />


    </picture> -->

    @mixin background-image($webp,$fallback,$gradient){
    @supports (background-image:url("#{$webp}")){
      background-image:$gradient, url("#{$webp}");
    }
    background-image:$gradient, url("#{$fallback}");   
}
.hero{
  padding: 118px 0;
 
  @include background-image("../../mob-1x.webp","../../mob-1x.jpg", $hero-gradient);

  @include retina(2,192dpi,2dppx){
     @include background-image("../../mob-2x.webp","../../mob-2x.jpg", $hero-gradient);
  }

  @include tab(767px){

    @include background-image("../../tab-1x.webp","../../tab-1x.jpg", $hero-gradient);

    @include retina(2,192dpi,2dppx){
       @include background-image("../../tab-2x.webp","../../tab-2x.jpg", $hero-gradient);
    }
  }

  @include desc(1199px){
    padding: 200px 0;
    @include background-image("../../desc-1x.webp","../../desc-1x.jpg", $hero-gradient);
    background-size: cover;

    @include retina(2,192dpi,2dppx){
       @include background-image("../../desc-2x.webp","../../desc-2x.jpg", $hero-gradient);
    }
  }

}