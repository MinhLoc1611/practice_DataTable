/* eslint-disable @typescript-eslint/no-explicit-any */
export interface UserType {
  id: number;
  header: boolean;
  name: string;
  spend: number;
  clicks: number;
  eyeMetric: any;
  metric1: number;
  metric2: number;
  metric3: number;
  eyeMatric2: any;
  metric5: number;
  metric6: number;
  metric7: number;
  estimatedConversion: {
    low: number;
    medium: number;
    high: number;
  };
}

export interface GetUsersType {
    content:{
        data: UserType[],
        total: number
    }
}
