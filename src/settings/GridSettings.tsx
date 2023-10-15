/* eslint-disable react-refresh/only-export-components */
const SortingSetting = [
  { columnName: "header", sortingEnabled: false },
  { columnName: "eyeMetric", sortingEnabled: false },
  { columnName: "eyeMetric2", sortingEnabled: false },
];

const columnsWidth = [
  { columnName: "header", width: 110 },
  { columnName: "name", width: 220 },
  { columnName: "spend", width: 90 },
  { columnName: "clicks", width:100 },
  { columnName: "eyeMetric", width: 60 },
  { columnName: "metric1", width: 100 },
  { columnName: "metric2", width: 100 },
  { columnName: "metric3", width: 100 },
  { columnName: "eyeMetric2", width: 60 },
  { columnName: "metric5", width: 100 },
  { columnName: "metric6", width: 100 },
  { columnName: "metric7", width: 100 },
  { columnName: "estimatedConversion", width: 180 },
];

const columns = [
    { name: "header", title: "Header" },
    { name: "name", title: "Name" },
    { name: "spend", title: "Spend" },
    { name: "clicks", title: "Clicks" },
    { name: "eyeMetric", title: " " },
    { name: "metric1", title: "Metric 1" },
    { name: "metric2", title: "Metric 2" },
    { name: "metric3", title: "Metric 3" },
    { name: "eyeMetric2", title: " " },
    { name: "metric5", title: "Metric 5" },
    { name: "metric6", title: "Metric 6" },
    { name: "metric7", title: "Metric 7" },
    { name: "estimatedConversion", title: "Estimated conversion" },
  ];
  
  const rows = [
    {
      header: true,
      name: "DT-Brand-campaign",
      spend: 1718.56,
      clicks: 12345,
      eyeMetric: "",
      metric1: 12,
      metric2: 1049.14,
      metric3: 110.2,
      eyeMatric2: "",
      metric5: 3,
      metric6: 1355.01,
      metric7: 652.08,
      estimatedConversion:{
        low:15,
        medium:40,
        high:60
      }
    },
    {
      header: true,
      name: "new_offer_8735",
      spend: 1571.63,
      clicks: 12345,
      eyeMetric: "",
      metric1: 12,
      metric2: 1049.14,
      metric3: 115.5,
      eyeMetric2: "",
      metric5: 8,
      metric6: 1109.25,
      metric7: 434.21,
      estimatedConversion:{
        low:10,
        medium:60,
        high:45
      }
    },
    {
        header: false,
        name: "spring_2020",
        spend: 956.54,
        clicks: 12345,
        eyeMetric: "",
        metric1: 12,
        metric2: 1049.14,
        metric3: 156.96,
        eyeMetric2: "",
        metric5: 9,
        metric6: 1008.71,
        metric7: 180.37,
        estimatedConversion:{
          low:0,
          medium:0,
          high:0
        }
      },
  ];

export { SortingSetting, columnsWidth, rows, columns };
