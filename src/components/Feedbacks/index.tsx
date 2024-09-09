import Feedback from './Feedback';
import NoFeedback from './NoFeedback';

const demoData: IFeedbacksData[] = [
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.',
  },
  {
    id: 1,
    title: 'Add tags for solutions',
    category: 'enhancement',
    upvotes: 112,
    status: 'suggestion',
    description: 'Easier to search for solutions based on a specific stack.',
  },
];

const Feedbacks = () => {
  return (
    <>
      {demoData.length > 0 ? (
        demoData.map((demo) => <Feedback data={demo} />)
      ) : (
        <NoFeedback />
      )}
    </>
  );
};
export default Feedbacks;
