(() =>{

    let YOffset = 0;
    let prevscrollheight = 0;
    let currentscene = 0;

    const sceneinfo = [
        {
            // 0
            type: 'sticky',
            heightnum: 5,
            scrollheight: 0,
            objs:{
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            // 1
            type: 'normal',
            heightnum: 5,
            scrollheight: 0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            // 2
            type: 'sticky',
            heightnum: 5,
            scrollheight: 0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            // 3
            type: 'sticky',
            heightnum: 5,
            scrollheight: 0,
            objs:{
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];
    function setlayout(){
        for (let i = 0; i < sceneinfo. length; i++){
            sceneinfo[i].scrollheight = sceneinfo[i].heightnum * window.innerHeight;
            sceneinfo[i].objs.container.style.height =`${sceneinfo[i].scrollheight}px`;
        }  
    }
    
    function scorllloop() {
        prevscrollheight = 0;
        for (let i = 0; i < currentscene; i++) {
            prevscrollheight += sceneinfo[i].scrollheight;
        }

        if (YOffset > prevscrollheight + sceneinfo[currentscene].scrollheight) {

        }
        if (YOffset < prevscrollheight) {
            currentscene--;
        }
        console.log(currentscene);
    }
    window.addEventListener('resize',setlayout);
    window.addEventListener('scroll', () => {
        YOffset = window.pageYOffset;
        scorllloop();
    });

    setlayout();

})();