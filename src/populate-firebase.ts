// src/populateFirebase.ts
import { db } from './firebase';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  getDocs,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';

// ─── SAMPLE DATA ─────────────────────────────────────────────

// Realistic sample users
const sampleUsers = [
  {
    id: 'user1',
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    photoURL: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 'user2',
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob.johnson@example.com',
    photoURL: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 'user3',
    firstName: 'Carol',
    lastName: 'Williams',
    email: 'carol.williams@example.com',
    photoURL: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 'user4',
    firstName: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    photoURL: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 'user5',
    firstName: 'Eva',
    lastName: 'Davis',
    email: 'eva.davis@example.com',
    photoURL: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

// Realistic feedback ideas
const sampleFeedbackIdeas = [
  {
    title: 'Dark mode option',
    description:
      'A dark mode theme would make the app more comfortable to use at night or in low-light conditions.',
    category: 'feature',
    status: 'suggestion',
  },
  {
    title: 'Improve search functionality',
    description:
      'The search bar should support filtering by category and keywords to quickly find relevant content.',
    category: 'enhancement',
    status: 'planned',
  },
  {
    title: 'Fix navigation bar bug',
    description:
      'The navigation bar sometimes overlaps content on smaller screens and needs to be fixed.',
    category: 'bug',
    status: 'in-progress',
  },
  {
    title: 'Add image upload feature',
    description:
      'Allow users to upload images in their posts and feedback, enhancing visual appeal.',
    category: 'feature',
    status: 'suggestion',
  },
  {
    title: 'Improve loading speed',
    description:
      "Optimize the app's performance to reduce load times and improve user experience.",
    category: 'enhancement',
    status: 'planned',
  },
  {
    title: 'Enhance accessibility',
    description:
      'Improve accessibility by adding keyboard navigation and screen reader support.',
    category: 'enhancement',
    status: 'suggestion',
  },
  {
    title: 'Add user profile customization',
    description:
      'Allow users to customize their profile with bios, cover photos, and social links.',
    category: 'feature',
    status: 'suggestion',
  },
  {
    title: 'Implement notification system',
    description:
      'Add real-time notifications for new messages, comments, and likes.',
    category: 'feature',
    status: 'planned',
  },
  {
    title: 'Integrate third-party APIs',
    description:
      'Connect with external services like Google Maps or payment gateways to expand functionality.',
    category: 'enhancement',
    status: 'in-progress',
  },
  {
    title: 'Improve error handling',
    description:
      'Enhance error messages and logging to help users and developers troubleshoot issues.',
    category: 'bug',
    status: 'suggestion',
  },
  {
    title: 'Add multi-language support',
    description:
      'Allow users to switch between different languages for a more personalized experience.',
    category: 'feature',
    status: 'planned',
  },
  {
    title: 'Optimize database queries',
    description:
      'Improve the efficiency of database calls to reduce load on the server.',
    category: 'enhancement',
    status: 'in-progress',
  },
  {
    title: 'Redesign the dashboard',
    description:
      'Revamp the dashboard for a cleaner, more intuitive user interface.',
    category: 'feature',
    status: 'suggestion',
  },
  {
    title: 'Add in-app chat',
    description:
      'Implement a real-time chat feature to enhance community engagement.',
    category: 'feature',
    status: 'planned',
  },
  {
    title: 'Fix mobile layout issues',
    description:
      'Address layout problems on mobile devices to ensure a consistent experience.',
    category: 'bug',
    status: 'in-progress',
  },
];

// Sample realistic comment messages
const sampleComments = [
  'I completely agree with this suggestion.',
  'This update would really improve the user experience.',
  "I've noticed this issue as well—great call!",
  'It would be amazing if this got implemented soon.',
  'I hope the team prioritizes this in the next update.',
  "This is something I've been waiting for a long time.",
  'Great idea! This could make a huge difference.',
];

// Sample realistic reply messages
const sampleReplies = [
  'Absolutely, I second that.',
  'Thanks for sharing your thoughts.',
  'I appreciate the feedback—this is a great point.',
  'Looking forward to this improvement!',
  'I agree, this could really help.',
  'Thanks for the insight.',
];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────

const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomItem = <T>(array: T[]): T => array[randomInt(0, array.length - 1)];

// ─── CLEAR EXISTING DATA ───────────────────────────────────────

async function clearUsers(): Promise<void> {
  const usersSnapshot = await getDocs(collection(db, 'users'));
  const deletePromises = usersSnapshot.docs.map((docSnap) =>
    deleteDoc(docSnap.ref)
  );
  await Promise.all(deletePromises);
  console.log('Cleared users collection');
}

async function clearReplies(
  feedbackId: string,
  commentId: string
): Promise<void> {
  const repliesSnapshot = await getDocs(
    collection(db, 'feedback', feedbackId, 'comments', commentId, 'replies')
  );
  const deletePromises = repliesSnapshot.docs.map((replyDoc) =>
    deleteDoc(replyDoc.ref)
  );
  await Promise.all(deletePromises);
}

async function clearComments(feedbackId: string): Promise<void> {
  const commentsSnapshot = await getDocs(
    collection(db, 'feedback', feedbackId, 'comments')
  );
  for (const commentDoc of commentsSnapshot.docs) {
    await clearReplies(feedbackId, commentDoc.id);
    await deleteDoc(commentDoc.ref);
  }
}

async function clearFeedbacks(): Promise<void> {
  const feedbackSnapshot = await getDocs(collection(db, 'feedback'));
  for (const feedbackDoc of feedbackSnapshot.docs) {
    await clearComments(feedbackDoc.id);
    await deleteDoc(feedbackDoc.ref);
  }
}

export async function clearDatabase(): Promise<void> {
  await Promise.all([clearUsers(), clearFeedbacks()]);
  console.log('Database cleared');
}

// ─── POPULATE NEW DATA ─────────────────────────────────────────

export async function populateDatabase(): Promise<void> {
  try {
    // First, clear existing data.
    await clearDatabase();

    // 1. Add sample users to "users" collection.
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

    // 2. Add 25 feedback documents to "feedback" collection.
    for (let i = 0; i < 25; i++) {
      const feedbackIdea = sampleFeedbackIdeas[i % sampleFeedbackIdeas.length];
      const feedbackData = {
        title: feedbackIdea.title,
        category: feedbackIdea.category,
        upvotes: randomInt(10, 200),
        status: feedbackIdea.status,
        description: feedbackIdea.description,
        userId: randomItem(sampleUsers).id,
        createdAt: serverTimestamp(),
      };

      const feedbackRef = await addDoc(
        collection(db, 'feedback'),
        feedbackData
      );

      // Generate a random number of comments between 3 and 8.
      const numComments = randomInt(3, 8);
      for (let j = 0; j < numComments; j++) {
        const commentData = {
          comment: randomItem(sampleComments),
          userId: randomItem(sampleUsers).id,
          createdAt: serverTimestamp(),
        };

        const commentRef = await addDoc(
          collection(db, 'feedback', feedbackRef.id, 'comments'),
          commentData
        );

        // For each comment, generate a random number of replies between 1 and 3.
        const numReplies = randomInt(1, 3);
        for (let k = 0; k < numReplies; k++) {
          const replyData = {
            comment: randomItem(sampleReplies),
            replyingTo: commentData.userId, // replying to the comment's user
            userId: randomItem(sampleUsers).id,
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
