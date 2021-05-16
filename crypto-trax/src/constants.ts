interface Constants {
  BaseApiUrl: string;
  IngestUploadEndpoint: string;
  SearchEndpoint: string;
}

const constants: Constants = {
  BaseApiUrl: "http://localhost:7071/api",
  IngestUploadEndpoint: "/IngestUpload",
  SearchEndpoint: "/Search"
};

export default constants;
