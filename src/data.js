angular.module("playBackData",[])  
  .factory("$playback", myPlayBack);

function myPlayBack () {
  return {
      forms:  [

                    {n:'一頁頁', c:'一頁頁',
                      css: '',
                      d:'主持人將故事切成5~7頁，每頁用一個短句表示，演員不說話，每頁聽到頁名時，一起做動作出去，一起定格。',
                      g:'深度不高、時間較長的故事'},

                    {n:'四元素', c:'四元素',
                      d:'音樂、肢體、舞布、即興詩',
                      g:'較深刻或抽象的主題'},

                    {n:'自由呈現', c:'自由呈現',
                      d:'說故事的人選一位演員扮演他自己，如果有其他重要角色，也由說故事的人選擇，其他人自由，呈現方式自由。',
                      g:'較重的故事'}
            ]
  }
}

