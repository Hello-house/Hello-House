
$(function() {

     // json있다고 가정하기
     let boardList = new Array();
     let boardInfo1 = new Object();
     let boardInfo2 = new Object();
     let boardInfo3 = new Object();
     let boardInfo4 = new Object();
     let boardInfo5 = new Object();
     let boardInfo6 = new Object();
     let boardInfo7 = new Object();
     let boardInfo8 = new Object();
     let boardInfo9 = new Object();
     let boardInfo10 = new Object();
     let boardInfo11 = new Object();
     let boardInfo12 = new Object();
     let boardInfo13 = new Object();
     let boardInfo14 = new Object();
     let boardInfo15 = new Object();
     let boardInfo16 = new Object();
     let boardInfo17 = new Object();
     let boardInfo18 = new Object();
     
     
     boardInfo1.num = 1;
     boardInfo1.title = "오늘하우스 정말 좋아요.";
     boardInfo1.mem = "안홍선";
     boardInfo1.pro = "상품1";
     boardInfo1.content = "셀프인테리어를 도전하면서 처음으로 여기서 구매했는데 정말 편하고 좋은것 같아요.";
     boardInfo1.date ="2020-05-27";
     boardInfo1.image = "";
     boardList.push(boardInfo1);

     boardInfo2.num = 2;
     boardInfo2.title = "이 상품에 대한 질문이 있습니다.";
     boardInfo2.mem = "김인호";
     boardInfo2.pro = "상품1";
     boardInfo2.content = "인테리어 사진과 같이 구성을 하려고 하는데 추가 꿀팁이 있을까요?";
     boardInfo2.date ="2020-05-27";
     boardInfo2.image = "assets/img/board/board1.png";
     boardList.push(boardInfo2);
     
     boardInfo3.num = 3;
     boardInfo3.title = "좋은 서비스! 만족도 최고!";
     boardInfo3.mem = "최소희";
     boardInfo3.pro = "상품1";
     boardInfo3.content = "항상 친절하게 응답해주셔서 감사합니다. 사랑합니다!";
     boardInfo3.date ="2020-05-27";
     boardInfo3.image = "";
     boardList.push(boardInfo3);

     boardInfo4.num = 4;
     boardInfo4.title = "다음번에도 여기서 구매할래요";
     boardInfo4.mem = "엄동식";
     boardInfo4.pro = "상품1";
     boardInfo4.content = "살때마다 정말 만족스러웠던것 같아요";
     boardInfo4.date ="2020-05-27";
     boardInfo4.image = "";
     boardList.push(boardInfo4);

     boardInfo5.num = 5;
     boardInfo5.title = "제가 감각이없어서..";
     boardInfo5.mem = "최준혁";
     boardInfo5.pro = "상품1";
     boardInfo5.content = "감각이 없어서 항상 구매할 때 문제가 있었는데 안녕하우스가 해결해줬어요!!";
     boardInfo5.date = "2020-05-27";
     boardInfo5.image = "assets/img/board/board4.png";
     boardList.push(boardInfo5);

     boardInfo6.num = 6;
     boardInfo6.title = "어제 샀던 의자가";
     boardInfo6.mem = "김동원";
     boardInfo6.pro = "상품1";
     boardInfo6.content = "이렇게 예쁠줄 누가 알았게요?";
     boardInfo6.date ="2020-05-27";
     boardInfo6.image = "";
     boardList.push(boardInfo6);

     boardInfo7.num = 7;
     boardInfo7.title = "조명 이거 맞나요?";
     boardInfo7.mem = "이은비";
     boardInfo7.pro = "상품1";
     boardInfo7.content =  "이렇게 예쁜게 맞나요???";
     boardInfo7.date ="2020-05-27";
     boardInfo7.image = "assets/img/board/board6.png";
     boardList.push(boardInfo7);

     boardInfo8.num = 8;
     boardInfo8.title = "대박";
     boardInfo8.mem = "이기성";
     boardInfo8.pro = "상품1";
     boardInfo8.content = "효령대군 18대손 이기성입니다. 정말 대박이네요";
     boardInfo8.date ="2020-05-27";
     boardInfo8.image = "";
     boardList.push(boardInfo8);

     boardInfo9.num = 9;
     boardInfo9.title = "아니 정말";
     boardInfo9.mem = "장진";
     boardInfo9.pro = "상품1";
     boardInfo9.content = "좋습니다";
     boardInfo9.date ="2020-05-27";
     boardInfo9.image = "";
     boardList.push(boardInfo9);

     boardInfo10.num = 10;
     boardInfo10.title = "홈익인간";
     boardInfo10.mem = "홈익인간";
     boardInfo10.pro = "상품1";
     boardInfo10.content =  "만들기 너무 힘들었습니다...";
     boardInfo10.date ="2020-05-27";
     boardInfo10.image = "assets/img/board/board4.png";
     boardList.push(boardInfo10);

     boardInfo11.num = 11;
     boardInfo11.title = "배고픈데";
     boardInfo11.mem = "박병관";
     boardInfo11.pro = "상품1";
     boardInfo11.content = "국밥 한그릇 하러 가실래요?";
     boardInfo11.date ="2020-05-27";
     boardInfo11.image =  "assets/img/board/board5.png";
     boardList.push(boardInfo11);

     boardInfo12.num = 12;
     boardInfo12.title = "항상 여러분이";
     boardInfo12.mem = "안홍선";
     boardInfo12.pro = "상품1";
     boardInfo12.content = "자랑스럽습니다. 안녕하우스 화이팅";
     boardInfo12.date ="2020-05-27";
     boardInfo12.image = "";
     boardList.push(boardInfo12);

     boardInfo13.num = 13;
     boardInfo13.title = "상품이";
     boardInfo13.mem = "엄동식";
     boardInfo13.pro = "상품1";
     boardInfo13.content = "제방에 딱 어울려요!!! 너무 좋은것 같아요 ㅎㅎ";
     boardInfo13.date ="2020-05-27";
     boardInfo13.image =  "assets/img/board/board6.png";
     boardList.push(boardInfo13);

     boardInfo14.num = 14;
     boardInfo14.title = "이세상";
     boardInfo14.mem = "최준혁";
     boardInfo14.pro = "상품1";
     boardInfo14.content = "인테리어가 아니다";
     boardInfo14.date ="2020-05-27";
     boardInfo14.image = "";
     boardList.push(boardInfo14);


     boardInfo15.num = 15;
     boardInfo15.title = "이것은";
     boardInfo15.mem = "마동석";
     boardInfo15.pro = "상품1";
     boardInfo15.content = "인테리어인가 예술인가";
     boardInfo15.date ="2020-05-27";
     boardInfo15.image = "";
     boardList.push(boardInfo15);

     boardInfo16.num = 16;
     boardInfo16.title = "생각해보면";
     boardInfo16.mem = "가나다";
     boardInfo16.pro = "상품1";
     boardInfo16.content = "여기 만큼 이쁜 인테리어 구경 못해봄";
     boardInfo16.date ="2020-05-27";
     boardInfo16.image =  "assets/img/board/board1.png";
     boardList.push(boardInfo16);

     boardInfo17.num = 17;
     boardInfo17.title = "정말";
     boardInfo17.mem = "최소희";
     boardInfo17.pro = "상품1";
     boardInfo17.content = "당신들... 최고야";
     boardInfo17.date ="2020-05-27";
     boardInfo17.image =  "assets/img/board/board2.png";
     boardList.push(boardInfo1);
     
     boardInfo18.num = 18;
     boardInfo18.title = "노동력";
     boardInfo18.mem = "홈익인간";
     boardInfo18.pro = "상품1";
     boardInfo18.content = "갈아넣었습니다... 알아봐주세요...";
     boardInfo18.date ="2020-05-27";
     boardInfo18.image =  "assets/img/board/board3.png";
     boardList.push(boardInfo18);





     //게시판 태그 붙이는거 미리 나두기
     const boards = document.querySelector('.boards');
     let board_frame = document.createElement('div');
     board_frame.className = 'board_frame';
     boards.appendChild(board_frame);

     //페이지넘버 태그 붙이는거 미리 나두기
     const page= document.querySelector('.page');
     

     //게시판 함수 생성
     function boardN(i){
         let board_div = document.createElement('div');
         board_div.className = 'board';
         board_div.id = 'board_'+i;


         let h1 = document.createElement('h1');
         h1.className = 'title';
         let title = document.createTextNode(boardList[i].title);
         let img = document.createElement('img');
         img.className = 'imgBoard';
         img.setAttribute('src', boardList[i].image)
         let pContent = document.createElement('p');
         pContent.className = 'pContent';
         let pText = document.createTextNode(boardList[i].content);
         pContent.appendChild(pText);
         let footer_board = document.createElement('div');
         footer_board.className = 'footer_board';
         let spanN = document.createElement('span');
         spanN.className = 'spanN';
         spanText = document.createTextNode('작성자 : '+boardList[i].mem);
         spanN.appendChild(spanText);    
         footer_board.appendChild(spanN);

         h1.appendChild(title);
         //이미지가 비어있을때는 안 붙인다.
         if(boardList[i].image != ""){
             board_div.appendChild(img);
         }
         board_div.appendChild(h1);
         board_div.append(pContent);
         board_div.append(footer_board);

         board_frame.appendChild(board_div);
         
     }

     //page 함수 생성
     function pageN(i){
         const page_div = document.createElement('div');
         if(i==0){
             page_div.className = 'page_num page_select';
         }else{
             page_div.className = 'page_num';
         }
         page_div.id = 'page_'+i;
         let text_page = document.createTextNode(i+1);
         page_div.appendChild(text_page);
         page_frame.appendChild(page_div);
         
     }

     

     //초기 설정
     let startNum = 0;
     let endNum = 4; 
     const pageNum = 4; //4개까지


//처음에 개수 확인해서 보여주는 페이지 하나

     // 게시판 갯수에 따른 동적 페이지 만들기
     if(boardList.length>4){
         for(let i=startNum; i<endNum; i++){
     
             boardN(i);
         }
     }else{
         for(let i=0; i<boardList.length; i++){
            
             boardN(i);
         }
     }

//페이지 버튼 만들기

     //이전버튼
     const page_pre = document.createElement('div');
     page_pre.className = 'pre';
     const text_pre = document.createTextNode('<'); 
     page_pre.appendChild(text_pre);
     page.appendChild(page_pre);

     
//처음에 개수 확인해서 보여주는 페이지 버튼
     let page_frame = document.createElement('div');
     page_frame.className = 'page_frame';
     page.appendChild(page_frame);

     //20개이하까지만 쪽번호 보여줄거야
     if(boardList.length<=20){
         for(let i=parseInt(startNum/pageNum); i<parseInt((boardList.length-1)/pageNum)+1; i++){
             pageN(i);
         }
     }else{
         for(let i=parseInt(startNum/pageNum); i<5; i++){
             pageN(i);
         }
     }
     
         
     
     //다음 버튼
     const page_next = document.createElement('div');
     page_next.className = 'next';
     const text_next = document.createTextNode('>');
     page_next.appendChild(text_next);
     page.appendChild(page_next);

     
     //처음에 보이는 페이지에 해당하는 게시판 이벤트 하나
     let board_first = document.querySelectorAll('.board');
     //console.log(board_first);
     for(let i=0; i<board_first.length; i++){
         board_first[i].addEventListener('click',function(){
             console.log('click');
             let id = this.getAttribute('id');
             console.log(id);
         });
     }

     //생성된 page_num에 이벤트 생성
     let page_num = document.querySelectorAll('.page_num');
        
     for(let i=0; i<page_num.length; i++){
         page_num[i].addEventListener('click',function(){

             for(let i=0; i<page_num.length; i++){
                 page_num[i].setAttribute('class', 'page_num');
             }
             this.setAttribute('class', 'page_num page_select')
             

             console.log('click');
             let id = this.getAttribute('id');
             console.log(id);
             let board_frame = document.querySelector('.board_frame');
             console.log(board_frame);
             boards.removeChild(board_frame);//현재 보여지는 board 다 제거해주기

             let arr1 = id.split('_');//id이름을 가져와서 split으로 자른다음 해당 번호가져오기
             console.log(arr1[1]);                     
             startNum = parseInt(arr1[1])*4;
             endNum = startNum + 4;

             //다시 보여주기
             board_frame = document.createElement('div');
             board_frame.className = 'board_frame';
             boards.appendChild(board_frame);

             //boardList가 endNum보다 작을 때는 바꿔줘야지
             if(boardList.length<endNum){
                 endNum=boardList.length;
             }
             for(let i=startNum; i<endNum; i++){
                 
                 board_div = document.createElement('div');
                 board_div.className = 'board';
                 board_div.id = 'board_'+i;

                 h1 = document.createElement('h1');
                 h1.className = 'title';
                 title = document.createTextNode(boardList[i].title);
                 img = document.createElement('img');
                 img.className = 'imgBoard';
                 img.setAttribute('src', boardList[i].image)
                 pContent = document.createElement('p');
                 pContent.className = 'pContent';
                 pText = document.createTextNode(boardList[i].content);
                 pContent.appendChild(pText);
                 footer_board = document.createElement('div');
                 footer_board.className = 'footer_board';
                 spanN = document.createElement('span');
                 spanN.className = 'spanN';
                 spanText = document.createTextNode('작성자 : ' + boardList[i].mem);
                 spanN.appendChild(spanText);
                 footer_board.appendChild(spanN);

                 h1.appendChild(title);
                 //이미지가 비어있을때는 안 붙인다.
                 if (boardList[i].image != "") {
                     board_div.appendChild(img);
                 }
                 board_div.appendChild(h1);
                 board_div.append(pContent);
                 board_div.append(footer_board);

                 board_frame.appendChild(board_div);
                 
             }
             board_first = document.querySelectorAll('.board');
            
             for(let i=0; i<board_first.length; i++){
                 board_first[i].addEventListener('click',function(){
                 console.log('click');
                 let id = this.getAttribute('id');
                 console.log(id);
             });
             window.scrollTo(0,300);
     }
             


             //해당 페이지 넘버를 클릭할 때 넘어가게 하기
             
         });
     }
 });//json
