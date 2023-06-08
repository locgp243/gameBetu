let intellegent = 0; //điểm trí tuệ
let healthyPoint = 0; //điểm sức khoẻ
let moralityPoint = 0; //điểm đạo đức
let happyPoint = 0; //điểm hạnh phúc
let currentQuestionIndex = 0;
let month = 0; //tháng
let pointActive = 0;
let money = 0; //tiền

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.addEventListener("load", function () {
    $("#load").style.display = "none";
});

window.addEventListener("beforeunload", (e) => {
    e.returnValue = "";
});

checkBtn();

$(".study-btn").onclick = function () {
    $(".quiz").classList.add("show-btn");
    pointActive--;
    checkPoint();
    $(".point-active").innerHTML = pointActive;
    checkBtn();
    $(".event-sports").classList.remove("show-btn");
    $(".event-work").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-volunteer").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
};

// $(".on-toggle").onclick = function () {
//     $(".event-months").classList.remove("show-btn");
// };

$("#close-btn").onclick = function () {
    $(".quiz").classList.remove("show-btn");
    if (currentQuestionIndex < questions.length) {
        handleCloseButton();
    } else {
        startGame();
    }
};
$(".on-toggle2").onclick = function () {
    $(".quiz").classList.remove("show-btn");
    if (currentQuestionIndex < questions.length) {
        handleCloseButton();
    } else {
        startGame();
    }
};

// $("#close-btn-event").onclick = function () {
//     $(".event-months").classList.remove("show-btn");
//     // $('.event-contents').innerHTML += htmls;

