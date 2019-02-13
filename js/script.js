$('document').ready(()=>{
    let arr1=[`>"Lovers don’t finally meet somewhere. They’re in each other all along."`,
          `>"The art of love…is largely the art of persistence."`,
        `>"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart."`]
    let arr2=[`>"L^v is s^mething Etern^l; the aspect may change, but not the essence."`,
    `>"Love is composed of a single soul inhabiting two bodies."`,
    `>"Love is a canvas furnished by nature and embroidered by imagination."`]
    let one=0,two=1;
    $('#two').text(arr2[0])
    $("#btn").text('>')
    $('#one').click(()=>{
        //console.log('hey')
        $('#one').text(arr1[(++one)%3]).style.transition("all 2s")
    })   
    $('#two').click(()=>{
        //console.log('hey')
        $('#two').text(arr2[(++two)%3]).style.transition("all 2s")
    }) 
      
})