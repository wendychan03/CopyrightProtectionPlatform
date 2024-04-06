<template>
  <div>
    <div
      style="
        top: 0;
        margin: 20px;
        width: 1200px;
        height: 350px;
        text-align: center;
      "
    >
      <div id="datatable">
        <el-table
          size:medium
          :row-style="{ height: '200px' }"
          :cell-style="{ padding: '50px' }"
          :data="tableData"
          style="
            width: 700px;
            height: 250px;
            float: left;
            margin: 20px;
            font-size: 22px;
          "
        >
          <el-table-column prop="totalcheck" label="审查次数" width="220">
          </el-table-column>
          <el-table-column prop="totalwork" label="作品总数" width="220">
          </el-table-column>
          <el-table-column
            prop="totalaffended"
            label="被侵权作品数"
            width="220"
          >
          </el-table-column>
        </el-table>
      </div>
      <div
        id="chart1"
        style="float: right; width: 350px; height: 320px; margin: 20px"
      ></div>
    </div>
    <div></div>

    <div
      style="
        top: 350px;
        margin: 20px;
        width: 1200;
        height: 400px;
        text-align: center;
      "
    >
      <div id="chart2" style="float: left; width: 700px; height: 370px"></div>
      <div
        id="chart3"
        style="float: right; width: 350px; height: 350px; margin: 20px"
      ></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/bar"); //柱状图
require("echarts/lib/chart/pie"); //饼图
require("echarts/lib/chart/line"); //折线图
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/component/grid");

export default {
  data() {
    return {
      tableData: [
        {
          totalcheck: 66,
          totalwork: 38,
          totalaffended: 105,
        },
      ],
    };
  },
  mounted() {
    this.draw("chart1"); //调用
    this.draw("chart2"); //调用
    this.draw("chart3"); //调用
    this.draw("chart4"); //调用
  },
  methods: {
    draw(id) {
      let myChart = echarts.init(document.getElementById(id));
      if (id == "chart1") {
        myChart.setOption({
          title: {
            text: "已上传作品",
            subtext: "Fake Data",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "50%",
              data: [
                { value: 20, name: "图片" },
                { value: 8, name: "文本" },
                { value: 10, name: "视频" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        });
      } else if (id == "chart2") {
        myChart.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ["", "疑似侵权作品数量"],
              ["作品一", 43],
              ["作品二", 50],
              ["作品三", 30],
              ["作品四", 105],
            ],
          },
          xAxis: { type: "category" },
          yAxis: {},
          series: [{ type: "bar", color: "#f96f96" }],
        });
      } else if (id == "chart3") {
        myChart.setOption({
          title: {
            text: "作品被侵权情况",
            subtext: "Fake Data",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: "50%",
              data: [
                { value: 4, name: "被侵权" },
                { value: 13, name: "疑似被侵权" },
                { value: 8, name: "未被侵权" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        });
        // eslint-disable-next-line
      } else {
      }
    },
  },
};
</script>

