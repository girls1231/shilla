<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 파비콘 -->
    <link rel="icon" href="./favicon/favicon.ico">
    <!-- css초기화 -->
    <link rel="stylesheet" href="./css/reset.css" type="text/css">
    <!-- 폰트어썸 cdn -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css">
    <!-- 스와이퍼 cdn css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    <!-- 헤더, 푸터 공통서식 css -->
    <link rel="stylesheet" href="./css/common.css" type="text/css">
    <!-- 공통 효과 서식 css -->
    <link rel="stylesheet" href="./css/effect.css" type="text/css">
    <!-- 메인 콘텐츠 서식 css -->
    <link rel="stylesheet" href="./css/main.css" type="text/css">
    <!-- 미디어쿼리 css -->
    <link rel="stylesheet" href="./css/responsive.css" type="text/css">
    <!-- 제이쿼리 라이브러리 -->
    <script src="./script/jquery-3.7.1.min.js"></script>
    <!-- 스와이퍼 cdn 스크립트 -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <!-- 메인콘텐츠 스크립트 -->
    <script src="./script/main.js" defer></script>
    <!-- 예약하기 모달 스크립트 -->
    <script src="./script/modal.js" defer></script>
    <!-- 헤더부분 스크립트 -->
    <script src="./script/header.js" defer></script>
    <!-- info 스크립트 --> <script src="./script/info.js" defer></script>
    <!-- info 서식 css --><link rel="stylesheet" href="./css/info.css" type="text/css">
    <title>신라호텔</title>
