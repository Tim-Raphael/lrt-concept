import init, { predict_value_at_target } from "./lrt_concept/lrt_concept.js";

init().then(() => {
    let dummy_dataset = [
        23694.7604830673, 2000, 23628.3272122367, 2001, 25197.2656001848, 2002,
        30310.3575963774, 2003, 34106.6581224001, 2004, 34520.2396492496, 2005,
        36353.8803343631, 2006, 41640.0808695147, 2007, 45612.7106221441, 2008,
        41650.3678297162, 2009, 41572.4559481507, 2010, 46705.8957963353, 2011,
        43855.8544658618, 2012, 46298.9229177341, 2013, 48023.8699845462, 2014,
        41103.2564363768, 2015, 42136.1207907991, 2016, 44652.5891722719, 2017,
        47939.2782884504, 2018, 46805.1384334439, 2019, 46749.4762280016, 2020,
        51426.7503654421, 2021, 48717.9911402128, 2022, 52823.58, 2023,
    ];
    let dummy_target = 2024;

    const result = predict_value_at_target(dummy_dataset, dummy_target);
    const ctx = document.getElementById("myChart");
    const year = document.getElementById("year");
    const predictedValue = document.getElementById("predictedValue");
    const slope = document.getElementById("slope");
    const intercept = document.getElementById("intercept");

    year.innerHTML = dummy_target;
    predictedValue.innerHTML = result[0];
    slope.innerHTML = result[1];
    intercept.innerHTML = result[2];

    let labels = dummy_dataset.filter((_, i) => i % 2 === 1);
    let data = dummy_dataset.filter((_, i) => i % 2 !== 1);

    labels.push(dummy_target + " (prediction)");
    data.push(result[0]);

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [
                {
                    label: "GDP per capita (current US$) - Germany",
                    data: data,
                    backgroundColor: data.map((item, index) => {
                        return index === data.length - 1
                            ? "#388e3c"
                            : "#1095c1";
                    }),
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    const oldTitle = document.title;

    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = "business enterprise stuff";
        } else {
            document.title = oldTitle;
        }
    });
});
