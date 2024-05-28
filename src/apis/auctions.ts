import https from './https';
import { PostMaterialReq } from './materials';

interface PostAuctionReq extends PostMaterialReq {
  period: string;
  priceUnit: string;
}

interface PostAuctionRes {}
export const postAuctions = async (
  request: PostAuctionReq
): Promise<PostAuctionRes> => {
  const response = await https.post('/auction', request);
  return response.data;
};

interface GetAuctionListRes {
  imageName: string;
  itemType: string;
  productName: string;
  bidCount: number;
  startAt: string;
  endAt: string;
  price: number;
  auctionId: number;
}

export const getAuctionList = async (
  sortType?: string
): Promise<GetAuctionListRes> => {
  const url = sortType ? '/auction?sortType=' + sortType : '/auction';

  const response = await https.get(url);

  return response.data.response.auctions;
};
