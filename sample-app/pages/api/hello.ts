import axios from "axios";

const prefecturesAPI = async () => {
  const result = await axios
    .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": "" },
    })
    .then((res) => {
      console.log(res);
      console.log(res.data.result);
      return res.data.result;
    });

  return result;
};

export default prefecturesAPI;
