declare interface ICategoryFilters {
  title: string;
  isActive?: boolean;
}

declare interface IStatus {
  title: string;
  count: number;
  color: string;
}

declare interface IUser {
  image: string;
  name: string;
  username: string;
}
declare interface IComment {
  id: number;
  content: string;
  user: IUser;
}

interface ICommentCount {
  count: number;
}
declare interface IProductsFeedbackData {
  id: string;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  userId: string;
  createdAt: any;
  totalComments: number;
}

declare interface IProductFeedback {
  productsFeedback: IProductsFeedbackData;
}
