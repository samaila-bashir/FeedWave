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

declare interface IProductsFeedbackData {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments?: IComment[];
}

declare interface IProductFeedback {
  productsFeedback: IProductsFeedbackData;
}
