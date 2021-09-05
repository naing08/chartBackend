const db = require("../models");
const { QueryTypes } = require('sequelize');
const Op = db.Sequelize.Op;

exports.createChart = async (req, res) => {
    let { Name, Age, Gender } = req.body;
    let newChart = await db.Chart.create({ Name, Age, Gender });
    res.send(newChart);
};

exports.getBarChart = async (req, res) => {
    let items = await db.Chart.findAll();
    let barChart = [];
    barChart.push({ AgeGroup: "Young Adult", Count: 0 });
    barChart.push({ AgeGroup: "Adult", Count: 0 });
    barChart.push({ AgeGroup: "Senior", Count: 0 });

    items.forEach(item => {
        if (item.Age >= 51) {
            barChart[2].Count += 1;
        }
        else if (item.Age >= 36) {
            barChart[1].Count += 1;
        }
        else {
            barChart[0].Count += 1;
        }
    });
    res.send(barChart);
};

exports.getChart = async (req, res) => {
    let barChart = await db.Chart.findAll();
    res.send(barChart);
};

exports.getPieChart = async (req, res) => {
    let resultData = await db.sequelize.query(`select "Gender",Count("Name")::integer AS "Count"  from "Chart" group by "Gender";`, QueryTypes.SELECT)
        .then(result => (result[0]));
        
    var totalQty  = 0;
    resultData.forEach(item => {
        totalQty += item.Count;
    });
    console.log(totalQty);
    let pieChart = resultData.map((item) => {
        return {
            Gender: item.Gender,
            Ratio: item.Count / totalQty
        };
    })
    res.send(pieChart);
};
