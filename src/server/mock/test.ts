import { MockMethod } from "vite-plugin-mock";

export default [
    {
      url: "/api/getUser",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [{name:'lary', }]
        };
      }
    },
    {
      url: "/api/getPost",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [{
            "authorName": "Ailey",
            "authorPhotoUrl": "http://dummyimage.com/111x100.png/ff4444/ffffff",
            "lastUpdated": "3/31/2022",
            "title": "tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
            "replyCount": 30,
            "likeCount": 989,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/small_watermarked/523445671_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg"
          }, {
            "authorName": "Jennica",
            "authorPhotoUrl": "http://dummyimage.com/103x100.png/5fa2dd/ffffff",
            "lastUpdated": "4/28/2022",
            "title": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
            "replyCount": 23,
            "likeCount": 1098,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg"
          }, {
            "authorName": "Kate",
            "authorPhotoUrl": "http://dummyimage.com/199x100.png/ff4444/ffffff",
            "lastUpdated": "12/2/2022",
            "title": "porttitor lorem id ligula suspendisse ornare consequat lectus in est",
            "replyCount": 10,
            "likeCount": 1099,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/small_watermarked/160820_230_NYC_TimeSquare2_1080p_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg"
          }, {
            "authorName": "Tabbatha",
            "authorPhotoUrl": "http://dummyimage.com/185x100.png/ff4444/ffffff",
            "lastUpdated": "7/17/2022",
            "title": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
            "replyCount": 12,
            "likeCount": 1099,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg"
          }, {
            "authorName": "Clemmy",
            "authorPhotoUrl": "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
            "lastUpdated": "12/23/2022",
            "title": "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
            "replyCount": 14,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/DL_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg"
          }, {
            "authorName": "Otto",
            "authorPhotoUrl": "http://dummyimage.com/101x100.png/dddddd/000000",
            "lastUpdated": "5/16/2022",
            "title": "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
            "replyCount": 8,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/small_watermarked/523445671_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg"
          }, {
            "authorName": "Fons",
            "authorPhotoUrl": "http://dummyimage.com/228x100.png/ff4444/ffffff",
            "lastUpdated": "1/2/2023",
            "title": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
            "replyCount": 39,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg"
          }, {
            "authorName": "Nara",
            "authorPhotoUrl": "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
            "lastUpdated": "7/12/2022",
            "title": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis",
            "replyCount": 57,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/small_watermarked/160820_230_NYC_TimeSquare2_1080p_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg"
          }, {
            "authorName": "Andre",
            "authorPhotoUrl": "http://dummyimage.com/102x100.png/cc0000/ffffff",
            "lastUpdated": "4/3/2022",
            "title": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
            "replyCount": 97,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg"
          }, {
            "authorName": "Porty",
            "authorPhotoUrl": "http://dummyimage.com/192x100.png/ff4444/ffffff",
            "lastUpdated": "4/3/2022",
            "title": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
            "replyCount": 78,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/DL_preview.webm",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg"
          }]
          
        };
      }
    }
  ] as MockMethod[];;