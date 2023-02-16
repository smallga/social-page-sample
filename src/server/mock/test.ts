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
      url: "/api/getNotify",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [{
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim",
            "time": "11/14/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla",
            "time": "9/17/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in",
            "time": "11/17/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et",
            "time": "10/19/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
            "time": "10/6/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis",
            "time": "7/13/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
            "time": "2/19/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla",
            "time": "2/8/2023"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea",
            "time": "3/30/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
            "time": "9/24/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit",
            "time": "6/26/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
            "time": "9/27/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec",
            "time": "7/15/2022"
          }, {
            "notifyUser": "US",
            "message": "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique",
            "time": "10/18/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla",
            "time": "12/24/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
            "time": "9/18/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus",
            "time": "4/19/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
            "time": "10/26/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit",
            "time": "10/1/2022"
          }, {
            "notifyUser": {
              "name": "Lisa",
              "photoUrl": ".//images/lisa.png",
            },
            "message": "faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus",
            "time": "5/9/2022"
          }]
        };
      }
    },
    {
      url: "/api/getUserMediaPosts",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [{
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 4,
            "size": 1,
            "title": "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
            "time": "8/1/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 1,
            "size": 1,
            "title": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
            "time": "4/3/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg",
            "videoUrl": 1,
            "size": 1,
            "title": "integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
            "time": "7/15/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
            "time": "9/14/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
            "time": "7/15/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "sapien non mi integer ac neque duis bibendum morbi non quam",
            "time": "12/18/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
            "time": "3/21/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
            "time": "9/10/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
            "time": "10/12/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
            "time": "7/27/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 3,
            "size": 1,
            "title": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
            "time": "11/2/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
            "time": "4/17/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 4,
            "size": 1,
            "title": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque",
            "time": "3/3/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
            "videoUrl": 3,
            "size": 1,
            "title": "porta volutpat erat quisque erat eros viverra eget congue eget",
            "time": "10/29/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus",
            "time": "2/26/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
            "videoUrl": 1,
            "size": 1,
            "title": "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
            "time": "3/21/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
            "videoUrl": 3,
            "size": 1,
            "title": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
            "time": "3/18/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
            "time": "12/28/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
            "time": "8/5/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg",
            "videoUrl": 3,
            "size": 1,
            "title": "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
            "time": "9/6/2022"
          }]
        };
      }
    },
    {
      url: "/api/getMediaPosts",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [{
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 4,
            "size": 2,
            "title": "ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at",
            "time": "8/1/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 1,
            "size": 1,
            "title": "lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
            "time": "4/3/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg",
            "videoUrl": 1,
            "size": 2,
            "title": "integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu",
            "time": "7/15/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta",
            "time": "9/14/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet",
            "time": "7/15/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 2,
            "size": 2,
            "title": "sapien non mi integer ac neque duis bibendum morbi non quam",
            "time": "12/18/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce",
            "time": "3/21/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci",
            "time": "9/10/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
            "time": "10/12/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 2,
            "size": 1,
            "title": "sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus",
            "time": "7/27/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 3,
            "size": 2,
            "title": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
            "time": "11/2/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor",
            "time": "4/17/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg",
            "videoUrl": 4,
            "size": 1,
            "title": "duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque",
            "time": "3/3/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
            "videoUrl": 3,
            "size": 2,
            "title": "porta volutpat erat quisque erat eros viverra eget congue eget",
            "time": "10/29/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 5,
            "size": 2,
            "title": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin risus praesent lectus",
            "time": "2/26/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
            "videoUrl": 1,
            "size": 2,
            "title": "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue",
            "time": "3/21/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg",
            "videoUrl": 3,
            "size": 2,
            "title": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum",
            "time": "3/18/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg",
            "videoUrl": 5,
            "size": 1,
            "title": "pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor",
            "time": "12/28/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg",
            "videoUrl": 2,
            "size": 2,
            "title": "ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae",
            "time": "8/5/2022"
          }, {
            "imageUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg",
            "videoUrl": 3,
            "size": 2,
            "title": "pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
            "time": "9/6/2022"
          }]
        };
      }
    },
    {
      url: "/api/getReply",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: [{
            "replyAcCountName": "Terence",
            "replyAccountPhoto": ".//images/lisa.png",
            "replyMessage": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla"
          }, {
            "replyAcCountName": "Wakefield",
            "replyAccountPhoto": ".//images/lisa.png",
            "replyMessage": "non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus"
          }, {
            "replyAcCountName": "Allistir",
            "replyAccountPhoto": ".//images/lisa.png",
            "replyMessage": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat"
          }, {
            "replyAcCountName": "Brandice",
            "replyAccountPhoto": ".//images/lisa.png",
            "replyMessage": "nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum"
          }, {
            "replyAcCountName": "Karlis",
            "replyAccountPhoto": ".//images/lisa.png",
            "replyMessage": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat"
          }, {
            "replyAcCountName": "Dorothea",
            "replyAccountPhoto": ".//images/lisa.png",
            "replyMessage": "iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt"
          }]
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
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/small_watermarked/523445671_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg"
          }, {
            "authorName": "Jennica",
            "authorPhotoUrl": "http://dummyimage.com/103x100.png/5fa2dd/ffffff",
            "lastUpdated": "4/28/2022",
            "title": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non",
            "replyCount": 23,
            "likeCount": 1098,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg"
          }, {
            "authorName": "Kate",
            "authorPhotoUrl": "http://dummyimage.com/199x100.png/ff4444/ffffff",
            "lastUpdated": "12/2/2022",
            "title": "porttitor lorem id ligula suspendisse ornare consequat lectus in est",
            "replyCount": 10,
            "likeCount": 1099,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/small_watermarked/160820_230_NYC_TimeSquare2_1080p_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg"
          }, {
            "authorName": "Tabbatha",
            "authorPhotoUrl": "http://dummyimage.com/185x100.png/ff4444/ffffff",
            "lastUpdated": "7/17/2022",
            "title": "sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
            "replyCount": 12,
            "likeCount": 1099,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg"
          }, {
            "authorName": "Clemmy",
            "authorPhotoUrl": "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
            "lastUpdated": "12/23/2022",
            "title": "duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit",
            "replyCount": 14,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/DL_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg"
          }, {
            "authorName": "Otto",
            "authorPhotoUrl": "http://dummyimage.com/101x100.png/dddddd/000000",
            "lastUpdated": "5/16/2022",
            "title": "at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
            "replyCount": 8,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/small_watermarked/523445671_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-05/thumbnails/523445671_small.jpg"
          }, {
            "authorName": "Fons",
            "authorPhotoUrl": "http://dummyimage.com/228x100.png/ff4444/ffffff",
            "lastUpdated": "1/2/2023",
            "title": "lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
            "replyCount": 39,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/small_watermarked/180607_A_101_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2018-07/thumbnails/180607_A_101_small.jpg"
          }, {
            "authorName": "Nara",
            "authorPhotoUrl": "http://dummyimage.com/195x100.png/5fa2dd/ffffff",
            "lastUpdated": "7/12/2022",
            "title": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis",
            "replyCount": 57,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/small_watermarked/160820_230_NYC_TimeSquare2_1080p_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2016-09/thumbnails/160820_230_NYC_TimeSquare2_1080p_small.jpg"
          }, {
            "authorName": "Andre",
            "authorPhotoUrl": "http://dummyimage.com/102x100.png/cc0000/ffffff",
            "lastUpdated": "4/3/2022",
            "title": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
            "replyCount": 97,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/Sunset_Swinging04_MP4_HDV_1080p25__TanuriX_Stock_Footage_NS_small.jpg"
          }, {
            "authorName": "Porty",
            "authorPhotoUrl": "http://dummyimage.com/192x100.png/ff4444/ffffff",
            "lastUpdated": "4/3/2022",
            "title": "morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique",
            "replyCount": 78,
            "likeCount": 1099000,
            "videoUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/small_watermarked/DL_preview.mp4",
            "videoPreviewUrl": "https://joy1.videvo.net/videvo_files/video/free/2015-08/thumbnails/DL_small.jpg"
          }]
          
        };
      }
    }
  ] as MockMethod[];;