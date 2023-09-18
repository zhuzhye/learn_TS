import httpRequest from "..";
interface DataType {
  data: any;
  success: boolean;
  returnCode: string;
}

httpRequest
  .request<DataType>({
    url: "/home/multidata",
  })
  .then((res) => {
    console.log(res);
  });
