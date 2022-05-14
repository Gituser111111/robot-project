let details_toggle = [false, false, false, false]

let details1 = document.getElementById("container-third-paragraph-details1");
let details2 = document.getElementById("container-third-paragraph-details2");
let details3 = document.getElementById("container-third-paragraph-details3");
let details4 = document.getElementById("container-third-paragraph-details4");

let tootleFunc = (detail, index) => {
    detail.addEventListener("toggle", () => {
        if (index < 3) {
            details_toggle[index] ?
                detail.children[0].classList.add("borderBottom") :
                detail.children[0].classList.remove("borderBottom");

        }
        details_toggle[index] ?
            detail.children[0].style.backgroundImage = "url('./asset/image/arrow.png')" :
            detail.children[0].style.backgroundImage = "url('./asset/image/arrow_up.png')";

        details_toggle[index] = !details_toggle[index];
    })
}

tootleFunc(details1, 0);
tootleFunc(details2, 1);
tootleFunc(details3, 2);
tootleFunc(details4, 3);




const data = {
    '18-24歲': 12,
    '25-29歲': 18,
    '30-34歲': 22,
    '35-39歲': 25,
    '40-44歲': 32,
    '45-49歲': 35,
    '50-54歲': 26,
    '55歲+': 18,
}

const container = document.querySelector('#container-chart')
const xAxisCate = Object.keys(data)
const seriesData = xAxisCate.map((key) => data[key])

var myChart = Highcharts.chart(container, {
    chart: {
        type: 'line',
    },
    title: {
        text: '您的投資組合',
    },
    subtitle: {
        // 副標題設定
    },
    caption: {
        // 圖表說明設定
    },
    credits: {
        // 版權標籤設定
    },
    xAxis: {
        categories: xAxisCate,
    },
    yAxis: {
        title: {
            text: '人數',
        },
    },
    series: [
        {
            name: 'XX公司員工',
            data: seriesData,
        },
    ],
})