</head>
<body>
    <div id="top_btn"><a href="#header" title="top_btn"><img src="./images/top_btn.png" alt="top_btn"></a></div>
    <header id="header">
        <!-- pc 버전 / 태블릿 768까지 header -->
        <div class="header_wrap">
            <!-- 메인로고 -->
            <h1 class="logo"><a href="index.html" title="메인페이지로 바로가기"><img src="./images/logo_thesilla1.png" id="logo_img" alt="메인로고_white"></a></h1>

            <!-- (햄버거)토글버튼 -->
            <div class="h_toggle">
                <img src="./images/icon_toggle1.png" alt="h_toggle" id="h_toggle_img">
            </div>
            <select name="lang_kr" id="lang">
                <option value="korean">KR</option>
                <option value="english">EN</option>
            </select>

            <!-- lnb -->
            <div class="lnb">
                <div class="lnb_reserve">
                    <a href="#" title="reserve"><img src="./images/icon_reserve1.png" alt="" id="reserve"><p>예약하기</p></a>
                </div>
                <div class="lnb_membership"><a href="#" title="신라리워즈"><img src="./images/icon_membership1.png" alt="신라리워즈">
                <p>신라리워즈</p></a></div>
                <div class="lnb_login"><a href="#" title="로그인"><img src="./images/icon_login1.png" alt="로그인"><p>로그인</p></a></div>
            </div>
            <!-- pc버전 toggle gnb 서식-->
            <div class="gnb_wrap">
                <div class="gnb_inner">
                    <div class="gnb_reserve_bar">
                        <dl>
                            <dt>RESERVATION</dt>
                            <dd>ROOM</dd>
                        </dl>
                        <dl>
                            <dt>HOTEL</dt>
                            <dd>제주신라호텔</dd>
                        </dl>
                        <dl>
                            <dt>CHECK IN / OUT</dt>
                            <dd>2024.05.01(일) - 2024.05.22(월)</dd>
                        </dl>
                        <dl>
                            <dt>ROOM</dt>
                            <dd>1</dd> 
                        </dl>
                        <dl>
                            <dt>ADULT</dt>
                            <dd>1</dd>
                        </dl>
                        <dl>
                            <dt>CHILDREN</dt>
                            <dd>1</dd>
                        </dl>
                        <input type="button" class="gnb_reserve_btn" value="예약하기">
                    </div>
                    <div class="gnb_l_box">
                        <img src="./images/gnb_left_box.png" alt="gnb_left_box">
                    </div>
                    <nav class="gnb">
                        <ul>
                            <li>
                                <a href="http://sree.dothome.co.kr/shilla/info.html" title="신라호텔소개">신라호텔소개</a>
                                <ul>
                                    <li><a href="http://sree.dothome.co.kr/shilla/info.html" title="호텔소개">호텔소개</a></li>
                                    <li><a href="#" title="연혁">연혁</a></li>
                                    <li><a href="#" title="수상이력">수상이력</a></li>
                                    <li><a href="#" title="부대시설">부대시설</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="객실&#x0026;다이닝">객실&#x0026;다이닝</a>
                                <ul>
                                    <li><a href="#" title="객실예약">객실예약</a></li>
                                    <li><a href="#" title="다이닝예약">다이닝예약</a></li>
                                    <li><a href="#" title="프로모션예약">프로모션예약</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="스페셜오퍼">스페셜오퍼</a>
                                <ul>
                                    <li><a href="#" title="패키지">패키지</a></li>
                                    <li><a href="#" title="이벤트">이벤트</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="스페셜오퍼">신라리워즈</a>
                                <ul>
                                    <li><a href="#" title="포인트안내">포인트안내</a></li>
                                    <li><a href="#" title="회원특별혜택안내">회원특별혜택안내</a></li>
                                    <li><a href="#" title="신라리워즈 문의">신라리워즈 문의</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="http://sree.dothome.co.kr/bbs/bbs/board.php?bo_table=shilla_QnA" title="고객문의">고객문의</a>
                                <ul>
                                    <li><a href="http://sree.dothome.co.kr/bbs/bbs/board.php?bo_table=shilla_QnA" title="공지사항">공지사항</a></li>
                                    <li><a href="http://sree.dothome.co.kr/bbs/bbs/board.php?bo_table=shilla_QnA" title="FAQ">FAQ</a></li>
                                    <li><a href="http://sree.dothome.co.kr/bbs/bbs/board.php?bo_table=shilla_QnA" title="Q&#x0026;A">Q&#x0026;A</a></li>
                                </ul>
                            </li>

                            <li><a href="#" title="마이페이지">마이페이지</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <!-- 1025px 아래로 tablet, mobile 버전 gnb 서식 -->
            <div class="m_gnb_wrap">
                <div class="m_gnb_inner">
                    <!-- 모바일 lnb -->
                    <h1 class="m_gnb_logo"><a href="index.html" title="메인페이지로 바로가기"><img src="http://sree.dothome.co.kr/shilla//images/logo_thesilla2.png" alt="메인로고_white" ></a></h1>
                    <div class="m_lnb">
                        <a href="#none" title="login">로그인</a>
                        <a href="#none" title="고객센터" class="customer_center">고객센터</a>
                        <select name="m_lang_kr" id="m_lang">
                            <option value="Language">Language</option>
                            <option value="english">EN</option>
                            <option value="korean">KR</option>
                        </select>
                    </div>
                    <div id="close_btn"><img src="http://sree.dothome.co.kr/shilla/images/close_btn.png" alt="close_btn"></div>
                    <nav class="m_gnb">
                        <ul>
                            <li>
                                <a href="#" title="신라호텔소개">신라호텔소개<i class="fas fa-angle-down"></i></a>
                                <ul class="sub_m">
                                    <li><a href="http://sree.dothome.co.kr/shilla/info.html" title="호텔소개">호텔소개</a></li>
                                    <li><a href="#" title="연혁">연혁</a></li>
                                    <li><a href="#" title="수상이력">수상이력</a></li>
                                    <li><a href="#" title="부대시설">부대시설</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="객실&#x0026;다이닝">객실&#x0026;다이닝<i class="fas fa-angle-down"></i></a>
                                <ul class="sub_m">
                                    <li><a href="#" title="객실예약">객실예약</a></li>
                                    <li><a href="#" title="다이닝예약">다이닝예약</a></li>
                                    <li><a href="#" title="프로모션예약">프로모션예약</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="스페셜오퍼">스페셜오퍼<i class="fas fa-angle-down"></i></a>
                                <ul class="sub_m">
                                    <li><a href="#" title="패키지">패키지</a></li>
                                    <li><a href="#" title="이벤트">이벤트</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="스페셜오퍼">신라리워즈<i class="fas fa-angle-down"></i></a>
                                <ul class="sub_m">
                                    <li><a href="#" title="포인트안내">포인트안내</a></li>
                                    <li><a href="#" title="회원특별혜택안내">회원특별혜택안내</a></li>
                                    <li><a href="#" title="신라리워즈 문의">신라리워즈 문의</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#" title="고객문의">고객문의<i class="fas fa-angle-down"></i></a>
                                <ul class="sub_m">
                                    <li><a href="#" title="공지사항">공지사항</a></li>
                                    <li><a href="http://sree.dothome.co.kr/bbs/bbs/board.php?bo_table=shilla_QnA" title="FAQ">FAQ</a></li>
                                    <li><a href="#" title="Q&#x0026;A">Q&#x0026;A</a></li>
                                </ul>
                            </li>

                            <li><a href="#" title="마이페이지">마이페이지</a></li>
                        </ul>
                    </nav>
                    <div class="m_gnb_btn">
                        <input type="button" value="예약하기" class="m_gnb_reserve_btn">
                        <input type="button" value="예약확인" class="m_gnb_check_btn">
                    </div>
                </div>
            </div>
        </div>
    </header>