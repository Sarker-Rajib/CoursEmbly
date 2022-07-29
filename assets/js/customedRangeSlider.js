// script for first range
{
   const mySlider = document.getElementById("mySlider");
   const sliderValue = document.getElementById("slider-value");
   const progressedBg = document.getElementById("active-progress");
 
   function slider(){
      valPercent = (mySlider.value / mySlider.max)*100;
      const Wvalue = (mySlider.value / mySlider.max) * 100 + '%';
      sliderValue.innerHTML = mySlider.value;
      progressedBg.style.width = Wvalue;
   }
 
   slider();
}

// script for second range 
{
   const mySlider2 = document.getElementById("mySlider2");
   const sliderValue2 = document.getElementById("slider-value2");
   const progressedBg2 = document.getElementById("active-progress2");
 
   function slider2(){
      valPercent = (mySlider2.value / mySlider2.max)*100;
      const Wvalue2 = (mySlider2.value / mySlider2.max) * 100 + '%';
 
      sliderValue2.innerHTML = mySlider2.value;
      progressedBg2.style.width = Wvalue2;
   }
 
   slider2();
}