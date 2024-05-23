import { http, HttpResponse } from 'msw';

const getMentoringQuestion = http.get('/api/question', () => {
  // ...and respond to them using this JSON response.
  return HttpResponse.json({
    success: true,
    response: {
      questions: {
        '1': '질문',
        '2': '질문',
        '3': '질문',
        '4': '질문',
        '5': '질문',
      },
    },
    error: null,
  });
});

const getMaterials = http.get('/api/board/materials', () => {
  return HttpResponse.json({
    success: true,
    response: {
      materials: [
        {
          preSignedUrl:
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/1_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240405T134134Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240405%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=d55632edf221054bde206601d44a25f86100017c8a1aa816972fb675dd38ce41',
          id: 1,
          productName: '응애글자넘어갔을시화면표시되는부분테스트를위한타이틀',
          itemType: '냉장고/냉동고',
          totalPrice: 2000,
        },
        {
          preSignedUrl: null,
          id: 2,
          productName: '응애2',
          itemType: '냉장고/냉동고',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 3,
          productName: '응애3',
          itemType: '쇼케이스',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 4,
          productName: '응애3',
          itemType: '세척기',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 5,
          productName: '응애3',
          itemType: '제빙기',
          totalPrice: 1000,
        },
      ],
    },
    error: null,
  });
});

const id = 1;
const getMaterial = http.get(`/api/board/materials/${id}`, () => {
  return HttpResponse.json({
    success: true,
    response: {
      writer: 'yunseng',
      product: {
        preSignedUrl: [
          'https://test-bucket.s3.ap-northeast-2.amazonaws.com/13_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=4e081486e21a911f27b7dff27ad5156fb042c3201755493ac8f0a52cd7e3db91',
          'https://test-bucket.s3.ap-northeast-2.amazonaws.com/14_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=8ecdd0ec5e349c2893611907ee6e584f1d7a59816f368f4b804fac89c1c304ea',
        ],
        id: 1,
        productName: 'LG 냉장고',
        price: 1200000,
        description: '2년쓴 냉장고 입니다.',
        defect: '문이 잘 안열려요.',
      },
    },
    error: {
      code: 'string',
      reason: 'string',
      status: 'string',
    },
  });
});

const getTradeInformation = http.get('/api/board/material', () => {
  return HttpResponse.json({
    success: true,
    response: {
      productName: 'LG 냉장고',
      itemType: '냉장고/냉동고',
      price: 100000,
      description: '어쩌구 저쩌구',
      defect: '문이 잘 안열려요.',
      contact: '010-0000-0000',
    },
    error: null,
  });
});

const postMaterials = http.post('/api/board/material', () => {
  return HttpResponse.json({
    success: true,
    response: {
      products: [
        {
          name: '냉장고',
          presignedUrls: [
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/13_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=4e081486e21a911f27b7dff27ad5156fb042c3201755493ac8f0a52cd7e3db91',
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/14_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=8ecdd0ec5e349c2893611907ee6e584f1d7a59816f368f4b804fac89c1c304ea',
          ],
        },
        {
          name: '화덕',
          presignedUrls: [
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/15_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=1ffcd5686831da5455ac067168b00290cf43b5f47f5ca92502c76827184a7a23',
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/16_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=c08a6915204a8b08d3679a5dc21aee77c68ce7ce9cae774b180bf40c10287f3c',
          ],
        },
      ],
    },
    error: null,
  });
});

const getSellerInformation = http.get('/api/seller', () => {
  return HttpResponse.json({
    success: true,
    response: {
      contact: '010-0000-0000',
    },
    error: null,
  });
});

const getAuctionList = http.get('/api/auction', () => {
  return HttpResponse.json({
    success: true,
    response: {
      auctions: [
        {
          imageNames: ['냉장고6', '냉장고18'],
          itemType: '냉장고/냉동고',
          productName: '상품이름6',
          bidCount: 30,
          startAt: '2024-04-11T15:13:13',
          endAt: '2024-07-04T15:13:13',
          price: 700000,
          auctionId: 6,
        },
        {
          imageNames: ['냉장고4', '냉장고16'],
          itemType: '냉장고/냉동고',
          productName: '상품이름4',
          bidCount: 20,
          startAt: '2024-04-25T15:13:13',
          endAt: '2024-06-20T15:13:13',
          price: 720000,
          auctionId: 4,
        },
        {
          imageNames: ['냉장고3', '냉장고15'],
          itemType: '냉장고/냉동고',
          productName: '상품이름3',
          bidCount: 15,
          startAt: '2024-05-02T15:13:13',
          endAt: '2024-06-13T15:13:13',
          price: 700000,
          auctionId: 3,
        },
        {
          imageNames: ['냉장고2', '냉장고14'],
          itemType: '냉장고/냉동고',
          productName: '상품이름2',
          bidCount: 10,
          startAt: '2024-05-09T15:13:13',
          endAt: '2024-06-06T15:13:13',
          price: 600000,
          auctionId: 2,
        },
        {
          imageNames: ['냉장고1', '냉장고13', '냉장고25'],
          itemType: '냉장고/냉동고',
          productName: '상품이름',
          bidCount: 5,
          startAt: '2024-05-16T15:13:13',
          endAt: '2024-05-30T15:13:13',
          price: 500000,
          auctionId: 1,
        },
      ],
    },
    error: null,
  });
});

export const handlers = [
  getMentoringQuestion,
  getMaterials,
  getTradeInformation,
  getSellerInformation,
  postMaterials,
  getMaterial,
  getAuctionList,
];
