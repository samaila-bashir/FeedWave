export const sortFeedback = (
  feedbacks: IProductsFeedbackData[] | null | undefined,
  sortOption: string
): IProductsFeedbackData[] => {
  if (!Array.isArray(feedbacks)) {
    return [];
  }

  // Create a shallow copy of the array before sorting
  const feedbacksCopy = [...feedbacks];

  return feedbacksCopy.sort((a, b) => {
    switch (sortOption) {
      case 'Most Upvotes':
        return b.upvotes - a.upvotes;
      case 'Least Upvotes':
        return a.upvotes - b.upvotes;
      case 'Most Comments':
        return b.totalComments - a.totalComments;
      case 'Least Comments':
        return a.totalComments - b.totalComments;
      default:
        return 0;
    }
  });
};