// };
$(".on-toggle1").addEventListener("click", () => {
    $(".event-months").classList.remove("show-btn");
    $(".event-contents").classList.add("show");
    $$(".event-content").forEach((item) => {
        item.classList.add("show");
    });
    $$(".answer").forEach((item) => {
        item.classList.add("show");
    });

    $(".increase-month").disabled = false;
});
$("#close-btn-event").addEventListener("click", () => {
    $(".event-months").classList.remove("show-btn");
    $(".event-contents").classList.add("show");
    $$(".event-content").forEach((item) => {
        item.classList.add("show");
    });
    $$(".answer").forEach((item) => {
        item.classList.add("show");
    });

    $(".increase-month").disabled = false;
    if (month != 0) {
        $(".hiiden").style.display = "block";
    }
});
$(".bag").onclick = function () {
    $(".event-bag").classList.toggle("show-btn");

    checkBtn();
    $(".event-sports").classList.remove("show-btn");
    $(".event-work").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-volunteer").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};
$(".on-toggle-bag").onclick = function () {
    $(".event-bag").classList.remove("show-btn");
};
$(".on-toggle-avatar").onclick = function () {
    $(".shop-avatars").classList.remove("show-btn");
};

// function callBack(cb){
//     $('.event-contents').innerHTML += cb;
// }

// Gym
$(".sports-btn").onclick = function () {
    // pointActive--;
    // // healthyPoint++;
    // $(".point-active").innerHTML = pointActive;
    // $(".health-point").innerHTML = healthyPoint;
    $(".event-sports").classList.add("show-btn");

    checkBtn();
    $(".event-work").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-volunteer").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};
$("#close-btn-contents").onclick = function () {
    $(".contents").classList.remove("show-btn");
    $(".shop").disabled = true;
    $(".bag").disabled = true;
    $(".relationship").disabled = true;
    $(".increase-month").disabled = true;
    $(".avatar-btn-on").disabled = true;
    $(".box-study").classList.add("show-btn");
    $(".study-btn").disabled = true;
    $(".skip").classList.add("show-btn");
    $(".img-npc").style.display = "none";
    $(".contents").style.display = "none";
    let check = function () {
        $("#skip").onclick = function () {
            $(".skip").classList.remove("show-btn");
            for (var i = 0; i < $$(".box-review").length; i++) {
                $$(".box-review")[i].classList.add("off");
            }
            $(".shop").disabled = false;
            $(".bag").disabled = false;
            $(".relationship").disabled = false;
            $(".increase-month").disabled = false;
            $(".avatar-btn-on").disabled = false;
        };
    };
    //next
    $(".next-study").onclick = function () {
        $(".box-study").classList.remove("show-btn");
        $(".box-sports").classList.add("show-btn");
    };
    check();
    $(".next-sports").onclick = function () {
        $(".box-sports").classList.remove("show-btn");
        $(".box-work").classList.add("show-btn");
    };
    check();
    $(".next-work").onclick = function () {
        $(".box-work").classList.remove("show-btn");
        $(".box-relax").classList.add("show-btn");
    };
    check();
    $(".next-relax").onclick = function () {
        $(".box-relax").classList.remove("show-btn");
        $(".box-volunteer").classList.add("show-btn");
    };
    check();
    $(".next-volunteer").onclick = function () {
        $(".box-volunteer").classList.remove("show-btn");
        $(".box-shop-btn").classList.add("show-btn");
    };
    check();
    $(".next-shop").onclick = function () {
        $(".box-shop-btn").classList.remove("show-btn");
        $(".box-relationship").classList.add("show-btn");
    };
    check();
    $(".next-relationship").onclick = function () {
        $(".box-relationship").classList.remove("show-btn");
        $(".box-bag").classList.add("show-btn");
    };
    check();
    $(".next-bag").onclick = function () {
        $(".bag").disabled = true;
        $(".box-bag").classList.remove("show-btn");
        $(".box-month").classList.add("show-btn");
    };
    check();
    $(".next-month").onclick = function () {
        $(".box-month").classList.remove("show-btn");
        $(".event-review").classList.add("show-btn");
        $(".skip").classList.remove("show-btn");
    };
    //back
    check();
    $(".back-sports").onclick = function () {
        $(".box-sports").classList.remove("show-btn");
        $(".box-study").classList.add("show-btn");
    };
    check();
    $(".back-work").onclick = function () {
        $(".box-work").classList.remove("show-btn");
        $(".box-sports").classList.add("show-btn");
    };
    check();
    $(".back-relax").onclick = function () {
        $(".box-relax").classList.remove("show-btn");
        $(".box-work").classList.add("show-btn");
    };
    check();
    $(".back-volunteer").onclick = function () {
        $(".box-volunteer").classList.remove("show-btn");
        $(".box-relax").classList.add("show-btn");
    };
    check();
    $(".back-shop").onclick = function () {
        $(".box-shop-btn").classList.remove("show-btn");
        $(".box-volunteer").classList.add("show-btn");
    };
    check();
    $(".back-relationship").onclick = function () {
        $(".box-relationship").classList.remove("show-btn");
        $(".box-shop-btn").classList.add("show-btn");
    };
    check();
    $(".back-bag").onclick = function () {
        $(".bag").disabled = true;
        $(".box-bag").classList.remove("show-btn");
        $(".box-relationship").classList.add("show-btn");
    };
    check();
    $(".back-month").onclick = function () {
        $(".box-month").classList.remove("show-btn");
        $(".box-bag").classList.add("show-btn");
    };
    check();
    $(".continue").onclick = function () {
        $(".event-review").classList.remove("show-btn");
        $(".skip").classList.remove("show-btn");
        $(".shop").disabled = false;
        $(".bag").disabled = false;
        $(".relationship").disabled = false;
        $(".increase-month").disabled = false;
        $(".avatar-btn-on").disabled = false;
        for (var i = 0; i < $$(".box-review").length; i++) {
            $$(".box-review")[i].classList.add("off");
        }
    };

    $(".avatar-btn-on").onclick = function () {
        $(".shop-avatars").classList.add("show-btn");
        function fromSubmits() {
            var form = document.getElementById("formss");

            form.addEventListener("submit", function (event) {
                event.preventDefault();
                var characterImagee = document.querySelector(
                    'input[name="character-imagee"]:checked'
                ).value;
                $(".shop-avatars").classList.remove("show-btn");
                $("#previewImage").src = characterImagee;
            });
        }
        fromSubmits();
    };
};
$("#close-sports-btn").onclick = function () {
    $(".event-sports").classList.remove("show-btn");
};
$(".on-toggle4").onclick = function () {
    $(".event-sports").classList.remove("show-btn");
};

// Làm Thêm
$(".work-btn").onclick = function () {
    // pointActive--;
    // money += 3000000;
    // $(".point-active").innerHTML = pointActive;
    $(".event-work").classList.add("show-btn");
    // $(".money").innerHTML = money;
    checkBtn();
    checkMoney();
    $(".event-sports").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-volunteer").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};

// Tình nguyện.

$(".volunteer-btn").onclick = function () {
    // moralityPoint += 2;
    checkPoint();
    // $(".point-active").innerHTML = pointActive;
    $(".event-volunteer").classList.add("show-btn");
    // $(".morality-point").innerHTML = moralityPoint;
    // $(".daoduc").style.width = moralityPoint + "%";
    // if (moralityPoint >= 10 && moralityPoint < 20) {
    //     $(".daoduc").style.background = "yellow";
    //     $(".morality-point").style.color = "red";
    // } else if (moralityPoint >= 20) {
    //     $(".daoduc").style.background = "green";
    //     $(".morality-point").style.color = "yellow";
    // }
    checkBtn();
    $(".event-sports").classList.remove("show-btn");
    $(".event-work").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};

$("#close-volunteer-btn").onclick = function () {
    $(".event-volunteer").classList.remove("show-btn");
};
$(".on-toggle-volunteer").onclick = function () {
    $(".event-volunteer").classList.remove("show-btn");
};

$("#close-work-btn").onclick = function () {
    $(".event-work").classList.remove("show-btn");
};
$(".on-toggle-work").onclick = function () {
    $(".event-work").classList.remove("show-btn");
};
// Giải trí

$(".relax-btn").onclick = function () {
    // pointActive--;
    // happyPoint += 2;
    checkPoint();
    // checkBtn();
    // $(".point-active").innerHTML = pointActive;
    $(".event-relax").classList.add("show-btn");
    $(".event-sports").classList.remove("show-btn");
    $(".event-work").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-volunteer").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};

$("#close-relax-btn").onclick = function () {
    $(".event-relax").classList.remove("show-btn");
};
$(".on-toggle-relax").onclick = function () {
    $(".event-relax").classList.remove("show-btn");
};

// Khai báo câu hỏi

const questions = [
    {
        question:
            "Để lắp ráp một máy tính, phần cứng cần thiết bao gồm những gì?",
        answers: [
            {
                text: "CPU, bo mạch chủ, RAM, ổ cứng, nguồn điện",
                correct: true,
            },
            { text: "Chuột, bàn phím, màn hình, loa", correct: false },
            {
                text: "Hệ điều hành, ứng dụng văn phòng, trình duyệt web",
                correct: false,
            },
            { text: "Cáp mạng, card mạng, router", correct: false },
        ],
    },
    {
        question:
            "Lợi ích của việc lập mục tiêu trong quá trình học tập đại học là gì trong môn Kỹ năng lập mục tiêu và học tập bậc đại học?",
        answers: [
            {
                text: "Tăng cường khả năng nhớ và ghi nhớ thông tin.",
                correct: false,
            },
            {
                text: "Giúp tạo ra sự tự động và tự tin trong học tập.",
                correct: false,
            },
            {
                text: "Định hướng và tập trung vào mục tiêu cụ thể.",
                correct: true,
            },
            {
                text: "Đánh giá và đo lường tiến trình học tập.",
                correct: false,
            },
        ],
    },
    {
        question:
            "Quyền lợi cơ bản của công dân được bảo đảm theo Hiến pháp là?",
        answers: [
            {
                text: "Quyền tự do ngôn luận, tôn giáo, báo chí.",
                correct: false,
            },
            { text: "Quyền công tác, làm việc, học tập.", correct: false },
            {
                text: "Quyền bình đẳng, tự do cá nhân, quyền tư pháp.",
                correct: false,
            },
            { text: "Tất cả các phương án trên.", correct: true },
        ],
    },
    {
        question: "Định lý Fermat khẳng định rằng?",
        answers: [
            {
                text: "Hàm số liên tục trên một đoạn kín đạt cực trị tại ít nhất một điểm",
                correct: true,
            },
            {
                text: "Hàm số liên tục trên một đoạn kín đạt cực tiểu tại ít nhất một điểm.",
                correct: false,
            },
            {
                text: "Hàm số có đạo hàm trên một đoạn kín đạt cực trị tại ít nhất một điểm.",
                correct: false,
            },
            {
                text: "Hàm số có đạo hàm trên một đoạn kín đạt cực tiểu tại ít nhất một điểm",
                correct: false,
            },
        ],
    },
    {
        question:
            "Các hệ điều hành phổ biến trong môn Tin học đại cương bao gồm những lựa chọn nào sau đây?",
        answers: [
            { text: "Windows, macOS, Linux.", correct: true },
            { text: "Photoshop, Illustrator, InDesign", correct: false },
            { text: "Excel, PowerPoint, Word.", correct: false },
            { text: "Java, C++, Python.", correct: false },
        ],
    },
    {
        question:
            "Các thì trong tiếng Anh bao gồm những lựa chọn nào sau đây trong môn Anh văn căn bản?",
        answers: [
            { text: "Present tense, Past tense, Future tense.", correct: true },
            { text: "Noun, Verb, Adjective.", correct: false },
            { text: "Pronoun, Preposition, Conjunction.", correct: false },
            { text: "Subject, Object, Clause.", correct: false },
        ],
    },
    {
        question: "Lý thuyết cơ bản của Triết học Mác - Lênin được gọi là gì?",
        answers: [
            { text: "Chủ nghĩa Mác - Lênin.", correct: true },
            { text: "Chủ nghĩa Xã hội.", correct: false },
            { text: "Chủ nghĩa Cộng sản.", correct: false },
            { text: "Chủ nghĩa Tư duy biện chứng.", correct: false },
        ],
    },
    {
        question:
            "Các thành phần chính của hệ quản trị cơ sở dữ liệu (Hệ CSDL) bao gồm những lựa chọn nào sau đây trong môn Cơ sở dữ liệu?",
        answers: [
            {
                text: "Dữ liệu, Các thao tác, Giao diện người dùng.",
                correct: true,
            },
            { text: "Bảng, Truy vấn, Biểu đồ.", correct: false },
            {
                text: "Khóa chính, Ràng buộc, Công cụ phân tích.",
                correct: false,
            },
            { text: "Ứng dụng, Công nghệ, Phân cấp quản lý.", correct: false },
        ],
    },
    {
        question:
            "Công nghệ nào được sử dụng trong môn Đồ họa máy tính để tạo ra các hình ảnh và đồ họa trên máy tính?",
        answers: [
            { text: "Công nghệ 3D.", correct: false },
            { text: "Công nghệ AI (Trí tuệ nhân tạo)", correct: false },
            { text: "Công nghệ VR (Thực tế ảo).", correct: false },
            { text: "Công nghệ Raster (Điểm ảnh).", correct: true },
        ],
    },
    {
        question:
            "Trong môn Cấu trúc dữ liệu và giải thuật, thuật toán nào được sử dụng để tìm kiếm một phần tử trong một danh sách đã được sắp xếp?",
        answers: [
            { text: "Thuật toán Bubble Sort.", correct: false },
            { text: "Thuật toán Quick Sort.", correct: false },
            { text: "Thuật toán Binary Search.", correct: true },
            { text: "Thuật toán Merge Sort.", correct: false },
        ],
    },
    {
        question:
            "Trong môn Toán ứng dụng tin học, phương pháp nào được sử dụng để tìm nghiệm gần đúng cho các bài toán không tuyến tính?",
        answers: [
            { text: "Phương pháp giải phương trình đại số.", correct: false },
            { text: "Phương pháp tối ưu hóa đồng dạng.", correct: true },
            { text: "Phương pháp tích phân số học.", correct: false },
            { text: "Phương pháp tìm kiếm nhị phân.", correct: false },
        ],
    },
    {
        question:
            "Ngôn ngữ lập trình nào được sử dụng phổ biến trong môn Kỹ thuật lập trình?",
        answers: [
            { text: "Java", correct: true },
            { text: "HTML", correct: false },
            { text: "SQL", correct: false },
            { text: "Photoshop", correct: false },
        ],
    },
    {
        question:
            "Các phần tử chính của một trang web bao gồm những lựa chọn nào sau đây trong môn Thiết kế Website?",
        answers: [
            { text: "Đường dẫn (URL), Phông chữ, Hình ảnh.", correct: true },
            {
                text: "Dữ liệu cơ sở dữ liệu, Biểu đồ, Lưu trữ.",
                correct: false,
            },
            {
                text: "Định dạng văn bản, Công cụ kiểm tra chính tả, Bảng biểu.",
                correct: false,
            },
            {
                text: "Kết nối mạng, Hệ điều hành, Tích hợp xã hội.",
                correct: false,
            },
        ],
    },
    {
        question:
            "Trong môn Hệ quản trị cơ sở dữ liệu, phương pháp nào được sử dụng để truy vấn và thao tác dữ liệu trong cơ sở dữ liệu?",
        answers: [
            { text: "SQL (Structured Query Language).", correct: true },
            { text: "HTML (Hypertext Markup Language)", correct: false },
            { text: "XML (eXtensible Markup Language).", correct: false },
            { text: "CSS (Cascading Style Sheets).", correct: false },
        ],
    },
    {
        question:
            "Ngôn ngữ lập trình nào thường được sử dụng để phát triển ứng dụng di động đa nền tảng (cross-platform) trong môn Lập trình ứng dụng?",
        answers: [
            { text: "C++", correct: false },
            { text: "Java", correct: true },
            { text: "Python", correct: false },
            { text: "React Native", correct: false },
        ],
    },
    {
        question:
            "Phương pháp quản lý dự án phần mềm nào tập trung vào việc phân chia công việc thành các giai đoạn nhỏ và thực hiện song song, với sự tương tác thường xuyên giữa các thành viên trong nhóm?",
        answers: [
            { text: "Phương pháp Agile.", correct: false },
            { text: "Phương pháp Waterfall.", correct: false },
            { text: "Phương pháp Scrum.", correct: true },
            { text: "Phương pháp Lean.", correct: false },
        ],
    },
    {
        question:
            "Giao thức nào được sử dụng để truyền tải dữ liệu qua mạng thông qua một kết nối tin cậy, song song và đảm bảo giao tiếp giữa các thiết bị trên mạng?",
        answers: [
            { text: "TCP/IP.", correct: true },
            { text: "UDP.", correct: false },
            { text: "HTTP.", correct: false },
            { text: "FTP.", correct: false },
        ],
    },
    {
        question: "Hệ điều hành là gì?",
        answers: [
            { text: "Một phần cứng trong máy tính.", correct: false },
            { text: "Một ứng dụng phần mềm.", correct: false },
            { text: "Một tập hợp các công cụ lập trình.", correct: false },
            {
                text: "Một hệ thống quản lý và điều phối tài nguyên trong máy tính.",
                correct: true,
            },
        ],
    },
    {
        question:
            "Framework nào được sử dụng để phát triển ứng dụng web ASP.NET?",
        answers: [
            { text: ".NET Framework", correct: true },
            { text: "Java Development Kit (JDK).", correct: false },
            { text: "Ruby on Rails.", correct: false },
            { text: "Node.js.", correct: false },
        ],
    },
    {
        question:
            "Kỹ năng nào giúp giải tỏa căng thẳng và giải quyết mâu thuẫn bằng cách lắng nghe và hiểu quan điểm của người khác?",
        answers: [
            { text: "Kỹ năng giao tiếp hiệu quả.", correct: true },
            { text: "Kỹ năng đặt mục tiêu.", correct: false },
            { text: "Kỹ năng quản lý thời gian.", correct: false },
            { text: "Kỹ năng lãnh đạo.", correct: false },
        ],
    },
    {
        question:
            "Hồ Chí Minh được biết đến là người sáng lập và lãnh đạo của phong trào nào?",
        answers: [
            { text: "Phong trào Đảng Cộng sản Việt Nam.", correct: true },
            { text: "Phong trào Dân chủ Việt Nam.", correct: false },
            { text: "Phong trào Tự do Việt Nam.", correct: false },
            { text: "Phong trào Dân tộc Việt Nam.", correct: false },
        ],
    },
    {
        question: "Đâu là nội dung chính của mục tiêu của kỳ thi TOEIC?",
        answers: [
            {
                text: "Đánh giá khả năng nghe hiểu và đọc hiểu tiếng Anh.",
                correct: true,
            },
            {
                text: "Đánh giá khả năng nói và viết tiếng Anh.",
                correct: false,
            },
            {
                text: "Đánh giá khả năng giao tiếp hàng ngày bằng tiếng Anh.",
                correct: false,
            },
            { text: "Đánh giá khả năng phát âm tiếng Anh.", correct: false },
        ],
    },
    {
        question: "Giao thức nào làm việc ở tầng mạng trong mô hình OSI?",
        answers: [
            { text: "TCP", correct: false },
            { text: "IP", correct: true },
            { text: "HTTP", correct: false },
            { text: "Ethernet", correct: false },
        ],
    },
    {
        question:
            "Các bước chính trong quy trình phân tích và thiết kế Hệ thống thông tin bao gồm những giai đoạn nào?",
        answers: [
            {
                text: "Thu thập thông tin, Phân tích yêu cầu, Thiết kế kiến trúc, Triển khai",
                correct: true,
            },
            {
                text: "Xác định vấn đề, Phân tích yêu cầu, Kiểm thử, Triển khai",
                correct: false,
            },
            {
                text: "Thiết lập mục tiêu, Phân tích yêu cầu, Kiểm thử, Triển khai",
                correct: false,
            },
            {
                text: "Phân tích yêu cầu, Thiết kế kiến trúc, Phát triển, Kiểm thử",
                correct: false,
            },
        ],
    },
    {
        question:
            "Trong Java, từ khóa nào được sử dụng để định nghĩa một lớp (class)?",
        answers: [
            { text: "function", correct: false },
            { text: "class", correct: true },
            { text: "void", correct: false },
            { text: "static", correct: false },
        ],
    },
    {
        question: "Điểm mạnh của Điện toán đám mây (Cloud computing) là gì?",
        answers: [
            {
                text: "Khả năng mở rộng linh hoạt và linh hoạt trong việc tăng giảm tài nguyên tính toán",
                correct: true,
            },
            {
                text: "Sự an toàn và bảo mật cao với các biện pháp bảo vệ dữ liệu.",
                correct: false,
            },
            {
                text: "Hiệu suất cao và thời gian đáp ứng nhanh chóng.",
                correct: false,
            },
            {
                text: "Khả năng tiết kiệm chi phí với việc tránh đầu tư vào phần cứng và phần mềm riêng lẻ.",
                correct: false,
            },
        ],
    },
    {
        question:
            "Trong quá trình viết email, lập hồ sơ ứng tuyển và trả lời phỏng vấn, kỹ năng gì là quan trọng nhất?",
        answers: [
            {
                text: "Kỹ năng viết ngôn ngữ chuyên nghiệp và rõ ràng.",
                correct: false,
            },
            { text: "Kỹ năng tổ chức và sắp xếp thông tin.", correct: false },
            { text: "Kỹ năng giao tiếp và trình bày.", correct: true },
            {
                text: "Kỹ năng tìm hiểu và nắm bắt yêu cầu công việc.",
                correct: false,
            },
        ],
    },
    {
        question:
            "Phương pháp nghiên cứu khoa học nào nhấn mạnh vào việc thu thập dữ liệu từ nguồn thông tin đã tồn tại?",
        answers: [
            { text: "Phương pháp nghiên cứu mô phỏng.", correct: false },
            { text: "Phương pháp nghiên cứu thực nghiệm.", correct: false },
            { text: "Phương pháp nghiên cứu phân tích.", correct: true },
            {
                text: "Phương pháp nghiên cứu biên soạn tài liệu.",
                correct: false,
            },
        ],
    },
    {
        question: "Ai là người sáng lập và lãnh đạo Đảng Cộng sản Việt Nam?",
        answers: [
            { text: "Nguyễn Ái Quốc (Hồ Chí Minh)", correct: true },
            { text: "Phạm Văn Đồng.", correct: false },
            { text: "Trường Chinh.", correct: false },
            { text: "Võ Nguyên Giáp.", correct: false },
        ],
    },
    {
        question:
            "Mô hình phát triển phần mềm nào tập trung vào việc phân chia quy trình phát triển thành các giai đoạn nhỏ và linh hoạt?",
        answers: [
            { text: "Mô hình Waterfall", correct: false },
            { text: "Mô hình Spiral", correct: false },
            { text: "Mô hình Agile", correct: true },
            { text: "Mô hình Incremental", correct: false },
        ],
    },
    {
        question:
            "Giao thức nào được sử dụng để truyền dữ liệu qua mạng máy tính một cách bảo mật và mã hóa?",
        answers: [
            { text: "TCP/IP", correct: false },
            { text: "HTTP", correct: false },
            { text: "FTP", correct: false },
            { text: "SSL/TLS", correct: true },
        ],
    },
    {
        question:
            "Trong lập trình hướng đối tượng, khái niệm nào cho phép một đối tượng kế thừa các thuộc tính và phương thức của một đối tượng khác?",
        answers: [
            { text: "Đóng gói (Encapsulation)", correct: false },
            { text: "Kế thừa (Inheritance)", correct: true },
            { text: "Đa hình (Polymorphism)", correct: false },
            { text: "Trừu tượng (Abstraction)", correct: false },
        ],
    },
    {
        question:
            "Trong lập trình ASP.NET nâng cao, cấu trúc dữ liệu nào được sử dụng để lưu trữ và quản lý dữ liệu từ các nguồn dữ liệu khác nhau?",
        answers: [
            { text: "DataSet", correct: false },
            { text: "DataTable", correct: false },
            { text: "DataReader", correct: false },
            { text: "Entity Framework", correct: true },
        ],
    },
    {
        question:
            "Trong môn An ninh mạng máy tính, phương pháp nào được sử dụng để bảo vệ một hệ thống mạng khỏi các cuộc tấn công từ bên ngoài?",
        answers: [
            { text: "Firewall", correct: true },
            { text: "VPN", correct: false },
            { text: "Intrusion Detection System (IDS)", correct: false },
            { text: "Antivirus", correct: false },
        ],
    },
    {
        question:
            "Để phát triển ứng dụng di động trên nền tảng iOS, ngôn ngữ lập trình phổ biến nhất là gì?",
        answers: [
            { text: "Java", correct: false },
            { text: "Swift", correct: true },
            { text: "C++", correct: false },
            { text: "Python", correct: false },
        ],
    },
    {
        question:
            "Hàm nào trong PHP được sử dụng để chuyển đổi một chuỗi thành một mảng dựa trên một ký tự phân tách?",
        answers: [
            { text: "implode()", correct: false },
            { text: "explode(", correct: true },
            { text: "split()", correct: false },
            { text: "array()", correct: false },
        ],
    },
    {
        question:
            "Trong công nghệ ảo hóa, khái niệm 'hypervisor' ám chỉ điều gì?",
        answers: [
            {
                text: "Một công cụ để tạo và quản lý các máy ảo.",
                correct: false,
            },
            {
                text: "Một giao diện người dùng đồ họa để quản lý máy chủ vật lý.",
                correct: false,
            },
            {
                text: "Một hình thức ảo hóa mà không sử dụng container.",
                correct: false,
            },
            {
                text: "Một phần mềm hoặc firmware điều khiển truy cập vào tài nguyên phần cứng và quản lý máy ảo.",
                correct: true,
            },
        ],
    },
    {
        question:
            "Trong PHP, hàm nào được sử dụng để đọc dữ liệu từ một file JSON và chuyển đổi thành dạng dữ liệu trong PHP?",
        answers: [
            { text: "file_get_contents()", correct: false },
            { text: "json_decode()", correct: true },
            { text: "file_put_contents()", correct: false },
            { text: "json_encode()", correct: false },
        ],
    },
    {
        question:
            "Trong Quản trị Windows Server, để thêm một người dùng mới vào Active Directory, bạn sử dụng công cụ nào sau đây?",
        answers: [
            { text: "Event Viewer", correct: false },
            { text: "Disk Management", correct: false },
            { text: "Active Directory Users and Computers", correct: true },
            { text: "Windows Firewall with Advanced Security", correct: false },
        ],
    },
    {
        question:
            "Trong lập trình mạng, giao thức nào được sử dụng để truyền dữ liệu giữa các thiết bị trên mạng?",
        answers: [
            { text: " HTTP", correct: false },
            { text: "TCP/IP", correct: true },
            { text: "FTP", correct: false },
            { text: "SMTP", correct: false },
        ],
    },
    {
        question:
            "Trong lập trình ASP.NET, điều gì xảy ra khi một trang web ASP.NET được gửi từ máy chủ đến trình duyệt của người dùng?",
        answers: [
            {
                text: "Mã nguồn ASP.NET được thực thi trên máy chủ.",
                correct: true,
            },
            {
                text: "Trang web được hiển thị ngay lập tức trên trình duyệt.",
                correct: false,
            },
            {
                text: "Trình duyệt gửi yêu cầu trang web tới máy chủ.",
                correct: false,
            },
            {
                text: "Các yêu cầu dữ liệu được mã hóa và gửi đi qua mạng.",
                correct: false,
            },
        ],
    },
    {
        question:
            "An ninh mạng máy tính (network security) liên quan đến việc gì?",
        answers: [
            {
                text: "Bảo vệ và đảm bảo tính riêng tư của dữ liệu trên mạng máy tính.",
                correct: true,
            },
            {
                text: "Sửa chữa và bảo trì phần cứng mạng trong hệ thống máy tính.",
                correct: false,
            },
            {
                text: "Tối ưu hóa hiệu suất mạng máy tính để đảm bảo tốc độ truyền dữ liệu cao.",
                correct: false,
            },
            {
                text: "Xây dựng cơ sở hạ tầng mạng máy tính cho một tổ chức.",
                correct: false,
            },
        ],
    },
];

function checkBtn() {
    if (pointActive == 0) {
        $(".study-btn").disabled = true;
        $(".sports-btn").disabled = true;
        $(".work-btn").disabled = true;
        $(".relax-btn").disabled = true;
        $(".volunteer-btn").disabled = true;
        // $('.increase-month').disabled = false;
    }
}

const questionMonths = [
    {
        question:
            "Vừa vào đại học, bạn gặp một nàng tiên tự xưng là bé Tư đến từ Cây Thế Giới với mục đích giúp bạn tìm ra và đi trên một con đường mà bạn sẽ không hối hận trong tương lai. Bé Tư dùng năng lực của mình để bạn thử trải nghiệm cuộc sống đại học ở trong một thế giới ảo tưởng. Bé Tư hỏi, hiện tại bạn muốn bắt đầu với ngành nào?",
        answers: [
            { text: "Công Nghệ Thông Tin", correct: true },
            { text: "Marketing", correct: false },
            { text: "Y Dược", correct: false },
            { text: "Kế Toán", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "Thánh Nữ", correct: false },
            // { text: "Quốc Bảo", correct: false },
            // { text: "Thiên Thần", correct: true },
            // { text: "Mỹ Nhân", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question:
            "Bạn đang nỗ lực tận hưởng để trải nghiệm cuộc sống đại học ở lần thử nghiệm này khiến bé Tư rất hài lòng",
        answers: [
            // { text: "Có chứ ", correct: true },
            // { text: "300 triệu", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question:
            "Bé Tư khuyến khích bạn nên lưu ý đến các mối quan hệ, bạn có muốn trò chuyện với những người bạn của mình?",
        answers: [
            { text: "Trò chuyện", correct: true },
            { text: "Đợi lần sau", correct: false },
        ],
    },
    {
        question:
            "Bạn ở nhà tập trung ngồi giải bài Kỹ Thuật Lập Trình, bạn gáng sức giải và thành công. Khi đến trường bạn nhận ra mình làm lộn bài.",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question:
            "Học về bạn leo lên giường làm một giấc, bạn thấy khó thở tưởng bóng đè nên niệm kinh phật cầu nguyện các thứ thì chợt nhớ mình chưa lột khẩu trang",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question:
            "Bạn được cử đi tham gia chương trình đào tạo kỹ năng mềm như kỹ năng giao tiếp, quản lý thời gian, lãnh đạo, teamwork. Bạn được thầy khen là có tiềm năng làm lãnh đạo trong tương lai",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question:
            "Bạn vừa đọc xong quyển Đắc Nhân Tâm, bạn cảm thấy mình nên làm gì đó cho bé Tư để thể hiện sự cảm kích với cô?",
        answers: [
            { text: "Mua Pudding", correct: true },
            { text: "Tặng hoa", correct: false },
            { text: "Nỗ lực học hành hơn nữa", correct: false },
            { text: "Mời bé Tư đi ăn", correct: false },
        ],
    },
    {
        question:
            "Bạn được chọn để đi cổ vũ trận giao hữu giữa Việt Nam và Nhật Bản, khi bị Nhật Bản dẫn trước 1 bàn, bạn làm gì?",
        answers: [
            { text: "Cổ vũ nhiệt tình", correct: true },
            { text: "Tiếp tục bấm điện thoại", correct: false },
        ],
    },
    {
        question: "Không có gì nổi bậc",
        answers: [
            // { text: "200 triệu", correct: true },
            // { text: "300 triệu", correct: false },
            // { text: "500 triệu", correct: false },
            // { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Jun Aizawa được mệnh danh là gì?",
        answers: [
            { text: "Thánh Nữ", correct: false },
            { text: "Quốc Bảo", correct: false },
            { text: "Thiên Thần", correct: true },
            { text: "Mỹ Nhân", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Yue Misaki đã giải nghệ vào năm nào?",
        answers: [
            { text: "2003", correct: false },
            { text: "2023", correct: true },
            { text: "2033", correct: false },
            { text: "2043", correct: false },
        ],
    },
    {
        question: "Hello nghĩa là gì?",
        answers: [
            { text: "Xin Chào", correct: false },
            { text: "Hí anh em", correct: true },
            { text: "Lại là Chao đây", correct: false },
            { text: "cc", correct: false },
        ],
    },
    {
        question: "sdfgsdf?",
        answers: [
            { text: "sgf", correct: false },
            { text: "đúng", correct: true },
            { text: "sdfg", correct: false },
            { text: "sdg", correct: false },
        ],
    },
    {
        question: "ádfghgfsdb",
        answers: [
            { text: "2003", correct: false },
            { text: "đúng nhé", correct: true },
            { text: "2033", correct: false },
            { text: "2043", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Eimi Fukada sinh năm bao nhiêu?",
        answers: [
            { text: "1994", correct: false },
            { text: "1995", correct: true },
            { text: "1996", correct: false },
            { text: "1997", correct: false },
        ],
    },
    {
        question: "Jun Aizawa được mệnh danh là gì?",
        answers: [
            { text: "Thánh Nữ", correct: false },
            { text: "Quốc Bảo", correct: false },
            { text: "Thiên Thần", correct: true },
            { text: "Mỹ Nhân", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Yue Misaki đã giải nghệ vào năm nào?",
        answers: [
            { text: "2003", correct: false },
            { text: "2023", correct: true },
            { text: "2033", correct: false },
            { text: "2043", correct: false },
        ],
    },
    {
        question: "Hello nghĩa là gì?",
        answers: [
            { text: "Xin Chào", correct: false },
            { text: "Hí anh em", correct: true },
            { text: "Lại là Chao đây", correct: false },
            { text: "cc", correct: false },
        ],
    },
    {
        question: "sdfgsdf?",
        answers: [
            { text: "sgf", correct: false },
            { text: "đúng", correct: true },
            { text: "sdfg", correct: false },
            { text: "sdg", correct: false },
        ],
    },
    {
        question: "ádfghgfsdb",
        answers: [
            { text: "2003", correct: false },
            { text: "đúng nhé", correct: true },
            { text: "2033", correct: false },
            { text: "2043", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
    {
        question: "Rola misaki được định giá bao nhiêu?",
        answers: [
            { text: "200 triệu", correct: true },
            { text: "300 triệu", correct: false },
            { text: "500 triệu", correct: false },
            { text: "400 triệu", correct: false },
        ],
    },
];

$(".point-active").innerHTML = pointActive;
$(".month").innerHTML = "Tháng: " + month;

$(".increase-month").addEventListener("click", function () {
    // $('.event-contents').classList.remove('show')
    month += 1;
    pointActive++;
    $(".month").innerHTML = "Tháng: " + month;

    if (month > 42) {
        $(".end-game-wrapper").classList.add("show-btn");

        if (
            intellegent > healthyPoint &&
            intellegent > happyPoint &&
            intellegent > moralityPoint &&
            relationshipListItem.length <= 1 &&
            money < 300
        ) {
            let txt = `Bạn sống một cuộc sống đại học nghèo khó và chỉ tập trung vào từng chồng sách vở nặng nề...
         Bạn không hề để tâm đến sức khỏe của cá nhân mình...
         Bạn không quan tâm mình có hạnh phúc hay không...
         Bạn không chú tâm đến các mối quan hệ...
         Cuối cùng... bạn ra trường chỉ với kiến thức, nhưng lại chẳng có gì ngoài nó cả...
        `;
            let i = 0;
            setInterval(function () {
                if (i < txt.length) {
                    $(".list-content-endgame").innerHTML += txt.charAt(i);
                    i++;
                }
            }, 50);
        }

        if (
            healthyPoint > intellegent &&
            healthyPoint > happyPoint &&
            healthyPoint > moralityPoint &&
            relationshipListItem.length <= 1 &&
            money < 300
        ) {
            let txt =
                "Bạn sống cuộc sống đại học với cơ thể khỏe mạnh...Nhưng lại không hề để tâm để học hành cũng như chuyên ngành của mình...Bạn chẳng quan tâm mình có hạnh phúc hay không...Bạn chỉ có một mối quan hệ duy nhất...";
            let i = 0;
            setInterval(function () {
                if (i < txt.length) {
                    $(".list-content-endgame").innerHTML += txt.charAt(i);
                    i++;
                }
            }, 50);
        }

        if (
            happyPoint > intellegent &&
            happyPoint > healthyPoint &&
            happyPoint > moralityPoint &&
            relationshipListItem.length <= 1 &&
            money < 300
        ) {
            let txt =
                "Bạn sống một cuộc sống đại học chỉ để ý để việc tìm kiếm niềm vui và ngủ say trong đó...Bạn bỏ bê học hành cũng như sức khỏe cá nhân...Bạn chẳng có một mối quan hệ chính đáng nào cả...";
            let i = 0;
            setInterval(function () {
                if (i < txt.length) {
                    $(".list-content-endgame").innerHTML += txt.charAt(i);
                    i++;
                }
            }, 50);
        }

        if (
            moralityPoint > intellegent &&
            moralityPoint > happyPoint &&
            moralityPoint > healthyPoint &&
            relationshipListItem.length <= 1 &&
            money < 300
        ) {
            let txt =
                "Bạn sống một cuộc sống đại học với đạo đức cao đẹp, nhưng lại chẳng hề quan tâm đến chính bản thân mình...Bỏ bê học hành, không để tâm đến sức khỏe...Chẳng có một mối quan hệ chính đáng";
            let i = 0;
            setInterval(function () {
                if (i < txt.length) {
                    $(".list-content-endgame").innerHTML += txt.charAt(i);
                    i++;
                }
            }, 50);
        }

        // $$(".event-content").forEach((content) => {
        //   let monthItem = content.firstElementChild.innerText;
        //   let contentItem = content.lastElementChild.innerText;

        //   console.log(contentItem.length);
        //   let htmls = `
        //             <div class="month-endgame">${monthItem}</div>
        //             <div class="content-endgame">${contentItem}</div>
        //         `;

        //   $(".list-content-endgame").innerHTML += htmls;

        //   //     let i = 0;
        //   //     setInterval(function(){

        //   //     if (i < 5) {
        //   //         $('.list-content-endgame').innerHTML += htmls;
        //   //         i++;
        //   //     }
        //   // }, 50)
        // });

        // let txt = $('.left').innerText;

        // let i = 0;
        // setInterval(function(){

        //     if (i < txt.length) {
        //         $('.list-content-endgame').innerHTML += txt.charAt(i);
        //         i++;
        //     }
        // }, 50)

        // let htmls = $(".left").innerHTML;
        // $(".list-content-endgame").innerHTML += htmls;
    }

    if (pointActive >= 1) {
        pointActive = 1;
        $(".point-active").innerHTML = pointActive;
    }

    if (pointActive != 0) {
        $(".study-btn").disabled = false;
        $(".sports-btn").disabled = false;
        $(".work-btn").disabled = false;
        $(".relax-btn").disabled = false;
        $(".volunteer-btn").disabled = false;
    }

    // if(month == 5 && (intellegent > healthyPoint)){
    //     startEventGame();
    // }

    // Mở khóa nút thể thể sau mỗi tháng.
    $$(".sports-items-btn").forEach((item) => {
        item.disabled = false;
    });

    showSuccessToast("Tăng tháng thành công");

    switch (month) {
        case 1:
            $(".event-months").classList.add("show-btn");
            startEventMonth();

            break;
        case 2:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            (function startEventGameMonths() {
                state = {};
                showTextNodeEventMonths2(1);
            })();

            $(".left").style.background =
                "url('../../assets/img/vinh-Ha-Long.jpg') no-repeat";
            $(".left").style.backgroundSize = "cover";

            let htmls = `Tháng 2`;
            $(".month-2").innerHTML += htmls;
            break;
        case 3:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 4:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            (function startEventGameMonths() {
                state = {};
                showTextNodeEventMonths4(1);
            })();
            let htmls4 = `Tháng 4`;
            $(".month-4").innerHTML += htmls4;
            break;
        case 5:
            $(".event-months").classList.add("show-btn");
            $(".left").style.background =
                "url('../../assets/img/ruong-bac-thang.jpg') no-repeat";
            animation2();
            $(".left").style.backgroundSize = "cover";
            currentEventMonthIndex++;
            if (
                intellegent > healthyPoint &&
                intellegent > happyPoint &&
                intellegent > moralityPoint
            ) {
                startEventGame();

                let htmls = `
                    Tháng 5`;
                $(".month-5").innerHTML += htmls;
            } else if (
                healthyPoint > intellegent &&
                healthyPoint > happyPoint &&
                healthyPoint > moralityPoint
            ) {
                startEventGameHealth();
                let htmls = `
                    Tháng 5`;
                $(".month-5").innerHTML += htmls;
            } else if (
                happyPoint > healthyPoint &&
                happyPoint > intellegent &&
                happyPoint > moralityPoint
            ) {
                startEventGameHappy();
                let htmls = `
                    Tháng 5`;
                $(".month-5").innerHTML += htmls;
            } else if (
                moralityPoint > intellegent &&
                moralityPoint > happyPoint &&
                moralityPoint > healthyPoint
            ) {
                startEventGameHealth();
                let htmls = `
                    Tháng 5`;
                $(".month-5").innerHTML += htmls;
            } else {
                startEventMonth();
            }

            break;
        case 6:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 7:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 8:
            $(".event-months").classList.add("show-btn");
            $(".left").style.background =
                "url('../../assets/img/phu-quoc-2.jpg') no-repeat";
            $(".left").style.backgroundSize = "cover";
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 9:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 10:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 11:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            (function startEventGameMonths() {
                state = {};
                showTextNodeEventMonths11(1);
            })();
            let htmls11 = `Tháng 11`;
            $(".month-11").innerHTML += htmls11;
            break;

        case 12:
            $(".event-months").classList.add("show-btn");
            $(".left").style.background =
                "url('../../assets/img/sapa.jpg') no-repeat";
            $(".left").style.backgroundSize = "cover";
            animation();
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 13:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 14:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 15:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 16:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 17:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;

            startEventMonth();
            break;
        case 18:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 19:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 20:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 21:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 22:
            $(".event-months").classList.add("show-btn");
            startEventMonth();
            break;
        case 23:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 24:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 25:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 26:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 27:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 28:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 29:
            $(".event-months").classList.add("show-btn");
            startEventMonth();

            break;
        case 30:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 31:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;

            startEventMonth();
            break;
        case 32:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 33:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 34:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 35:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 36:
            $(".event-months").classList.add("show-btn");
            startEventMonth();
            break;
        case 37:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 38:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 39:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;

        case 40:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 41:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
        case 42:
            $(".event-months").classList.add("show-btn");
            currentEventMonthIndex++;
            startEventMonth();
            break;
    }
});

// Code này bug, cần sửa lại.

let currentEventMonthIndex = 0;

// function checkValuePoint(){
//     if(intellegent > healthyPoint && intellegent > moralityPoint && intellegent > happyPoint){
//         console.log("Bạn có trí tuệ cao nhất")
//     }
// }

function startEventMonth() {
    showQuestionEventMonth();
}

function showQuestionEventMonth() {
    resetStateEventMonth();

    let currentQuestionEventMonth = questionMonths[currentEventMonthIndex];
    let eventNo = currentEventMonthIndex + 1;
    $("#question-event-month").innerHTML =
        eventNo + ". " + currentQuestionEventMonth.question;
    let htmls = `
    <div class="event-content">
        <div class="monthh"> Tháng: ${month} </div>
        <div class="text"> ${currentQuestionEventMonth.question} </div>
        <div class="answers"></div>
    </div>
    `;

    // $("#question-event-month").innerHTML += htmls;
    $(".event-content-title").innerHTML += htmls;
    currentQuestionEventMonth.answers.forEach((answer) => {
        const buttonEvent = document.createElement("button");
        buttonEvent.innerHTML = answer.text;
        buttonEvent.classList.add("btn");
        $("#answer-button-event-months").appendChild(buttonEvent);

        if (answer.correct) {
            buttonEvent.dataset.correct = answer.correct;
            buttonEvent.dataset.dataText = answer.dataText;
        }
        buttonEvent.addEventListener("click", selectAnswerEventMonth);
        $(".increase-month").disabled = true;
        // return htmls;
    });
}

function resetStateEventMonth() {
    while ($("#answer-button-event-months").firstChild) {
        $("#answer-button-event-months").removeChild(
            $("#answer-button-event-months").firstChild
        );
    }
}

function selectAnswerEventMonth(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if (isCorrect) {
        selectBtn.classList.add("correct");
        // intellegent++;
        // $('.int-point').innerHTML = "Trí Tuệ: " + intellegent;
    } else {
        selectBtn.classList.add("incorrect");
    }

    const printTextBtn = selectBtn.innerText;

    let htmls = `<div class="answer"> Bạn đã chọn: ${printTextBtn}</div>`;

    // $(".question").innerHTML += htmls;
    $(".answers").innerHTML += htmls;

    Array.from($("#answer-button-event-months").children).forEach((button) => {
        if (button.dataset.correct === "true") {
            // $('.event-months').innerHTML += htmls;
            console.log(button);
            button.classList.add("correct");
            // Đang bug
        }
        button.disabled = true;
    });
}

function handleCloseEventButton() {
    currentEventMonthIndex++;
    if (currentEventMonthIndex < questionMonths.length) {
        showQuestionEventMonth();
    }
}

// List Question answers about case: intellengient is max
const textElement = document.querySelector(".text");
const optionButtonsElement = document.querySelector(".option-buttons");

let state = {};
// event trí tuệ
function startEventGame() {
    state = {};
    showTextNode(1);
}
function randomMonth() {
    var events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Trường có tổ chức cuộc thi thiết kế web, bạn có muốn tham gia không?",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);

        case 2:
            return (textNodes2 = [
                {
                    id: 1,
                    text: "Trường có tổ chức cuộc thi thiết kế web, bạn có muốn tham gia không1?",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
        case 3:
            return (textNodes3 = [
                {
                    id: 1,
                    text: "Trường có tổ chức cuộc thi thiết kế web, bạn có muốn tham gia không2?",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
    }
}

let arr = randomMonth();

function showTextNode(textNodeIndex) {
    const textNode = arr.find((textNode) => textNode.id === textNodeIndex);
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-5"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

//event sức khoẻ
function startEventGameHealth() {
    state = {};
    showTextNodeHealth(1);
}
function randomMonthHealth() {
    var events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Cuộc thi Hội khỏe Phù Đổng: nhà trường Tổ chức một cuộc thi dành cho sinh viên để khuyến khích và tạo động lực cho việc duy trì một lối sống lành mạnh. Cuộc thi liên quan đến các thử thách thể chất như chạy marathon, kéo co,,, Sinh viên có thể tham gia theo cá nhân hoặc theo đội, và những người có thành tích tốt nhất sẽ được vinh danh và nhận giải thưởng. Bạn có muốn tham gia không?",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Còn 1 tháng nữa để luyện tập và chuẩn bị cho cuộc thi Hội khỏe Phù Đổng. Bạn muốn luyện tập theo các mức độ nào?",
                    options: [
                        {
                            text: "Luyện tập 7 ngày / tuần",
                            nextText: 4,
                        },
                        {
                            text: "Luyện tập mỗi ngày 1 tiếng rưỡi",
                            nextText: 5,
                        },
                        {
                            text: "Luyện tập trong 2 tuần trước ngày thi",
                            nextText: 6,
                        },
                        {
                            text: "Luyện tập trong 2 ngày / tuần",
                            nextText: 7,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp đại học",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn luyện tập miệt mài đến ngày thi dẫn đến bị dính chấn thương không thể tham dự Hội Khỏe Phù Đổng nữa.",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn luyện tập đều đặn mỗi ngày, nhưng bởi vì bạn chỉ mới luyện tập trước một tháng nên thua xa những đứa chuyên đã luyện tập lâu năm, bạn giành được giải khuyến khích",
                    options: [],
                },
                {
                    id: 6,
                    text: "Bạn rũ rê những đứa bạn tải Liên Quân về cày rank thách đấu, sau nửa tháng bạn đã lên thách đấu mà mấy đứa bạn của bạn vẫn còn ở Kim Cương. Trong lúc bọn nó cày rank thì bạn dùng nửa tháng còn lại để luyện tập. Bởi vì giảm bớt đối thủ nên bạn giành được huân chương bạc",
                    options: [],
                },
                {
                    id: 7,
                    text: "Bạn đang chăm chỉ luyện tập thì bạn Huy rũ bạn đá fifa online 4, bạn lựa chọn thế nào?",
                    options: [
                        {
                            text: "Thôi, mình bận tập luyện rồi",
                            nextText: 8,
                        },
                        {
                            text: "Chơi chứ, dẫu sao tập cũng không đấu lại tụi nó đâu",
                            nextText: 9,
                        },
                    ],
                },
                {
                    id: 8,
                    text: "Từ đó Huy không còn rũ bạn đá fifa online 4 nữa. Bạn cũng không đạt được thành tích gì không cuộc thi Hội Khỏe Phù Đổng.",
                    options: [],
                },
                {
                    id: 9,
                    text: "Bạn và Huy trở thành bộ đôi song sát 2vs2 trong rank fifa online 4. Bạn có muốn quay video quá trình leo rank 2vs2 và up lên zalo không?",
                    options: [
                        {
                            text: "Có, đây là chứng minh có tình bạn của chúng mình",
                            nextText: 10,
                        },
                        {
                            text: "Thôi, đá ngu lại bị ăn gạch nữa",
                            nextText: 11,
                        },
                    ],
                },
                {
                    id: 10,
                    text: "Video của bạn và Huy nhanh chóng trở thành hiện tượng trên mạng, mọi người nhao nhao tải fifa online 4 và cày rank 2vs2. Tới ngày thi, bởi vì thức khuya cày rank nên đối thủ của bạn đã ngủ quên, bạn giành được giải nhất",
                    options: [],
                },
                {
                    id: 11,
                    text: "Bạn bỏ lỡ một điều gì đấy",
                    options: [],
                },
            ]);

        case 2:
            return (textNodes2 = [
                {
                    id: 1,
                    text: "khoẻ",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
        case 3:
            return (textNodes3 = [
                {
                    id: 1,
                    text: "khoẻ 2",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
    }
}

let arrHealth = randomMonthHealth();

function showTextNodeHealth(textNodeIndex) {
    const textNode = arrHealth.find(
        (textNode) => textNode.id === textNodeIndex
    );
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-5"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () => selectOptionHealth(option));
            optionButtonsElement.appendChild(button);
        }
    });
}
//event hạnh phúc
function startEventGameHappy() {
    state = {};
    showTextNodeHappy(1);
}
function randomMonthHappy() {
    var events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Ngày khai giảng năm học mới, trường muốn tổ chức mời người nổi tiếng về biễu diễn tiếp thêm sức nóng của ngày lễ. Trường tạo một cuộc bầu chọn để cho sinh viên tự mình lựa chọn, bạn muốn mời ai?",
                    options: [
                        {
                            text: "Sơn Tùng",
                            nextText: 2,
                        },
                        {
                            text: "Hiền Hồ",
                            nextText: 3,
                        },
                        {
                            text: "Phương Oanh",
                            nextText: 4,
                        },
                        {
                            text: "Phương Hằng",
                            nextText: 5,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Đa số sinh viên đều bầu chọn mời Sơn Tùng về hát nhưng trường không có đủ kinh phí để mời Sơn Tùng nên đành mời Tùng Sơn về hát tạm, dù sao cũng giống hai chữ trong tên",
                },
                {
                    id: 3,
                    text: "Hiền Hồ được mời về biễu diễn khiến đa số các bạn nữ không tham dự nhưng toàn bộ bạn nam đều tham gia và được nghe giọng ca như chim hoàng anh của Hiền Hồ khiến mọi người đều thành fan của cô",
                },
                {
                    id: 4,
                    text: "Phương Oanh bận đi đánh golf nên đã từ chối, trường quyết định để sinh viên tự lên biểu diễn, bạn muốn tham gia không?",
                    options: [
                        {
                            text: "Có, mình tham gia đơn ca",
                            nextText: 6,
                        },
                        {
                            text: "Không á",
                            nextText: 7,
                        },
                    ],
                },
                {
                    id: 5,
                    text: "Bà Nguyễn Phương Hằng đến trường vừa biểu diễn vừa livestream sau đó tặng toàn bộ mọi người một vé đi Đại Nam miễn phí",
                    options: [],
                },
                {
                    id: 6,
                    text: "Bạn muốn biểu diễn bài nào?",
                    options: [
                        {
                            text: "Tiến Quân Ca",
                            nextText: 8,
                        },
                        {
                            text: "Lan Và Điệp",
                            nextText: 9,
                        },
                        {
                            text: "Lời Anh Chưa Thể Nói Ra",
                            nextText: 10,
                        },
                    ],
                },
                {
                    id: 7,
                    text: "Bạn bỏ lỡ một cơ hội quan trọng",
                    options: [],
                },
                {
                    id: 8,
                    text: "Bạn gào thét dữ dội nhưng chỉ có thầy cô mới để ý đến buổi biểu diễn của bạn",
                    options: [],
                },
                {
                    id: 9,
                    text: "Bạn hát khàn cả cổ những không ai nghe",
                    options: [],
                },
                {
                    id: 10,
                    text: "Bạn biểu diễn rất cháy khiến mọi người nhớ đến bạn",
                    options: [],
                },
            ]);
    }
}

let arrHappy = randomMonthHappy();

function showTextNodeHappy(textNodeIndex) {
    const textNode = arrHappy.find((textNode) => textNode.id === textNodeIndex);
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-5"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () => selectOptionHappy(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

//đạo đức
function startEventGameDaoduc() {
    state = {};
    showTextNodeDaoduc(1);
}
function randomMonthDaoduc() {
    var events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Nhà trường tổ chức các hoạt động tình nguyện nhằm khuyến khích sinh viên tham gia vào các hoạt động có ý nghĩa xã hội. Sự kiện này bao gồm việc thăm hỏi, tặng quà cho người già , tham gia thu gom rác, trồng cây. Bạn có muốn tham gia các hoạt động tình nguyện không? ",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Sinh viên tham gia vào việc thăm hỏi và tặng quà cho người già trong cộng đồng. Bao gồm việc dành thời gian để trò chuyện, chia sẻ kỷ niệm và tạo niềm vui cho các cụ già. Tổ chức các hoạt động biểu diễn nghệ thuật, thiện nguyện nấu ăn, và cung cấp sự hỗ trợ trong việc chăm sóc và giúp đỡ họ. Bạn có muốn tham gia không?",
                    options: [
                        {
                            text: "Có chứ",
                            nextText: 4,
                        },
                        {
                            text: "Không",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội quý",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Sinh viên tham gia vào việc thu gom rác và trồng cây nhằm bảo vệ môi trường. Các hoạt động này gồm dọn dẹp các khu vực công cộng, vỉa hè,,,  tổ chức buổi trồng cây tại khu vực xanh của trường học và khu dân cư. Bạn có muốn tham gia không?",
                    options: [
                        {
                            text: "Có chứ",
                            nextText: 5,
                        },
                        {
                            text: "Không",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 5,
                    text: "Với những điều bạn đã làm cho cộng đồng, nhà trường đã tuyên dương và tặng bằng khen cho bạn.",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);

        case 2:
            return (textNodes2 = [
                {
                    id: 1,
                    text: "Dao duc 1",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
        case 3:
            return (textNodes3 = [
                {
                    id: 1,
                    text: "Dao duc 2",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
    }
}

let arrDaoduc = randomMonthDaoduc();

function showTextNodeDaoduc(textNodeIndex) {
    const textNode = arrDaoduc.find(
        (textNode) => textNode.id === textNodeIndex
    );
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-5"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () => selectOptionDaoduc(option));
            optionButtonsElement.appendChild(button);
        }
    });
}
//
function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    if (nextTextNodeId == 5) {
        intellegent += 50;
        checkPoint();
    }
    //   state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId);
}

function selectOptionHappy(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    switch (nextTextNodeId) {
        case 2:
            happyPoint -= 2;
            checkPoint();
            break;
        case 3:
            happyPoint += 2;
            checkPoint();
            break;
        case 5:
            happyPoint += 2;
            checkPoint();
            break;
        case 8:
            happyPoint += 2;
            checkPoint();
            break;
        case 9:
            healthyPoint -= 5;
            checkPoint();
            break;
        case 10:
            happyPoint += 5;
            checkPoint();
            break;
    }

    //   state = Object.assign(state, option.setState)
    showTextNodeHappy(nextTextNodeId);
}

function selectOptionHealth(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    switch (nextTextNodeId) {
        case 4:
            healthyPoint -= 2;
            checkPoint();
            break;
        case 5:
            happyPoint += 2;
            checkPoint();
            break;
        case 6:
            happyPoint += 5;
            checkPoint();
            break;
        case 8:
            happyPoint -= 5;
            checkPoint();
            break;
        case 10:
            happyPoint += 10;
            checkPoint();
            showSuccessToast("Bạn mở khóa một mối quan hệ mới");
            let newNPC = {
                relationshipItemId: 5,
                relationshipItemName: "Bạn Huy",
                relationshipItemIntimacy: 0,
                relationshipItemImg: "./img/relationship/chiCanteen.jpg",
                relationshipItemBuff: {
                    healthyPoint: 0,
                    happyPoint: 0,
                    moralityPoint: 0,
                },
            };
            relationshipListItem.push(newNPC);
            $(".list-relationship").innerHTML = "";

            relationshipListItem.forEach((item) => {
                let htmls = `
            <div class="relationship-item" id="${item.relationshipItemId}">
              <div class="relationship-img">
                  <img src="${item.relationshipItemImg}">
              </div>
              
              <div class="relationship-name">${item.relationshipItemName}</div>
              <div class="relationship-Intimacy">Điểm hảo cảm: <div class="sympathy${item.relationshipItemId}"> ${item.relationshipItemIntimacy}</div></div>
            </div>
          `;

                $(".list-relationship").innerHTML += htmls;

                // xử lí sự kiện click vào các mối quan hệ
                $$(".relationship-item").forEach((item) => {
                    item.onclick = function () {
                        if (pointActive == 0) {
                            item.disabled = true;
                        } else {
                            checkId(item.id);
                            $(".point-active").innerHTML = pointActive;
                        }
                    };
                });

                function checkId(id) {
                    for (let x of relationshipListItem) {
                        if (x.relationshipItemId == id) {
                            $(".relationship-contact").classList.add(
                                "show-btn"
                            );

                            $$(".contact-item").forEach((item) => {
                                // let itemId = item.id;

                                item.onclick = function () {
                                    console.log(item.id);
                                    console.log(x.relationshipItemIntimacy);
                                    console.log(item.id == 2);
                                    switch (item.id) {
                                        // Chat
                                        case "1":
                                            console.log("1");
                                            if (
                                                x.relationshipItemIntimacy != 0
                                            ) {
                                                showSuccessToast(
                                                    "Nói chuyện thành công"
                                                );
                                                x.relationshipItemIntimacy += 5;
                                                checkPoint();
                                                if (x.relationshipItemId == 2) {
                                                    let rand =
                                                        comments[
                                                            Math.floor(
                                                                Math.random() *
                                                                    comments.length
                                                            )
                                                        ];
                                                    alert(rand);
                                                    pointActive--;
                                                    $(
                                                        ".point-active"
                                                    ).innerHTML = pointActive;
                                                }
                                            } else {
                                                showErrorToast(
                                                    "Bạn không phải bạn bè"
                                                );
                                            }
                                            break;
                                        // Hẹn hò
                                        case "2":
                                            console.log("2");
                                            if (
                                                x.relationshipItemIntimacy > 60
                                            ) {
                                                showSuccessToast(
                                                    "hẹn hò thành công"
                                                );
                                                x.relationshipItemIntimacy += 10;
                                                happyPoint +=
                                                    x.relationshipItemBuff
                                                        .happyPoint;
                                                checkPoint();
                                            } else {
                                                showErrorToast(
                                                    "Các bạn chưa đủ điểm thân mật để hẹn hò"
                                                );
                                            }
                                            break;
                                        // Tặng quà
                                        case "3":
                                            showSuccessToast("tặng thành công");
                                            x.relationshipItemIntimacy += 5;
                                            checkPoint();
                                            break;
                                        // cướp
                                        case "4":
                                            showSuccessToast("giết thành công");
                                            break;
                                        default:
                                            showErrorToast("Lỗi");
                                            break;
                                    }
                                };
                            });

                            // if(x.relationshipItemIntimacy > 50){

                            //     checkBtn();
                            //     healthyPoint = healthyPoint + x.relationshipItemBuff.healthyPoint;
                            //     happyPoint = happyPoint + x.relationshipItemBuff.happyPoint;
                            //     moralityPoint = moralityPoint + x.relationshipItemBuff.moralityPoint;
                            //     money = money + x.relationshipItemIntimacy;
                            //     $(".money").innerHTML = money;
                            //     checkPoint();
                            // }
                        }
                    }
                }
            });
            break;
    }

    showTextNodeHealth(nextTextNodeId);
}

function selectOptionDaoduc(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    if (nextTextNodeId == 5) {
        moralityPoint += 5;
        checkPoint();
    }
    //   state = Object.assign(state, option.setState)
    showTextNodeDaoduc(nextTextNodeId);
}

// Xử lý event tháng 2;
// function startEventGameMonths() {
//   state = {};
//   showTextNodeEventMonths2(1);
// }

// EVENT THÁNG 2

function randomEventsMonth2() {
    let events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Lớp trưởng tổ chức một buổi cà phê để mọi người trong lớp có cơ hội làm quen với nhau, bạn có muốn tham gia không?",
                    options: [
                        {
                            text: "Đi chứ, kết bạn là một điều tốt",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, đi lại tốn tiền, ở nhà cho khỏe",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Nhà bạn Huy bán cà phê nên đề nghị mọi người tổ chức ở quán bạn ấy, một số người lại muốn chọn quán gần trường. Cả lớp bắt đầu biểu quyết, bạn lựa chọn thế nào?",
                    options: [
                        {
                            text: "Chọn quán trường cho gần",
                            nextText: 4,
                        },
                        {
                            text: "Qua quán ủng hộ bạn Huy",
                            nextText: 5,
                        },
                        {
                            text: "Thôi lười, bạn lựa chọn không đi nữa",
                            nextText: 6,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội mở rộng mối quan hệ ở đại học",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Cuối cùng mọi người chọn đến quán cà phê gần trường, bởi vì quán khá sang nên giá cắt cổ, mọi người đều hối hận vì không đến quán của Huy",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Vì bạn chọn quán của Huy nên tỉ số là 14/13, cả lớp quyết định sang quán của Huy. Huy nhiệt tình chiêu đãi bạn bằng best sales của quán là Trà Sữa Trứng Muối",
                    options: [
                        {
                            text: "Thôi, cho mình ly cà phê sữa đá thôi",
                            nextText: 7,
                        },
                        {
                            text: "Được luôn bạn ơi",
                            nextText: 8,
                        },
                    ],
                },
                {
                    id: 6,
                    text: "Bởi vì thiếu bạn nên phiếu cuối cùng là 13/13, cả lớp bắt đầu cãi nhau cuối cùng giải tán đường ai nấy đi. Bạn cảm giác hả hê và thấy tầm quan trọng của mình",
                },
                {
                    id: 7,
                    text: "Huy hơi thất vọng vì bạn không chọn best sales. Có nước sao không có đồ ăn, Huy mời bạn món Bánh Bông Lan Trứng Muối",
                    options: [
                        {
                            text: "Mình uống cà phê đủ rồi",
                            nextText: 9,
                        },
                        {
                            text: "Okee",
                            nextText: 10,
                        },
                    ],
                },
                {
                    id: 8,
                    text: "Bạn uống cà phê Trứng Muối, cảm giác vị lạ lạ nên hỏi Huy. Hóa ra, Huy lầm tưởng cà phê Trứng Muối là dùng trứng vịt sống đánh với muối rồi đổ vào cà phê là được. Bạn bị Tào Tháo rượt nguyên buổi",
                    options: [],
                },
                {
                    id: 9,
                    text: "Bởi vì bạn nhiều lần từ chối nên Huy không tiếp tục dụ dỗ bạn mua nữa, bạn có thời gian để trò chuyện với bạn nữ xinh đẹp ở bên cạnh. Thư đang tự tìm hiểu ngôn ngữ C/C++, có chút thắc mắc hỏi bạn",
                    options: [
                        {
                            text: "Được, cứ để mình lo",
                            nextText: 12,
                        },
                        {
                            text: "Mình chưa học nên bó tay",
                            nextText: 11,
                        },
                    ],
                },
                {
                    id: 10,
                    text: "Khi Huy đang tính dùng trứng vịt sống trộn với muối làm bánh thì chị Huy về kịp, bạn may mắn được thưởng thức món bánh bông lan trứng muối ngon lành",
                    options: [],
                },
                {
                    id: 11,
                    text: "Thư cười bù, dù không nói nhưng bạn nhìn thấy được sự thất vọng trong đôi mắt xinh đẹp của Thư, bạn cảm giác cực kì hối hận vì không chịu nguyên cứu sớm hơn",
                    options: [],
                },
                {
                    id: 12,
                    text: "Một hàm C được gọi trong chương trình C++ như thế nào?",
                    options: [
                        {
                            text: "Ơ... cái này... mình nghĩ...",
                            nextText: 14,
                        },
                        {
                            text: "À, khai báo export ở trước là được. Vì export có nghĩa là xuất ra, cho phép bạn trả một chương trình ra ngoài và gọi sử dụng ở một nơi khác",
                            nextText: 13,
                        },
                    ],
                },
                {
                    id: 13,
                    text: "Bạn đang miệt mài chém gió thì một bạn ở cạnh cười đáp: 'Dùng extern ba ơi'. Thư và cả lớp cười hí hửng khiến bạn xấu hổ đến muốn đội quần. Từ đó bạn được cả lớp gọi là Thần Code",
                    options: [],
                },
                {
                    id: 14,
                    text: "Thư tiếp tục truy hỏi, bạn buộc miệng đáp 'extern'. May mắn đó lại là câu trả lời đúng, bạn được Thư và cả lớp nhìn với ánh mắt ngưỡng mộ. Cuối buổi, Thư chủ động hỏi số điện thoại để kết bạn zalo với bạn",
                    options: [],
                },
            ]);

        case 2:
            return (textNodes2 = [
                {
                    id: 1,
                    text: "Dao duc 1",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
        case 3:
            return (textNodes3 = [
                {
                    id: 1,
                    text: "Dao duc 2",
                    options: [
                        {
                            text: "Có chứ, sao mà không tham gia",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, bận xem livestream Eimi Fukada rồi",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn muốn dùng ngôn ngữ gì để làm sản phẩm?",
                    options: [
                        {
                            text: "C/C++ cân mọi thể loại",
                            nextText: 4,
                        },
                        {
                            text: "C#",
                            nextText: 4,
                        },
                        {
                            text: "HTML, CSS, JS",
                            nextText: 5,
                        },
                        {
                            text: "Pascal được không ạ?",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội thăng tiến trong sự nghiệp học hành",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn lựa chọn sai ngôn ngữ dẫn đến sản phẩm của bạn khiến thầy cô khó lòng đánh giá, bạn xấu hổ đến mức muốn độn thổ",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn đã hoàn thành xong sản phẩm, thầy cô đã tán dương bạn rất nhiều nhưng vì thiếu kinh nghiệm nên bạn chỉ giành được giải khuyến khích",
                    options: [
                        // {
                        //   text: 'Làm lại cuộc đời',
                        //   nextText: 5
                        // },
                    ],
                },
            ]);
    }
}

let arrMonths = randomEventsMonth2();

function showTextNodeEventMonths2(textNodeIndex) {
    const textNode = arrMonths.find(
        (textNode) => textNode.id === textNodeIndex
    );
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-2"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () =>
                selectOptionEventMonths2(option)
            );
            optionButtonsElement.appendChild(button);
        }
    });
}

function selectOptionEventMonths2(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    switch (nextTextNodeId) {
        case 4:
            money -= 20;
            break;
        case 6:
            happyPoint += 2;
            checkPoint();
            break;
        case 8:
            healthyPoint -= 5;
            checkPoint();
        case 10:
            happyPoint += 2;
            checkPoint();
            break;
        case 11:
            happyPoint -= 5;
            checkPoint();
            break;
        case 13:
            happyPoint -= 10;
            checkPoint();
            break;
        case 14:
            happyPoint += 10;
            checkPoint();
            showSuccessToast("Bạn mở khóa một mối quan hệ mới");
            let newNPC = {
                relationshipItemId: 4,
                relationshipItemName: "Bé Thư",
                relationshipItemIntimacy: 0,
                relationshipItemImg: "./img/relationship/chiCanteen.jpg",
                relationshipItemBuff: {
                    healthyPoint: 0,
                    happyPoint: 10,
                    moralityPoint: 0,
                },
            };
            relationshipListItem.push(newNPC);
            $(".list-relationship").innerHTML = "";

            relationshipListItem.forEach((item) => {
                let htmls = `
            <div class="relationship-item" id="${item.relationshipItemId}">
              <div class="relationship-img">
                  <img src="${item.relationshipItemImg}">
              </div>
              
              <div class="relationship-name">${item.relationshipItemName}</div>
              <div class="relationship-Intimacy">Điểm hảo cảm: <div class="sympathy${item.relationshipItemId}"> ${item.relationshipItemIntimacy}</div></div>
            </div>
          `;

                $(".list-relationship").innerHTML += htmls;

                // xử lí sự kiện click vào các mối quan hệ
                $$(".relationship-item").forEach((item) => {
                    item.onclick = function () {
                        if (pointActive == 0) {
                            item.disabled = true;
                        } else {
                            checkId(item.id);
                            $(".point-active").innerHTML = pointActive;
                        }
                    };
                });

                function checkId(id) {
                    for (let x of relationshipListItem) {
                        if (x.relationshipItemId == id) {
                            $(".relationship-contact").classList.add(
                                "show-btn"
                            );

                            $$(".contact-item").forEach((item) => {
                                // let itemId = item.id;

                                item.onclick = function () {
                                    console.log(item.id);
                                    console.log(x.relationshipItemIntimacy);
                                    console.log(item.id == 2);
                                    switch (item.id) {
                                        // Chat
                                        case "1":
                                            console.log("1");
                                            if (
                                                x.relationshipItemIntimacy != 0
                                            ) {
                                                showSuccessToast(
                                                    "Nói chuyện thành công"
                                                );
                                                x.relationshipItemIntimacy += 5;
                                                checkPoint();
                                                if (x.relationshipItemId == 2) {
                                                    let rand =
                                                        comments[
                                                            Math.floor(
                                                                Math.random() *
                                                                    comments.length
                                                            )
                                                        ];
                                                    alert(rand);
                                                    pointActive--;
                                                    $(
                                                        ".point-active"
                                                    ).innerHTML = pointActive;
                                                }
                                            } else {
                                                showErrorToast(
                                                    "Bạn không phải bạn bè"
                                                );
                                            }
                                            break;
                                        // Hẹn hò
                                        case "2":
                                            console.log("2");
                                            if (
                                                x.relationshipItemIntimacy > 60
                                            ) {
                                                showSuccessToast(
                                                    "hẹn hò thành công"
                                                );
                                                x.relationshipItemIntimacy += 10;
                                                happyPoint +=
                                                    x.relationshipItemBuff
                                                        .happyPoint;
                                                checkPoint();
                                            } else {
                                                showErrorToast(
                                                    "Các bạn chưa đủ điểm thân mật để hẹn hò"
                                                );
                                            }
                                            break;
                                        // Tặng quà
                                        case "3":
                                            showSuccessToast("tặng thành công");
                                            x.relationshipItemIntimacy += 5;
                                            checkPoint();
                                            break;
                                        // cướp
                                        case "4":
                                            showSuccessToast("giết thành công");
                                            break;
                                        default:
                                            showErrorToast("Lỗi");
                                            break;
                                    }
                                };
                            });

                            // if(x.relationshipItemIntimacy > 50){

                            //     checkBtn();
                            //     healthyPoint = healthyPoint + x.relationshipItemBuff.healthyPoint;
                            //     happyPoint = happyPoint + x.relationshipItemBuff.happyPoint;
                            //     moralityPoint = moralityPoint + x.relationshipItemBuff.moralityPoint;
                            //     money = money + x.relationshipItemIntimacy;
                            //     $(".money").innerHTML = money;
                            //     checkPoint();
                            // }
                        }
                    }
                }
            });
            break;
    }
    if (nextTextNodeId == 6) {
        happyPoint += 2;
        checkPoint();
    }
    if (nextTextNodeId == 4)
        if (nextTextNodeId == 5) {
            intellegent += 50;
            checkPoint();
        }
    //   state = Object.assign(state, option.setState)
    showTextNodeEventMonths2(nextTextNodeId);
}
// END EVENT THÁNG 2

// EVENT THÁNG 4
function randomEventsMonth4() {
    let events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Lớp trưởng cũ chuyển trường vì vậy lớp bầu lại lớp trưởng mới, bạn có muốn ứng cử làm lớp trưởng không?",
                    options: [
                        {
                            text: "Có chứ, làm lớp trưởng là mục tiêu nhỏ của mình",
                            nextText: 2,
                        },
                        {
                            text: "Thôi, làm lớp trưởng như làm culi vậy",
                            nextText: 3,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Bạn ứng cử làm lớp trưởng, bạn cần làm gì để lớp tin tưởng và giao trọng trách cho mình?.",
                    options: [
                        {
                            text: "Lên làm một bài diễn thuyết khiến mọi người tin tưởng khoe tự tin có đảm đương.",
                            nextText: 4,
                        },
                        {
                            text: "Mời cả lớp đi ăn uống một chầu khoe độ giàu có",
                            nextText: 5,
                        },
                        {
                            text: "không làm gì cả, phó thác cho trời",
                            nextText: 6,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Bạn bỏ lỡ một cơ hội mở rộng mối quan hệ ở đại học",
                    options: [
                        // {
                        //   text: 'Bỏ vào quần',
                        //   setState: { blueGoo: true },
                        //   nextText: 4
                        // },
                        // {
                        //   text: 'Nếm thử',
                        //   nextText: 6
                        // },
                    ],
                },
                {
                    id: 4,
                    text: "Bạn diễn thuyết hơn một tiếng rất hay nhưng đáng tiếc không ai nghe. Hôm đó bạn bị đau họng mất tiếng và không được chọn làm lớp trưởng.",
                    options: [],
                },
                {
                    id: 5,
                    text: "Cả lớp hoan hô vì sự chịu chơi của bạn, quyết định chọn bạn làm thủ quỹ vì không sợ bạn tham nhũng.",
                    options: [],
                },
                {
                    id: 6,
                    text: "Khi tất cả đối thủ đang cạnh tranh nảy lửa miệt mài, bạn bàng quang nhìn mọi người với ánh mắt như người cõi trên. Thầy chủ nhiệm thấy chán nên quyết định chọn bạn làm lớp trưởng cho khỏe. Thầy rũ cả lớp lập nhóm đi đá bóng, bạn làm lớp trưởng nên lựa chọn thế nào?",
                    options: [
                        {
                            text: "thôi thầy, học hành quan trọng chứ thể thao gì",
                            nextText: 7,
                        },
                        {
                            text: "Triển luôn thầy ơi, lớp mình đá bóng giỏi lắm... cụ thể là đá sân 2.",
                            nextText: 8,
                        },
                    ],
                },
                {
                    id: 7,
                    text: "Thầy không nói gì, từ đó trở đi lớp có thầy cũng như không.",
                    options: [],
                },
                {
                    id: 8,
                    text: "Bạn lập nhóm kêu gọi đám nam trong lớp nhưng không ai có hứng thú cả, bạn phải làm sao?",
                    options: [
                        {
                            text: "Nỗ lực kêu gọi",
                            nextText: 9,
                        },
                        {
                            text: "Dùng tiền mua chuộc",
                            nextText: 10,
                        },
                        {
                            text: "Thành lập đội cổ vũ nữ",
                            nextText: 11,
                        },
                    ],
                },
                {
                    id: 9,
                    text: "Bạn rất nỗ lực nhưng chẳng ai quan tâm, thầy thất vọng về năng lực của bạn.",
                    options: [],
                },
                {
                    id: 10,
                    text: "Bạn chi một đóng tiền nhưng đám nam trong lớp chỉ lấy tiền xong đá hời hợt, không chút hứng thú",
                    options: [],
                },
                {
                    id: 11,
                    text: "Bạn thành lập đội cỗ vũ nữ khiến đám nam trong lớp hừng hực khí thế, nhao nhao tham dự đá bóng. Đội bóng Săn Ống Đồng được thành lập.",
                    options: [],
                },
            ]);
    }
}

let arrMonths4 = randomEventsMonth4();

function showTextNodeEventMonths4(textNodeIndex) {
    const textNode = arrMonths4.find(
        (textNode) => textNode.id === textNodeIndex
    );
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-4"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () =>
                selectOptionEventMonths4(option)
            );
            optionButtonsElement.appendChild(button);
        }
    });
}

function selectOptionEventMonths4(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    switch (nextTextNodeId) {
        case 4:
            healthyPoint -= 5;
            checkPoint();
            break;
        case 4:
            money -= 20;
            break;
        case 6:
            happyPoint += 2;
            checkPoint();
            break;
        case 9:
            happyPoint -= 5;
            checkPoint();
        case 10:
            money -= 50;
            break;
        case 11:
            happyPoint += 5;
            checkPoint();
            showSuccessToast("Bạn mở khóa một mối quan hệ mới");
            let newNPC = {
                relationshipItemId: 2,
                relationshipItemName: "Thầy Xin",
                relationshipItemIntimacy: 10,
                relationshipItemImg: "./img/relationship/chiCanteen.jpg",
                relationshipItemBuff: {
                    healthyPoint: 0,
                    happyPoint: 0,
                    moralityPoint: 0,
                },
            };
            relationshipListItem.push(newNPC);
            $(".list-relationship").innerHTML = "";

            relationshipListItem.forEach((item) => {
                let htmls = `
            <div class="relationship-item" id="${item.relationshipItemId}">
              <div class="relationship-img">
                  <img src="${item.relationshipItemImg}">
              </div>
              <div class="relationship-name">${item.relationshipItemName}</div>
              <div class="relationship-Intimacy">Điểm hảo cảm: <div class="sympathy${item.relationshipItemId}"> ${item.relationshipItemIntimacy}</div></div>
            </div>
          `;

                $(".list-relationship").innerHTML += htmls;

                // xử lí sự kiện click vào các mối quan hệ
                $$(".relationship-item").forEach((item) => {
                    item.onclick = function () {
                        if (pointActive == 0) {
                            item.disabled = true;
                        } else {
                            checkId(item.id);
                            $(".point-active").innerHTML = pointActive;
                        }
                    };
                });

                function checkId(id) {
                    for (let x of relationshipListItem) {
                        if (x.relationshipItemId == id) {
                            $(".relationship-contact").classList.add(
                                "show-btn"
                            );
                            $$(".contact-item").forEach((item) => {
                                // let itemId = item.id;

                                item.onclick = function () {
                                    console.log(item.id);
                                    switch (item.id) {
                                        // Chat
                                        case "1":
                                            console.log("1");
                                            if (
                                                x.relationshipItemIntimacy != 0
                                            ) {
                                                showSuccessToast(
                                                    "Nói chuyện thành công"
                                                );
                                                x.relationshipItemIntimacy += 5;
                                                checkPoint();
                                                if (x.relationshipItemId == 2) {
                                                    let rand =
                                                        comments[
                                                            Math.floor(
                                                                Math.random() *
                                                                    comments.length
                                                            )
                                                        ];
                                                    alert(rand);
                                                    pointActive--;
                                                    $(
                                                        ".point-active"
                                                    ).innerHTML = pointActive;
                                                }
                                            } else {
                                                showErrorToast(
                                                    "Bạn không phải bạn bè"
                                                );
                                            }
                                            break;
                                        // Hẹn hò
                                        case "2":
                                            console.log("2");
                                            if (
                                                x.relationshipItemIntimacy > 60
                                            ) {
                                                showSuccessToast(
                                                    "hẹn hò thành công"
                                                );
                                                x.relationshipItemIntimacy += 10;
                                                happyPoint +=
                                                    x.relationshipItemBuff
                                                        .happyPoint;
                                                checkPoint();
                                            } else {
                                                showErrorToast(
                                                    "Các bạn chưa đủ điểm thân mật để hẹn hò"
                                                );
                                            }
                                            break;
                                        // Tặng quà
                                        case "3":
                                            showSuccessToast("tặng thành công");
                                            x.relationshipItemIntimacy += 5;
                                            checkPoint();
                                            break;
                                        // cướp
                                        case "4":
                                            showSuccessToast("giết thành công");
                                            break;
                                        default:
                                            showErrorToast("Lỗi");
                                            break;
                                    }
                                };
                            });

                            // if(x.relationshipItemIntimacy > 50){

                            //     checkBtn();
                            //     healthyPoint = healthyPoint + x.relationshipItemBuff.healthyPoint;
                            //     happyPoint = happyPoint + x.relationshipItemBuff.happyPoint;
                            //     moralityPoint = moralityPoint + x.relationshipItemBuff.moralityPoint;
                            //     money = money + x.relationshipItemIntimacy;
                            //     $(".money").innerHTML = money;
                            //     checkPoint();
                            // }
                        }
                    }
                }
            });
            break;
    }
    //   state = Object.assign(state, option.setState)
    showTextNodeEventMonths4(nextTextNodeId);
}
// END EVENT THÁNG 4

// EVENT THÁNG 11
function randomEventsMonth11() {
    let events = 1;
    switch (events) {
        case 1:
            return (textNodes1 = [
                {
                    id: 1,
                    text: "Còn một tháng nữa là kì thi kết thúc môn bắt đầu, bạn có muốn ôn từ bây giờ không?",
                    options: [
                        {
                            text: "Không cần, ôn trước ngày thi là được rồi",
                            nextText: 2,
                        },
                        {
                            text: "Đương nhiên rồi, 4 tiếng / ngày",
                            nextText: 3,
                        },
                        {
                            text: "Ôn cả ngày cho máu",
                            nextText: 4,
                        },
                    ],
                },
                {
                    id: 2,
                    text: "Ngày thi sắp đến gần bạn nghe được tin một đàn chị khóa trên có đề thi, bạn có muốn liên hệ hỏi thử?",
                    options: [
                        {
                            text: "Có chứ",
                            nextText: 5,
                        },
                        {
                            text: "Tôi tự tin với năng lực của mình mà không cần biết trước đề thi",
                            nextText: 6,
                        },
                        {
                            text: "Báo cáo với thầy cô",
                            nextText: 7,
                        },
                        {
                            text: "Khoanh lụi là chân ái",
                            nextText: 8,
                        },
                    ],
                },
                {
                    id: 3,
                    text: "Ngày thi sắp đến gần bạn nghe được tin một đàn chị khóa trên có đề thi, bạn có muốn liên hệ hỏi thử?",
                    options: [
                        {
                            text: "Có chứ",
                            nextText: 5,
                        },
                        {
                            text: "Tôi tự tin với năng lực của mình mà không cần biết trước đề thi",
                            nextText: 6,
                        },
                    ],
                },
                {
                    id: 4,
                    text: "Ngày thi sắp đến gần bạn nghe được tin một đàn chị khóa trên có đề thi, bạn có muốn liên hệ hỏi thử?",
                    options: [
                        {
                            text: "Có chứ",
                            nextText: 5,
                        },
                        {
                            text: "Không thèm, báo cáo lại với thầy cô",
                            nextText: 9,
                        },
                    ],
                },
                {
                    id: 5,
                    text: "Bạn tốn 200k để lấy đề từ đàn chị, bạn dành cả đêm để học thuộc đáp án trong đề. Vào thi, bạn thấy đề rất lạ. Hóa ra ai đó đã báo cáo với thầy cô nên thầy cô đã đổi đề khác.",
                    options: [],
                },
                {
                    id: 6,
                    text: "Ai đó đã báo cáo với thầy cô nên đã đổi đề khác, bạn dựa vào thực lực của mình đã giành được học lực khá",
                    options: [],
                },
                {
                    id: 7,
                    text: "Thầy cô ghi nhận sự thành thực của bạn, nhờ làm việc tốt nên bạn khoanh lụi được ông bà độ lấy được học sinh giỏi.",
                    options: [],
                },
                {
                    id: 8,
                    text: "Bạn khoanh lụi rất tự tin nhưng cuối cùng đáp án lại một cái khác.",
                    options: [],
                },
                {
                    id: 9,
                    text: "Bạn báo cáo lại với thầy cô khiến thầy cô đổi đề, bạn ở lại trường nên nghe ngóng được một số câu hỏi vì vậy mà bạn đã giành được thành tích tuyệt đối",
                    options: [],
                },
            ]);
    }
}

let arrMonths11 = randomEventsMonth11();

function showTextNodeEventMonths11(textNodeIndex) {
    const textNode = arrMonths11.find(
        (textNode) => textNode.id === textNodeIndex
    );
    //   const textNode = textNodes.find((textNode) => {
    //     textNode.id === textNodeIndex;
    //   })
    textElement.innerText = textNode.text;
    let htmls = `
  <div class="event-content">
  <div class="monthh month-11"></div>
  <div class="text"> ${textNode.text} </div>
  <div class="answers"></div>
  </div>
  `;
    $(".event-content-title").innerHTML += htmls;
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach((option) => {
        if (showOption(option)) {
            const button = document.createElement("button");
            button.innerText = option.text;

            button.classList.add("btn");
            button.addEventListener("click", () =>
                selectOptionEventMonths11(option)
            );
            optionButtonsElement.appendChild(button);
        }
    });
}

function selectOptionEventMonths11(option) {
    const nextTextNodeId = option.nextText;
    let htmls = `<div class="answer"> Bạn đã chọn: ${option.text}</div>`;
    $(".event-content-title").innerHTML += htmls;

    if (nextTextNodeId <= 0) {
        return startGame();
    }
    switch (nextTextNodeId) {
        case 5:
            money -= 20;
            happyPoint -= 2;
            checkPoint();
            break;
        case 6:
            happyPoint += 2;
            checkPoint();
            break;
        case 7:
            happyPoint += 5;
            checkPoint();
            break;
        case 8:
            happyPoint -= 5;
            checkPoint();
        case 9:
            happyPoint += 5;
            checkPoint();
            break;
    }
    //   state = Object.assign(state, option.setState)
    showTextNodeEventMonths11(nextTextNodeId);
}
// END

// Không đụng code dưới đây

function startGame() {
    intellegent = 0;
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    $("#question").innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        $("#answer-buttons").appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while ($("#answer-buttons").firstChild) {
        $("#answer-buttons").removeChild($("#answer-buttons").firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        intellegent += 2;
        $(".int-point").innerHTML = intellegent;
        $(".tritue").style.width = intellegent + "%";
        // if (intellegent >= 10 && intellegent < 20) {
        //     $(".tritue").style.background = "yellow";
        //     $(".int-point").style.color = "red";
        // } else if (intellegent >= 20) {
        //     $(".tritue").style.background = "green";
        //     $(".int-point").style.color = "yellow";
        // }
    } else {
        selectBtn.classList.add("incorrect");
    }

    Array.from($("#answer-buttons").children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}

function handleCloseButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
}

startGame();

// tiếp theo

// $(".coint").innerHTML = "Tiền: " + coint;

//huy
// const sports = [
//     {
//         type: "gym",
//         img: "./img/sports/gym.jpg",

//         coins: 300000,
//     },
//     {
//         type: "football",
//         img: "./img/sports/football.jpg",

//         coins: 100000,
//     },
//     {
//         type: "Chạy bộ",
//         img: "./img/sports/jogging.jpg",

//         coins: 0,
//     },
//     {
//         type: "đánh cầu",
//         img: "./img/sports/badminton.jpg",

//         coins: 200000,
//     },
// ];

// sports.forEach((item) => {
//     const huy = `
//     <button class="sports-items-btn">
//                         <div class="img-sprots">
//                             <img src="${item.img}" />
//                         </div>
//                         <p>${item.type}</p>
//                         <div class="coins-sports gym">${item.coins}</div>
//                     </button>
// `;
//     $(".list-sports").innerHTML += huy;
// });

// $$(".sports-items-btn").forEach((item) => {
//     item.onclick = function () {
//         let sells = this.lastElementChild.innerText;
//         if (this.lastElementChild.innerText == 0) {
//             chaybo();
//             item.disabled = true;
//         } else if (this.lastElementChild.innerText == 300000) {
//             if (money < sells) {
//                 item.disabled = true;
//                 alert("Bạn không đủ tiền");
//             } else {
//                 gym();
//                 money = money - 300000;
//                 healthyPoint += 3;
//                 $(".health-point").innerHTML = healthyPoint;
//                 $(".health").style.width = healthyPoint + "%";
//                 $(".money").innerHTML = money;
//                 item.disabled = true;
//             }
//         } else {
//             if (money < sells) {
//                 item.disabled = true;
//                 alert("Bạn không đủ tiền");
//             } else {
//                 money = money - sells;
//                 healthyPoint += 2;
//                 $(".health-point").innerHTML = healthyPoint;

//                 $(".health").style.width = healthyPoint + "%";
//                 // if (healthyPoint >= 10 && healthyPoint < 20) {
//                 //     $(".health").style.background = "yellow";
//                 //     $(".health-point").style.color = "red";
//                 // } else if (healthyPoint >= 20) {
//                 //     $(".health").style.background = "green";
//                 //     $(".health-point").style.color = "yellow";
//                 // }
//                 $(".money").innerHTML = money;
//                 item.disabled = true;
//             }
//         }
//     };
// });
const exerciseListItem = [
    {
        exerciseItemId: 1,
        exerciseItemName: "Chạy Bộ",
        exerciseItemPrice: 0,
        exerciseItemImg: "./img/sports/jogging.jpg",
        exerciseItemBuff: {
            healthyPoint: 0,
            happyPoint: 0,
        },
    },
    {
        exerciseItemId: 2,
        exerciseItemName: "Tập Gym",
        exerciseItemPrice: 19,
        exerciseItemImg: "./img/sports/gym.jpg",
        exerciseItemBuff: {
            healthyPoint: 3,
            happyPoint: 1,
        },
    },
    {
        exerciseItemId: 3,
        exerciseItemName: "Đá Bóng",
        exerciseItemPrice: 10,
        exerciseItemImg: "./img/sports/football.jpg",
        exerciseItemBuff: {
            healthyPoint: 1,
            happyPoint: 0,
        },
    },
];
exerciseListItem.forEach((item) => {
    let htmls = `
      <div class="exercise-item" id="${item.exerciseItemId}">
        <div class="exercise-img">
            <img src="${item.exerciseItemImg}">
        </div>
        <div class="box-namee">
            <div class="exercise-name">${item.exerciseItemName}</div>
            <div class="exercise-price"> - ${item.exerciseItemPrice} $</div>
        </div>
      </div>
    `;

    $(".list-sports").innerHTML += htmls;

    // xử lí sự kiện mua
    $$(".exercise-item").forEach((item) => {
        item.onclick = function () {
            if (pointActive == 0) {
                item.disabled = true;
            } else if (item.id == 1) {
                pointActive--;
                chaybo();

                checkBtn();
                $(".point-active").innerHTML = pointActive;
            } else if (item.id == 2) {
                if (checkId(item.id) != 1) {
                    gym();
                    checkBtn();
                    $(".point-active").innerHTML = pointActive;
                }
            } else {
                checkId(item.id);
                $(".point-active").innerHTML = pointActive;
            }
        };
    });

    function checkId(id) {
        for (let x of exerciseListItem) {
            if (x.exerciseItemId == id) {
                if (money >= x.exerciseItemPrice) {
                    // Khi click vào hoạt động mới trừ điểm hành động và ràng buộc các button hoạt động...
                    pointActive--;

                    checkBtn();

                    money = money - x.exerciseItemPrice;
                    $(".money").innerHTML = money;
                    healthyPoint =
                        healthyPoint + x.exerciseItemBuff.healthyPoint;
                    happyPoint = happyPoint + x.exerciseItemBuff.happyPoint;

                    checkPoint();
                    showSuccessToast("Bạn vừa tập thể dục xong");
                } else {
                    x.disabled = true;

                    showErrorToast("Bạn không đủ tiền");
                    return 1;
                }
            }
        }
    }
});
function checkPoint() {
    if (intellegent >= 100) {
        intellegent = 100;
        $(".int-point").innerHTML = intellegent;
        $(".tritue").style.width = intellegent + "%";
    }
    if (intellegent <= 0) {
        intellegent = 0;
        $(".int-point").innerHTML = intellegent;
        $(".tritue").style.width = intellegent + "%";
    }
    if (moralityPoint >= 100) {
        moralityPoint = 100;
        $(".morality-point").innerHTML = moralityPoint;
        $(".daoduc").style.width = moralityPoint + "%";
    }
    if (moralityPoint <= 0) {
        moralityPoint = 0;
        $(".morality-point").innerHTML = moralityPoint;
        $(".daoduc").style.width = moralityPoint + "%";
    }
    if (healthyPoint >= 100) {
        healthyPoint = 100;
        $(".health-point").innerHTML = healthyPoint;
        $(".health").style.width = healthyPoint + "%";
    }
    if (healthyPoint <= 0) {
        healthyPoint = 0;
        $(".health-point").innerHTML = healthyPoint;
        $(".health").style.width = healthyPoint + "%";
    }
    if (happyPoint <= 0) {
        happyPoint = 0;
        $(".happy-point").innerHTML = happyPoint;
        $(".happy").style.width = happyPoint + "%";
    }

    if (happyPoint >= 100) {
        happyPoint = 100;
        $(".happy-point").innerHTML = happyPoint;
        $(".happy").style.width = happyPoint + "%";
    }
    // từ 1 đến 99
    if (intellegent > 0 && intellegent < 100) {
        $(".int-point").innerHTML = intellegent;
        $(".tritue").style.width = intellegent + "%";
    }
    if (happyPoint > 0 && happyPoint < 100) {
        $(".happy-point").innerHTML = happyPoint;
        $(".happy").style.width = happyPoint + "%";
    }
    if (healthyPoint > 0 && healthyPoint < 100) {
        $(".health-point").innerHTML = healthyPoint;
        $(".health").style.width = healthyPoint + "%";
    }
    if (moralityPoint > 0 && moralityPoint < 100) {
        $(".morality-point").innerHTML = moralityPoint;
        $(".daoduc").style.width = moralityPoint + "%";
    }
}

//random chạy bộ
function chaybo() {
    var events = Math.floor(Math.random() * 3) + 1;
    switch (events) {
        case 1:
            alert(`${result} dẫm phải cứt chó!
            -1 Sức khoẻ
            -1 Hạnh Phúc`);
            if (happyPoint > 0) {
                happyPoint--;
            }
            if (healthyPoint >= 1) {
                healthyPoint -= 1;
            } else if (healthyPoint == 0) {
                healthyPoint = 0;
            }
            checkPoint();
            break;
        case 2:
            alert(`${result} lượm đc tiền!
            +1 Hạnh Phúc
            +100k`);
            money += 2;
            happyPoint++;
            $(".money").innerHTML = money;
            checkPoint();
            break;
        case 3:
            alert(`${result} bị ngã gãy cổ
            -2 Sức khoẻ`);
            if (healthyPoint >= 2) {
                healthyPoint -= 2;
            } else {
                healthyPoint = 0;
            }
            checkPoint();
            break;
    }
}
function gym() {
    var events = Math.floor(Math.random() * 3) + 1;
    switch (events) {
        case 1:
            alert(`${result} đã tập tay`);
            break;
        case 2:
            alert(`${result} đã tập chân`);
            break;
        case 3:
            alert(`${result} đã tập ngực`);
            break;
    }
}
//trí

// let coint = 500;
let checkCoint;

// $(".coint").innerHTML = "Tiền: " + coint + " K";

$(".shop").onmousedown = function () {
    $(".box-shopp").classList.toggle("show-shop");
    checkMoney();
    $(".event-sports").classList.remove("show-btn");
    $(".event-work").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".event-relationship").classList.remove("show-btn");
    $(".event-volunteer").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};
$(".on-toggle3").onclick = function () {
    $(".box-shopp").classList.toggle("show-shop");
    checkMoney();
};
// $(".buff-coint").onclick = function () {
//     coint += 1000;
//     $(".coint").innerHTML = "Tiền: " + coint + " K";
// };

const shopItems = [
    {
        i: "item1",
        a: "",
        img: "./img/consomayman1.jpg",
        Text: "Con số may mắn",
        cointItem: 9,

        editPoint1: "", //số điểm 1
        valuePoint1: "", // editpoint là dương valuePoint1: '+'
        namePoint1: "",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: "",
        valuePoint3: "",
        namePoint3: "",
    },
    {
        i: "item2",
        a: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrHv1x8WwCcS6-hsGeMCd5z_UHu0qoB4YLg&usqp=CAU",
        Text: "Truyện Kiều - bản chưa kể",
        cointItem: 5,

        editPoint1: 2, //số điểm 1
        valuePoint1: "+",
        namePoint1: "điểm hạnh phúc",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: "",
        valuePoint3: "",
        namePoint3: "",
    },
    {
        i: "item3",
        a: "",
        img: "https://nhadepso.com/wp-content/uploads/2023/03/101-hinh-nen-sach-dep-an-tuong-cho-may-tinh-hoac-dien-thoai_20.jpg",
        Text: "Nhập Môn Cờ Tướng",
        cointItem: 39,

        editPoint1: 1, //số điểm 1
        valuePoint1: "+",
        namePoint1: "điểm trí tuệ",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: "",
        valuePoint3: "",
        namePoint3: "",
    },
    {
        i: "item4",
        a: "",
        img: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png",
        Text: "Nhập Môn Lập Trình",
        cointItem: 79,

        editPoint1: 3, //số điểm 1
        valuePoint1: "+",
        namePoint1: "điểm trí tuệ",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: "",
        valuePoint3: "",
        namePoint3: "",
    },
    {
        i: "item5",
        a: "",
        img: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-10.png",
        Text: "Đạo Đức 13",
        cointItem: 200,

        editPoint1: 5, //số điểm 1
        valuePoint1: "+",
        namePoint1: "điểm đạo đức",

        editPoint2: 5,
        valuePoint2: "+",
        namePoint2: "điểm hạnh phúc",

        editPoint3: "",
        valuePoint3: "",
        namePoint3: "",
    },
    {
        i: "item6",
        a: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5rTv7MiBmu28Jodg110BxoWvvdXDhdTknA&usqp=CAU",
        Text: "Thuốc Lá",
        cointItem: 1,

        editPoint1: -2, //số điểm 1
        valuePoint1: "",
        namePoint1: "điểm sức khỏe",

        editPoint2: 1,
        valuePoint2: "+",
        namePoint2: "điểm hạnh phúc",

        editPoint3: "",
        valuePoint3: "",
        namePoint3: "",
    },
    {
        i: "item7",
        a: "donate",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5rTv7MiBmu28Jodg110BxoWvvdXDhdTknA&usqp=CAU",
        Text: "Pudding",
        cointItem: 19,

        editPoint1: "",
        valuePoint1: "",
        namePoint1: "",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: 2,
        valuePoint3: "+",
        namePoint3: "điểm Hảo cảm",
    },
    {
        i: "item8",
        a: "donate",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5rTv7MiBmu28Jodg110BxoWvvdXDhdTknA&usqp=CAU",
        Text: "Hoa Hồng Trắng",
        cointItem: 39,

        editPoint1: "",
        valuePoint1: "",
        namePoint1: "",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: 3,
        valuePoint3: "+",
        namePoint3: "điểm Hảo cảm",
    },
    {
        i: "item9",
        a: "donate",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx5rTv7MiBmu28Jodg110BxoWvvdXDhdTknA&usqp=CAU",
        Text: "Gấu Bông",
        cointItem: 99,

        editPoint1: "",
        valuePoint1: "",
        namePoint1: "",

        editPoint2: "",
        valuePoint2: "",
        namePoint2: "",

        editPoint3: 5,
        valuePoint3: "+",
        namePoint3: "điểm Hảo cảm",
    },
];

//// mới sửa

//

shopItems.forEach((item) => {
    let vantri = `<div class="shop-item">
    <img class="shop-item-img" src="${item.img}">
    <div class="shop-item-text">${item.Text}</div>
    <div class="shop-item-mony">Giá: ${item.cointItem}${item.valuePoint3}${item.editPoint3}${item.namePoint3}$</div>
    <button class="shop-buy ${item.a}" id="${item.i}"><span> buy</span></button>
</div>`;

    $(".box-shop").innerHTML += vantri;

    // sự kiện nhấn mua trong shop
    $$(".shop-item").forEach((e) => {
        $$(".shop-buy").forEach((a) => {
            a.onmousedown = function () {
                //let a = s.querySelector("button"); //lấy id tron button
                check(a.id);
            };
        });
    });
    // phương thức check
    let shopitemLength = shopItems.length;
    function check(variable) {
        //duyệt mảng lấy id
        for (let shopIndex = 0; shopIndex < shopitemLength; shopIndex++) {
            let fixbug = shopItems[shopIndex].i;

            // xét dk id chọn trong button vs id duyệt mảng trùng nhau
            // xét giá

            let c = document.getElementById(shopItems[shopIndex].i);
            checkMoney();
            if (money < shopItems[shopIndex].cointItem) {
                c.disabled = true;
            } else c.disabled = false;

            if (variable === fixbug) {
                if (money < shopItems[shopIndex].cointItem) {
                    let inHTML = `
                    <p class="toast__msg">Bạn mua: ${shopItems[shopIndex].Text}</br> với giá: 
                    ${shopItems[shopIndex].cointItem}   Không thành công. </p>
                    `;
                    showErrorToast(inHTML);
                    c.disabled = true;
                } else {
                    let inHTML = `
                        <p class="toast__msg">Bạn mua: ${shopItems[shopIndex].Text}</br> với giá: 
                        ${shopItems[shopIndex].cointItem} </p>
                        <p class="toast__msg"> ${shopItems[shopIndex].valuePoint1} ${shopItems[shopIndex].editPoint1} ${shopItems[shopIndex].namePoint1} </br>
                        ${shopItems[shopIndex].valuePoint2} ${shopItems[shopIndex].editPoint2} ${shopItems[shopIndex].namePoint2}</p>
                    `;

                    if (c.classList.contains("donate")) {
                        let dinhdung = `
                        <div id="cart-items">
                            <img src="${shopItems[shopIndex].img}" alt="">
                            <h2>${shopItems[shopIndex].Text}</h2>
                            <p>${shopItems[shopIndex].valuePoint3}${shopItems[shopIndex].editPoint3}
                            ${shopItems[shopIndex].namePoint3}</p>
                            
                            <button
                                    class="btn-donate "
                                >
                                    <span> Tặng </span>
                                </button>
                                
                        
                        </div>
                        `;
                        $(".list-bag").innerHTML += dinhdung;
                        $$(".btn-donate").forEach((itemss) => {
                            itemss.onclick = function () {
                                console.log(itemss);
                                $(".event-relationship-donate").classList.add(
                                    "show-btn"
                                );

                                $(".event-relationship-donate").style.zIndex =
                                    "1000";
                                let divElement = itemss.parentNode;
                                console.log(divElement);
                                relationshipListItem.forEach((item) => {
                                    let htmls = `
                    <div class="relationship-item-donate" id="${item.relationshipItemId}">
                    <div class="relationship-img-donate">
                        <img src="${item.relationshipItemImg}">
                    </div>
                    <div class="relationship-name">${item.relationshipItemName}</div>
                    
                    </div>
                                        `;

                                    $(".list-relationship-donate").innerHTML +=
                                        htmls;

                                    // xử lí sự kiện click vào các mối quan hệ
                                    $$(".relationship-item-donate").forEach(
                                        (item) => {
                                            item.onclick = function () {
                                                let idd = item["id"];
                                                if (idd == 1) {
                                                    showSuccessToast(
                                                        "Tặng cho bé Tư thành công"
                                                    );
                                                    $$(
                                                        ".relationship-item"
                                                    ).forEach((item) => {
                                                        let iddd = item.id;
                                                        if (idd == iddd) {
                                                            console.log(
                                                                shopItems[
                                                                    shopIndex
                                                                ].editPoint3
                                                            );
                                                            $(
                                                                ".sympathy1"
                                                            ).innerHTML =
                                                                sympathyNpc1 +=
                                                                    shopItems[
                                                                        shopIndex
                                                                    ]
                                                                        .editPoint3;
                                                        }
                                                    });
                                                } else if (idd == 2) {
                                                    showSuccessToast(
                                                        "Tặng cho Thầy Xin thành công"
                                                    );
                                                    $$(
                                                        ".relationship-item"
                                                    ).forEach((item) => {
                                                        let iddd = item.id;
                                                        if (idd == iddd) {
                                                            $(
                                                                ".sympathy2"
                                                            ).innerHTML =
                                                                sympathyNpc2 +=
                                                                    shopItems[
                                                                        shopIndex
                                                                    ]
                                                                        .editPoint3;
                                                        }
                                                    });
                                                } else if (idd == 3) {
                                                    showSuccessToast(
                                                        "Tặng cho cô Căn tin thành công"
                                                    );
                                                    $$(
                                                        ".relationship-item"
                                                    ).forEach((item) => {
                                                        let iddd = item.id;
                                                        if (idd == iddd) {
                                                            $(
                                                                ".sympathy3"
                                                            ).innerHTML =
                                                                sympathyNpc3 +=
                                                                    shopItems[
                                                                        shopIndex
                                                                    ]
                                                                        .editPoint3;
                                                        }
                                                    });
                                                } else if (idd == 4) {
                                                    showSuccessToast(
                                                        "Tặng cho bé Thư thành công"
                                                    );
                                                    $$(
                                                        ".relationship-item"
                                                    ).forEach((item) => {
                                                        let iddd = item.id;
                                                        if (idd == iddd) {
                                                            $(
                                                                ".sympathy4"
                                                            ).innerHTML =
                                                                sympathyNpc4 +=
                                                                    shopItems[
                                                                        shopIndex
                                                                    ]
                                                                        .editPoint3;
                                                        }
                                                    });
                                                } else if (idd == 5) {
                                                    showSuccessToast(
                                                        "Tặng cho bạn Huy thành công"
                                                    );
                                                    $$(
                                                        ".relationship-item"
                                                    ).forEach((item) => {
                                                        let iddd = item.id;
                                                        if (idd == iddd) {
                                                            $(
                                                                ".sympathy5"
                                                            ).innerHTML =
                                                                sympathyNpc5 +=
                                                                    shopItems[
                                                                        shopIndex
                                                                    ]
                                                                        .editPoint3;
                                                        }
                                                    });
                                                }

                                                //   ẩn bảng hiện thị các mối quan hệ.
                                                $(
                                                    ".event-relationship-donate"
                                                ).classList.remove("show-btn");

                                                while (
                                                    $(
                                                        ".list-relationship-donate"
                                                    ).hasChildNodes()
                                                ) {
                                                    $(
                                                        ".list-relationship-donate"
                                                    ).removeChild(
                                                        $(
                                                            ".list-relationship-donate"
                                                        ).firstChild
                                                    );
                                                }

                                                //   Xóa các item trong balo sau khi dùng xong.
                                                divElement.remove();
                                            };
                                        }
                                    );
                                });
                            };
                        });
                    }

                    showSuccessToast(inHTML);
                    c.disabled = false;
                    money = money - shopItems[shopIndex].cointItem;
                    $(".money").innerHTML = money;

                    //  số may mắn với id item1
                    if (variable === "item1") {
                        $(".box-shop-item").classList.add("box-shop-item-show");

                        $(".box-shop-item").innerHTML = `
                        <h1>QUAY SỐ MAY MẮN</br><b>Giải: 999$</b></h1>
                        <h2 id = "random-dial">0</h2>
                        <p class="show-dial">Mời bạn nhập số (từ 0 đến 100).</p>
                        <input id="select-dial">
                        <button class="select-box-shop-item">chọn</button>
                        <button class="exit-box-shop-item box-shop-item-hide">thoát</button>
                        `;

                        $(".select-box-shop-item").disabled = true;
                        let dial;
                        // sử lý nút đóng mở số may mắn// sử lý random
                        $("#select-dial").oninput = function (e) {
                            //kiểm tra khi nhập
                            dial = Number(e.target.value);
                            let dial2 = parseInt(e.target.value);
                            if (
                                (dial < 0 && dial2 < 0) ||
                                (dial > 100 && dial2 > 100)
                            ) {
                                $(".select-box-shop-item").disabled = true;
                                $(
                                    ".show-dial"
                                ).innerHTML = `Số bé hơn 0 hoặc lớn hơn 100, <b>nhập lại!</b>`;
                                $(".show-dial").classList.remove("win-prize");
                                $(".show-dial").classList.add("lose-prize");
                            } else {
                                if (
                                    (dial >= 0 && dial2 >= 0) ||
                                    (dial <= 100 && dial2 <= 100)
                                ) {
                                    $(".select-box-shop-item").disabled = false;
                                    $(
                                        ".show-dial"
                                    ).innerHTML = `Nhấn vào <b>"CHỌN"</b> để mởi kết quả.`;
                                    $(".show-dial").classList.remove(
                                        "lose-prize"
                                    );
                                    $(".show-dial").classList.add("win-prize");
                                } else {
                                    $(".select-box-shop-item").disabled = true;
                                    $(
                                        ".show-dial"
                                    ).innerHTML = `Mời bạn nhập số (từ 0 đến 10).`;
                                    $(".show-dial").classList.remove(
                                        "lose-prize"
                                    );
                                    $(".show-dial").classList.remove(
                                        "win-prize"
                                    );
                                }
                            }
                        };
                        //sử lý khi nhấn quay
                        $(".select-box-shop-item").onmousedown = function () {
                            $(".select-box-shop-item").disabled = true;
                            $("#select-dial").disabled = true;
                            //settimeout nhảy số
                            let randomDial = 0;

                            let randomTimeout = function () {
                                randomDial = Math.floor(Math.random() * 100);
                                $("#random-dial").innerHTML = randomDial;
                                $(".show-dial").classList.remove("lose-prize");
                                $(".show-dial").classList.remove("win-prize");
                                $(
                                    ".show-dial"
                                ).innerHTML = `<b>Loadding...</b></br>`;
                            };

                            let randomInterval = setInterval(
                                randomTimeout,
                                100
                            );

                            setTimeout(() => {
                                $(".exit-box-shop-item").classList.remove(
                                    "box-shop-item-hide"
                                );
                                $(".select-box-shop-item").classList.add(
                                    "box-shop-item-hide"
                                );
                                clearInterval(randomInterval);
                                if (randomDial === dial) {
                                    showSuccessToast(`Bạn đã thắng trong <b> QUAY SỐ MAY MẮN.</b></br>
                                    <b>Bạn nhận được Tiền: 999.</b>`);
                                    $(
                                        ".show-dial"
                                    ).innerHTML = `Chúc mừng bạn đã trúng với kết quả: <b>${randomDial}.</b></br>
                                    <b>Bạn nhận được Tiền: 999.</b>`;
                                    $(".show-dial").classList.remove(
                                        "lose-prize"
                                    );
                                    $(".show-dial").classList.add("win-prize");
                                    $("#random-dial").classList.add(
                                        "win-prize"
                                    );
                                    money = money + 999;
                                    $(".money").innerHTML = money;
                                } else {
                                    showErrorToast(`Chúc bạn may mắn lần sau.`);
                                    $(
                                        ".show-dial"
                                    ).innerHTML = `Con số may mắn là: <b>${randomDial}</b>. </br><B>CHÚC BẠN MAY MẮN LẦN SAU.</B>`;
                                    $(".show-dial").classList.remove(
                                        "win-prize"
                                    );
                                    $(".show-dial").classList.add("lose-prize");
                                    $("#random-dial").classList.add(
                                        "lose-prize"
                                    );
                                }
                            }, 3000);
                        };
                        $(".exit-box-shop-item").onclick = function () {
                            $(".box-shop-item").classList.remove(
                                "box-shop-item-show"
                            );
                        };
                    }

                    // sử lý cộng điểm khi mua
                    if (shopItems[shopIndex].namePoint1 === "điểm trí tuệ") {
                        intellegent += shopItems[shopIndex].editPoint1;
                        checkPoint();
                    }
                    if (shopItems[shopIndex].namePoint1 === "điểm đạo đức") {
                        moralityPoint += shopItems[shopIndex].editPoint1;
                        checkPoint();
                    }
                    if (shopItems[shopIndex].namePoint1 === "điểm sức khỏe") {
                        healthyPoint += shopItems[shopIndex].editPoint1;
                        checkPoint();
                    }
                    if (shopItems[shopIndex].namePoint1 === "điểm hạnh phúc") {
                        happyPoint += shopItems[shopIndex].editPoint1;
                        checkPoint();
                    }

                    if (shopItems[shopIndex].namePoint2 === "điểm trí tuệ") {
                        intellegent += shopItems[shopIndex].editPoint2;
                        checkPoint();
                    }
                    if (shopItems[shopIndex].namePoint2 === "điểm đạo đức") {
                        moralityPoint += shopItems[shopIndex].editPoint2;
                        checkPoint();
                    }
                    if (shopItems[shopIndex].namePoint2 === "điểm sức khỏe") {
                        healthyPoint += shopItems[shopIndex].editPoint2;
                        checkPoint();
                    }
                    if (shopItems[shopIndex].namePoint2 === "điểm hạnh phúc") {
                        happyPoint += shopItems[shopIndex].editPoint2;
                        checkPoint();
                    }
                }
                //     if (intellegent <= 0) {
                //         intellegent = 0;
                //         $(".int-point").innerHTML = intellegent;
                //     }
                //     if (moralityPoint <= 0) {
                //         moralityPoint = 0;
                //         $(".morality-point").innerHTML = moralityPoint;
                //     }
                //     if (healthyPoint <= 0) {
                //         healthyPoint = 0;
                //         $(".health-point").innerHTML = healthyPoint;
                //     }
                //     if (happyPoint <= 0) {
                //         happyPoint = 0;
                //         $(".happy-point").innerHTML = happyPoint;
                //     }
                // }
                // if (intellegent >= 100) {
                //     intellegent = 100;
                //     $(".int-point").innerHTML = intellegent;
                // }
                // if (moralityPoint >= 100) {
                //     moralityPoint = 100;
                //     $(".morality-point").innerHTML = moralityPoint;
                // }
                // if (healthyPoint >= 100) {
                //     healthyPoint = 100;
                //     $(".health-point").innerHTML = healthyPoint;
                // }
                // if (happyPoint >= 100) {
                //     happyPoint = 100;
                //     $(".happy-point").innerHTML = happyPoint;
                // }
            }
            // happyPoint;
            // function showSuccessToast() {
            //     toast({
            //         title: "Thành công!",
            //         message: "Bạn đã mua",
            //         type: "success",
            //         duration: 3000,
            //     });
            // }

            // function showErrorToast() {
            //     toast({
            //         title: "Thất bại!",
            //         message: "Không đủ tiền",
            //         type: "error",
            //         duration: 3000,
            //     });
            // }
            // // Toast function
            // function toast({
            //     title = "",
            //     message = "",
            //     type = "info",
            //     duration = 3000,
            // }) {
            //     const main = document.getElementById("toast");
            //     if (main) {
            //         const toast = document.createElement("div");

            //         // Auto remove toast
            //         const autoRemoveId = setTimeout(function () {
            //             main.removeChild(toast);
            //         }, duration + 1000);

            //         // Remove toast when clicked
            //         toast.onclick = function (e) {
            //             if (e.target.closest(".toast__close")) {
            //                 main.removeChild(toast);
            //                 clearTimeout(autoRemoveId);
            //             }
            //         };

            //         const icons = {
            //             success: "fas fa-check-circle",
            //             error: "fas fa-exclamation-circle",
            //         };
            //         const icon = icons[type];
            //         const delay = (duration / 1000).toFixed(2);

            //         toast.classList.add("toast", `toast--${type}`);
            //         toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

            //         toast.innerHTML = `
            //           <div class="toast__icon">
            //               <i class="${icon}"></i>
            //           </div>
            //           <div class="toast__body">
            //               <h3 class="toast__title">${title} </h3>
            //               <p class="toast__msg">Bạn mua: ${shopItems[shopIndex].Text}</br> với giá:
            //               ${shopItems[shopIndex].cointItem} K </p>
            //               <p class="toast__msg"> ${shopItems[shopIndex].valuePoint1} ${shopItems[shopIndex].editPoint1} ${shopItems[shopIndex].namePoint1} </br>
            //               ${shopItems[shopIndex].valuePoint2} ${shopItems[shopIndex].editPoint2} ${shopItems[shopIndex].namePoint2} </br> ${title}</p>

            //           </div>
            //           <div class="toast__close">
            //               <i class="fas fa-times"></i>
            //           </div>
            //       `;
            //         main.appendChild(toast);
            //     }
            // }
        }
    }
});
//show toast message
function showSuccessToast(messages) {
    toast({
        title: "Thành công!",
        message: messages,
        type: "success",
        duration: 3000,
    });
}
function showErrorToast(messages) {
    toast({
        title: "Thất bại!",
        message: messages,
        type: "error",
        duration: 3000,
    });
}
// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when clicked
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: "fas fa-check-circle",
            error: "fas fa-exclamation-circle",
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `<div class="toast__icon">
        <i class="${icon}"></i>
    </div>
    <div class="toast__body">
        <h3 class="toast__title">${title} </h3>
        ${message}
    </div>
    <div class="toast__close">
        <i class="fas fa-times"></i>
    </div>`;
        main.appendChild(toast);
    }
}
// end show toast message

//dũng

//tên nhân vật
const img = [
    {
        type: "Nam",
        img: "./img/huy-removebg-preview.png",
    },
    {
        type: "Nữ",
        img: "./img/nữ-removebg-preview.png",
    },
];

img.forEach((items) => {
    const dung = `
    <div style="display:flex;
    flex-direction: column;
    height: 310px;
    justify-content: space-between;
    align-items: center;" for="character-image">
                <input
                    type="radio"
                    id="character-image1"
                    class="img-radio"
                    name="character-image"
                    value="${items.img}"
                    required
                />
                <img style="width: 50%;"
                    src="${items.img}"
                    alt="Nhân vật 1"
                    class="character-image"
                />
                <p>${items.type}</p>

            </div>
`;
    const dung1 = `
    <div style="display:flex;
    flex-direction: column;
    height: 285px;
    justify-content: space-between;
    align-items: center;" for="character-image">
                <input
                    type="radio"
                    id="character-image1"
                    class="img-radio"
                    name="character-imagee"
                    value="${items.img}"
                    required
                />
                <img style="width: 50%;"
                    src="${items.img}"
                    alt="Nhân vật 1"
                    class="character-image"
                />
                <p>${items.type}</p>

            </div>
`;
    $(".list-avatar").innerHTML += dung;
    $(".shop-list-avatar").innerHTML += dung1;
    $(".shop").disabled = true;
});
let result;

function fromSubmit() {
    var form = document.getElementById("forms");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        $("#close-btn-contents").style.display = "none";
        $(".figure-gif").classList.toggle("show-box");
        $(".figure-parameter").classList.toggle("show-box");
        $(".month").classList.toggle("show-box");
        $(".study-btn").classList.toggle("show-box");
        $(".increase-month").classList.toggle("show-box");
        $(".bag").classList.toggle("show-box");
        $(".relationship").classList.toggle("show-box");
        $(".shop").classList.toggle("show-box");
        $(".volunteer-btn").classList.toggle("show-box");
        $(".relax-btn").classList.toggle("show-box");
        $(".work-btn").classList.toggle("show-box");
        $(".sports-btn").classList.toggle("show-box");
        result = document.getElementById("character-name").value;
        var characterImage = document.querySelector(
            'input[name="character-image"]:checked'
        ).value;
        document.getElementById(
            "box-name"
        ).innerHTML = `<div class="names">Tên nhân vật: <span style="color:red;font-weight:700">${result}</span></div>`;
        $(".img-npc").style.visibility = "visible";
        $(".contents").style.visibility = "visible";
        $(".avatars").classList.remove("show-btn");
        let a = `<img id="previewImage" src="${characterImage}"></img>`;
        $(".avatar-img").innerHTML += a;
        $(".shop").disabled = true;
        $(".bag").disabled = true;
        $(".increase-month").disabled = true;
        $(".relationship").disabled = true;
        //
        $(".contents").classList.toggle("show-btn");

        var currentTime = new Date();
        var currentHour = currentTime.getHours();
        let session;

        if (currentHour < 12) {
            session = "Chào buổi sáng";
        } else if (currentHour < 18) {
            session = "Chào buổi chiều";
        } else {
            session = "Chào buổi tối";
        }
        let hello = `${session} ${result}, chào mừng bạn đến với trường Đại học Kinh tế - Kỹ thuật Bình Dương`;
        runMarquee(hello);

        function runMarquee(str) {
            var index = 0;
            var delay = 50;

            function printMarquee() {
                if (index <= str.length) {
                    var marquee = str.charAt(index);
                    console.log(marquee);
                    $(".hello-name").innerHTML += marquee;

                    index++;
                    setTimeout(printMarquee, delay);
                }
            }

            printMarquee();
        }

        let textContentHello = `Experiencing College Life là một tựa game mô phỏng giả lập về cuộc sống đại học gói gọn trong 3.5 năm, được tính bằng 42 tháng. Bạn hóa thân thành một`;

        runMarquee1(textContentHello);

        function runMarquee1(str) {
            var index = 0;
            var delay = 10;

            function printMarquee1() {
                if (index < str.length) {
                    var marqueee = str.charAt(index);
                    $(".content-hello").innerHTML += marqueee;
                    index++;
                    setTimeout(printMarquee1, delay);
                } else {
                    $("#close-btn-contents").style.display = "block";
                }
            }
            setTimeout(printMarquee1, 5000);
        }
    });
}

window.onload = function () {
    fromSubmit();
};

// document
//     .getElementById("characterForm")
//     .addEventListener("submit", function (e) {
//         e.preventDefault();

//         var characterName = document.getElementById("characterName").value;
//         var characterImage = document.querySelectorAll("characterImage").value;

//         document.getElementById(
//             "box-name"
//         ).innerHTML = `<div class="names">Tên nhân vật: <span style="color:red;font-weight:700">${characterName}</span></div>`;

//         characterImage.forEach((item) => {
//             if (item.checked == true) {
//                 document.getElementById("previewImage").src = characterImage;
//             }
//         });

//         $(".avatars").classList.remove("show-btn");
//     });

// $$(".avatar-items-btn").forEach((item) => {
//     item.onclick = function () {
//         let imgg = this.lastElementChild.innerHTML;
//         let a = `${imgg}`;
//         $(".avatar").innerHTML += a;
//         $(".avatars").classList.remove("show-btn");
//         $(".shop").disabled = false;
//         $(".avatar-btn").disabled = true;
//     };
// });

$(".refresh").onclick = function () {
    location.reload();
};

function checkMoney() {
    let shopitemLength = shopItems.length;
    for (let shopIndex = 0; shopIndex < shopitemLength; shopIndex++) {
        let c = document.getElementById(shopItems[shopIndex].i);
        if (money < shopItems[shopIndex].cointItem) {
            c.disabled = true;
        } else c.disabled = false;
    }
}

const volunteerListItem = [
    {
        volunteerItemId: 1,
        volunteerItemName: "Hiến Máu",
        volunteerItemPrice: 0,
        volunteerItemImg: "./img/sports/jogging.jpg",
        volunteerItemBuff: {
            healthyPoint: -5,
            happyPoint: 0,
            moralityPoint: 4,
        },
    },
    {
        volunteerItemId: 2,
        volunteerItemName: "Làm Tình Nguyện",
        volunteerItemPrice: 0,
        volunteerItemImg: "./img/sports/gym.jpg",
        volunteerItemBuff: {
            healthyPoint: -2,
            happyPoint: 2,
            moralityPoint: 2,
        },
    },
    {
        volunteerItemId: 3,
        volunteerItemName: "Từ Thiện",
        volunteerItemPrice: 29,
        volunteerItemImg: "./img/sports/football.jpg",
        volunteerItemBuff: {
            healthyPoint: 0,
            happyPoint: 2,
            moralityPoint: 3,
        },
    },
];
volunteerListItem.forEach((item) => {
    let htmls = `
      <div class="volunteer-item" id="${item.volunteerItemId}">
        <div class="volunteer-img">
            <img src="${item.volunteerItemImg}">
        </div>
        <div class="box-namee">
        <div class="volunteer-name">${item.volunteerItemName}</div>
        <div class="volunteer-price">+ ${item.volunteerItemPrice} $</div>
        </div>
      </div>
    `;

    $(".list-volunteer").innerHTML += htmls;

    // xử lí sự kiện mua
    $$(".volunteer-item").forEach((item) => {
        item.onclick = function () {
            if (pointActive == 0) {
                item.disabled = true;
            } else {
                checkId(item.id);
                $(".point-active").innerHTML = pointActive;
            }
        };
    });

    function checkId(id) {
        for (let x of volunteerListItem) {
            if (x.volunteerItemId == id) {
                if (x.volunteerItemBuff.healthyPoint > healthyPoint) {
                    showErrorToast("Bạn không đủ sức khỏe");
                } else {
                    pointActive--;
                    checkBtn();

                    money = money - x.volunteerItemPrice;
                    $(".money").innerHTML = money;

                    healthyPoint =
                        healthyPoint + x.volunteerItemBuff.healthyPoint;
                    happyPoint = happyPoint + x.volunteerItemBuff.happyPoint;
                    moralityPoint =
                        moralityPoint + x.volunteerItemBuff.moralityPoint;
                    checkPoint();
                    showSuccessToast("Bạn làm tình thành công");
                }
            }
        }
    }
});

const workListItem = [
    {
        workItemId: 1,
        workItemName: "Nhân Viên Coffee ca sáng",
        workItemPrice: 49,
        workItemImg: "./img/sports/jogging.jpg",
        workItemBuff: {
            healthyPoint: -2,
            happyPoint: -2,
            moralityPoint: 0,
        },
    },
    {
        workItemId: 2,
        workItemName: "Nhân Viên Coffee 2 ca",
        workItemPrice: 99,
        workItemImg: "./img/sports/gym.jpg",
        workItemBuff: {
            healthyPoint: -10,
            happyPoint: -5,
            moralityPoint: 0,
        },
    },
    {
        workItemId: 3,
        workItemName: "Nhân Viên Coffee 24h",
        workItemPrice: 199,
        workItemImg: "./img/sports/football.jpg",
        workItemBuff: {
            healthyPoint: -15,
            happyPoint: -15,
            moralityPoint: 0,
        },
    },
];
workListItem.forEach((item) => {
    let htmls = `
      <div class="work-item" id="${item.workItemId}">
        <div class="work-img">
            <img src="${item.workItemImg}">
        </div>
        <div class="box-namee">
        <div class="work-name">${item.workItemName}</div>
        <div class="work-price">+ ${item.workItemPrice} $</div></div>
      </div>
    `;

    $(".list-work").innerHTML += htmls;

    // xử lí sự kiện mua
    $$(".work-item").forEach((item) => {
        item.onclick = function () {
            if (pointActive == 0) {
                item.disabled = true;
            } else {
                checkId(item.id);
                $(".point-active").innerHTML = pointActive;
                showSuccessToast("Bạn vừa làm thêm xong");
            }
        };
    });

    function checkId(id) {
        for (let x of workListItem) {
            if (x.workItemId == id) {
                pointActive--;
                checkBtn();
                healthyPoint = healthyPoint + x.workItemBuff.healthyPoint;
                happyPoint = happyPoint + x.workItemBuff.happyPoint;
                moralityPoint = moralityPoint + x.workItemBuff.moralityPoint;
                money = money + x.workItemPrice;
                $(".money").innerHTML = money;
                checkPoint();
            }
        }
    }
});

const relaxListItem = [
    {
        relaxItemId: 1,
        relaxItemName: "Caro",
        relaxItemPrice: 0,
        relaxItemImg: "./img/sports/jogging.jpg",
        relaxItemBuff: {
            healthyPoint: 0,
            happyPoint: 0,
            moralityPoint: 0,
        },
    },
    {
        relaxItemId: 2,
        relaxItemName: "Giải Cứu Công Chúa",
        relaxItemPrice: 0,
        relaxItemImg: "../assets/img/img-game/gaming/bg.jpg",
        relaxItemBuff: {
            healthyPoint: 0,
            happyPoint: 0,
            moralityPoint: 0,
        },
    },
    {
        relaxItemId: 3,
        relaxItemName: "Cờ Tướng",
        relaxItemPrice: 0,
        relaxItemImg: "./img/sports/football.jpg",
        relaxItemBuff: {
            healthyPoint: 0,
            happyPoint: 0,
            moralityPoint: 0,
        },
    },
];
relaxListItem.forEach((item) => {
    let htmls = `
      <div class="relax-item" id="${item.relaxItemId}">
        <div class="relax-img">
            <img src="${item.relaxItemImg}">
        </div>
        <div class="box-namee">
        <div class="relax-name">${item.relaxItemName}</div>
        <div class="relax-price">${item.relaxItemPrice}</div>
      </div></div>
    `;

    $(".list-relax").innerHTML += htmls;

    // xử lí sự kiện mua
    $$(".relax-item").forEach((item) => {
        item.onclick = function () {
            if (pointActive == 0) {
                item.disabled = true;
            } else if (item.id == 1) {
                $(".wrapper-game").classList.add("show-btn");
                $(".board").classList.remove("hidden");
                $(".game-fighter-demon").classList.add("hidden");
                $(".wrapper-game").classList.remove("mario-game");
                $(".avt-main").classList.remove("show");
                $(".avt-demon").classList.remove("show");
                $(".avt-price").classList.remove("show");
                checkId(item.id);
            } else if (item.id == 2) {
                $(".wrapper-game").classList.add("show-btn");
                $(".wrapper-game").classList.add("mario-game");
                $(".avt-main").classList.add("show");
                $(".avt-demon").classList.add("show");
                $(".avt-price").classList.add("show");
                checkId(item.id);
                $(".game-fighter-demon").classList.remove("hidden");
                $(".board").classList.add("hidden");
            } else {
                happyPoint += 2;
                checkPoint();
                checkId(item.id);
                $(".point-active").innerHTML = pointActive;
            }
        };
    });

    function checkId(id) {
        for (let x of relaxListItem) {
            if (x.relaxItemId == id) {
                pointActive--;
                $(".point-active").innerHTML = pointActive;
                // happyPoint+=2;
                // checkPoint();
                checkBtn();
                /*$(
                    ".wrapper-game h2"
                ).innerHTML = `Tận hưởng Game ${x.relaxItemName}`;*/
                showSuccessToast(`Bạn vừa click vào game ${x.relaxItemName}`);
            }
        }
    }
});

const endMessage = document.querySelector(".end-mess")
$("#close-game-btn").onclick = function () {
    $(".wrapper-game").classList.remove("show-btn");

    questionContainerElement.classList.remove("hidden");
    document.getElementById("controls-container").classList.remove("hidden");
    endMessage.innerText = "";
    nextButton.classList.add("hidden");
    $('.main-win').classList.remove("show")
    $('.main-die').classList.remove("show")
    startGameFighterDemon();
    resetGame();

};
$(".on-toggle-game").onclick = function () {
    $(".wrapper-game").classList.remove("show-btn");

    questionContainerElement.classList.remove("hidden");
    document.getElementById("controls-container").classList.remove("hidden");
    endMessage.innerText = "";
    nextButton.classList.add("hidden");
    $('.main-win').classList.remove("show")
    $('.main-die').classList.remove("show")
    startGameFighterDemon();
    resetGame();
};

// const cells = document.querySelectorAll(".cell");
// const statusText = document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");

// $("#playGame").addEventListener("click", function(){
//     const winConditions = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     let options = ["", "", "", "", "", "", "", "", ""];
//     let currentPlayer = "X";
//     let running = false;

//     initializeGame();

//     function initializeGame(){
//         cells.forEach(cell => cell.addEventListener("click", cellClicked));
//         restartBtn.addEventListener("click", restartGame);
//         statusText.textContent = `${currentPlayer} Lượt của bạn`;
//         running = true;
//     }
//     function cellClicked(){
//         const cellIndex = this.getAttribute("cellIndex");

//         if(options[cellIndex] != "" || !running){
//             return;
//         }

//         updateCell(this, cellIndex);
//         checkWinner();
//     }
//     function updateCell(cell, index){
//         options[index] = currentPlayer;
//         cell.textContent = currentPlayer;
//     }
//     function changePlayer(){
//         currentPlayer = (currentPlayer == "X") ? "O" : "X";
//         // statusText.textContent = `${currentPlayer}`;
//     }
//     function checkWinner(){
//         let roundWon = false;

//         for(let i = 0; i < winConditions.length; i++){
//             const condition = winConditions[i];
//             const cellA = options[condition[0]];
//             const cellB = options[condition[1]];
//             const cellC = options[condition[2]];

//             if(cellA == "" || cellB == "" || cellC == ""){
//                 continue;
//             }
//             if(cellA == cellB && cellB == cellC){
//                 roundWon = true;
//                 break;
//             }
//         }

//         if(roundWon){
//             statusText.textContent = `${currentPlayer} wins!`;
//             happyPoint+=2;
//             checkPoint();
//             running = false;
//         }
//         else if(!options.includes("")){
//             statusText.textContent = `Draw!`;
//             running = false;
//         }
//         else{
//             changePlayer();
//         }
//     }
//     function restartGame(){
//         currentPlayer = "X";
//         options = ["", "", "", "", "", "", "", "", ""];
//         statusText.textContent = `${currentPlayer} Lượt của bạn`;
//         cells.forEach(cell => cell.textContent = "");
//         running = true;
//     }
// })

const board = document.querySelector(".board");
let cells = [];
let currentPlayer = "X";
let gameEnded = false;

createBoard();

function resetGame() {
    cells.forEach((cell) => {
        cell.textContent = "";
    });

    currentPlayer = "X";
    gameEnded = false;
}

function createBoard() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", handleCellClick);
            board.appendChild(cell);
            cells.push(cell);
        }
    }
}

function handleCellClick() {
    if (gameEnded) return;
    if (this.textContent !== "") return;

    const row = parseInt(this.dataset.row);
    const col = parseInt(this.dataset.col);
    this.textContent = currentPlayer;

    if (checkWin(row, col)) {
        gameEnded = true;
        showSuccessToast("Thắng");
        happyPoint += 2;
        checkPoint();
        return;
    }

    if (checkDraw()) {
        gameEnded = true;
        showErrorToast("Hòa");
        return;
    }

    switchPlayer();
    makeAIMove();
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function makeAIMove() {
    if (gameEnded) return;

    // Lấy một ô trống ngẫu nhiên
    const emptyCells = cells.filter((cell) => cell.textContent === "");
    if (emptyCells.length === 0) return;
    const randomCell =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];

    const row = parseInt(randomCell.dataset.row);
    const col = parseInt(randomCell.dataset.col);
    randomCell.textContent = currentPlayer;

    if (checkWin(row, col)) {
        gameEnded = true;
        showErrorToast("Bạn thua");
        happyPoint -= 2;
        checkPoint();
        return;
    }

    if (checkDraw()) {
        gameEnded = true;
        // alert('Trò chơi hòa!');
        showErrorToast("Hòa");
        return;
    }

    switchPlayer();
}

function checkWin(row, col) {
    const winningConditions = [
        [
            [0, 0],
            [0, 1],
            [0, 2],
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [0, 0],
            [0, 1],
            [0, 2],
        ],
        [
            [1, 0],
            [1, 1],
            [1, 2],
        ],
        [
            [2, 0],
            [2, 1],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 0],
            [2, 0],
        ],
        [
            [0, 1],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 2],
            [1, 2],
            [2, 2],
        ],
        [
            [0, 0],
            [1, 1],
            [2, 2],
        ],
        [
            [0, 2],
            [1, 1],
            [2, 0],
        ],
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (
            cells[a[0] * 3 + a[1]].textContent === currentPlayer &&
            cells[b[0] * 3 + b[1]].textContent === currentPlayer &&
            cells[c[0] * 3 + c[1]].textContent === currentPlayer
        ) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return cells.every((cell) => cell.textContent !== "");
}

$(".relationship").onclick = function () {
    $(".event-relationship").classList.add("show-btn");
    $(".event-sports").classList.remove("show-btn");
    $(".event-work").classList.remove("show-btn");
    $(".event-relax").classList.remove("show-btn");
    $(".box-shopp").classList.remove("show-shop");
    $(".event-volunteer").classList.remove("show-btn");
    $(".event-bag").classList.remove("show-btn");
    $(".quiz").classList.remove("show-btn");
};

$("#close-relationship-btn").onclick = function () {
    $(".event-relationship").classList.remove("show-btn");
};
$(".on-toggle-relationship").onclick = function () {
    $(".event-relationship").classList.remove("show-btn");
};

$("#close-contact-btn").onclick = function () {
    $(".relationship-contact").classList.remove("show-btn");
};
$(".on-toggle-contact").onclick = function () {
    $(".relationship-contact").classList.remove("show-btn");
};

const relationshipListItem = [
    {
        relationshipItemId: 1,
        relationshipItemName: "Bé Tư",
        relationshipItemIntimacy: 0,
        relationshipItemImg: "./img/relationship/ngocTrinh.jpg",
        relationshipItemBuff: {
            healthyPoint: 0,
            happyPoint: 0,
            moralityPoint: 0,
        },
    },
    // {
    //   relationshipItemId: 2,
    //   relationshipItemName: "Thầy Xin",
    //   relationshipItemIntimacy: 0,
    //   relationshipItemImg: "./img/sports/gym.jpg",
    //   relationshipItemBuff: {
    //     healthyPoint: 0,
    //     happyPoint: 0,
    //     moralityPoint: 0,
    //   },
    // },
    // {
    //   relationshipItemId: 3,
    //   relationshipItemName: "Chị Canteen",
    //   relationshipItemIntimacy: 0,
    //   relationshipItemImg: "./img/relationship/chiCanteen.jpg",
    //   relationshipItemBuff: {
    //     healthyPoint: 0,
    //     happyPoint: 10,
    //     moralityPoint: 0,
    //   },
    // },
];
let sympathyNpc1 = 0;
let sympathyNpc2 = 0;
let sympathyNpc3 = 0;
let sympathyNpc4 = 0;
let sympathyNpc5 = 0;

let comments = [
    [
        "Cách để một hàm C được gọi trong chương trình C++ như thế nào à? Theo thầy nhớ không lầm thì khai báo extern là được đó",
    ],
    [
        "Trong lập trình hướng đối tượng, khái niệm nào cho phép một đối tượng kế thừa các thuộc tính và phương thức của một đối tượng khác ư, đó là tính kế thừa",
    ],
];

relationshipListItem.forEach((item) => {
    let htmls = `
      <div class="relationship-item" id="${item.relationshipItemId}">
        <div class="relationship-img">
            <img src="${item.relationshipItemImg}">
        </div>
        <div class="relationship-name">${item.relationshipItemName}</div>
        
        <div class="relationship-Intimacy">Điểm hảo cảm: <div class="sympathy${item.relationshipItemId}"> ${item.relationshipItemIntimacy}</div></div>
      </div>
    `;

    $(".list-relationship").innerHTML += htmls;

    // xử lí sự kiện click vào các mối quan hệ
    $$(".relationship-item").forEach((item) => {
        item.onclick = function () {
            if (pointActive == 0) {
                item.disabled = true;
            } else {
                checkId(item.id);
                $(".point-active").innerHTML = pointActive;
            }
        };
    });

    function checkId(id) {
        for (let x of relationshipListItem) {
            if (x.relationshipItemId == id) {
                $(".relationship-contact").classList.add("show-btn");

                $$(".contact-item").forEach((item) => {
                    // let itemId = item.id;

                    item.onclick = function () {
                        console.log(item.id);
                        console.log(x.relationshipItemIntimacy);
                        console.log(item.id == 2);
                        switch (item.id) {
                            // Chat
                            case "1":
                                console.log("1");
                                if (x.relationshipItemIntimacy != 0) {
                                    showSuccessToast("Nói chuyện thành công");
                                    x.relationshipItemIntimacy += 5;
                                    checkPoint();
                                    if (x.relationshipItemId == 2) {
                                        let rand =
                                            comments[
                                                Math.floor(
                                                    Math.random() *
                                                        comments.length
                                                )
                                            ];
                                        alert(rand);
                                        pointActive--;
                                        $(".point-active").innerHTML =
                                            pointActive;
                                    }
                                } else {
                                    showErrorToast("Bạn không phải bạn bè");
                                }
                                break;
                            // Hẹn hò
                            case "2":
                                console.log("2");
                                if (x.relationshipItemIntimacy > 60) {
                                    showSuccessToast("hẹn hò thành công");
                                    x.relationshipItemIntimacy += 10;
                                    happyPoint +=
                                        x.relationshipItemBuff.happyPoint;
                                    checkPoint();
                                } else {
                                    showErrorToast(
                                        "Các bạn chưa đủ điểm thân mật để hẹn hò"
                                    );
                                }
                                break;
                            // Tặng quà
                            case "3":
                                showSuccessToast("tặng thành công");
                                x.relationshipItemIntimacy += 5;
                                checkPoint();
                                break;
                            // cướp
                            case "4":
                                showSuccessToast("giết thành công");
                                break;
                            default:
                                showErrorToast("Lỗi");
                                break;
                        }
                    };
                });

                // if(x.relationshipItemIntimacy > 50){

                //     checkBtn();
                //     healthyPoint = healthyPoint + x.relationshipItemBuff.healthyPoint;
                //     happyPoint = happyPoint + x.relationshipItemBuff.happyPoint;
                //     moralityPoint = moralityPoint + x.relationshipItemBuff.moralityPoint;
                //     money = money + x.relationshipItemIntimacy;
                //     $(".money").innerHTML = money;
                //     checkPoint();
                // }
            }
        }
    }
});

// $("#close-endgame-btn").onclick = function () {
//     $(".end-game-wrapper").classList.remove("show-btn");
// };
$(".on-toggle-endgame").onclick = function () {
    $(".end-game-wrapper").classList.remove("show-btn");
};
// hieu ung la roi//
function animation() {
    let cb = document.createElement("div");
    cb.classList.add("snow");
    let container = $(".left");
    let count = 50;
    for (var i = 0; i <= count; i++) {
        let leftSnow = Math.floor(Math.random() * container.clientWidth);
        let topSnow = Math.floor(Math.random() * container.clientHeight);
        let widthSnow = Math.floor(Math.random() * 120);
        let timeSnow = Math.floor(Math.random() * 5 + 5);
        let blurSnow = Math.floor(Math.random() * 10);
        let div = document.createElement("div");
        div.classList.add("snow");

        div.style.left = leftSnow + "px";
        div.style.top = topSnow + "px";
        div.style.width = widthSnow + "px";
        div.style.animationDuration = timeSnow + "s";
        div.style.filter = "blur(" + blurSnow + "px)";
        container.appendChild(div);
        setTimeout(function () {
            for (var j = 0; j < 50; j++) {
                div.classList.remove("snow");
            }
        }, 10000);
    }
    /*$(".snow").remove();*/
    /*$(".snow").classList.add("off");*/
}
function animation2() {
    let cb = document.createElement("div");
    cb.classList.add("tree");
    let container = $(".left");
    let count = 50;
    for (var i = 0; i <= count; i++) {
        let leftSnow = Math.floor(Math.random() * container.clientWidth);
        let topSnow = Math.floor(Math.random() * container.clientHeight);
        let widthSnow = Math.floor(Math.random() * 120);
        let timeSnow = Math.floor(Math.random() * 5 + 5);
        let blurSnow = Math.floor(Math.random() * 10);
        let div = document.createElement("div");
        div.classList.add("tree");

        div.style.left = leftSnow + "px";
        div.style.top = topSnow + "px";
        div.style.width = widthSnow + "px";
        div.style.animationDuration = timeSnow + "s";
        div.style.filter = "blur(" + blurSnow + "px)";
        container.appendChild(div);
        setTimeout(function () {
            for (var j = 0; j < 50; j++) {
                div.classList.remove("tree");
            }
        }, 10000);
    }
}

// Game chiến đấu với Ma vương



const questionContainerElement = document.getElementById("question-container");
const questionElement = document.querySelector(".question-game");
const answerButtonsElement = document.querySelector(".answer-buttons");
const maVuongHpValue = document.getElementById("ma-vuong-hp-value");
const mainHpValue = document.getElementById("main-hp-value");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let shuffledQuestions, currentQuestionIndexGame, maVuongHp, mainHp, Hp;

$("#start-btn").addEventListener("click", startGameFighterDemon);

nextButton.addEventListener("click", () => {
    currentQuestionIndexGame++;
    setNextQuestionGame();
});

function startGameFighterDemon() {
    $("#start-btn").classList.add("hidden");
    shuffledQuestions = questionsGameFighterDemon.sort(() => Math.random() - 0.5);
    currentQuestionIndexGame = 0;

    mainHp = 100;
    maVuongHp = 100;

    htmlHPDemon = ` 
<div class="progress pro-mini">
  <div class="progress-bar progress-bar-hp-demon" role="progressbar" aria-label="Basic example"
   style="width: ${mainHp}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
`;
    htmlHPMain = ` 
  <div class="progress pro-mini">
  <div class="progress-bar progress-bar-hp-main" role="progressbar" aria-label="Basic example"
   style="width: ${mainHp}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
  
`;
    maVuongHpValue.innerHTML = htmlHPDemon;
    mainHpValue.innerHTML = htmlHPMain;
    questionContainerElement.classList.remove("hidden");
    setNextQuestionGame();

}

function setNextQuestionGame() {
    resetStateGame();
    /* if (currentQuestionIndexGame >= questionsGameFighterDemon.length) {
        endGameFighter();
        return;
    }*/ 
    // const endMessage = document.createElement("h2");
    if (maVuongHp == 0) {
        endMessage.innerText = "Bạn đã giải cứu Eimi thành công";

        $(".avt-demon").classList.remove("show");
        $(".avt-price").classList.remove("show");
        $(".avt-main").classList.remove("show");
        $(".main-win").classList.add("show");
        happyPoint += 5;
        checkPoint();
        endGameFighter();

    } else if (mainHp == 0) {
        endMessage.innerText =
            "Bạn trơ mắt tuyệt vọng nhìn Ma vương cùng Eimi tâm sự...";
        $(".avt-main").classList.remove("show");
        $(".main-die").classList.add("show");
        $(".avt-demon").style.left = "180px";
        happyPoint -= 5;
        checkPoint();
        endGameFighter();
    }
    // const container = document.querySelector(".container");
    // container.appendChild(endMessage);
    const currentQuestion = shuffledQuestions[currentQuestionIndexGame];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn-game");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswerGame);
        answerButtonsElement.appendChild(button);
    });

    // Thêm đoạn code ràng buộc thời gian
    let timeLeft = 5;
    let timeInterval = setInterval(function () {
        if (timeLeft == 0) {
            clearInterval(timeInterval);
            mainHp -= 10;
            $(".progress-bar-hp-main").style.width = `${mainHp}` + "%";
            /*mainHpValue.innerText = mainHp;*/
            answerButton.classList.add("hidden");
            nextButton.classList.remove("hidden");
            answerButtonsElement.classList.add("hidden")
            timeLeft = 5;
        } else {
            document.getElementById("time-left").innerHTML = `${timeLeft}`;
        }
        timeLeft --;
    }, 1000);
    answerButtonsElement.classList.remove("hidden")
    // Tắt đoạn code ràng buộc thời gian khi người chơi chọn đáp án hoặc sử dụng nút "ANSWER"
    answerButton.addEventListener("click", function () {
        clearInterval(timeInterval);
    });
    Array.from(answerButtonsElement.children).forEach((button) => {
        button.addEventListener("click", function () {
            clearInterval(timeInterval);
        });
    });
}

function resetStateGame() {
    nextButton.classList.add("hidden");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswerGame(e) {
    $$(".btn-game").forEach((btn) => {
        btn.disabled = true;
    });
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (correct) {
        maVuongHp -= 100;
        $(".progress-bar-hp-demon").style.width = `${maVuongHp}%`;
        e.target.classList.add("correct");
    } else {
        mainHp -= 100;
        $(".progress-bar-hp-main").style.width = `${mainHp}%`;
        e.target.classList.add("incorrect");
    }

    answerButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

function endGameFighter() {
    questionContainerElement.classList.add("hidden");
    document.getElementById("controls-container").classList.add("hidden");
}

function checkAnswerGame(selectedButton) {
    const correct = selectedButton.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
      })
    if (correct) {
        maVuongHp -= 100;
        $(".progress-bar-hp-demon").style.width = `${maVuongHp}%`;
    } else {
        mainHp -= 100;
        $(".progress-bar-hp-main").style.width = `${mainHp}%`;
    }
    answerButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

const questionsGameFighterDemon = [
    {
        question: "Eimi Fukada sinh năm mấy",
        answers: [
            { text: "1998", correct: true },
            { text: "1997", correct: false },
            { text: "1996", correct: false },
            { text: "1995", correct: false },
        ],
    },
    {
        question: "Eimi Fukada ra mắt vào năm mấy?",
        answers: [
            { text: "2011", correct: false },
            { text: "2014", correct: false },
            { text: "2017", correct: true },
            { text: "2020", correct: false },
        ],
    },
    {
        question: "Cái tên đầu tiên mà Eimi Fukada dùng là gì?",
        answers: [
            { text: "Amami Kororo", correct: true },
            { text: "Eimi Hariki", correct: false },
            { text: "Amami Eimi", correct: false },
            { text: "Eimi Koroko", correct: false },
        ],
    },
    {
        question: "Bộ phim nào là tài liệu nổi tiếng của cô?",
        answers: [
            { text: "Compliance Room", correct: true },
            { text: "Anh Hàng Xóm May Mắn", correct: false },
            { text: "Anh Chồng Bất Lực", correct: false },
            { text: "Anh IT Dễ Thương", correct: false },
        ],
    },
    {
        question: "Vòng 1 của Eimi là bao nhiêu?",
        answers: [
            { text: "85", correct: true },
            { text: "86", correct: false },
            { text: "87", correct: false },
            { text: "88", correct: false },
        ],
    },
    {
        question: "Năm nào là năm Eimi Fukada có phong độ cao nhất?",
        answers: [
            { text: "2020", correct: true },
            { text: "2021", correct: false },
            { text: "2022", correct: false },
            { text: "2023", correct: false },
        ],
    },
    {
        question: "Eimi Fukada cùng ai tạo nên thời kỳ E-Y hoàng kim?",
        answers: [
            { text: "Yua Mikami", correct: true },
            { text: "Yun Aizawa", correct: false },
            { text: "Yui Hatano", correct: false },
            { text: "Yui Nagase", correct: false },
        ],
    },
    {
        question: "Eimi từng nói gì về Việt Nam?",
        answers: [
            {
                text: "Việt Nam là một đất nước xinh đẹp, con người Việt Nam rất tốt bụng và phi thường",
                correct: true,
            },
            {
                text: "Việt Nam là một đất nước xinh đẹp, con người Việt Nam rất tốt bụng và đáng yêu",
                correct: false,
            },
            {
                text: "Việt Nam là một đất nước xinh đẹp, con người Việt Nam rất nhiệt tình và mạnh mẽ",
                correct: false,
            },
            {
                text: "Việt Nam là một đất nước xinh đẹp, con người Việt Nam rất dễ thương và tử tế",
                correct: false,
            },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
    {
        question: "Trước khi bước chân vào Thánh địa, Eimi từng làm gì?",
        answers: [
            { text: "Ca Sĩ", correct: true },
            { text: "Diễn Viên", correct: false },
            { text: "Idol", correct: false },
            { text: "Người", correct: false },
        ],
    },
];


