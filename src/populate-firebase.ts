import { db } from './firebase';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';

const sampleUsers = [
  {
    id: 'user1',
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice@example.com',
    photoURL: 'https://example.com/alice.jpg',
  },
  {
    id: 'user2',
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob@example.com',
    photoURL: 'https://example.com/bob.jpg',
  },
  {
    id: 'user3',
    firstName: 'Carol',
    lastName: 'Williams',
    email: 'carol@example.com',
    photoURL: 'https://example.com/carol.jpg',
  },
  {
    id: 'user4',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david@example.com',
    photoURL: 'https://example.com/david.jpg',
  },
  {
    id: 'user5',
    firstName: 'Eva',
    lastName: 'Davis',
    email: 'eva@example.com',
    photoURL: 'https://example.com/eva.jpg',
  },
];

// Helper function to generate a random integer between min and max (inclusive)
const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Define possible categories and statuses for feedback
const categories = ['feature', 'enhancement', 'bug'];
const statuses = ['suggestion', 'planned', 'in-progress', 'live'];

// Generate feedback data based on an index
function generateFeedbackData(index: number) {
  return {
    title: `Feedback Title ${index}`,
    category: categories[randomInt(0, categories.length - 1)],
    upvotes: randomInt(0, 150),
    status: statuses[randomInt(0, statuses.length - 1)],
    description: `This is a description for feedback number ${index}. It provides details about the feedback.`,
    userId: sampleUsers[randomInt(0, sampleUsers.length - 1)].id,
    createdAt: serverTimestamp(),
  };
}

export async function populateDatabase() {
  try {
    // 1. Add sample users to the "users" collection.
    for (const user of sampleUsers) {
      await setDoc(doc(db, 'users', user.id), {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
      });
    }
    console.log('Users added');

    // 2. Add 15 feedback documents to the "feedback" collection.
    for (let i = 1; i <= 15; i++) {
      const feedbackData = generateFeedbackData(i);
      const feedbackRef = await addDoc(
        collection(db, 'feedback'),
        feedbackData
      );

      // Generate a random number of comments between 3 and 8.
      const numComments = randomInt(3, 8);
      for (let j = 1; j <= numComments; j++) {
        const commentData = {
          comment: `This is comment ${j} for feedback ${i}.`,
          userId: sampleUsers[randomInt(0, sampleUsers.length - 1)].id,
          createdAt: serverTimestamp(),
        };

        const commentRef = await addDoc(
          collection(db, 'feedback', feedbackRef.id, 'comments'),
          commentData
        );

        // For each comment, generate a random number of replies between 1 and 3.
        const numReplies = randomInt(1, 3);
        for (let k = 1; k <= numReplies; k++) {
          const replyData = {
            comment: `This is reply ${k} for comment ${j} on feedback ${i}.`,
            replyingTo: commentData.userId, // reply to the comment's userId
            userId: sampleUsers[randomInt(0, sampleUsers.length - 1)].id,
            createdAt: serverTimestamp(),
          };

          await addDoc(
            collection(
              db,
              'feedback',
              feedbackRef.id,
              'comments',
              commentRef.id,
              'replies'
            ),
            replyData
          );
        }
      }
    }
    console.log('Feedback, comments, and replies added');
  } catch (error) {
    console.error('Error populating database:', error);
  }
}
